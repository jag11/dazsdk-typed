function createInstance(sClassName) {
    var oFunction;
    try {
        oFunction = eval(sClassName);
    } catch (err) {
        return null;
    }
    if (oFunction === undefined)
        return null;
    var oPrototype = oFunction.prototype;
    var oConstructor = oPrototype.constructor;

    var oInstance = oConstructor();

    return oInstance;
}

function deserializeJson(sFilename) {
    var file = new DzFile(sFilename);
    if (file.open(DzFile.ReadOnly)) {
        var json = file.readAll().convertToString();
        var data = JSON.parse(json);
        return data;
    }
    else {
        throw String("unable to open file '%1'.").arg(sFilename);
    }
}

var sClassMapFile = "D:/Users/<username>/Source/Repos/dazsdk-typed/dazsdk-typed/DazTypeScriptDefinitionGenerator/ctags.json";
var aClasses = deserializeJson(sClassMapFile);
var nCouldNotConstructCount = 0;
var nClassCount = 0;

for (var i = 0; i < aClasses.length; i++) {
    var sTypeName = aClasses[i].Name;
    if (sTypeName.startsWith("Dz") == false)
        continue;
    nClassCount++;
    var oObject = createInstance(sTypeName);
    if (oObject == null || (typeof oObject.inherits) !== "function") {
        print(sTypeName);
        nCouldNotConstructCount++;
    }
}
print(String("Could not construct %1 / %2 classes.").arg(nCouldNotConstructCount).arg(nClassCount));
// output:
// Could not construct 420 / 584 classes. 