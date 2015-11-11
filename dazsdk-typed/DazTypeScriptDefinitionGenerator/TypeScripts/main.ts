class DazReflectorApplication extends ApplicationBase {
    pixmapLabel: DzLabel = null;
    constructor(appName?: string) {
        super(appName);
    }

    initialize() {
        super.initialize();

        // create a new tab, content will be a DzLabel
        this.pixmapLabel = new DzLabel(this.tabContainer);
        this.tabContainer.addTab(this.pixmapLabel, "Pixmap");
    }
}

// create instance and run it
var app = new DazReflectorApplication("Any app name");

logger.info("An info message");
logger.error("An error message");
logger.warn("An %1 error message", "darn");

logger.info(reflector.setObject(new DzProductAssetContainer ()).toString());
app.run();