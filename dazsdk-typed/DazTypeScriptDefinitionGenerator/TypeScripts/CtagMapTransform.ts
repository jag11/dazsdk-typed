/*
The intention of this script file is to transform ctags.json into a different JSON file that will serve as a
searchable map structure in the following format:
[
    "Name": "QObject",
    "Children" : [ 
                "Name" : "DzNode",
                "Children" : [
                              "Name" : "DzBone",
                              "Children" : [ ...
                                ]
                ]
]

So then this transformed JSON file can be used to search for the most precise "inherits" value
by searching one level of inheritance at a time, giving up when no children have QObject.inherits() return TRUE.
*/

function deserializeJson(sFilename: string): any {
    var file = new DzFile(sFilename);
    if (file.open(DzFile.ReadOnly)) {
        var json = file.readAll().convertToString();

        var data = JSON.parse(json);
        return data;
    } else {
        throw String("unable to open file '%1'.").arg(sFilename);
    }
}

/// Ctag node structure
class CtagNode {
    Name: string
    Inherits: Array<string>
}


function createHierarchyMap(sCtagsFilename: string): any {
    /// the output object
    var classMaps: ClassMapNode = new ClassMapNode("");

    var aClasses: Array<CtagNode> = deserializeJson(sCtagsFilename);

    // for each class in ctags, organize into hierarchical map structure
    for (var i = 0; i < aClasses.length; i++) {
        var oNode = aClasses[i];
        // this assumes the Ctags[n].Inherits is always in the correct order
        var aClassHierarchy: Array<string> = new Array<string>();
        aClassHierarchy = oNode.Inherits;
        aClassHierarchy[aClassHierarchy.length] = oNode.Name;

        // start at the base map node
        var oCurrentClassMapNode = classMaps;
    
        // traverse the map, adding all missing classes from the map
        for (var e = 0; e < aClassHierarchy.length; e++) {
            var childNodeNumber = -1;
            var sCurrentClassName = aClassHierarchy[e];
        
            // look for a child class that matches current step in class hierarchy
            for (var n = 0; n < oCurrentClassMapNode.Children.length; n++) {
                if (oCurrentClassMapNode.Children[n].Name == sCurrentClassName) {
                    childNodeNumber = n;
                    break;
                }
            }

            // if child node already exists, then there's nothing to do except move on
            if (childNodeNumber >= 0) {
                oCurrentClassMapNode = oCurrentClassMapNode.Children[childNodeNumber];
            } else { // if child node doesn't exist yet, add it to map structure
                var oNewClassMapNode = new ClassMapNode(sCurrentClassName);
                oCurrentClassMapNode.Children[oCurrentClassMapNode.Children.length] = oNewClassMapNode;
            }
        }
    }
    return classMaps;
}

//*****MAIN******
// todo: fix paths for input / output files
var sInputFile = "ctags.json";
var sOutputFile = "hierarchyMap.json";
var oHierarchyClassMap = createHierarchyMap(sInputFile);
var sJsonString = JSON.stringify(oHierarchyClassMap);
var oFile = new DzFile(sOutputFile);
oFile.open(2);
oFile.write(sJsonString);
oFile.close();