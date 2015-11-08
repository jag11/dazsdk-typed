/**
    Implements a basic logger
*/
var Logger = (function () {
    function Logger() {
        this.lines = [];
    }
    /**
        Clears all logger lines.
    */
    Logger.prototype.clear = function () {
        this.lines = [];
    };
    Logger.prototype.info = function (fmt) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        this.write(Logger.INFO, fmt, args);
    };
    Logger.prototype.warn = function (fmt) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        this.write(Logger.WARN, fmt, args);
    };
    Logger.prototype.error = function (fmt) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        this.write(Logger.ERROR, fmt, args);
    };
    Logger.prototype.write = function (type, fmt, args) {
        var d = new Date();
        var msg = String(fmt);
        args.forEach(function (a) { msg = msg.arg(a); });
        msg = String("%1:%2:%3 %4 [%5] %6").arg(d.getFullYear()).arg(d.getMonth(), 2).arg(d.getDate(), 2).arg(d.toTimeString().substring(0, 8)).arg(type, 5).arg(msg);
        this.lines.push(msg);
        print(msg);
    };
    Logger.prototype.toString = function () {
        var s = "";
        this.lines.forEach(function (l) { s += l + "\n"; });
        return s;
    };
    Logger.INFO = "INFO";
    Logger.WARN = "WARN";
    Logger.ERROR = "ERROR";
    return Logger;
})();
var logger = new Logger();
//# sourceMappingURL=logger.js.map
/*

Copyright (c) 2015 Paco Acevedo aka jag11

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/
var Path = (function () {
    function Path() {
    }
    // Properties
    Path.changeExtension = function (path, extension) {
        if (extension[0] != ".") {
            extension = "." + extension;
        }
        if (path) {
            var i = path.lastIndexOf(".");
            if (i != -1) {
                return path.substring(0, i) + extension;
            }
        }
        return path.valueOf() + extension.valueOf();
    };
    /** Returns the directory information for the specified path string.
     * @param path The path of a file or directory.
     */
    Path.getDirectoryName = function (path) {
        if (path) {
            var length = path.length;
            var ch;
            while (--length >= 0) {
                ch = path[length];
                if (ch == '/') {
                    return path.substring(0, length);
                    break;
                }
            }
        }
        return path;
    };
    /** Returns the extension of the specified path string.
     * @param path The path string from which to get the extension.
     */
    Path.getExtension = function (path) {
        var extension = null;
        if (path) {
            var length = path.length;
            var ch;
            while (--length >= 0) {
                ch = path[length];
                if (ch == '.') {
                    extension = path.substring(length + 1);
                    break;
                }
                if (ch == '/') {
                    break;
                }
            }
        }
        return extension;
    };
    /** Determines whether a path includes a file name extension.
     * @param path The path to search for an extension..
     */
    Path.hasExtension = function (path) {
        if (path) {
            var length = path.length;
            var ch;
            while (--length >= 0) {
                ch = path[length];
                if (ch == '.') {
                    return length != (path.length - 1);
                }
                if (ch == '/') {
                    break;
                }
            }
        }
        return false;
    };
    /** Returns the file name and extension of the specified path string.
     * @param path The path string from which to obtain the file name and extension.
     */
    Path.getFileName = function (path) {
        if (path) {
            var length = path.length;
            var ch;
            while (--length >= 0) {
                ch = path[length];
                if (ch == '/') {
                    return path.substring(length + 1);
                    break;
                }
            }
        }
        return path;
    };
    /** Returns the file name of the specified path string without the extension.
     * @param path The path of the file.
     */
    Path.getFileNameWithoutExtension = function (path) {
        path = Path.getFileName(path);
        if (!path)
            return path;
        var index = path.lastIndexOf('.');
        if (index == -1) {
            return path;
        }
        return path.substring(0, index);
    };
    /** Combines strings into a path.
     * @param args A variable number of parts of the path.
     */
    Path.combine = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i - 0] = arguments[_i];
        }
        return args.join('/');
    };
    return Path;
})();
//# sourceMappingURL=path.js.map
/*

Copyright (c) 2015 Paco Acevedo aka jag11

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/
/*
Use example:

class Settings extends ApplicationSettingsBase {
    static current: Settings = new Settings();

    classList: ClassInfo[] = [];

    constructor() {
        super();

        this.load();
    }
}

*/
var ApplicationSettingsBase = (function () {
    function ApplicationSettingsBase() {
    }
    ApplicationSettingsBase.prototype.load = function () {
        var file = new DzFile(ApplicationSettingsBase.configFileName);
        if (file.open(DzFile.ReadOnly)) {
            var json = file.readAll().convertToString();
            var data = JSON.parse(json);
            for (var p in data) {
                this[p] = data[p];
            }
        }
    };
    ApplicationSettingsBase.prototype.save = function () {
        var file = new DzFile(ApplicationSettingsBase.configFileName);
        if (file.open(DzFile.WriteOnly)) {
            var json = JSON.stringify(this, null, 4);
            file.write(json);
        }
    };
    ApplicationSettingsBase.prototype.reset = function () {
        var file = new DzFile(ApplicationSettingsBase.configFileName);
        if (file.open(DzFile.WriteOnly)) {
            var json = JSON.stringify({});
            file.write(json);
        }
    };
    ApplicationSettingsBase.configFileName = Path.changeExtension(getScriptFileName(), "json");
    return ApplicationSettingsBase;
})();
//# sourceMappingURL=settingsBase.js.map
/*

Copyright (c) 2015 Paco Acevedo aka jag11

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

*/
var blacklist = {
    'destroyed(QObject*)': true,
    'destroyed()': true,
};
var __types = {
    'object': 'QObject',
    'bool': 'boolean',
    'char': 'QString',
    'int': 'number',
    'float': 'number',
    'double': 'number',
    'quint32': 'number',
    'qint64': 'number',
    'short': 'number',
    'long': 'number',
    'QObjectList': 'QObject[]',
    'QStringList': 'QString[]',
    'QVariantList': 'QVariant[]'
};
/**
 * Pad a string with leading zeroes
 * @param s is the string to format to pad
 * @param width with of the resulting string
 * @param z padding character
 */
function pad(s, width, z) {
    z = z || '0';
    s = s + '';
    return s.length >= width ? s : new Array(width - s.length + 1).join(z) + s;
}
/**
    Contains parameter info
*/
var ParameterInfo = (function () {
    function ParameterInfo(name, type) {
        this.name = name;
        this.type = type;
        this.references = 1;
    }
    return ParameterInfo;
})();
/**
    Contains method info
*/
var MethodInfo = (function () {
    function MethodInfo(o, fullName) {
        this.parameters = new Array();
        fullName = fullName || "setUpBreadCrumbTrackingSignalWatch(QObject*,const char*,int)";
        var index = fullName.indexOf("(");
        if (index != -1) {
            this.name = fullName.substring(0, index);
            var parametersPart = fullName.substring(index + 1, fullName.length - 1);
            parametersPart = parametersPart.replace(/\&/g, "");
            parametersPart = parametersPart.replace(/\*/g, "");
            parametersPart = parametersPart.replace(/const/g, "");
            parametersPart = parametersPart.replace(/ /g, "");
            parametersPart = parametersPart.trim();
            if (parametersPart.length > 0) {
                var parameters = parametersPart.split(",");
                for (var i = 0; i < parameters.length; i++) {
                    var t = parameters[i];
                    if (__types[t]) {
                        t = __types[t];
                    }
                    this.parameters.push(new ParameterInfo(t, t));
                }
            }
        }
        else {
            this.name = fullName;
        }
    }
    return MethodInfo;
})();
/**
    Contains property info
*/
var PropertyInfo = (function () {
    function PropertyInfo(o, name) {
        this.name = name;
        this.type = typeof (o[name]);
        this.value = o[name];
        this.isStatic = name[0] == name[0].toUpperCase();
        if (this.type == "object")
            this.type = "QObject";
    }
    return PropertyInfo;
})();
/**
    Utility class to obtain TypeScript definition out of an object.
*/
var Reflector = (function () {
    function Reflector() {
        this.name = "";
        this.properties = new Array();
        this.methods = new Array();
        this.ancestorName = "";
    }
    Reflector.prototype.initialize = function () {
        this.name = "";
        this.properties = new Array();
        this.methods = new Array();
        this.ancestorName = "";
    };
    /**
      * Sets the object to reflect. Get definitions by using toString.
      */
    Reflector.prototype.setObject = function (o) {
        this.initialize();
        this.name = "anonymous";
        if (o["className"]) {
            this.name = o.className();
        }
        if (o.inherits("QObject") == true) {
            this.ancestorName = "QObject";
        }
        for (var name in o) {
            if (typeof o[name] == "function") {
                this.addMethod(o, name);
            }
            else {
                this.addProperty(o, name);
            }
        }
        this.properties.sort(function (a, b) {
            var n1 = a.isStatic ? 'S' + a.name : 'T' + a.name;
            var n2 = b.isStatic ? 'S' + b.name : 'T' + b.name;
            return n1.localeCompare(n2);
        });
        this.methods.sort(function (a, b) {
            var n1 = a.name + pad(a.parameters.length.toString(), 2);
            var n2 = b.name + pad(b.parameters.length.toString(), 2);
            return n1.localeCompare(n2);
        });
        return this;
    };
    Reflector.prototype.addProperty = function (o, name) {
        this.properties.push(new PropertyInfo(o, name));
    };
    Reflector.prototype.addMethod = function (o, name) {
        this.methods.push(new MethodInfo(o, name));
    };
    Reflector.prototype.toString = function () {
        var spacing = "    ";
        var fmt1 = "%1: %2;\t// %3\n";
        var fmt2 = "static %1: %2;\t// %3\n";
        var sb = "";
        var extendsString = "";
        if (this.ancestorName.length > 0) {
            extendsString = String(" extends %1").arg(this.ancestorName);
        }
        sb += String("declare class %1%2 {\n").arg(this.name).arg(extendsString);
        this.properties.forEach(function (pi) {
            var ch = pi.name.substr(0, 1);
            sb += spacing + String(ch == ch.toUpperCase() ? fmt2 : fmt1).arg(pi.name).arg(pi.type).arg(pi.value);
        });
        this.methods.forEach(function (mi) {
            var p = "";
            var returnType = mi.name.endsWith("ed") ? "void" : "any";
            var plist = [];
            for (var i = 0; i < mi.parameters.length; i++) {
                plist.push(new String("%1: %2").arg(String("p%1").arg(i)).arg(mi.parameters[i].type));
            }
            sb += String(spacing + "%1(%2): %3;\n").arg(mi.name).arg(plist.join(", ")).arg(returnType);
        });
        sb += "}\n";
        return sb;
    };
    return Reflector;
})();
var reflector = new Reflector();
//# sourceMappingURL=dazScriptReflector.js.map
var ApplicationBase = (function () {
    function ApplicationBase(appName) {
        this.START_TIME = Scene.getTime();
        this.APPLICATION_NAME = "Application name";
        this.SHIFT_PRESSED = shiftPressed();
        this.CONTROL_PRESSED = ctrlPressed();
        this.MARGIN = 6;
        this.SPACING = 6;
        this.mainDialog = null;
        this.tabContainer = null;
        this.s = null;
        this.APPLICATION_NAME = appName || this.APPLICATION_NAME;
        var file = new DzFile(getScriptFileName());
        this.SCRIPT_NAME = String("%1.%2").arg(file.baseName()).arg(file.extension());
    }
    ApplicationBase.prototype.run = function () {
        this.initialize();
        if (this.s) {
            this.messages.text = this.s;
        }
        if (this.mainDialog.exec()) {
        }
        App.flushLogBuffer();
    };
    ApplicationBase.prototype.initialize = function () {
        var _this = this;
        this.mainDialog = new DzDialog();
        this.mainDialog.caption = String("%1").arg(this.APPLICATION_NAME);
        this.mainDialog.width = 600;
        this.mainDialog.height = 400;
        var dialogLayout = new DzGridLayout(this.mainDialog);
        dialogLayout.margin = this.MARGIN;
        dialogLayout.spacing = this.SPACING;
        this.tabContainer = new DzTabWidget(this.mainDialog);
        dialogLayout.addMultiCellWidget(this.tabContainer, 0, 0, 0, 2);
        this.tabContainer.addTab((function () {
            var t = new DzVGroupBox(_this.tabContainer);
            t.flat = true;
            t.insideMargin = _this.MARGIN;
            t.insideSpacing = _this.SPACING;
            _this.messages = new DzTextEdit(t);
            return t;
        })(), "CONSOLE");
        //tabContainer.addTab((() => {
        //    var tab1 = new DzVGroupBox(tabContainer);
        //    tab1.flat = true;
        //    tab1.insideMargin = this.MARGIN;
        //    tab1.insideSpacing = this.SPACING;
        //    //var label = new DzLabel(tab1);
        //    //label.text = "HOLA";
        //    return tab1;
        //})(), "Tab1");
        //var tab2 = new DzVGroupBox(tabContainer);
        //tabContainer.addTab(tab2, "Tab2");
    };
    return ApplicationBase;
})();
//# sourceMappingURL=applicationBase.js.map