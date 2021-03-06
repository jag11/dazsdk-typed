﻿var blacklist = {
    'destroyed(QObject*)': true,
    'destroyed()': true,
}

var __types: any = {
    'object': 'QObject',
    'undefined': 'any',
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
function pad(s: string, width: number, z?: string): string {
    z = z || '0';
    s = s + '';
    return s.length >= width ? s : new Array(width - s.length + 1).join(z) + s;
}

/**
    Contains parameter info
*/
class ParameterInfo {
    references: number = 1;
    constructor(public name: QString, public type: QString) {
    }
}

/**
    Contains method info
*/
class MethodInfo {
    name: string;
    type: string;
    parameters: ParameterInfo[] = new Array();

    constructor(o: any, fullName: string) {

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
}

/** 
    Contains property info
*/

class PropertyInfo {
    name: string;
    type: QString;
    value: QString;
    isStatic: boolean;

    constructor(o: any, name: string) {
        this.name = name;
        this.type = typeof (o[name]);
        this.value = o[name];
        this.isStatic = name[0] == name[0].toUpperCase();

        if (this.type == "object") this.type = "QObject";
    }
}

/**
    Utility class to obtain TypeScript definition out of an object.
*/
class Reflector {
    name: QString = "";
    properties: PropertyInfo[] = new Array();
    methods: MethodInfo[] = new Array();
    ancestorName: QString = "";

    constructor() {
    }

    initialize() {
        this.name = "";
        this.properties = new Array();
        this.methods = new Array();
        this.ancestorName = "";
    }

    /**
      * Sets the object to reflect. Get definitions by using toString.
      */
    setObject(o: any): Reflector {
        this.initialize();

        this.name = "anonymous";
        if (o["className"]) {
            this.name = o.className();
        }
        if (o["inherits"] != undefined && o.inherits("QObject") == true) {
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
        this.properties.sort((a, b) => {
            var n1 = a.isStatic ? 'S' + a.name : 'T' + a.name;
            var n2 = b.isStatic ? 'S' + b.name : 'T' + b.name;
            return n1.localeCompare(n2);
        });

        this.methods.sort((a, b) => {
            var n1 = a.name + pad(a.parameters.length.toString(), 2);
            var n2 = b.name + pad(b.parameters.length.toString(), 2);
            return n1.localeCompare(n2);
        });
        return this;
    }

    addProperty(o: any, name: string): void {
        this.properties.push(new PropertyInfo(o, name));
    }

    addMethod(o: any, name: string): void {
        this.methods.push(new MethodInfo(o, name));
    }

    toString(): string {
        var spacing = "    ";
        var fmt1 = "%1: %2;\t// %3\n";
        var fmt2 = "static %1: %2;\t// %3\n";
        var sb = "";
        var extendsString = "";

        if (this.ancestorName.length > 0) {
            extendsString = String(" extends %1").arg(this.ancestorName);
        }

        sb += String("declare class %1%2 {\n").arg(this.name).arg(extendsString);
        
        this.properties.forEach((pi) => {
            var ch = pi.name.substr(0, 1);
            sb += spacing + String(ch == ch.toUpperCase() ? fmt2 : fmt1).arg(pi.name).arg(pi.type).arg(pi.value);
        });

        this.methods.forEach((mi) => {
            var p = "";
            var returnType: string = mi.name.endsWith("ed") ? "void" : "any";

            var plist: string[] = [];
            for (var i = 0; i < mi.parameters.length; i++) {
                plist.push(new String("%1: %2").arg(String("p%1").arg(i)).arg(mi.parameters[i].type));
            }
            sb += String(spacing + "%1(%2): %3;\n").arg(mi.name).arg(plist.join(", ")).arg(returnType);

        });

        sb += "}\n";

        return sb;
    }
}

var reflector = new Reflector();
