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
class Path {
    // Properties

    public static changeExtension(path: String, extension: String) {
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
    }

    /** Returns the directory information for the specified path string.
     * @param path The path of a file or directory.
     */
    public static getDirectoryName(path: String) {
        if (path) {
            var length = path.length;
            var ch: string;
            while (--length >= 0) {
                ch = path[length];
                if (ch == '/') {
                    return path.substring(0, length);
                    break;
                }
            }
        }

        return path;
    }

    /** Returns the extension of the specified path string.
     * @param path The path string from which to get the extension. 
     */
    public static getExtension(path: string) {
        var extension: string = null;

        if (path) {
            var length = path.length;
            var ch: string;
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
    }

    /** Determines whether a path includes a file name extension.
     * @param path The path to search for an extension..
     */
    public static hasExtension(path: String): boolean {
        if (path) {
            var length = path.length;
            var ch: string;
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
    }

    /** Returns the file name and extension of the specified path string.
     * @param path The path string from which to obtain the file name and extension. 
     */
    public static getFileName(path: String) {

        if (path) {
            var length = path.length;
            var ch: string;
            while (--length >= 0) {
                ch = path[length];
                if (ch == '/') {
                    return path.substring(length + 1);
                    break;
                }
            }
        }

        return path;
    }

    /** Returns the file name of the specified path string without the extension.
     * @param path The path of the file. 
     */
    public static getFileNameWithoutExtension(path: String) {
        path = Path.getFileName(path);

        if (!path)
            return path;

        var index = path.lastIndexOf('.');
        if (index == -1) {
            return path;
        }

        return path.substring(0, index);
    }

    /** Combines strings into a path. 
     * @param args A variable number of parts of the path.
     */
    public static combine(...args: String[]) {
        return args.join('/');
    }
}