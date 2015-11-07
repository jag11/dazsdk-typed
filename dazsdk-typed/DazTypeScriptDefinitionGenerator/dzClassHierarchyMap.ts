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
    Looks for an QObject name in the ClassHierarchyMap which is the closest ancestor.
    */
    findClosestParentClassName(oObject: QObject) : string {
        var currentNode = this.RootNode;
        if (oObject == undefined || (oObject instanceof (QObject)) == false) {
            throw String("QObject expected as a parameter");
        }

        do {
            var bNewParentFound: boolean = false;
            for (var i = 0; i < currentNode.Children.length; i++) {
                var sPotentialParentName: string = currentNode.Children[i].Name; 
                               
                if (oObject.inherits(sPotentialParentName) == true) {
                    currentNode = currentNode.Children[i];
                    bNewParentFound = true;
                    break;
                }                                
            }
        }
        while (bNewParentFound == true);

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
                aHierarchyPath = (new Array<string>(oChildNode.Name)).concat(aHierarchyPath);
                return aHierarchyPath;
            }
        }
        return aHierarchyPath;        
    }
}