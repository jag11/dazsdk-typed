class ApplicationBase {
    START_TIME = Scene.getTime();
    APPLICATION_NAME = "Application name";
    SCRIPT_NAME: String;
    SHIFT_PRESSED = shiftPressed();
    CONTROL_PRESSED = ctrlPressed();
    MARGIN = 6;
    SPACING = 6;
    mainDialog: DzDialog = null;
    tabContainer: DzTabWidget = null;

    messages: DzTextEdit;
    s: string = null;

    constructor(appName?: string) {
        this.APPLICATION_NAME = appName || this.APPLICATION_NAME;
        var file = new DzFile(getScriptFileName());
        this.SCRIPT_NAME = String("%1.%2").arg(file.baseName()).arg(file.extension());
    }

    run() {
        this.initialize();
        if (this.s) {
            this.messages.text = this.s;
        }

        if (this.mainDialog.exec()) {

        }

        App.flushLogBuffer();
    }

    initialize() {
        this.mainDialog = new DzDialog();
        this.mainDialog.caption = String("%1").arg(this.APPLICATION_NAME);
        this.mainDialog.width = 600;
        this.mainDialog.height = 400;

        var dialogLayout = new DzGridLayout(this.mainDialog);
        dialogLayout.margin = this.MARGIN;
        dialogLayout.spacing = this.SPACING;

        this.tabContainer = new DzTabWidget(this.mainDialog);

        dialogLayout.addMultiCellWidget(this.tabContainer, 0, 0, 0, 2);

        this.tabContainer.addTab((() => {
            var t = new DzVGroupBox(this.tabContainer);
            t.flat = true;
            t.insideMargin = this.MARGIN;
            t.insideSpacing = this.SPACING;

            this.messages = new DzTextEdit(t);

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
    }
}