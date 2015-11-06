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
}