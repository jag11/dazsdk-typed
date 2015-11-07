/// New node structure
class ClassMapNode {
    constructor(public Name: string) {
        this.Children = new Array<ClassMapNode>();
    }

    Children: Array<ClassMapNode>
}

class ClassHierarchyMap {
    RootNode: ClassMapNode = new ClassMapNode("");

    /**
    Looks for an QObject name in the ClassHierarchyMap which is the closest ancestor, adding the search class if it doesn't exist
    */
    findClosestParentClassName(oObject: QObject) : string {
        var currentNode = this.RootNode;
        if (oObject == undefined || (typeof oObject.inherits != "function") {
            throw String("QObject expected as a parameter");
        }
        var bAnyParentFound: boolean = false;

        do {
            var bNewParentFound: boolean = false;
            for (var i = 0; i < currentNode.Children.length; i++) {
                var sPotentialTargetClassName: string = currentNode.Children[i].Name; 
                // look for a class which is in the hierarchy chain, but not the actual target class (because we want to stop at the immediate parent)               
                if (oObject.inherits(sPotentialTargetClassName) == true && oObject.className() != sPotentialTargetClassName) {
                    currentNode = currentNode.Children[i];
                    bNewParentFound = true;
                    bAnyParentFound = true;
                    break;
                }                                
            }
        }
        while (bNewParentFound == true);

        // if child class is missing, add it (if it's confirmed to be a legit class)
        if (bAnyParentFound == true) {
            var bTargetFound: boolean = false;
            for (var i = 0; i < currentNode.Children.length; i++) {
                var sPotentialTargetClassName: string = currentNode.Children[i].Name;
                if (oObject.className() == sPotentialTargetClassName) {
                    bTargetFound = true;
                    break;
                }
            }

            if (bTargetFound == false) {
                var oMissingClassNode = new ClassMapNode(oObject.className());
                currentNode.Children.push(oMissingClassNode);
            }
        }
        return currentNode.Name;
    }

    /** Returns an Array<string> of classnames in the inheritance chain of the specified QObject name.
    @param sQObjectName the QObject class name to search for
    @param oSearchNode ClassMapNode to start the search from. If unspecified will search from RootNode
    */
    getHierarchyPath(sQObjectName: string, oSearchNode?: ClassMapNode): Array<string> {      
        if (oSearchNode == undefined) {
            oSearchNode = this.RootNode;
        }
        var aHierarchyPath: Array<string> = new Array<string>();
        var bTargetNodeFound: boolean = false;

        if (oSearchNode.Name == sQObjectName) {
            aHierarchyPath[0] = oSearchNode.Name;
            return aHierarchyPath;
        }            
        
        for (var i = 0; i < oSearchNode.Children.length; i++) {
            var oChildNode: ClassMapNode = oSearchNode.Children[i];        
            aHierarchyPath = this.getHierarchyPath(sQObjectName, oChildNode);
            if (aHierarchyPath.length > 0) {
                aHierarchyPath = (new Array<string>(oSearchNode.Name)).concat(aHierarchyPath);
                return aHierarchyPath;
            }
        }
        return aHierarchyPath;        
    }
}
// Usage example:
var sHierarchyMapFileName = "D:/Users/<username>/Source/Repos/dazsdk-typed/dazsdk-typed/DazTypeScriptDefinitionGenerator/hierarchyMap.json";
var classHierarchyMapData = deserializeJson(sHierarchyMapFileName);
var oHierarchyMap = new ClassHierarchyMap();
oHierarchyMap.RootNode = classHierarchyMapData;
var aHierarchyPath = oHierarchyMap.getHierarchyPath("DzBone");
for (var i = 1; i < aHierarchyPath.length; i++) {
    print(aHierarchyPath[i]);
}
/* output
Executing Script...
QObject
DzBase
DzElement
DzNode
DzBone
Result: 
Script executed in 0 secs 6 msecs.
*/
// so (if the map is correct) getting the appropriate "extends" class should be:
// aHierarchyPath[aHierarchyPath.length - 2]