/**
    Implements a basic logger
*/
class Logger {
    static INFO = "INFO";
    static WARN = "WARN";
    static ERROR = "ERROR";
    lines: string[] = [];

    /** 
        Clears all logger lines.
    */
    clear() {
        this.lines = [];
    }

    info(fmt: string, ...args: any[]) {
        this.write(Logger.INFO, fmt, args);
    }

    warn(fmt: string, ...args: any[]) {
        this.write(Logger.WARN, fmt, args);
    }

    error(fmt: string, ...args: any[]) {
        this.write(Logger.ERROR, fmt, args);
    }

    write(type: string, fmt: string, args: any[]) {
        var d = new Date();
        var msg: string = String(fmt);
        args.forEach((a) => { msg = msg.arg(a); });
        msg = String("%1:%2:%3 %4 [%5] %6").arg(d.getFullYear()).arg(d.getMonth(), 2).arg(d.getDate(), 2).arg(d.toTimeString().substring(0, 8)).arg(type, 5).arg(msg);
        this.lines.push(msg);
        print(msg);
    }

    toString() {
        var s = "";
        this.lines.forEach((l) => { s += l + "\n"; });
        return s;
    }
}

var logger = new Logger();