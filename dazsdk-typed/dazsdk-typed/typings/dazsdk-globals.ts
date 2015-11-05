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

// TODO: Add missing members.
interface String {
    search(pattern: String): number;
    search(pattern: RegExp): number;

    endsWith(pattern: String): boolean;
    endsWith(pattern: RegExp): boolean;
    find(pattern: RegExp, startPos?: number): number;
    find(pattern: String, startPos?: number): number;
    /** @param startPos if omitted defaults to 'length -1'*/
    findRev(pattern: RegExp, startPos?: number): number;
    /** @param startPos if omitted defaults to 'length -1'*/
    findRev(pattern: String, startPos?: Number): number;

    startsWith(pattern: String): boolean;
    startsWith(pattern: RegExp): boolean;
    upper(): String;
    lower(): String;
    mid(startIndex: number, num: number): string;

    // Propias de Daz Scripting

    /** 
     * Text to represent as a String
     * @param value The text to represent as a string. 
     * @param fieldWidth Specifies the minimum amount of space that value is padded to. A positive fieldWidth will produce right aligned text, a negative fieldWidth will produce left aligned text. 
     */
    arg(value: String, fieldWidth?: Number): string;
    arg(value: Number, fieldWidth?: Number): string;
}

declare type QString = String;

declare class DzError {
    valueOf(): number;
}

declare class DzMessageBox extends QObject {

    /** Properties */

    /** Methods */
    information(text: String, title: String, button0: String, button1?: String, button2?: String, button3?: String): number;
    question(text: String, title: String, button0: String, button1?: String, button2?: String, button3?: String): number;
    warning(text: String, title: String, button0: String, button1?: String, button2?: String, button3?: String): number;
    critical(text: String, title: String, button0: String, button1?: String, button2?: String, button3?: String): number;
}

declare var MessageBox: DzMessageBox;

// Globals

declare function decodeURI(encodedURI: String): String;
declare function decodeURIComponent(encodedURIComponent: String): String;
declare function encodeURI(uri: String): String;
declare function encodeURIComponent(uriComponent: String): String;
declare function escape(text: String): String;
declare function eval(str: String): Object;
declare function isFinite(expression: String): Boolean;
declare function isNaN(expression: String): Boolean;
declare function parseFloat(str: String): Number;
declare function parseInt(str: String, optBase: Number): Number;
declare function unescape(text: String): String;

// QtScript

declare function gc(): void;
declare function print(...expression: any[]): void;
declare function qsTr(sourceText: String): String;
declare function qsTranslate(sourceText: String): String;
declare function qsTrId(id: String): String;


declare function acceptUndo(caption: String): void;
declare function backgroundProgressIsActive(): Boolean;
declare function backgroundProgressIsCancelled(): Boolean;
declare function beginUndo(): void;
declare function cancelUndo(): void;
declare function clearBusyCursor(): void;
declare function clearUndoStack(): void;
declare function connect(sender: Object, signal: String, receiver: Object, slot: String): void;
declare function connect(sender: Object, signal: String, functionRef: any): void;
declare function ctrlPressed(): Boolean;
declare function debug(expression: any): void;
declare function disconnect(sender: Object, signal: String, receiver: Object, slot: String): void;
declare function disconnect(sender: Object, signal: String, functionRef: any): void;
declare function dropUndo(): void;
declare function finishBackgroundProgress(): void;
declare function finishProgress(): void;
declare function getArguments(): String[];
//declare function getDesktop(): QDesktopWidget:
declare function getErrorMessage(errCode: DzError): String;
declare function getObjectParent(obj: QObject): QObject;
declare function getScriptAuthor(): DzAuthor;
declare function getScriptFileName(): String;
declare function getScriptType(): String;
declare function getScriptVersionString(): String;
declare function include(scriptPath: String): void;
declare function pointersAreEqual(ptr1: QObject, ptr2: QObject): Boolean;
declare function processEvents(): void;
declare function progressIsActive(): Boolean;
declare function progressIsCancelled(): Boolean;
declare function setBusyCursor(): void;
declare function shiftPressed(): Boolean;
declare function startBackgroundProgress(info: String, totalSteps: Number, isCancellable: Boolean): void;
declare function startProgress(info: String, totalSteps?: Number, isCancellable?: Boolean, showTimeElapsed?: Boolean): void;
declare function stepBackgroundProgress(numSteps: Number): void;
declare function stepProgress(numSteps?: Number): void;
declare function updateBackgroundProgress(position: Number): void;
declare function updateProgress(position: Number): void;

declare class DzTime extends QObject {
    valueOf(): number;
}

declare var Scene: DzScene;
declare var App: DzApp;
declare var MainWindow: DzMainWindow;

