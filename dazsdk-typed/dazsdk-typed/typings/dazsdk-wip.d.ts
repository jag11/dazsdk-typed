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

// Pending classes to be reflected
declare class DzFileDialog {
    doAudioClipOpenDialog(startWith: QString, parent: DzWidget): QString
    doAudioClipOpenDialog(): QString
    doDirectoryDialog(title: QString, desc: QString, parent: DzWidget): QString
    doDirectoryDialog(title: QString, desc: QString, path: QString) : QString
    doDirectoryDialog(): QString
    doFileDialog(open: Boolean, title?: QString, startWith?: QString, filter?: QString, selectedFilter?: Number, parent?: DzWidget): QString    
    doImageDialog(open: Boolean, startWith: String, parent: DzWidget): QString
    doImageDialog(open: Boolean): QString
    doVideoClipSaveDialog(startWith: QString, parent: DzWidget): QString
    doVideoClipSaveDialog(): QString
    getOpenFileNames(dir: QString, filter: QString, title: QString, parent: DzWidget): Array<QString>
    getOpenFileNames() : Array<QString>
}
declare class DzImageManip { }
declare class DzImageBlend { }
declare class DzImageMask { }

declare class DzImageFileLayer extends QObject {
    static className(): QString;
    filename: string;	// 
    label: string;	// 
    name: string;	// 
    objectName: string;	// 
    visible: boolean;	// true
    addManipulator(p0: DzImageManip): any;
    blendModeChanged(p0: DzImageBlend): void;
    className(): any;
    deleteLater(): any;
    destroyed(): void;
    destroyed(p0: QObject): void;
    filenameChanged(p0: QString): void;
    freeImageData(): any;
    getBlendMode(): any;
    getDescription(): any;
    getImageData(): any;
    getManipulator(p0: number): any;
    getMask(): any;
    getNumManipulators(): any;
    getSize(): any;
    imageDataChanged(): void;
    inherits(): any;
    insertManipulator(p0: number, p1: DzImageManip): any;
    labelChanged(p0: QString): void;
    manipulatorListChanged(): void;
    maskChanged(p0: DzImageMask): void;
    removeManipulator(p0: number): any;
    removeManipulator(p0: DzImageManip): any;
    setBlendMode(p0: DzImageBlend): any;
    setMask(p0: DzImageMask): any;
    toTextureLayer(p0: DzTextureLayer, p1: QSize): any;
    visibilityChanged(p0: boolean): void;
}

declare class DzAbstractAssetContainerPtr { }
declare class DzAbstractBuildGeometryFilter { }
declare class DzAbstractShapeInstance { }
declare class DzAbstractShapeInstanceListIterator { }
declare class DzActionMenuItem { }
declare class DzAsset { }
declare class DzAssetIOFilter { }
declare class DzAssetOutFile { }
declare class DzAssetPtr { }
declare class DzAudioClip { }
declare class DzAudioImporter { }
declare class DzBone { }
declare class DzCallBack { }
declare class DzContentFile { }
declare class DzContentFilePtr { }
declare class DzController { }
declare class DzControllerListIterator { }
declare class DzCoShaderInfo { }
declare class DzDBCategoriesTable { }
declare class DzDBCompatibilityBaseTable { }
declare class DzDBContentTable { }
declare class DzDBObjectBasePtr { }
declare class DzDevice { }
declare class DzDockAreaColumn { }
declare class DzDockBar { }
declare class DzDrawStyle { }
declare class DzElementClipboard { }
declare class DzElementData { }
declare class DzElementListIterator { }
declare class DzElementPropertyIOFilter { }
declare class DzERCLink { }
declare class DzExporter { }
declare class DzFileFilter { }
declare class DzFileIOSettings { }
declare class DzFileLoadFilter { }
declare class DzFolderAssetContainer { }
declare class DzGeometry { }
declare class DzGeometryRegion { }
declare class DzHelpContentsItem { }
declare class DzInFile { }
declare class DzImageLayer { }
declare class DzLayeredImage extends QObject {
    static className() : QString
    name: string;	// 
    objectName: string;	// 
    addLayer(layer: DzImageLayer): any;
    className(): any;
    className(): any;
    deleteLater(): any;
    destroyed(): void;
    destroyed(p0: QObject): void;
    getFlattenedImage(): any;
    getFlattenedImage(p0: boolean): any;
    getLayer(p0: number): any;
    getLayerCount(): any;
    getName(): any;
    getSize(): any;
    inherits(): any;
    inherits(p0: QString): any;
    insertLayer(layer: DzImageLayer, idx: number): any;
    iskindof(p0: QString): any;
    layerListChanged(): void;
    makePersistent(): any;
    moveLayer(p0: number, p1: number): any;
    nameChanged(p0: QString): void;
    removeLayer(p0: DzImageLayer): any;
    replaceLayer(p0: DzImageLayer, p1: DzImageLayer): any;
    setSize(p0: QSize): any;
    sizeChanged(p0: QSize): void;
    toLayeredTexture(p0: DzLayeredTexture): any;
}

declare class DzLight extends DzCamera {
    static None: number;
    static DeepShadowMap: number;
    static Raytraced: number;
    static className(): QString;

    getDiffuseColor(): Color
    getShadowType(): number
    getShadowTypeControl() : DzEnumProperty
    getWsDirection() : DzVec3
    isAreaLight() : Boolean
    isDirectional() : Boolean
    isOn() : Boolean
}

declare class DzDistantLight extends DzLight {
    static className(): QString;

    getDiffuseColor(): Color
    getDiffuseColorControl(): DzColorProperty    
    getIlluminationControl(): DzEnumProperty
    getIntensity(): Number
    getIntensityControl(): DzFloatProperty    
    getShadowBiasControl(): DzFloatProperty
    getShadowSoftnessControl(): DzFloatProperty    
}

declare class DzMaterialPtr { }
declare class DzMatrix4 { }
declare class DzMenu { }
declare class DzOpenMethod { }
declare class DzOutFile { }
declare class DzPane { }
declare class DzPaneGroup { }
declare class DzPaneGroupDlg { }
declare class DzPersistentMenu { }
declare class DzPixmapPair { }
declare class DzPlugin { }
declare class DzPnt3 { }
declare class DzProductHolderContainerPtr { }
declare class DzPropertyClipboard { }
declare class DzPropertyDefinition { }
declare class DzPropertyListIterator { }
declare class DzPropertyListNode { }
declare class DzPropertyListNodePtr { }
declare class DzPropertySettings { }
declare class DzPropertyWgt { }
declare class DzShaderDescription { }
declare class DzRenderer {
    compileShader(p0: QString): QString;
    compileShader(p0: QString, p1: QString): QString;
    customRender(p0: DzRenderHandler, p1: DzCamera, p2: QObject[], p3: QObject[], p4: DzRenderOptions): Boolean;
    customRender(p0: DzRenderHandler, p1: DzCamera, p2: DzLightList, p3: DzNodeList, p4: DzRenderOptions): Boolean;
    getCurrentNode(): DzNode;
    getName(): QString;
    getShaderExtension(): QString;
    getShaderFileName(p0: QString): QString;
    getShaderInfo(p0: QString): DzShaderDescription;
    getShaderPath(p0: QString): QString;
    getShaderPath(p0: QString, p1: boolean): QString;
    getShaderSearchPaths(): Array<QString>;
    getTextureUtilityPath(): QString;
    isRendering(): Boolean;
    killRender(): void;
    prepareImage(p0: DzTexture, p1: QString): void;
    processShaderName(p0: QString): QString;
    render(p0: DzRenderHandler, p1: DzCamera, p2: DzRenderOptions): Boolean;
    render(p0: DzRenderHandler, p1: DzCamera, p2: DzRenderOptions): Boolean;
}

declare class DzRenderHandler { }
declare class DzRenderSettings { }
declare class DzIPRRenderHandler { }
declare class DzElementList { }
declare class DzLightListIterator { }
declare class DzNodeListIterator { }
declare class DzBakerOptions { }
declare class DzLightList { }
declare class DzNodeList { }

declare class DzScriptedRenderer extends DzRenderer {
    static className(): QString;
    name: string;	// 
    objectName: string;	// 
    IPRRenderHandlerChanged(p0: DzRenderer, p1: DzIPRRenderHandler): void;
    aboutToRender(p0: DzRenderer): any;
    addRenderElements(p0: DzElementList): any;
    autoBake(p0: DzRenderHandler, p1: DzCamera, p2: DzLightListIterator, p3: DzNodeListIterator, p4: DzBakerOptions): any;
    bake(p0: DzRenderHandler, p1: DzCamera, p2: DzLightListIterator, p3: DzNodeListIterator, p4: DzBakerOptions): any;
    cameraProject(p0: DzCamera, p1: number, p2: number): any;
    className(): any;
    className(): any;
    
    continueAfterPreProcess(): any;
    createLight(p0: DzLight, p1: QString): any;
    
    defintionFileChanged(): void;
    deleteFiles(p0: QString[]): any;
    deleteLater(): any;
    destroyed(): void;
    destroyed(p0: QObject): void;
    doDefaultDisplay(): any;
    doDefaultShadowPass(p0: DzRenderOptions, p1: DzCamera, p2: QString, p3: boolean): any;
    doDefaultShadowPass(p0: DzRenderOptions, p1: DzCamera, p2: DzLight, p3: QString, p4: boolean): any;
    doDefaultShadowPassEnd(p0: DzRenderOptions, p1: DzCamera, p2: DzLight): any;
    doDefaultShadowPassPrep(p0: DzRenderOptions, p1: DzCamera, p2: DzLight, p3: QString, p4: boolean): any;
    doShutter(p0: DzRenderOptions): any;
    fullSceneCameraProject(p0: DzCamera, p1: number, p2: number): any;
    
    getDefaultShaderSearchPath(): any;
    getDefinitionFile(): any;
    getDisplacementPreProcessScript(): any;
    getHandler(): any;
    getIPRRenderHandler(): any;
    getLight(p0: number): any;
    getLightCount(): any;
    getLightPreProcessScript(): any;
    getLightsToRender(): any;
   
    getNode(p0: number): any;
    getNodeCount(): any;
    getNodesToRender(): any;
    getNumIlluminateHandels(): any;
    getOptionsFrame(): any;
    getPropertyHolder(): any;
    getRenderScript(): any;
    getRendererMode(): any;
    getShaderCompilerPath(): any;
    
    getSurfacePreProcessScript(): any;
    
    imagePrepared(p0: DzTexture, p1: QString): void;
    inherits(): any;
    inherits(p0: QString): any;
    
    iskindof(p0: QString): any;
    
    makePersistent(): any;
    nameChanged(p0: QString): void;
    
    prepareMotionSamples(): any;
    prepareMotionSamples(p0: QObject[]): any;
    prepareNodeMotionSamples(p0: DzNode): any;
    
    removeLight(p0: number): any;
    removeNode(p0: number): any;
   
    renderBackDrop(p0: DzBackdrop, p1: number, p2: number): any;
    renderFinished(p0: DzRenderer): void;
    renderNode(p0: DzNode): any;
    renderNodes(p0: QObject[]): any;
    rendererModeChanged(p0: DzRenderer): void;
    riAreaLightSource(p0: QString, p1: QString[], p2: QVariant[]): any;
    riAtmosphere(p0: QString, p1: QString[], p2: QVariant[]): any;
    riAttribute(p0: QString, p1: QString[], p2: QVariant[]): any;
    riAttributeBegin(): any;
    riAttributeEnd(): any;
    riBegin(p0: QString): any;
    riCamera(p0: QString, p1: QString[], p2: QVariant[]): any;
    riClipping(p0: number, p1: number): any;
    riClippingPlane(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number): any;
    riColor(p0: QColor): any;
    riConcatTransform(p0: DzMatrix4): any;
    riCoordSysTransform(p0: QString): any;
    riCoordinateSystem(p0: QString): any;
    riCropWindow(p0: number, p1: number, p2: number, p3: number): any;
    riDeclare(p0: QString, p1: QString): any;
    riDepthOfField(p0: number, p1: number, p2: number): any;
    riDetailRange(p0: number, p1: number, p2: number, p3: number): any;
    riDisplacement(p0: QString, p1: QString[], p2: QVariant[]): any;
    riDisplay(p0: QString, p1: QString, p2: QString, p3: QString[], p4: QVariant[]): any;
    riDisplayChannel(p0: QString, p1: QString[], p2: QVariant[]): any;
    riElse(): any;
    riElseIf(p0: QString, p1: QString[], p2: QVariant[]): any;
    riEndWorld(p0: QString): any;
    riExposure(p0: number, p1: number): any;
    riExterior(p0: QString, p1: QString[], p2: QVariant[]): any;
    riFormat(p0: number, p1: number, p2: number): any;
    riFrameAspectRatio(p0: number): any;
    riGeometricApproximation(p0: QString, p1: number): any;
    riHider(p0: QString, p1: QString[], p2: QVariant[]): any;
    riIdentity(): any;
    riIfBegin(p0: QString, p1: QString[], p2: QVariant[]): any;
    riIfEnd(): any;
    riIlluminate(p0: number, p1: boolean): any;
    riImager(p0: QString, p1: QString[], p2: QVariant[]): any;
    riInterior(p0: QString, p1: QString[], p2: QVariant[]): any;
    riLightSource(p0: QString, p1: QString[], p2: QVariant[]): any;
    riMakeBump(p0: QString, p1: QString, p2: QString, p3: QString, p4: number, p5: number, p6: number, p7: QString[], p8: QVariant[]): any;
    riMakeCubeFaceEnvironment(p0: QString, p1: QString, p2: QString, p3: QString, p4: QString, p5: QString, p6: QString, p7: number, p8: number, p9: number, p10: number, p11: QString[], p12: QVariant[]): any;
    riMakeLatLongEnvironment(p0: QString, p1: QString, p2: number, p3: number, p4: number, p5: QString[], p6: QVariant[]): any;
    riMakeShadow(p0: QString, p1: QString, p2: QString[], p3: QVariant[]): any;
    riMakeTexture(p0: QString, p1: QString, p2: QString, p3: QString, p4: number, p5: number, p6: number, p7: QString[], p8: QVariant[]): any;
    riMatte(p0: boolean): any;
    riMultiplyShadingRate(p0: number): any;
    riOpacity(p0: QColor): any;
    riOption(p0: QString, p1: QString[], p2: QVariant[]): any;
    riOrientation(p0: QString): any;
    riPerspective(p0: number): any;
    riPixelFilter(p0: number, p1: number, p2: number): any;
    riPixelSamples(p0: number, p1: number): any;
    riPixelVariance(p0: number): any;
    riProjection(p0: QString, p1: QString[], p2: QVariant[]): any;
    riQuantize(p0: QString, p1: number, p2: number, p3: number, p4: number): any;
    riRelativeDetail(p0: number): any;
    riReverseOrientation(): any;
    riRotate(p0: number, p1: number, p2: number, p3: number): any;
    riScale(p0: number, p1: number, p2: number): any;
    riScopedCoordinateSystem(p0: QString): any;
    riScreenWindow(p0: number, p1: number, p2: number, p3: number): any;
    riShader(p0: QString, p1: QString, p2: QString[], p3: QVariant[]): any;
    riShadingInterpolation(p0: QString): any;
    riShadingRate(p0: number): any;
    riShutter(p0: number, p1: number): any;
    riSides(p0: number): any;
    riSkew(p0: number, p1: number, p2: number, p3: number, p4: number, p5: number, p6: number): any;
    riSurface(p0: QString, p1: QString[], p2: QVariant[]): any;
    riTransform(p0: DzMatrix4): any;
    riTransformBegin(): any;
    riTransformEnd(): any;
    riTranslate(p0: number, p1: number, p2: number): any;
    riWorldBegin(): any;
    saveBakeImage(p0: DzBakerOptions, p1: boolean): any;
    setBackgroundColor(p0: QColor): any;
    setCleanUpScript(p0: QString): any;
    setContinueAfterPreProcess(p0: boolean): any;
    setCropWindow(p0: DzRenderHandler): any;
    setDefinitionFile(p0: QString): any;
    setDisplacementPreProcessScript(p0: QString): any;
    setIPRRenderHandler(p0: DzIPRRenderHandler): any;
    setIsShadowPass(p0: boolean): any;
    setLightPreProcessScript(p0: QString): any;
    setRenderScript(p0: QString): any;
    setSurfacePreProcessScript(p0: QString): any;
    shapeRenderBeginning(p0: DzShape): any;
    shapeRenderFinished(p0: DzShape): void;
    stopBaking(): any;
    textureConvert(p0: DzRenderHandler, p1: DzCamera, p2: DzTextureConvertorOptions): any;
}
declare class DzRigidityGroup { }
declare class DzRigidityGroupListIterator { }
declare class DzSaveFilter { }
declare class DzSceneAssetFileInfo { }
declare class DzSceneAssetFileInfoData { }
declare class DzSceneData { }
declare class DzSearchContainerPtr { }
declare class DzSelectionMap { }
declare class DzShapeListIterator { }
declare class DzSkin { }
declare class DzSurfacesPane { }
declare class DzTextureComponent { }
declare class DzTextureMask { }
declare class DzTextStyle { }
declare class DzToolBar { }
declare class DzUIPopUpWgt { }
declare class DzUri { }
declare class DzUserDrawStyle { }
declare class DzUVSet { }
declare class DzVersion { }
declare class DzVertexMesh { }
declare class DzVertexMeshPtr { }
declare class DzVideoClip { }
declare class DzVideoExporter { }
declare class DzView { }
declare class DzViewTool { }
declare class DzWeightMap { }
declare class DzWidgetGroup { }
declare class DzWSModifier { }
declare class Q_DECL_DEPRECATED { }
declare class Q_PRIVATE_SLOT { }
declare class Q3ListBoxItem { }
declare class QAbstractItemModel { }
declare class QAction { }
declare class QActionEvent { }
declare class QButtonGroup { }
declare class QByteArray { }
declare class QChar { }
declare class QClipboard { }
declare class QContextMenuEvent { }
declare class QCursor { }
declare class QDateTime { }
declare class QDecoration { }
declare class QDesktopWidget { }
declare class QDockWidget { }
declare class QDomElement { }
declare class QDragEnterEvent { }
declare class QDragLeaveEvent { }
declare class QDragMoveEvent { }
declare class QDropEvent { }
declare class QEvent { }
declare class QFocusEvent { }
declare class QFontMetrics { }
declare class QGLColormap { }
declare class QGLContext { }
declare class QGLFormat { }
declare class QIcon { }
declare class QInputContext { }
declare class QIODevice { }
declare class QKeyEvent { }
declare class QKeySequence { }
//declare class QLayout { }
//declare class QList<DzContentFilePtr> { }
//declare class QList<int> { }
//declare class QList<QAbstractButton {}
//declare class QList<QDockWidget {}
declare class QLocale { }
declare class QMacCompatGLenum { }
declare class QMacCompatGLint { }
declare class QMacCompatGLuint { }
declare class QMenu { }
declare class QMimeData { }
declare class QMimeSource { }
declare class QModelIndex { }
declare class QMouseEvent { }
declare class QMovie { }
declare class QPaintEngine { }
declare class QPainter { }
declare class QPaintEvent { }
declare class QPalette { }
declare class QPicture { }
declare class QPlatformNativeInterface { }
declare class QPointF { }
declare class QPolygonF { }
declare class QPostEvent { }
declare class QRect { }
declare class QRectF { }
declare class QResizeEvent { }
declare class QRgb { }
declare class QScrollBar { }
declare class QSessionManager { }
declare class QShowEvent { }

declare class QStatusBar { }
declare class QStyle { }
declare class QStyleOption { }
declare class QStyleOptionButton { }
declare class QStyleOptionMenuItem { }
declare class QStyleOptionTabWidgetFrame { }
declare class QStyleOptionViewItem { }
declare class QSymbianEvent { }
declare class QT_DEPRECATED { }
declare class QT3_SUPPORT { }
declare class QT3_SUPPORT_CONSTRUCTOR { }
declare class QTabBar { }
declare class QTabletEvent { }
declare class QTextCodec { }
declare class QTimerEvent { }
declare class QToolBar { }
declare class QTranslator { }
declare class QUrl { }
declare class QVariant { }
declare class QWheelEvent { }
declare class QWSDisplay { }
declare class QWSEvent { }

declare class QTableEvent { }
declare class DzScriptContext { }
declare class DzToolbar { }

declare class DzShape extends DzElement {

    /** Properties */

    /** Methods */
    addMaterial(mat: DzMaterial): DzError;
    addRigidityGroup(group: DzRigidityGroup): void;
    addShapeInstance(instance: DzAbstractShapeInstance): void;
    assemblyChanged(): void;
    buildRegionMaps(): void;
    buildRegionMapsRecurse(region: DzGeometryRegion): void;
    clearMaterialSelection(): void;
    createMaterial(name: QString): DzError;
    draw(style: DzDrawStyle, wsGeom: DzGeometry): void;
    findAssemblyMaterialIndex(mat: DzMaterial): number;
    findLeafRegion(regionName: QString): DzGeometryRegion;
    findMaterial(name: QString): DzMaterial;
    findMaterialIndex(mat: DzMaterial): number;
    findMaterialIndex(name: QString): number;
    findMaterialIndex(mat: DzMaterial): number;
    findMaterialIndex(name: QString): number;
    findRigidityGroup(group: QString): DzRigidityGroup;
    geomChanged(): void;
    geomTopologyChanged(): void;
    geometryRegionChanged(): void;
    geometryRegionSelectionChanged(): void;
    getAllMaterials(): QObject[];
    getAllMaterials(matPtrs: DzMaterialPtr[]): void;
    getAllMaterials(): QObject[];
    getAllMaterials(matPtrs: DzMaterialPtr[]): void;
    getAllRenderAssemblyPrioritizedMaterials(prioritizedMaterials: DzMaterialPtr[]): void;
    getAllRenderPrioritizedMaterials(): QObject[];
    getAllRenderPrioritizedMaterials(prioritizedMaterials: DzMaterialPtr[]): void;
    getAllRenderPrioritizedMaterials(): QObject[];
    getAllRenderPrioritizedMaterials(prioritizedMaterials: DzMaterialPtr[]): void;
    getAllSelectedMaterials(): QObject[];
    getAllSelectedMaterials(matPtrs: DzMaterialPtr[]): void;
    getAllSelectedMaterials(): QObject[];
    getAllSelectedMaterials(matPtrs: DzMaterialPtr[]): void;
    getAssemblyGeometry(): DzGeometry;
    getAssemblyMaterial(which: number): DzMaterial;
    getCurrentShapeForNode(node: DzNode): DzShape;
    getFacetToLeafMap(): any;
    getGeometry(): DzGeometry;
    getGeometryRegion(): DzGeometryRegion;
    getGeometryRegionLeafSelection(): DzGeometryRegion;
    getGeometryRegionSelection(): DzGeometryRegion;
    getLeafRegion(index: number): DzGeometryRegion;
    getMaterial(which: number): DzMaterial;
    getModifiableAssemblyGeom(isRender: boolean): DzVertexMesh;
    getModifiableGeom(isRender: boolean, currentCache: DzVertexMesh): DzVertexMesh;
    getNode(): DzNode;
    getNumAssemblyMaterials(): number;
    getNumFacetToRegionLeafValues(): number;
    getNumLeafRegions(): number;
    getNumMaterials(): number;
    getNumRigidityGroups(): number;
    getNumSelectedMaterials(): number;
    getNumShapeInstances(): number;
    getRenderPrioritizedMaterials(inputMaterials: DzMaterialPtr[], prioritizedMaterials: DzMaterialPtr[]): void;
    getRigidityGroup(which: number): DzRigidityGroup;
    getRigidityGroups(): DzRigidityGroup[];
    getRigidityMap(): DzWeightMap;
    getSelectedMaterial(which: number): DzMaterial;
    getShapeInstance(which: number): DzAbstractShapeInstance;
    getShapeInstance(): DzAbstractShapeInstance[];
    hasAssemblyGeometry(): boolean;
    insertMaterial(newmat: DzMaterial, index: number): DzError;
    invalidateGeomCaches(): void;
    invalidateWorkingMesh(): void;
    materialAdded(mat: DzMaterial): void;
    materialChanged(): void;
    materialListChanged(): void;
    materialRemoved(mat: DzMaterial): void;
    materialSelected(mat: DzMaterial): void;
    materialSelectionChanged(): void;
    materialUnselected(mat: DzMaterial): void;
    mergesSnapGeometry(): boolean;
    modifyGeometryAsset(): void;
    moveGeometryRegion(newShape: DzShape): void;
    rebuildBaseMap(whichUVSet: number): void;
    removeMaterial(mat: DzMaterial): DzError;
    removeMaterialByName(material: QString, defaultMaterial: QString): DzError;
    removeRigidityGroup(group: DzRigidityGroup): void;
    removeShapeInstance(instance: DzAbstractShapeInstance): boolean;
    render(settings: DzRenderSettings, wsGeom: DzGeometry): void;
    replaceMaterial(current: DzMaterial, newMat: DzMaterial): DzError;
    rigidityGroupIterator(): DzRigidityGroupListIterator;
    rigidityGroupListChanged(): void;
    rigidityMapChanged(): void;
    setGeometryRegion(region: DzGeometryRegion): void;
    setGeometryRegionLeafSelection(sel: DzGeometryRegion): void;
    setGeometryRegionSelection(sel: DzGeometryRegion): void;
    setRigidityMap(map: DzWeightMap): void;
    shapeInstancesIterator(): DzAbstractShapeInstanceListIterator;
    smoothingChanged(): void;
    updateGeom(): void;
    updateMaterialSelection(mat: DzMaterial, onOff: boolean): void;
    updateMaterials(): void;
    updateRegionMap(): void;
    updateSmoothing(): void;
    updateUVs(): void;
    uvsChanged(): void;
}



declare class DzShaderMaterial extends DzMaterial {
    /** Methods */
    setMaterialName(name: QString);
    setDefinitionFile(definitionFile: QString, f1?: boolean, f2?: boolean);
    addShader(rslShader: DzRSLShader);
    getNumShaders(): number;
    getShader(index: number): DzRSLShader
    removeShader(rslShader: DzRSLShader);
    setNeedsTangentSpaceParams(needsTangentSpaceParams: boolean);
    getDiffuseProperty(): any;
    getOpacityProperty(): any;
    getDefinitionFile(): any;
    getAllImages(list: DzTexturePtr[]);
    allowsAutoBake(): boolean;
    unsetRender(DzRenderSettings): void;
}

declare class DzRSLShader { }
declare class DzTexturePtr { }


declare class DzUberIrayMaterial extends DzMaterial {
    /** Methods */
    openGLPreviewOpacity: any;
    openGLIOR: any;

    getBumpStrength(): any;
    getBumpMap(): any;
    getDisplacementStrength(): any;
    getDisplacementMin(): any;
    getDisplacementMax(): any;
    getDisplacementMap(): any;
    getHorizontalOffset(): any;
    getHorizontalTiles(): any;
    getVerticalOffset(): any;
    getVerticalTiles(): any;
    restoreDefaults(): any;
    topCoatLayerModeChanged(): void;
    topCoatLayerWeightChanged(topCoatLayerWeight?: boolean): void;
    metallicFlakeLayerWeightChanged(metallicFlakeLayerWeight?: boolean): void;
    layerMixingModeChanged(): void;
    shareGlossyInputsChanged(shareGlossyInputs?: boolean): void;
    volumeEnableChanged(): void;
    emissionColorChanged(): void;
    emissionFluxUnitChanged(emissionFluxUnit?: boolean): void;
    refractionWeightChanged(refractionWeight?: boolean): void;
    backscatteringWeightChanged(): void;
    displacementWeightChanged(): void;
    translucencyWeightChanged(): void;
    diffuseColorTransmitChanged(diffuseColorTransmit?: boolean): void;
    diffuseStrengthChanged(): void;
    glossyRoughnessChanged(): void;
    glossyGlossinessChanged(): void;
    backscatterRoughnessChanged(): void;
    backscatterGlossinessChanged(): void;
    updateGlossyRotation(): any;
    baseThinFilmThicknessChanged(): void;
    glossyWeightChanged(glossyWeight?: boolean): void;
    refractionGlossinessChanged(refractionGlossiness?: boolean): void;
    refractionRoughnessChanged(refractionRoughness?: boolean): void;
}

declare class DzBrickMaterial extends DzMaterial {

    /** Methods */
    brickRemoved(brick: DzShaderBrick): any;
    brickAdded(brick: DzShaderBrick): any;
    generateFilesStarted(): any;
    generateFilesFinished(): any;
    getExtension(): QString;
    getBrickUserName(): QString;
    setBrickUserName(brickUserName: QString): void;
    getNumBrickSets(): number;
    getBrickSet(brickSet: number): any;
    addBrick(brick: DzShaderBrick): any;
    getBrick(brick: number): any;
    getBrickIDs(): any;
    getBrickIDs(ids: number[]): any;
    deleteBrick(brick: number): any;
    deleteBrick(brick: DzShaderBrick): any;
    deleteAllBricks(): any;
    invalidateSets(): any;
    moveBrick(brick: number, brickUser: IDzBrickUser): any;
    getIdentifier(): any;
    setIdentifier(uuid: QUuid): any;
    updateIdentifierOnSetInvalidate(update: boolean): any;
    isInEditMode(): any;
    startEditMode(): any;
    endEditMode(): any;
    usesLocalShaderSpace(): any;
    applyToScene(): any;
    fromScene(): any;
    unsetRender(settings: DzRenderSettings): any;
    removeSet(brickSet: DzBrickSet): any;
    brickIDChanged(brickId: number): any;
    setMaterialName(materialName: QString): any;
    setNeedsTangentSpaceParams(needsTangentSpaceParams: boolean): any;
    allowsAutoBake(): boolean;
    convertDefaultMaterial(material: DzDefaultMaterial): any;
    convertUberIrayMaterial(material: DzMaterial): any;
    setNeedsPtexParams(needsPtexParams: boolean): any;
}

declare class IDzBrickUser { }
declare class QUuid { }
declare class DzBrickSet { }

/** Lo comente para en un futuro si se necesita completarlo */
declare class DzShaderBrick extends DzElement {

    ///** Properties */

    ///** Methods */
    //addBoolParameter(path: QString, argName: QString, label: QString): DzPropertyParam;
    //addColorParameter(path: QString, argName: QString, label: QString): DzPropertyParam;
    //addConnection(paramIndex: number, brick: DzShaderBrick, brickParamIndex: number): void;
    //addDefaultInParameter(type: number, argName: QString, label: QString, defaultVal: QString): DzDefaultInParam;
    //addEnumParameter(path: QString, argName: QString, label: QString): DzEnumParam;
    //addEnumPropertyParameter(path: QString, argName: QString, label: QString): DzPropertyParam;
    //addFileParameter(path: QString, argName: QString, label: QString): DzPropertyParam;
    //addFloatParameter(path: QString, argName: QString, label: QString): DzPropertyParam;
    //addImageParameter(path: QString, argName: QString, label: QString): DzPropertyParam;
    //addIntParameter(path: QString, argName: QString, label: QString): DzPropertyParam;
    //addMatrixParameter(path: QString, argName: QString, label: QString): DzMatrixParam;
    //addOutParameter(type: number, argName: QString, label: QString, isAov: boolean): DzOutParam;
    //addParamInternal(param: DzBrickParam): boolean;
    //addParameter(param: DzBrickParam): boolean;
    //addRequiredParam(paramClass: number, name: QString): void;
    //addScopedParam(paramType: number, name: QString, scope: number): void;
    //addStringParameter(Path: QString, argName: QString, label: QString): DzPropertyParam;
    //addVec3Parameter(path: QString, type: number, argName: QString, label: QString): DzVec3Param;
    //brickActionListChanged(): void;
    //brickIDChanged(oldID: number): void;
    //brickIsChild(brick: DzShaderBrick): boolean;
    //brickIsParent(brick: DzShaderBrick): boolean;
    //brickRemoved(self: DzShaderBrick): void;
    //brickTitleChanged(title: QString): void;
    //changeParamIndex(param: DzBrickParam, newIndex: number): void;
    //childConnectionChanged(): void;
    //connectionsChanged(): void;
    //connectionsChanged(self: DzShaderBrick): void;
    //connectionsChanged(): void;
    //connectionsChanged(self: DzShaderBrick): void;
    //deleteParam(index: number): boolean;
    //deleteParam(param: DzBrickParam): boolean;
    //deleteParam(index: number): boolean;
    //deleteParam(param: DzBrickParam): boolean;
    //deleteParamByLabel(name: QString): boolean;
    //deleteParamByName(name: QString): boolean;
    //findParameterByArg(arg: QString): DzBrickParam;
    //findParameterByLabel(label: QString): DzBrickParam;
    //findParameterByName(name: QString): DzBrickParam;
    //findParameterByProperty(prop: DzProperty): DzBrickParam;
    //findParameterIndex(param: DzBrickParam): number;
    //findParameterIndexByArg(arg: QString): number;
    //generateFilesFinished(): void;
    //generateFilesStarted(): void;
    //getAllDefaultScopedParams(params: QSet<ScopedParam>): void;
    //getAllDefaultScopedParams(varNames: QString[], types: QList<int>): void;
    //getAllDefaultScopedParams(params: QSet<ScopedParam>): void;
    //getAllDefaultScopedParams(varNames: QString[], types: QList<int>): void;
    //getBrickActionList(): QString[];
    //getBrickClass(): QString;
    //getBrickClassFactory(name: QString): any;
    //getBrickClassShaderCode(): DzShaderString;
    //getBrickID(): number;
    //getBrickList(includeSelf: boolean, recursive: boolean, unique: boolean, list: DzShaderBrick[]): void;
    //getBrickSettings(): DzSettings;
    //getBrickVersion(): number;
    //getChildBrickList(includeSelf: boolean, recursive: boolean, unique: boolean): QObject[];
    //getClassTokenDefaultValue(i: number): QString;
    //getClassTokenName(i: number): QString;
    //getClassTokenType(i: number): DzBrickParam::ParamType;
    //getDefaultCategory(): QString;
    //getDescription(): QString;
    //getFullRequiredScopedVariableLists(varNames: QString[], types: QList<int>, recurse: boolean): void;
    //getFullScopedVariableLists(scope: number): QString[];
    //getFullScopedVariableLists(varNames: QString[], types: QList<int>, scope: number): void;
    //getFullScopedVariableLists(params: QSet<ScopedParam>, scope: number): void;
    //getFullScopedVariableLists(scope: number): QString[];
    //getFullScopedVariableLists(varNames: QString[], types: QList<int>, scope: number): void;
    //getFullScopedVariableLists(params: QSet<ScopedParam>, scope: number): void;
    //getFullScopedVariableLists(scope: number): QString[];
    //getFullScopedVariableLists(varNames: QString[], types: QList<int>, scope: number): void;
    //getFullScopedVariableLists(params: QSet<ScopedParam>, scope: number): void;
    //getFullScopedVariableListsTypes(scope: number): QVariant[];
    //getIncludePaths(): QString[];
    //getInstanceToken(i: number): QString;
    //getInstanceTokenDefaultValue(i: number): QString;
    //getInstanceTokenType(i: number): DzBrickParam::ParamType;
    //getNeedsTangentSpaceParams(): boolean;
    //getNewToken(): QString;
    //getNumOfClassTokens(): number;
    //getNumOfInstanceTokensNeeded(): number;
    //getNumParameters(): number;
    //getNumRequiredScopedParams(): number;
    //getNumRequiredScopedParamsInternal(): number;
    //getNumScopedParams(): number;
    //getNumScopedParamsInternal(): number;
    //getNumScopesNeeded(): number;
    //getOptionsFrameClassName(): QString;
    //getParameter(index: number): DzBrickParam;
    //getParameterIterator(): DzBrickParamIterator;
    //getParentBrickList(recurse: boolean): QObject[];
    //getParentBrickList(list: DzShaderBrick[], recurse: boolean): void;
    //getParentBrickList(recurse: boolean): QObject[];
    //getParentBrickList(list: DzShaderBrick[], recurse: boolean): void;
    //getPreferredName(): QString;
    //getRequiredScopedParam(i: number): QString;
    //getRequiredScopedParamInternal(i: number): QString;
    //getRequiredScopedParamType(i: number): DzBrickParam::ParamType;
    //getRequiredScopedParamTypeInternal(i: number): DzBrickParam::ParamType;
    //getScopedParamIndex(name: QString): number;
    //getScopedParamName(i: number): QString;
    //getScopedParamNameInternal(i: number): QString;
    //getScopedParamScope(i: number): number;
    //getScopedParamType(i: number): DzBrickParam::ParamType;
    //getScopedParamTypeInternal(i: number): DzBrickParam::ParamType;
    //getScopedShaderCodeCall(varCallNames: QString[]): DzShaderString;
    //getShaderCodeCall(varCallNames: QString[]): DzShaderString;
    //getVarName(argName: QString, varCallNames: QString[], varArgNames: QString[]): QString;
    //giveParamPropertiesToOwner(): void;
    //insertParameter(index: number, param: DzBrickParam): boolean;
    //invalidateFiles(): void;
    //isActiveInBakePass(): boolean;
    //isActiveInBeautyPass(): boolean;
    //isActiveInShadowPass(): boolean;
    //isOnlyInShadowPass(): boolean;
    //isRootConnected(): boolean;
    //isScopedBrick(): boolean;
    //lightType(): DzBrickSet::LightType;
    //ownParamProperties(): void;
    //paramAdded(thisBrick: DzShaderBrick): void;
    //paramRemoved(thisBrick: DzShaderBrick): void;
    //postAttributeSet(): void;
    //providesParam(paramName: QString, paramType: number, scope: number, recurse: boolean): boolean;
    //providesParams(brick: DzShaderBrick, param: DzBrickParam): boolean;
    //removeConnection(paramIndex: number, brick: DzShaderBrick, brickParamIndex: number, conIndex: number): void;
    //removeRequiredParam(name: QString): void;
    //removeScopedParam(name: QString): void;
    //setBrickID(int: number): void;
    //setBrickRenderSettings(set: DzBrickSet, renderer: DzRenderer): void;
    //setBrickVersion(ver: number): void;
    //setGlobalBrickRenderSettings(set: DzBrickSet, renderer: DzRenderer): void;
    //shouldSeperateLocalProperties(): boolean;
    //type(): DzBrickSet::ShaderType;
    //usesLocalShaderSpace(): boolean;
    //writeConnectionsAsIndexes(): boolean;
    //writesOwnParameters(): boolean;
}


// TODO Checar toda la clase, no estoy seguro de todos los tipos.
declare class QColor extends QObject {
    red: number;
    blue: number;
    green: number;
    alpha: number;
    hue: number;
    name: string;
    rgb: number;
    saturation: number;
    value: number;
    dark() : QColor;
    light() : QColor;
    setRgb(r: number, g: number, b: number);
    setRgb(r: number, g: number, b: number, a: number);
    setRgb(value: number);
}

declare class Color extends QColor {
    constructor();
    constructor(r: number, g: number, b: number);
    constructor(color: Color);
    constructor(colorName : QString)
}

declare class QImage extends QPaintDevice {

    /** Properties */
    alphaBuffer: boolean; // false
    depth: number; // 32
    dotsPerMeterX: number; // 2834
    dotsPerMeterY: number; // 2834
    height: number; // 4000
    numColors: number; // 0
    //offset: object; // [object Object]
    //size: object; // [object Object]
    width: number; // 4000

    /** Methods */
    constructor(filename: string);
    //QImage(obj: QSize, depth: number, numColors: number, bitOrder: Endian): QT3_SUPPORT_CONSTRUCTOR;
    //QImage(width: number, height: number, depth: number, numColors: number, bitOrder: Endian): QT3_SUPPORT_CONSTRUCTOR;
    //QImage(data: uchar, w: number, h: number, depth: number, colortable: QRgb, numColors: number, bitOrder: Endian): QT3_SUPPORT_CONSTRUCTOR;
    //QImage(data: uchar, w: number, h: number, depth: number, pbl: number, colortable: QRgb, numColors: number, bitOrder: Endian): QT3_SUPPORT_CONSTRUCTOR;
    //QImage(obj: QSize, depth: number, numColors: number, bitOrder: Endian): QT3_SUPPORT_CONSTRUCTOR;
    //QImage(width: number, height: number, depth: number, numColors: number, bitOrder: Endian): QT3_SUPPORT_CONSTRUCTOR;
    //QImage(data: uchar, w: number, h: number, depth: number, colortable: QRgb, numColors: number, bitOrder: Endian): QT3_SUPPORT_CONSTRUCTOR;
    //QImage(data: uchar, w: number, h: number, depth: number, pbl: number, colortable: QRgb, numColors: number, bitOrder: Endian): QT3_SUPPORT_CONSTRUCTOR;
    //QImage(obj: QSize, depth: number, numColors: number, bitOrder: Endian): QT3_SUPPORT_CONSTRUCTOR;
    //QImage(width: number, height: number, depth: number, numColors: number, bitOrder: Endian): QT3_SUPPORT_CONSTRUCTOR;
    //QImage(data: uchar, w: number, h: number, depth: number, colortable: QRgb, numColors: number, bitOrder: Endian): QT3_SUPPORT_CONSTRUCTOR;
    //QImage(data: uchar, w: number, h: number, depth: number, pbl: number, colortable: QRgb, numColors: number, bitOrder: Endian): QT3_SUPPORT_CONSTRUCTOR;
    //QImage(obj: QSize, depth: number, numColors: number, bitOrder: Endian): QT3_SUPPORT_CONSTRUCTOR;
    //QImage(width: number, height: number, depth: number, numColors: number, bitOrder: Endian): QT3_SUPPORT_CONSTRUCTOR;
    //QImage(data: uchar, w: number, h: number, depth: number, colortable: QRgb, numColors: number, bitOrder: Endian): QT3_SUPPORT_CONSTRUCTOR;
    //QImage(data: uchar, w: number, h: number, depth: number, pbl: number, colortable: QRgb, numColors: number, bitOrder: Endian): QT3_SUPPORT_CONSTRUCTOR;
    //QImage(obj: QSize, depth: number, numColors: number, bitOrder: Endian): QT3_SUPPORT_CONSTRUCTOR;
    //QImage(width: number, height: number, depth: number, numColors: number, bitOrder: Endian): QT3_SUPPORT_CONSTRUCTOR;
    //QImage(data: uchar, w: number, h: number, depth: number, colortable: QRgb, numColors: number, bitOrder: Endian): QT3_SUPPORT_CONSTRUCTOR;
    //QImage(data: uchar, w: number, h: number, depth: number, pbl: number, colortable: QRgb, numColors: number, bitOrder: Endian): QT3_SUPPORT_CONSTRUCTOR;
    //QImage(obj: QSize, depth: number, numColors: number, bitOrder: Endian): QT3_SUPPORT_CONSTRUCTOR;
    //QImage(width: number, height: number, depth: number, numColors: number, bitOrder: Endian): QT3_SUPPORT_CONSTRUCTOR;
    //QImage(data: uchar, w: number, h: number, depth: number, colortable: QRgb, numColors: number, bitOrder: Endian): QT3_SUPPORT_CONSTRUCTOR;
    //QImage(data: uchar, w: number, h: number, depth: number, pbl: number, colortable: QRgb, numColors: number, bitOrder: Endian): QT3_SUPPORT_CONSTRUCTOR;
    //QImage(obj: QSize, depth: number, numColors: number, bitOrder: Endian): QT3_SUPPORT_CONSTRUCTOR;
    //QImage(width: number, height: number, depth: number, numColors: number, bitOrder: Endian): QT3_SUPPORT_CONSTRUCTOR;
    //QImage(data: uchar, w: number, h: number, depth: number, colortable: QRgb, numColors: number, bitOrder: Endian): QT3_SUPPORT_CONSTRUCTOR;
    //QImage(data: uchar, w: number, h: number, depth: number, pbl: number, colortable: QRgb, numColors: number, bitOrder: Endian): QT3_SUPPORT_CONSTRUCTOR;
    //QImage(obj: QSize, depth: number, numColors: number, bitOrder: Endian): QT3_SUPPORT_CONSTRUCTOR;
    //QImage(width: number, height: number, depth: number, numColors: number, bitOrder: Endian): QT3_SUPPORT_CONSTRUCTOR;
    //QImage(data: uchar, w: number, h: number, depth: number, colortable: QRgb, numColors: number, bitOrder: Endian): QT3_SUPPORT_CONSTRUCTOR;
    //QImage(data: uchar, w: number, h: number, depth: number, pbl: number, colortable: QRgb, numColors: number, bitOrder: Endian): QT3_SUPPORT_CONSTRUCTOR;
    allGray(): boolean;
    alphaChannel(): QImage;
    bitPlaneCount(): number;
    bits(): any;
    //bits(): uchar;
    byteCount(): number;
    bytesPerLine(): number;
    cacheKey(): number;
    color(i: number): QRgb;
    colorCount(): number;
    //colorTable(): QVector<QRgb>;
    constBits(): any;
    constScanLine(obj: number): any;
    //convertBitOrder(obj: Endian): QT3_SUPPORT;
    convertDepth(obj: number, flags: number): QT3_SUPPORT;
    convertDepthWithPalette(obj: number, p: QRgb, pc: number, flags: number): QT3_SUPPORT;
    copy(rect: QRect): QImage;
    //create(obj: QSize, depth: number, numColors: number, bitOrder: Endian): QT3_SUPPORT;
    //create(width: number, height: number, depth: number, numColors: number, bitOrder: Endian): QT3_SUPPORT;
    createAlphaMask(flags: number): QImage;
    createHeuristicMask(clipTight: boolean): QImage;
    createMaskFromColor(color: QRgb, mode: number): QImage;
    //depth(): number;
    detach(): void;
    //dotsPerMeterX(): number;
    //dotsPerMeterY(): number;
    fill(color: number): void;
    fill(color: QColor): void;
    fill(pixel: number): void;
    fill(color: number): void;
    fill(color: QColor): void;
    fill(pixel: number): void;
    fill(color: number): void;
    fill(color: QColor): void;
    fill(pixel: number): void;
    format(): number;
    //fromData(data: uchar, size: number, format: string): QImage;
    hasAlphaBuffer(): QT3_SUPPORT;
    hasAlphaChannel(): boolean;
    //height(): number;
    invertPixels(InvertRgb: number): void;
    isDetached(): boolean;
    isGrayscale(): boolean;
    isNull(): boolean;
    jumpTable(): QT3_SUPPORT;
    jumpTable(): QT3_SUPPORT;
    jumpTable(): QT3_SUPPORT;
    jumpTable(): QT3_SUPPORT;
    load(device: QIODevice, format: string): boolean;
    load(fileName: QString, format: string): boolean;
    load(device: QIODevice, format: string): boolean;
    load(fileName: QString, format: string): boolean;
    //loadFromData(buf: uchar, len: number, format: string): boolean;
    mirrored(horizontally: boolean, vertically: boolean): QImage;
    numBytes(): QT_DEPRECATED;
    //numColors(): QT_DEPRECATED;
    //offset(): QPoint;
    pixel(pt: QPoint): QRgb;
    pixel(x: number, y: number): QRgb;
    pixel(pt: QPoint): QRgb;
    pixel(x: number, y: number): QRgb;
    pixelIndex(pt: QPoint): number;
    pixelIndex(x: number, y: number): number;
    pixelIndex(pt: QPoint): number;
    pixelIndex(x: number, y: number): number;
    qt_image_colortable(image: QImage): any;
    qt_image_id(image: QImage): any;
    rect(): QRect;
    rgbSwapped(): QImage;
    save(device: QIODevice, format: string, quality: number): boolean;
    save(fileName: QString, format: string, quality: number): boolean;
    scaled(s: QSize, aspectMode: number): QImage;
    scaledToHeight(h: number, mode: number): QImage;
    scaledToWidth(w: number, mode: number): QImage;
    scanLine(obj: number): any;
    //scanLine(obj: number): uchar;
    serialNumber(): number;
    setAlphaBuffer(obj: boolean): QT3_SUPPORT;
    setAlphaChannel(alphaChannel: QImage): void;
    setColor(i: number, c: QRgb): void;
    setColorCount(obj: number): void;
    //setColorTable(colors: QVector<QRgb>): void;
    setDotsPerMeterX(obj: number): void;
    setDotsPerMeterY(obj: number): void;
    //setNumColors(obj: number): QT_DEPRECATED;
    setOffset(obj: QPoint): void;
    setPixel(pt: QPoint, index_or_rgb: number): void;
    setPixel(x: number, y: number, index_or_rgb: number): void;
    //setText(key: string, lang: string, obj: QString): QT_DEPRECATED;
    setText(key: QString, value: QString): void;
    //size(): QSize;
    systemBitOrder(): QT3_SUPPORT;
    text(key: QString): QString;
    //text(obj: QImageTextKeyLang): QT_DEPRECATED;
    //text(key: string, lang: string): QT_DEPRECATED;
    textKeys(): QString[];
    textLanguages(): QT_DEPRECATED;
    textList(): QT_DEPRECATED;
    //transformed(matrix: QMatrix, mode: number): QImage;
    //transformed(matrix: QTransform, mode: number): QImage;
    //transformed(matrix: QMatrix, mode: number): QImage;
    //transformed(matrix: QTransform, mode: number): QImage;
    //trueMatrix(obj: QMatrix, w: number, h: number): QMatrix;
    //trueMatrix(obj: QTransform, w: number, h: number): QTransform;
    //trueMatrix(obj: QMatrix, w: number, h: number): QMatrix;
    //trueMatrix(obj: QTransform, w: number, h: number): QTransform;
    valid(pt: QPoint): boolean;
    valid(x: number, y: number): boolean;
    valid(pt: QPoint): boolean;
    valid(x: number, y: number): boolean;
    //width(): number;
    canRead(): boolean;
    currentImageNumber(): number;
    currentImageRect(): QRect;
    device(): QIODevice;
    format(): QByteArray;
    imageCount(): number;
    jumpToImage(imageNumber: number): boolean;
    jumpToNextImage(): boolean;
    loopCount(): number;
    //name(): QByteArray;
    nextImageDelay(): number;
    //option(option: ImageOption): QVariant;
    read(image: QImage): boolean;
    setDevice(device: QIODevice): void;
    setFormat(format: QByteArray): void;
    setFormat(format: QByteArray): void;
    setFormat(format: QByteArray): void;
    setFormat(format: QByteArray): void;
    //setOption(option: ImageOption, value: QVariant): void;
    //supportsOption(option: ImageOption): boolean;
    write(image: QImage): boolean;
    //create(device: QIODevice, format: QByteArray): QImageIOHandler;
    //capabilities(device: QIODevice, format: QByteArray): Capabilities;
    //create(device: QIODevice, format: QByteArray): QImageIOHandler;
    keys(): QString[];
    autoDetectImageFormat(): boolean;
    backgroundColor(): QColor;
    canRead(): boolean;
    clipRect(): QRect;
    currentImageNumber(): number;
    currentImageRect(): QRect;
    decideFormatFromContent(): boolean;
    device(): QIODevice;
    //error(): ImageReaderError;
    errorString(): QString;
    fileName(): QString;
    format(): QByteArray;
    imageCount(): number;
    imageFormat(): number;
    imageFormat(device: QIODevice): QByteArray;
    imageFormat(fileName: QString): QByteArray;
    imageFormat(): number;
    imageFormat(device: QIODevice): QByteArray;
    imageFormat(fileName: QString): QByteArray;
    imageFormat(): number;
    imageFormat(device: QIODevice): QByteArray;
    imageFormat(fileName: QString): QByteArray;
    jumpToImage(imageNumber: number): boolean;
    jumpToNextImage(): boolean;
    loopCount(): number;
    nextImageDelay(): number;
    quality(): number;
    read(): QImage;
    read(image: QImage): boolean;
    read(): QImage;
    read(image: QImage): boolean;
    scaledClipRect(): QRect;
    scaledSize(): QSize;
    setAutoDetectImageFormat(enabled: boolean): void;
    setBackgroundColor(color: QColor): void;
    setClipRect(rect: QRect): void;
    setDecideFormatFromContent(ignored: boolean): void;
    setDevice(device: QIODevice): void;
    setFileName(fileName: QString): void;
    setFormat(format: QByteArray): void;
    setQuality(quality: number): void;
    setScaledClipRect(rect: QRect): void;
    setScaledSize(size: QSize): void;
    //size(): QSize;
    //supportedImageFormats(): QList<QByteArray>;
    supportsAnimation(): boolean;
    //supportsOption(option: QImageIOHandler::ImageOption): boolean;
    text(key: QString): QString;
    textKeys(): QString[];
    canWrite(): boolean;
    compression(): number;
    description(): QString;
    device(): QIODevice;
    //error(): ImageWriterError;
    errorString(): QString;
    fileName(): QString;
    format(): QByteArray;
    gamma(): number;
    quality(): number;
    setCompression(compression: number): void;
    setDescription(description: QString): void;
    setDevice(device: QIODevice): void;
    setFileName(fileName: QString): void;
    setFormat(format: QByteArray): void;
    setGamma(gamma: number): void;
    setQuality(quality: number): void;
    setText(key: QString, text: QString): void;
    //supportedImageFormats(): QList<QByteArray>;
    //supportsOption(option: QImageIOHandler::ImageOption): boolean;
    write(image: QImage): boolean;
}

declare class DzTimer extends QObject {
    active: boolean;	// false
    interval: number;	// 0
    name: string;	// 
    objectName: string;	// 
    singleShot: boolean;	// false
    changeInterval(p0: number): any;
    className(): any;
    deleteLater(): any;
    destroyed(): void;
    destroyed(p0: QObject): void;
    inherits(): any;
    start(): any;
    start(p0: number): any;
    start(p0: number, p1: boolean): any;
    stop(): any;
    timeout(): any;
}

declare class DzGeometryShellNode extends DzNode {

    static className(): QString;
    /** Properties */

    /** Methods */
    addFacetGroupVisiblity(name: QString): void;
    addMaterialGroupVisiblity(name: QString): void;
    createProperties(): void;
    getIcon(): QIcon;
    getPixmap(state: number): QPixmap;
    getShellNodeControl(): DzNodeProperty;
    removeFacetGroupVisiblity(name: QString): void;
    removeMaterialGroupVisiblity(name: QString): void;
    setShellVisiblity(newMesh: DzFacetMesh): void;
    setUpFaceGroups(mesh: DzFacetMesh): void;
    setUpMaterials(mesh: DzFacetMesh): void;
    targetNodeChanged(): void;
    tgtCacheInvalidated(): void;
}

declare class DzNodeProperty extends DzProperty {
    static className(): QString;
    /** Properties */

    /** Methods */
    aboutToChange(): void;
    exclude(node: DzNode): void;
    getDefaultValue(): DzNode;
    getKeyValue(i: number): DzNode;
    getValue(tm: DzTime): DzNode;
    getValue(): DzNode;
    getValue(tm: DzTime): DzNode;
    getValue(): DzNode;
    isExcluded(node: DzNode): boolean;
    setDefaultValue(val: DzNode): void;
    setKeyValue(which: number, val: DzNode): void;
    setValue(val: DzNode): void;
    setValue(tm: DzTime, val: DzNode): void;
    setValue(val: DzNode): void;
    setValue(tm: DzTime, val: DzNode): void;
    changeNode(node: DzNode): void;
    clearObject(): void;
    isExcluded(node: DzNode): boolean;
    propertyChangeNotify(): void;
    setValue(val: DzNode): void;
    showEvent(e: QShowEvent): void;
    updateNodeList(): void;
    updateValue(): void;
}

declare class DzFacetMesh { }

declare class DzModifier extends DzElement {

    /** Properties */

    /** Methods */
    aboutToBeRemoved(): void;
    added(): void;
    apply(geom: DzVertexMesh, node: DzNode): DzError;
    applyInverse(geom: DzVertexMesh, node: DzNode): DzError;
    currentValueChanged(): void;
    isWeightMapModifier(): boolean;
    removed(): void;
    setIsWeightMapModifier(onoff: boolean): void;
    getMorph(): DzMorph;
    getParentUri(morph: DzMorph): QString;
    setOverrideParentPath(parentPath: QString): void;
    writeModifierInstances(io: any): boolean;
}

declare class DzPushModifier extends DzModifier {

    /** Properties */

    /** Methods */
    assetModified(): void;
    assetWasSaved(): void;
    createProperties(): void;
    getAssetType(): any;
    getValueChannel(): DzFloatProperty;
    toQObject(): QObject;
}

declare class DzMorph { }

declare class DzStringHelper extends QObject {
    objectName: string; // 
    stripSpaces(value: QString): QString;
    changeSpecialChars(value: QString, special: QString): any;
    prependCharsIfNumeric(value: QString, chars: QString): any;
    stripCRLF(value: QString): any;
    getWords(QString, bool): any;
    getMatches(value: QString, search: QString): any;
    indentString(value: QString, indent: number): any;
    replaceAll(value: QString, search: QString, replace: QString): any;
    name: string; // 
    //className(): string;
}

declare class DzArrayHelper extends QObject  {
    objectName: string; // 
    addToArray<T>(list: T[], item: T): T[];
    isInArray<T>(list: T[], item: T): boolean;
    isInArrayByName<T>(list: T[], name: QString): number;
    name: string; // 
    //className(): any;
}

declare class DzPresetHelper {
    static Ignore: number; // 0
    static Replace: number; // 1

    objectName: string; // 
    clearFoundImages(): any;
    setShouldAskForImages(bool): any;
    getShouldAskForImages(): boolean;
    setTargetElement(element: DzElement): any;
    getTargetElement(): DzElement;
    collectMaterials(node: DzNode, flag: boolean, selected: boolean, root: boolean): any;
    getCollectedMaterials(): DzMaterial[];
    getCollectedMaterialShapes(): DzShape[];
    clearCollectedMaterials(): any;
    checkAnimationRange(int): any;
    getImage(QString, float, int): any;
    getImage(QString, float): any;
    getImage(QString): any;
    getMapSetting(): number;
    setMapSetting(MapSetting): any;
    //setMorphProperty(QString, QVariantList): any;
    setColorProperty(name: QString, list: QVariant[], value?: QString): any;
    //setColorProperty(QString, QVariantList): any;
    setNumericProperty(name: QString, list: QVariant[], value?: QString): any;
    //setNumericProperty(QString, QVariantList): any;
    setNumericPropertyWithAttributes(name: QString, flag: boolean, d: number, d2: number, list: QVariant[], value?: QString): any;
    //setNumericPropertyWithAttributes(QString, bool, double, double, QVariantList): any;
    setPropertyWithString(property: QString, value: QString): any;
    //setTransformProperty(QString, QVariantList): any;
    //setTransformPropertyWithAttributes(QString, bool, double, double, QVariantList, QString): any;
    //setTransformPropertyWithAttributes(QString, bool, double, double, QVariantList): any;
    getStartTime(): DzTime;
    setStartTime(DzTime): any;
    getDoMorphs(): boolean;
    setDoMorphs(bool): any;
    getXRot(): boolean;
    getYRot(): boolean;
    getZRot(): boolean;
    getXPos(): boolean;
    getYPos(): boolean;
    getZPos(): boolean;
    getGScl(): boolean;
    getXScl(): boolean;
    getYScl(): boolean;
    getZScl(): boolean;
    getLimits(): boolean;
    getTransforms(): boolean;
    setXRot(bool): any;
    setYRot(bool): any;
    setZRot(bool): any;
    setXPos(bool): any;
    setYPos(bool): any;
    setZPos(bool): any;
    setGScl(bool): any;
    setXScl(bool): any;
    setYScl(bool): any;
    setZScl(bool): any;
    setLimits(bool): any;
    setTransforms(bool): any;
    name: string; // 
    className(): any;
}

declare class DzSettingsHelper extends QObject {
    objectName: string; // 
    set(toolName: QString, name: QString, value: QVariant): any;
    get(toolName: QString, name: QString, value: QVariant): any;
    hasValue(toolName: QString, name: QString): any;
    name: string; // 
}

declare class DzSceneHelper extends QObject {
    objectName: string; // 
    setUniqueName(node: DzNode, name: QString): any;
    getUniqueMorphName(node: DzNode, name: QString): any;
    collectNodes(flag1: boolean, flag2: boolean, flag3: boolean): any;
    findPropertyInGroup(name: QString, group: DzPropertyGroup, flag1: boolean, flag2: boolean, flag3?: boolean): any;
    findControlProperty(name: QString, node: DzNode, flag1: boolean, flag2?: boolean): any;
    createMorph(node: DzNode, name: QString, list: QVariant[], flag: boolean): any;
    createLink(node: DzNode, s1: QString, node2: DzNode, s2: QString, n: number, d1: number, d2: number): any;
    isMorphProperty(property: DzProperty): any;
    isNodeProperty(property: DzProperty): any;
    isModifierProperty(property: DzProperty): any;
    isTransformProperty(property: DzProperty): any;
    isDFormModProperty(property: DzProperty): any;
    isLegacyJointProperty(property: DzProperty): any;
    isLegacyProperty(property: DzProperty): any;
    isAtDefaultValue(property: DzProperty): any;
    getLabel(property: DzProperty): any;
    getInternalName(property: DzProperty): any;
    getNodeName(property: DzProperty): any;
    getNodeType(property: DzProperty): any;
    getNode(property: DzProperty): any;
    getDisplayNode(property: DzProperty): any;
    getErcController(property1: DzProperty, property2: DzProperty): any;
    getMin(property: DzProperty): any;
    getMax(property: DzProperty): any;
    getPropertiesOnElement(element: DzElement): any;
    getPropertiesOnNode(property: DzProperty, flag?: boolean): any;
    getPropertiesOnNode(node: DzNode, flag?: boolean): any;

    getPrivatePropertiesOnNode(property: DzProperty): any;
    getPrivatePropertiesOnNode(node: DzNode): any;
    getRegionPropertiesOnNode(node: DzNode): any;
    getRegionPropertiesRecurse(region: DzGeometryRegion): any;
    findPropertyOnNode(name: QString, node: DzNode): any;
    findPropertyOnNodeByLabel(label: QString, node: DzNode): any;
    findPropertyOnNodeByInternalName(name: QString, node: DzNode): any;
    helperCanRemove(property: DzProperty): any;
    helperRemoveProperty(property: DzProperty): any;
    setMin(property: DzProperty,float): any;
    setMax(property: DzProperty,float): any;
    setMinMax(property: DzProperty, min: number, max: number): any;
    setInternalName(property: DzProperty, name: QString): any;
    setPropertyPath(property: DzProperty, path: QString): any;
    name: string; // 
}

declare class QPixmap {
    objectName: string; // 
    depth: number; // 32
    height: number; // 16
    rect: QRect; // [object Object]
    size: QSize; // [object Object]
    width: number; // 16

    constructor(file: QString);
    fill(QColor): any;
    isNull(): boolean;
    load(file: QString): any;
    loadFromData(bytearray: QByteArray, name: QString): any;
    resize(width: number, height: number): any;
    resize(size: QSize): any;
    save(name: QString): any;
    name: string; // 
    className(): any;
}

declare type Pixmap = QPixmap;

declare class DzSettings extends QObject {
    setStringValue(name: QString, value: QString): ISignal;
    setIntValue(name: QString, value: number): ISignal;
    setBoolValue(name: QString, value: boolean): ISignal;
    setFloatValue(name: QString, value: number): ISignal;
    setSettingsValue(name: QString,settings: DzSettings): ISignal;
    setSettingsValue(name: QString): ISignal;
    removeValue(name: QString): ISignal;
    clear(): any;
    getStringValue(name: QString, QString): ISignal;
    getStringValue(QString): ISignal;
    getIntValue(QString, int): ISignal;
    getIntValue(QString): ISignal;
    getBoolValue(QString, bool): ISignal;
    getBoolValue(QString): ISignal;
    getFloatValue(QString, float): ISignal;
    getFloatValue(QString): ISignal;
    getSettingsValue(QString): ISignal;
    getSettingIndex(QString): ISignal;
    getNumValues(): any;
    hasKey(QString): ISignal;
    getKey(int): ISignal;
    getValueType(int): ISignal;
    getValue(int): ISignal;
    fromString(QString): ISignal;
    toString(): any;
    copySetting(name: QString, settings: DzSettings): ISignal;
    copySetting(index: number, settings: DzSettings): ISignal;
    replaceWithSettings(settings: DzSettings): ISignal;
    toScript(name: QString, script: DzScript, n: number, flag?: boolean): ISignal;

    StringValue: number; // 0
    IntValue: number; // 1
    BoolValue: number; // 2
    FloatValue: number; // 3
    SettingsValue: number; // 4
}

declare class DzLayout extends QObject {
    margin: number; // 0
    spacing: number; // -1
    autoAdd: boolean; // false

    getLayout(): DzLayout;
    addWidget(widget: DzWidget): void;
}

declare class DzGridLayout extends DzLayout {

    constructor(parent: DzWidget);
    constructor(parent: DzLayout);

    setRowStretch(row: number, stretch: number): ISignal;
    setColStretch(col: number, stretch: number): ISignal;
    setRowSpacing(row: number, minSize: number): ISignal;
    setColSpacing(col: number, minSize: number): ISignal;
    rowStretch(row: number): number;
    colStretch(col: number): number;
    rowSpacing(row: number): number;
    colSpacing(col: number): number;
    rowCount(): number;
    colCount(): number;
    addWidget(widget: DzWidget): void;
    addWidget(widget: DzWidget, row: number, col: number, rowSpan?: number, colSpan?: number): void;
    addMultiCellWidget(widget: DzWidget, fromRow: number, toRow: number, fromCol: number, toCol: number): void;
    addLayout(layout: DzLayout, row: number, col: number, rowSpan?: number, colSpan?: number): void;
    addMultiCellLayout(layout: DzLayout, fromRow: number, toRow: number, fromCol: number, toCol: number): void;
}

declare class DzBoxLayout extends DzLayout {
    direction: number; // 0
    addSpacing(spacing: number): ISignal;
    addStretch(stretch?: number): ISignal;
    addStrut(strut: number): ISignal;
    addWidget(widget: DzWidget): void;
    addWidget(widget: DzWidget, row: number): void;
    addLayout(layout: DzLayout, row?: number): void;

    static LeftToRight: number; // 0
    static RightToLeft: number; // 1
    static TopToBottom: number; // 2
    static BottomToTop: number; // 3
}

declare class DzHBoxLayout extends DzBoxLayout {
}

declare class DzVBoxLayout extends DzBoxLayout {
}

declare class DzImporter extends QObject { }

declare class DzObjImporter extends DzImporter {
    nameChanged(name: QString): any;
    makePersistent(): any;
    iskindof(kind: QString): any;
    getName(): QString;
    getDefaultOptions(settings: DzFileIOSettings): any;
    getOptions(settings: DzFileIOSettings, flag: boolean, name: QString): void;
    showOptions(): any;
    readFile(file: QString, settings?: DzFileIOSettings): any;
    setLoadFilter(filter: DzFileLoadFilter): any;
    getFileLoadFilter(): any;
    addNodetoFilter(node: DzNode): any;
    finishFilter(): any;
    recognize(value: QString): any;
    getNumExtensions(): any;
    getExtension(index: number): any;
    getDescription(): QString;
    readFile(file: QString, shape: DzShape, settings: DzFileIOSettings): any;
}

declare class DzAction extends QObject {
    description: string; // Provides LOD (Level of Detail) options with user defined Dynamic Settings.
    iconFile: string; // 
    actionGroup: string; // Scene Hierarchy
    defaultMenu: string; // DzHierarchyPane::Edit
    defaultMenus: any[]; // DzHierarchyPane::Edit
    defaultToolBar: string; // 
    defaultToolBars: QObject; // 
    defaultShortcut: string; //

    trigger(): void;
    hover(): void;
    setChecked(onOff: boolean): void;
    toggle(): void;
    setEnabled(onOff: boolean): void;
    setDisabled(onOff: boolean): void;
    setOn(onOff: boolean): void;
    setOff(onOff: boolean): void;

    enabled: boolean | ((onOff: boolean) => boolean); // true


    //TODO por la definicion de una signal
    changed(): void;
    triggered(checked?: boolean): any;
    hovered(): any;
    toggled(checked?: boolean): any;
    activated(n?: number): any;
}

declare class DzFacetShape {}
declare class DzGeometryImporter { }

declare class DzDynLodAction extends DzAction {

    checkable: boolean; // false
    checked: boolean; // false

    icon: QObject; // QVariant(QIcon)
    text: string; // Add Level of Detail...
    iconText: string; // Add Level of Detail
    toolTip: string; // Add Level of Detail
    statusTip: string; // 
    whatsThis: string; // 
    font: QObject; // [object Object]
    shortcut: QObject; // 
    shortcutContext: number; // 2
    autoRepeat: boolean; // true
    visible: boolean; // true
    menuRole: number; // 1
    softKeyRole: number; // 0
    iconVisibleInMenu: boolean; // true
    priority: number; // 128

    preExecute(): any;

    executeAction(): any;
    toggleAction(bool): any;
    addLodLevel(node: DzNode, s1: QString, s2: QString, importer?: DzGeometryImporter, settings?: DzFileIOSettings): any;
    addLodLevel(node: DzNode, facetShape: DzFacetShape, s: QString): any;

    static NoRole: number; // 0
    static TextHeuristicRole: number; // 1
    static ApplicationSpecificRole: number; // 2
    static AboutQtRole: number; // 3
    static AboutRole: number; // 4
    static PreferencesRole: number; // 5
    static QuitRole: number; // 6
    static NoSoftKey: number; // 0
    static PositiveSoftKey: number; // 1
    static NegativeSoftKey: number; // 2
    static SelectSoftKey: number; // 3
    static LowPriority: number; // 0
    static NormalPriority: number; // 128
    static HighPriority: number; // 256
}

declare class DzFigure extends DzNode {
}
declare class DzSkeleton extends DzNode { }

declare class DzTexture  extends DzRefCountedItem {
    static CustomTexture: number;	// 65536
    static LatLong: number;	// 1
    static LightProbe: number;	// 2
    static Standard: number;	// 0

    assetModified(): void;
    assetWasSaved(): void;
    drawnDataChanged(): void;
    getFilename(): string;
    getGLAlphaTextureSize(): any;
    getGLTextureSize(): any;
    getGamma(): any;
    getImageData(p0: QImage): any;
    getOriginalImageSize(): any;
    getPreviewPixmap(p0: QSize): any;
    getPreviewPixmap(p0: number, p1: number): any;
    getTempFilename(): string;
    getTextureType(): any;
    inherits(): any;
    invalidate(): any;
    loadImageData(p0: QImage): any;
    refresh(): any;
    refreshSources(): any;
    setGamma(p0: number): any;
    setTextureToRefresh(): any;
    setTextureType(p0: number): any;
    tempFilenameChanged(p0: QString): void;
}

declare class DzImageTexture extends QObject {
    objectName: string; // Scott6_EyesD.jpg
    drawnDataChanged(): any;
    tempFilenameChanged(QString): any;
    refresh(): any;
    getFilename(): any;
    getTempFilename(): any;
    getGLTextureSize(): any;
    getGLAlphaTextureSize(): any;
    getOriginalImageSize(): any;
    //getPreviewPixmap(int, int): any;
    getPreviewPixmap(size: QSize): any;
    setGamma(float): any;
    getGamma(): any;
    getTextureType(): any;
    setTextureType(int): any;
    loadImageData(image: QImage): any;
    getImageData(image: QImage): any;
    invalidate(): any;
    refreshSources(): any;
    setTextureToRefresh(): any;
    assetModified(): any;
    assetWasSaved(): any;
    Standard: number; // 0
    LatLong: number; // 1
    LightProbe: number; // 2
    CustomTexture: number; // 65536
    name: string; // Scott6_EyesD.jpg
}

declare class DzLayeredTexture extends DzTexture {
    size: QSize;	// [object Object]
    aboutToInsertLayers(p0: number, p1: number): any;
    aboutToRemoveLayers(p0: number, p1: number): any;
    addLayer(p0: DzTextureLayer): any;
    beginEditing(): any;
    copyFrom(p0: DzLayeredTexture): any;
    createLayer(imageFile: QString): DzTextureLayer;
    endEditing(): any;
    findLayer(p0: DzTextureLayer): any;
    getLayer(p0: number): DzTextureLayer;
    getNumLayers(): number;
    getSourceDSI(): any;
    insertLayer(p0: number, p1: DzTextureLayer): any;
    layerListChanged(): void;
    layersInserted(p0: number, p1: number): void;
    layersRemoved(p0: number, p1: number): void;
    moveLayer(p0: number, p1: number): any;
    refeshLayeredTexture(): any;
    removeAllLayers(): any;
    removeLayer(p0: number): any;
    removeLayer(p0: DzTextureLayer): any;
    replaceLayer(p0: DzTextureLayer, p1: DzTextureLayer): any;
    sizeChanged(p0: QSize): void;
    takeLayer(p0: number): any;
}


declare class DzTextureLayer extends QObject {
    static BlendAdd: number;	// 1
    static BlendAlpha: number;	// 0
    static BlendMultiply: number;	// 3
    static BlendSubtract: number;	// 2
    static Rot180: number;	// 180
    static Rot270: number;	// 270
    static Rot90: number;	// 90
    static RotNone: number;	// 0

    blendMode: number;	// 0
    color: QObject;	// [object Object]
    enabled: boolean;	// true
    flippedHorizontal: boolean;	// false
    flippedVertical: boolean;	// false
    imageFile: string;	// D:/Documents/My DAZ3D Library/Runtime/textures/SilverCountess/Alessa/AlessaHead.jpg
    invert: boolean;	// false
    
    offset: QPoint;	// [object Object]
    opacity: number;	// 1
    rotation: number;	// 0
    xOffset: number;	// 0
    xScale: number;	// 1
    yOffset: number;	// 0
    yScale: number;	// 1

    aboutToChangeMask(p0: DzTextureMask, p1: DzTextureMask): any;
    blendModeChanged(p0: number): void;
    clearMask(): any;
    colorChanged(p0: QColor): void;
    copyFrom(p0: DzTextureComponent): any;
    createMask(p0: QString): any;
    dataChanged(): void;
    enabledChanged(p0: boolean): void;
    flip(p0: boolean, p1: boolean): any;
    flippedHorizontalChanged(p0: boolean): void;
    flippedVerticalChanged(p0: boolean): void;
    getMask(): any;
    imageChanged(p0: QString): void;
    invertedChanged(p0: boolean): void;
    labelChanged(p0: QString): void;
    loadImageData(p0: QImage): any;
    maskChanged(p0: DzTextureMask, p1: DzTextureMask): void;
    needsImageRefresh(): void;
    needsRefresh(): void;
    offsetChanged(p0: QPoint): void;
    opacityChanged(p0: number): void;
    rotationChanged(p0: number): void;
    scaleChanged(p0: number, p1: number): void;
    setMask(p0: DzTextureMask): any;
}

declare class QSize extends QObject {
    height: number;	// 4096
    width: number;	// 4096
    translate(): any;

    constructor(w: number, h: number);
    constructor(srcSize: QSize);
}

declare class QPoint extends QObject {
    x: number;	// 0
    y: number;	// 0

    constructor(x: number, y: number);
    constructor(srcPt: QPoint);
}

declare class DzBasicDialog extends DzDialog {
    addButton(p0: DzButton): any;
    addButton(p0: DzButton, p1: number): any;
    addLayout(p0: DzLayout): any;
    addLayout(p0: DzLayout, p1: number): any;
    addSpacing(p0: number): any;
    addStretch(): any;
    addStretch(p0: number): any;
    addWidget(p0: DzWidget): any;
    addWidget(p0: DzWidget, p1: number): any;
    applyClicked(): void;
    enableApplyButton(p0: boolean): any;
    enableCancelButton(p0: boolean): any;
    enableHelpButton(p0: boolean): any;
    setAcceptButtonEnabled(p0: boolean): void;
    setAcceptButtonText(p0: QString): any;
    setApplyButtonEnabled(p0: boolean): void;
    setApplyButtonText(p0: QString): any;
    setCancelButtonEnabled(p0: boolean): void;
    setCancelButtonText(p0: QString): any;
    setHelpButtonEnabled(p0: boolean): void;
    showAcceptButton(p0: boolean): any;
    showApplyButton(p0: boolean): any;
    showCancelButton(p0: boolean): any;
    showHelpButton(p0: boolean): any;
}

declare class DzScrollArea extends DzWidget {
    alignment: number;	// 0
    widgetResizable: boolean;	// true
    ensureVisible(p0: number, p1: number): any;
    ensureVisible(p0: number, p1: number, p2: number): any;
    ensureVisible(p0: number, p1: number, p2: number, p3: number): any;
    ensureWidgetVisible(p0: DzWidget): any;
    ensureWidgetVisible(p0: DzWidget, p1: number): any;
    ensureWidgetVisible(p0: DzWidget, p1: number, p2: number): any;
    hideFrame(): any;
    setHorizontalScrollbarDisplay(p0: boolean): any;
    setVerticalScrollbarDisplay(p0: boolean): any;
    setWidget(p0: DzWidget): any;
}

declare class QFont extends QObject {
    bold: boolean;	// false
    family: string;	// Arial
    italic: boolean;	// false
    pixelSize: number;	// 250
    pointSize: number;	// -1
    strikeout: boolean;	// false
    underline: boolean;	// false
}

declare class Font extends QFont {
}

declare class DzProcess extends QObject {
    static DupStderr: number;	// 8
    static Stderr: number;	// 4
    static Stdin: number;	// 1
    static Stdout: number;	// 2

    arguments: QObject;	// 
    communication: number;	// 7
    exitStatus: number;	// 0
    name: string;	// 
    normalExit: boolean;	// false
    objectName: string;	// 
    running: boolean;	// false
    workingDirectory: string;	// C:/daz3d

    canReadLineStderr(): any;
    canReadLineStdout(): any;
    className(): any;
    closeStdin(): any;
    deleteLater(): any;
    destroyed(): void;
    destroyed(p0: QObject): void;
    inherits(): any;
    kill(): any;
    launch(p0: QString): any;
    launch(p0: QString, p1: QString[]): any;
    launchFinished(): void;
    processExited(): void;
    readLineStderr(): any;
    readLineStdout(): any;
    readStderr(): any;
    readStdout(): any;
    readyReadStderr(): any;
    readyReadStdout(): any;
    start(): any;
    start(p0: QString[]): any;
    tryTerminate(): any;
    writeToStdin(p0: QString): any;
    wroteToStdin(): any;
}

declare class DzProductAssetContainer { // aka  DzTSharedPointerScriptWrapper
    static User: number;	// 0
    static UserAndVendor: number;	// 2
    static Vendor: number;	// 1
    artistNames: QObject;	// 
    artists: string;	// 
    canCopyContainers: boolean;	// false
    canDeleteContainer: boolean;	// false
    canInsertSubContainer: boolean;	// false
    canModifyAssets: boolean;	// false
    canRenameContainer: boolean;	// false
    dateInstalled: QObject;	// Invalid Date
    dateLastUpdated: QObject;	// Invalid Date
    datePurchased: QObject;	// Invalid Date
    dateReleased: QObject;	// Invalid Date
    description: string;	// 
    groupId: number;	// 0
    guid: string;	// 
    hasCloudMetadata: boolean;	// false
    hidden: boolean;	// false
    icon: QObject;	// QVariant(QIcon)
    id: any;	// undefined
    isCloudInstallable: boolean;	// false
    isCloudInstalled: boolean;	// false
    isCloudOperationInProgress: boolean;	// false
    isCloudOwned: boolean;	// false
    isDownloadingFromCloud: boolean;	// false
    isInstalled: boolean;	// false
    isLocalUser: boolean;	// false
    isMetadataValid: boolean;	// false
    isVendor: boolean;	// false
    name: string;	// 
    needsCloudInstall: boolean;	// false
    needsCloudUpdate: boolean;	// false
    objectName: string;	// 
    platinumPrice: number;	// 0
    price: number;	// 0
    salePrice: number;	// 0
    store: string;	// 
    title: string;	// 
    token: string;	// 
    tooltip: string;	// 
    useCount: number;	// 0

    assetIconChanged(p0: DzAsset): void;
    assetRenamed(p0: DzAsset, p1: number): void;
    beginAssetAdd(p0: number, p1: number): any;
    beginAssetRemove(p0: number, p1: number): any;
    beginChildContainerAdd(p0: DzAbstractAssetContainer, p1: number, p2: number): any;
    beginChildContainerRemove(p0: DzAbstractAssetContainer, p1: number, p2: number): any;
    childContainerAboutToBeRemoved(p0: DzAbstractAssetContainerPtr): void;
    childContainerRemoved(p0: DzAbstractAssetContainerPtr): void;
    className(): any;
    clearGroup(): any;
    clearRebuildableAssets(): any;
    createNewChildContainer(p0: QString): any;
    deleteLater(): any;
    destroyed(): void;
    destroyed(p0: QObject): void;
    endAssetAdd(): any;
    endAssetRemove(): any;
    endChildContainerAdd(): any;
    endChildContainerRemove(): any;
    getAsset(p0: number): any;
    getAssets(p0?: DzAsset[]): any;
    getChildContainer(p0: number): any;
    getChildContainers(): any;
    getChildContainers(p0: DzAbstractAssetContainer[]): any;
    getChildIconSize(): any;
    getContainerName(): any;
    getDefualtStoreIconSize(): any;
    getIDPath(): any;
    getIconForStandardCategory(p0: DzProductAssetContainer): any;
    getIconSize(): any;
    /** TODO: search ProductMetadataType values */
    getMetadataXML(productMetadataType?: number): any;
    getMetadataXMLPath(p0?: boolean): any;
    getNumAssets(): any;
    getNumChildContainers(): any;
    getOwner(): any;
    getProductTable(): any;
    getSmallChildIconSize(): any;
    getSupportFile(): any;
    getSupportFiles(): any;
    getSupportFiles(p0: boolean): any;
    getURL(): any;
    hasAsset(p0: DzAsset): any;
    hasChildContainers(): any;
    iconChanged(p0: DzAbstractAssetContainer): void;
    ignoreAssetConflicts(): any;
    inherits(): any;
    initChildren(): any;
    insertAsset(p0: DzAsset): any;
    insertChildContainer(p0: DzAbstractAssetContainer): any;
    installFromCloud(): any;
    isFileSystemBased(): void;
    isGroup(p0: number): any;
    loadDefaultIcon(): any;
    loadProductImage(): any;
    moveFromParent(p0: DzAbstractAssetContainer): any;
    pushMetadata(): any;
    removeAsset(p0: DzAsset): any;
    removeAssetCausesDelete(): any;
    removeAssetOnCut(p0: DzAbstractAssetContainer): any;
    removeChildContainer(p0: DzAbstractAssetContainer): any;
    rename(p0: QString): any;
    renameAsset(p0: DzAsset, p1: QString): any;
    renameChildContainer(p0: DzAbstractAssetContainer, p1: QString): any;
    setContainerName(p0: QString): any;
    setIconImage(p0: QImage): any;
    setIconSize(p0: QSize): any;
    setURL(p0: QString): any;
    uninstall(): any;
    uninstallFromCloud(): any;
    update(): any;
    updateAssets(): any;
    updateChildren(): any;
    updateFromCloud(): any;
}

declare class DzFileInfo extends QObject {
    constructor(path: QString)
    name: string;	// 
    objectName: string;	// 
    absFileName(): any;
    baseName(): any;
    className(): any;
    created(): void;
    deleteLater(): any;
    destroyed(): void;
    destroyed(p0: QObject): void;
    exists(): any;
    extension(): any;
    fileName(): any;
    inherits(): any;
    isHidden(): any;
    isReadable(): any;
    isWritable(): any;
    lastModified(): void;
    lastRead(): any;
    path(): any;
    remove(): any;
    size(): any;
    sizeStr(): any;
}