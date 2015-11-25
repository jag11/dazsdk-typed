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

declare class QObject {

    /* Properties */
    objectName: string;
    name: string;

    /* Methods */
    destroyed(obj?: QObject): void;
    deleteLater(): void;
    inherits(string: QString): boolean;
    className(): string;
}

declare class QWidget extends QPaintDevice {

    /* Statics */
    color0: number; // 0
    color1: number; // 1
    black: number; // 2
    white: number; // 3
    darkGray: number; // 4
    gray: number; // 5
    lightGray: number; // 6
    red: number; // 7
    green: number; // 8
    blue: number; // 9
    cyan: number; // 10
    magenta: number; // 11
    yellow: number; // 12
    darkRed: number; // 13
    darkGreen: number; // 14
    darkBlue: number; // 15
    darkCyan: number; // 16
    darkMagenta: number; // 17
    darkYellow: number; // 18
    transparent: number; // 19
    NoModifier: number; // 0
    ShiftModifier: number; // 33554432
    ControlModifier: number; // 67108864
    AltModifier: number; // 134217728
    MetaModifier: number; // 268435456
    KeypadModifier: number; // 536870912
    GroupSwitchModifier: number; // 1073741824
    KeyboardModifierMask: number; // -33554432
    NoButton: number; // 0
    LeftButton: number; // 1
    RightButton: number; // 2
    MidButton: number; // 4
    MiddleButton: number; // 4
    XButton1: number; // 8
    XButton2: number; // 16
    MouseButtonMask: number; // 255
    Horizontal: number; // 1
    Vertical: number; // 2
    NoFocus: number; // 0
    TabFocus: number; // 1
    ClickFocus: number; // 2
    StrongFocus: number; // 11
    WheelFocus: number; // 15
    AscendingOrder: number; // 0
    DescendingOrder: number; // 1
    AlignLeft: number; // 1
    AlignLeading: number; // 1
    AlignRight: number; // 2
    AlignTrailing: number; // 2
    AlignHCenter: number; // 4
    AlignJustify: number; // 8
    AlignAbsolute: number; // 16
    AlignHorizontal_Mask: number; // 31
    AlignTop: number; // 32
    AlignBottom: number; // 64
    AlignVCenter: number; // 128
    AlignVertical_Mask: number; // 224
    AlignCenter: number; // 132
    ElideLeft: number; // 0
    ElideRight: number; // 1
    ElideMiddle: number; // 2
    ElideNone: number; // 3
    Widget: number; // 0
    Window: number; // 1
    Dialog: number; // 3
    Sheet: number; // 5
    Drawer: number; // 7
    Popup: number; // 9
    Tool: number; // 11
    ToolTip: number; // 13
    SplashScreen: number; // 15
    Desktop: number; // 17
    SubWindow: number; // 18
    WindowType_Mask: number; // 255
    MSWindowsFixedSizeDialogHint: number; // 256
    MSWindowsOwnDC: number; // 512
    X11BypassWindowManagerHint: number; // 1024
    FramelessWindowHint: number; // 2048
    WindowTitleHint: number; // 4096
    WindowSystemMenuHint: number; // 8192
    WindowMinimizeButtonHint: number; // 16384
    WindowMaximizeButtonHint: number; // 32768
    WindowMinMaxButtonsHint: number; // 49152
    WindowContextHelpButtonHint: number; // 65536
    WindowShadeButtonHint: number; // 131072
    WindowStaysOnTopHint: number; // 262144
    CustomizeWindowHint: number; // 33554432
    WindowStaysOnBottomHint: number; // 67108864
    WindowCloseButtonHint: number; // 134217728
    MacWindowToolBarButtonHint: number; // 268435456
    BypassGraphicsProxyWidget: number; // 536870912
    WindowOkButtonHint: number; // 524288
    WindowCancelButtonHint: number; // 1048576
    WindowSoftkeysVisibleHint: number; // 1073741824
    WindowSoftkeysRespondHint: number; // -2147483648
    WMouseNoMask: number; // 524288
    WDestructiveClose: number; // 1048576
    WStaticContents: number; // 2097152
    WGroupLeader: number; // 4194304
    WShowModal: number; // 8388608
    WNoMousePropagation: number; // 16777216
    WType_TopLevel: number; // 1
    WType_Dialog: number; // 3
    WType_Popup: number; // 9
    WType_Desktop: number; // 17
    WType_Mask: number; // 255
    WStyle_Customize: number; // 0
    WStyle_NormalBorder: number; // 0
    WStyle_DialogBorder: number; // 256
    WStyle_NoBorder: number; // 2048
    WStyle_Title: number; // 4096
    WStyle_SysMenu: number; // 8192
    WStyle_Minimize: number; // 16384
    WStyle_Maximize: number; // 32768
    WStyle_MinMax: number; // 49152
    WStyle_Tool: number; // 11
    WStyle_StaysOnTop: number; // 262144
    WStyle_ContextHelp: number; // 65536
    WPaintDesktop: number; // 0
    WPaintClever: number; // 0
    WX11BypassWM: number; // 1024
    WWinOwnDC: number; // 512
    WMacSheet: number; // 5
    WMacDrawer: number; // 7
    WStyle_Splash: number; // 15
    WNoAutoErase: number; // 0
    WRepaintNoErase: number; // 0
    WNorthWestGravity: number; // 2097152
    WType_Modal: number; // 8388611
    WStyle_Dialog: number; // 3
    WStyle_NoBorderEx: number; // 2048
    WResizeNoErase: number; // 0
    WMacNoSheet: number; // 0
    WindowNoState: number; // 0
    WindowMinimized: number; // 1
    WindowMaximized: number; // 2
    WindowFullScreen: number; // 4
    WindowActive: number; // 8
    WA_Disabled: number; // 0
    WA_UnderMouse: number; // 1
    WA_MouseTracking: number; // 2
    WA_ContentsPropagated: number; // 3
    WA_OpaquePaintEvent: number; // 4
    WA_NoBackground: number; // 4
    WA_StaticContents: number; // 5
    WA_LaidOut: number; // 7
    WA_PaintOnScreen: number; // 8
    WA_NoSystemBackground: number; // 9
    WA_UpdatesDisabled: number; // 10
    WA_Mapped: number; // 11
    WA_MacNoClickThrough: number; // 12
    WA_PaintOutsidePaintEvent: number; // 13
    WA_InputMethodEnabled: number; // 14
    WA_WState_Visible: number; // 15
    WA_WState_Hidden: number; // 16
    WA_ForceDisabled: number; // 32
    WA_KeyCompression: number; // 33
    WA_PendingMoveEvent: number; // 34
    WA_PendingResizeEvent: number; // 35
    WA_SetPalette: number; // 36
    WA_SetFont: number; // 37
    WA_SetCursor: number; // 38
    WA_NoChildEventsFromChildren: number; // 39
    WA_WindowModified: number; // 41
    WA_Resized: number; // 42
    WA_Moved: number; // 43
    WA_PendingUpdate: number; // 44
    WA_InvalidSize: number; // 45
    WA_MacBrushedMetal: number; // 46
    WA_MacMetalStyle: number; // 46
    WA_CustomWhatsThis: number; // 47
    WA_LayoutOnEntireRect: number; // 48
    WA_OutsideWSRange: number; // 49
    WA_GrabbedShortcut: number; // 50
    WA_TransparentForMouseEvents: number; // 51
    WA_PaintUnclipped: number; // 52
    WA_SetWindowIcon: number; // 53
    WA_NoMouseReplay: number; // 54
    WA_DeleteOnClose: number; // 55
    WA_RightToLeft: number; // 56
    WA_SetLayoutDirection: number; // 57
    WA_NoChildEventsForParent: number; // 58
    WA_ForceUpdatesDisabled: number; // 59
    WA_WState_Created: number; // 60
    WA_WState_CompressKeys: number; // 61
    WA_WState_InPaintEvent: number; // 62
    WA_WState_Reparented: number; // 63
    WA_WState_ConfigPending: number; // 64
    WA_WState_Polished: number; // 66
    WA_WState_DND: number; // 67
    WA_WState_OwnSizePolicy: number; // 68
    WA_WState_ExplicitShowHide: number; // 69
    WA_ShowModal: number; // 70
    WA_MouseNoMask: number; // 71
    WA_GroupLeader: number; // 72
    WA_NoMousePropagation: number; // 73
    WA_Hover: number; // 74
    WA_InputMethodTransparent: number; // 75
    WA_QuitOnClose: number; // 76
    WA_KeyboardFocusChange: number; // 77
    WA_AcceptDrops: number; // 78
    WA_DropSiteRegistered: number; // 79
    WA_ForceAcceptDrops: number; // 79
    WA_WindowPropagation: number; // 80
    WA_NoX11EventCompression: number; // 81
    WA_TintedBackground: number; // 82
    WA_X11OpenGLOverlay: number; // 83
    WA_AlwaysShowToolTips: number; // 84
    WA_MacOpaqueSizeGrip: number; // 85
    WA_SetStyle: number; // 86
    WA_SetLocale: number; // 87
    WA_MacShowFocusRect: number; // 88
    WA_MacNormalSize: number; // 89
    WA_MacSmallSize: number; // 90
    WA_MacMiniSize: number; // 91
    WA_LayoutUsesWidgetRect: number; // 92
    WA_StyledBackground: number; // 93
    WA_MSWindowsUseDirect3D: number; // 94
    WA_CanHostQMdiSubWindowTitleBar: number; // 95
    WA_MacAlwaysShowToolWindow: number; // 96
    WA_StyleSheet: number; // 97
    WA_ShowWithoutActivating: number; // 98
    WA_X11BypassTransientForHint: number; // 99
    WA_NativeWindow: number; // 100
    WA_DontCreateNativeAncestors: number; // 101
    WA_MacVariableSize: number; // 102
    WA_DontShowOnScreen: number; // 103
    WA_X11NetWmWindowTypeDesktop: number; // 104
    WA_X11NetWmWindowTypeDock: number; // 105
    WA_X11NetWmWindowTypeToolBar: number; // 106
    WA_X11NetWmWindowTypeMenu: number; // 107
    WA_X11NetWmWindowTypeUtility: number; // 108
    WA_X11NetWmWindowTypeSplash: number; // 109
    WA_X11NetWmWindowTypeDialog: number; // 110
    WA_X11NetWmWindowTypeDropDownMenu: number; // 111
    WA_X11NetWmWindowTypePopupMenu: number; // 112
    WA_X11NetWmWindowTypeToolTip: number; // 113
    WA_X11NetWmWindowTypeNotification: number; // 114
    WA_X11NetWmWindowTypeCombo: number; // 115
    WA_X11NetWmWindowTypeDND: number; // 116
    WA_MacFrameworkScaled: number; // 117
    WA_SetWindowModality: number; // 118
    WA_WState_WindowOpacitySet: number; // 119
    WA_TranslucentBackground: number; // 120
    WA_AcceptTouchEvents: number; // 121
    WA_WState_AcceptedTouchBeginEvent: number; // 122
    WA_TouchPadAcceptSingleTouchEvents: number; // 123
    WA_MergeSoftkeys: number; // 124
    WA_MergeSoftkeysRecursively: number; // 125
    WA_LockPortraitOrientation: number; // 128
    WA_LockLandscapeOrientation: number; // 129
    WA_AutoOrientation: number; // 130
    WA_X11DoNotAcceptFocus: number; // 132
    WA_SymbianNoSystemRotation: number; // 133
    WA_MacNoShadow: number; // 134
    WA_AttributeCount: number; // 135
    AA_ImmediateWidgetCreation: number; // 0
    AA_MSWindowsUseDirect3DByDefault: number; // 1
    AA_DontShowIconsInMenus: number; // 2
    AA_NativeWindows: number; // 3
    AA_DontCreateNativeWidgetSiblings: number; // 4
    AA_MacPluginApplication: number; // 5
    AA_DontUseNativeMenuBar: number; // 6
    AA_MacDontSwapCtrlAndMeta: number; // 7
    AA_S60DontConstructApplicationPanes: number; // 8
    AA_S60DisablePartialScreenInputMode: number; // 9
    AA_X11InitThreads: number; // 10
    AA_CaptureMultimediaKeys: number; // 11
    AA_AttributeCount: number; // 12
    ColorMode_Mask: number; // 3
    AutoColor: number; // 0
    ColorOnly: number; // 3
    MonoOnly: number; // 2
    AlphaDither_Mask: number; // 12
    ThresholdAlphaDither: number; // 0
    OrderedAlphaDither: number; // 4
    DiffuseAlphaDither: number; // 8
    NoAlpha: number; // 12
    Dither_Mask: number; // 48
    DiffuseDither: number; // 0
    OrderedDither: number; // 16
    ThresholdDither: number; // 32
    DitherMode_Mask: number; // 192
    AutoDither: number; // 0
    PreferDither: number; // 64
    AvoidDither: number; // 128
    NoOpaqueDetection: number; // 256
    NoFormatConversion: number; // 512
    TransparentMode: number; // 0
    OpaqueMode: number; // 1
    Key_Escape: number; // 16777216
    Key_Tab: number; // 16777217
    Key_Backtab: number; // 16777218
    Key_Backspace: number; // 16777219
    Key_Return: number; // 16777220
    Key_Enter: number; // 16777221
    Key_Insert: number; // 16777222
    Key_Delete: number; // 16777223
    Key_Pause: number; // 16777224
    Key_Print: number; // 16777225
    Key_SysReq: number; // 16777226
    Key_Clear: number; // 16777227
    Key_Home: number; // 16777232
    Key_End: number; // 16777233
    Key_Left: number; // 16777234
    Key_Up: number; // 16777235
    Key_Right: number; // 16777236
    Key_Down: number; // 16777237
    Key_PageUp: number; // 16777238
    Key_PageDown: number; // 16777239
    Key_Shift: number; // 16777248
    Key_Control: number; // 16777249
    Key_Meta: number; // 16777250
    Key_Alt: number; // 16777251
    Key_CapsLock: number; // 16777252
    Key_NumLock: number; // 16777253
    Key_ScrollLock: number; // 16777254
    Key_F1: number; // 16777264
    Key_F2: number; // 16777265
    Key_F3: number; // 16777266
    Key_F4: number; // 16777267
    Key_F5: number; // 16777268
    Key_F6: number; // 16777269
    Key_F7: number; // 16777270
    Key_F8: number; // 16777271
    Key_F9: number; // 16777272
    Key_F10: number; // 16777273
    Key_F11: number; // 16777274
    Key_F12: number; // 16777275
    Key_F13: number; // 16777276
    Key_F14: number; // 16777277
    Key_F15: number; // 16777278
    Key_F16: number; // 16777279
    Key_F17: number; // 16777280
    Key_F18: number; // 16777281
    Key_F19: number; // 16777282
    Key_F20: number; // 16777283
    Key_F21: number; // 16777284
    Key_F22: number; // 16777285
    Key_F23: number; // 16777286
    Key_F24: number; // 16777287
    Key_F25: number; // 16777288
    Key_F26: number; // 16777289
    Key_F27: number; // 16777290
    Key_F28: number; // 16777291
    Key_F29: number; // 16777292
    Key_F30: number; // 16777293
    Key_F31: number; // 16777294
    Key_F32: number; // 16777295
    Key_F33: number; // 16777296
    Key_F34: number; // 16777297
    Key_F35: number; // 16777298
    Key_Super_L: number; // 16777299
    Key_Super_R: number; // 16777300
    Key_Menu: number; // 16777301
    Key_Hyper_L: number; // 16777302
    Key_Hyper_R: number; // 16777303
    Key_Help: number; // 16777304
    Key_Direction_L: number; // 16777305
    Key_Direction_R: number; // 16777312
    Key_Space: number; // 32
    Key_Any: number; // 32
    Key_Exclam: number; // 33
    Key_QuoteDbl: number; // 34
    Key_NumberSign: number; // 35
    Key_Dollar: number; // 36
    Key_Percent: number; // 37
    Key_Ampersand: number; // 38
    Key_Apostrophe: number; // 39
    Key_ParenLeft: number; // 40
    Key_ParenRight: number; // 41
    Key_Asterisk: number; // 42
    Key_Plus: number; // 43
    Key_Comma: number; // 44
    Key_Minus: number; // 45
    Key_Period: number; // 46
    Key_Slash: number; // 47
    Key_0: number; // 48
    Key_1: number; // 49
    Key_2: number; // 50
    Key_3: number; // 51
    Key_4: number; // 52
    Key_5: number; // 53
    Key_6: number; // 54
    Key_7: number; // 55
    Key_8: number; // 56
    Key_9: number; // 57
    Key_Colon: number; // 58
    Key_Semicolon: number; // 59
    Key_Less: number; // 60
    Key_Equal: number; // 61
    Key_Greater: number; // 62
    Key_Question: number; // 63
    Key_At: number; // 64
    Key_A: number; // 65
    Key_B: number; // 66
    Key_C: number; // 67
    Key_D: number; // 68
    Key_E: number; // 69
    Key_F: number; // 70
    Key_G: number; // 71
    Key_H: number; // 72
    Key_I: number; // 73
    Key_J: number; // 74
    Key_K: number; // 75
    Key_L: number; // 76
    Key_M: number; // 77
    Key_N: number; // 78
    Key_O: number; // 79
    Key_P: number; // 80
    Key_Q: number; // 81
    Key_R: number; // 82
    Key_S: number; // 83
    Key_T: number; // 84
    Key_U: number; // 85
    Key_V: number; // 86
    Key_W: number; // 87
    Key_X: number; // 88
    Key_Y: number; // 89
    Key_Z: number; // 90
    Key_BracketLeft: number; // 91
    Key_Backslash: number; // 92
    Key_BracketRight: number; // 93
    Key_AsciiCircum: number; // 94
    Key_Underscore: number; // 95
    Key_QuoteLeft: number; // 96
    Key_BraceLeft: number; // 123
    Key_Bar: number; // 124
    Key_BraceRight: number; // 125
    Key_AsciiTilde: number; // 126
    Key_nobreakspace: number; // 160
    Key_exclamdown: number; // 161
    Key_cent: number; // 162
    Key_sterling: number; // 163
    Key_currency: number; // 164
    Key_yen: number; // 165
    Key_brokenbar: number; // 166
    Key_section: number; // 167
    Key_diaeresis: number; // 168
    Key_copyright: number; // 169
    Key_ordfeminine: number; // 170
    Key_guillemotleft: number; // 171
    Key_notsign: number; // 172
    Key_hyphen: number; // 173
    Key_registered: number; // 174
    Key_macron: number; // 175
    Key_degree: number; // 176
    Key_plusminus: number; // 177
    Key_twosuperior: number; // 178
    Key_threesuperior: number; // 179
    Key_acute: number; // 180
    Key_mu: number; // 181
    Key_paragraph: number; // 182
    Key_periodcentered: number; // 183
    Key_cedilla: number; // 184
    Key_onesuperior: number; // 185
    Key_masculine: number; // 186
    Key_guillemotright: number; // 187
    Key_onequarter: number; // 188
    Key_onehalf: number; // 189
    Key_threequarters: number; // 190
    Key_questiondown: number; // 191
    Key_Agrave: number; // 192
    Key_Aacute: number; // 193
    Key_Acircumflex: number; // 194
    Key_Atilde: number; // 195
    Key_Adiaeresis: number; // 196
    Key_Aring: number; // 197
    Key_AE: number; // 198
    Key_Ccedilla: number; // 199
    Key_Egrave: number; // 200
    Key_Eacute: number; // 201
    Key_Ecircumflex: number; // 202
    Key_Ediaeresis: number; // 203
    Key_Igrave: number; // 204
    Key_Iacute: number; // 205
    Key_Icircumflex: number; // 206
    Key_Idiaeresis: number; // 207
    Key_ETH: number; // 208
    Key_Ntilde: number; // 209
    Key_Ograve: number; // 210
    Key_Oacute: number; // 211
    Key_Ocircumflex: number; // 212
    Key_Otilde: number; // 213
    Key_Odiaeresis: number; // 214
    Key_multiply: number; // 215
    Key_Ooblique: number; // 216
    Key_Ugrave: number; // 217
    Key_Uacute: number; // 218
    Key_Ucircumflex: number; // 219
    Key_Udiaeresis: number; // 220
    Key_Yacute: number; // 221
    Key_THORN: number; // 222
    Key_ssharp: number; // 223
    Key_division: number; // 247
    Key_ydiaeresis: number; // 255
    Key_AltGr: number; // 16781571
    Key_Multi_key: number; // 16781600
    Key_Codeinput: number; // 16781623
    Key_SingleCandidate: number; // 16781628
    Key_MultipleCandidate: number; // 16781629
    Key_PreviousCandidate: number; // 16781630
    Key_Mode_switch: number; // 16781694
    Key_Kanji: number; // 16781601
    Key_Muhenkan: number; // 16781602
    Key_Henkan: number; // 16781603
    Key_Romaji: number; // 16781604
    Key_Hiragana: number; // 16781605
    Key_Katakana: number; // 16781606
    Key_Hiragana_Katakana: number; // 16781607
    Key_Zenkaku: number; // 16781608
    Key_Hankaku: number; // 16781609
    Key_Zenkaku_Hankaku: number; // 16781610
    Key_Touroku: number; // 16781611
    Key_Massyo: number; // 16781612
    Key_Kana_Lock: number; // 16781613
    Key_Kana_Shift: number; // 16781614
    Key_Eisu_Shift: number; // 16781615
    Key_Eisu_toggle: number; // 16781616
    Key_Hangul: number; // 16781617
    Key_Hangul_Start: number; // 16781618
    Key_Hangul_End: number; // 16781619
    Key_Hangul_Hanja: number; // 16781620
    Key_Hangul_Jamo: number; // 16781621
    Key_Hangul_Romaja: number; // 16781622
    Key_Hangul_Jeonja: number; // 16781624
    Key_Hangul_Banja: number; // 16781625
    Key_Hangul_PreHanja: number; // 16781626
    Key_Hangul_PostHanja: number; // 16781627
    Key_Hangul_Special: number; // 16781631
    Key_Dead_Grave: number; // 16781904
    Key_Dead_Acute: number; // 16781905
    Key_Dead_Circumflex: number; // 16781906
    Key_Dead_Tilde: number; // 16781907
    Key_Dead_Macron: number; // 16781908
    Key_Dead_Breve: number; // 16781909
    Key_Dead_Abovedot: number; // 16781910
    Key_Dead_Diaeresis: number; // 16781911
    Key_Dead_Abovering: number; // 16781912
    Key_Dead_Doubleacute: number; // 16781913
    Key_Dead_Caron: number; // 16781914
    Key_Dead_Cedilla: number; // 16781915
    Key_Dead_Ogonek: number; // 16781916
    Key_Dead_Iota: number; // 16781917
    Key_Dead_Voiced_Sound: number; // 16781918
    Key_Dead_Semivoiced_Sound: number; // 16781919
    Key_Dead_Belowdot: number; // 16781920
    Key_Dead_Hook: number; // 16781921
    Key_Dead_Horn: number; // 16781922
    Key_Back: number; // 16777313
    Key_Forward: number; // 16777314
    Key_Stop: number; // 16777315
    Key_Refresh: number; // 16777316
    Key_VolumeDown: number; // 16777328
    Key_VolumeMute: number; // 16777329
    Key_VolumeUp: number; // 16777330
    Key_BassBoost: number; // 16777331
    Key_BassUp: number; // 16777332
    Key_BassDown: number; // 16777333
    Key_TrebleUp: number; // 16777334
    Key_TrebleDown: number; // 16777335
    Key_MediaPlay: number; // 16777344
    Key_MediaStop: number; // 16777345
    Key_MediaPrevious: number; // 16777346
    Key_MediaNext: number; // 16777347
    Key_MediaRecord: number; // 16777348
    Key_MediaPause: number; // 16777349
    Key_MediaTogglePlayPause: number; // 16777350
    Key_HomePage: number; // 16777360
    Key_Favorites: number; // 16777361
    Key_Search: number; // 16777362
    Key_Standby: number; // 16777363
    Key_OpenUrl: number; // 16777364
    Key_LaunchMail: number; // 16777376
    Key_LaunchMedia: number; // 16777377
    Key_Launch0: number; // 16777378
    Key_Launch1: number; // 16777379
    Key_Launch2: number; // 16777380
    Key_Launch3: number; // 16777381
    Key_Launch4: number; // 16777382
    Key_Launch5: number; // 16777383
    Key_Launch6: number; // 16777384
    Key_Launch7: number; // 16777385
    Key_Launch8: number; // 16777386
    Key_Launch9: number; // 16777387
    Key_LaunchA: number; // 16777388
    Key_LaunchB: number; // 16777389
    Key_LaunchC: number; // 16777390
    Key_LaunchD: number; // 16777391
    Key_LaunchE: number; // 16777392
    Key_LaunchF: number; // 16777393
    Key_MonBrightnessUp: number; // 16777394
    Key_MonBrightnessDown: number; // 16777395
    Key_KeyboardLightOnOff: number; // 16777396
    Key_KeyboardBrightnessUp: number; // 16777397
    Key_KeyboardBrightnessDown: number; // 16777398
    Key_PowerOff: number; // 16777399
    Key_WakeUp: number; // 16777400
    Key_Eject: number; // 16777401
    Key_ScreenSaver: number; // 16777402
    Key_WWW: number; // 16777403
    Key_Memo: number; // 16777404
    Key_LightBulb: number; // 16777405
    Key_Shop: number; // 16777406
    Key_History: number; // 16777407
    Key_AddFavorite: number; // 16777408
    Key_HotLinks: number; // 16777409
    Key_BrightnessAdjust: number; // 16777410
    Key_Finance: number; // 16777411
    Key_Community: number; // 16777412
    Key_AudioRewind: number; // 16777413
    Key_BackForward: number; // 16777414
    Key_ApplicationLeft: number; // 16777415
    Key_ApplicationRight: number; // 16777416
    Key_Book: number; // 16777417
    Key_CD: number; // 16777418
    Key_Calculator: number; // 16777419
    Key_ToDoList: number; // 16777420
    Key_ClearGrab: number; // 16777421
    Key_Close: number; // 16777422
    Key_Copy: number; // 16777423
    Key_Cut: number; // 16777424
    Key_Display: number; // 16777425
    Key_DOS: number; // 16777426
    Key_Documents: number; // 16777427
    Key_Excel: number; // 16777428
    Key_Explorer: number; // 16777429
    Key_Game: number; // 16777430
    Key_Go: number; // 16777431
    Key_iTouch: number; // 16777432
    Key_LogOff: number; // 16777433
    Key_Market: number; // 16777434
    Key_Meeting: number; // 16777435
    Key_MenuKB: number; // 16777436
    Key_MenuPB: number; // 16777437
    Key_MySites: number; // 16777438
    Key_News: number; // 16777439
    Key_OfficeHome: number; // 16777440
    Key_Option: number; // 16777441
    Key_Paste: number; // 16777442
    Key_Phone: number; // 16777443
    Key_Calendar: number; // 16777444
    Key_Reply: number; // 16777445
    Key_Reload: number; // 16777446
    Key_RotateWindows: number; // 16777447
    Key_RotationPB: number; // 16777448
    Key_RotationKB: number; // 16777449
    Key_Save: number; // 16777450
    Key_Send: number; // 16777451
    Key_Spell: number; // 16777452
    Key_SplitScreen: number; // 16777453
    Key_Support: number; // 16777454
    Key_TaskPane: number; // 16777455
    Key_Terminal: number; // 16777456
    Key_Tools: number; // 16777457
    Key_Travel: number; // 16777458
    Key_Video: number; // 16777459
    Key_Word: number; // 16777460
    Key_Xfer: number; // 16777461
    Key_ZoomIn: number; // 16777462
    Key_ZoomOut: number; // 16777463
    Key_Away: number; // 16777464
    Key_Messenger: number; // 16777465
    Key_WebCam: number; // 16777466
    Key_MailForward: number; // 16777467
    Key_Pictures: number; // 16777468
    Key_Music: number; // 16777469
    Key_Battery: number; // 16777470
    Key_Bluetooth: number; // 16777471
    Key_WLAN: number; // 16777472
    Key_UWB: number; // 16777473
    Key_AudioForward: number; // 16777474
    Key_AudioRepeat: number; // 16777475
    Key_AudioRandomPlay: number; // 16777476
    Key_Subtitle: number; // 16777477
    Key_AudioCycleTrack: number; // 16777478
    Key_Time: number; // 16777479
    Key_Hibernate: number; // 16777480
    Key_View: number; // 16777481
    Key_TopMenu: number; // 16777482
    Key_PowerDown: number; // 16777483
    Key_Suspend: number; // 16777484
    Key_ContrastAdjust: number; // 16777485
    Key_LaunchG: number; // 16777486
    Key_LaunchH: number; // 16777487
    Key_MediaLast: number; // 16842751
    Key_Select: number; // 16842752
    Key_Yes: number; // 16842753
    Key_No: number; // 16842754
    Key_Cancel: number; // 16908289
    Key_Printer: number; // 16908290
    Key_Execute: number; // 16908291
    Key_Sleep: number; // 16908292
    Key_Play: number; // 16908293
    Key_Zoom: number; // 16908294
    Key_Context1: number; // 17825792
    Key_Context2: number; // 17825793
    Key_Context3: number; // 17825794
    Key_Context4: number; // 17825795
    Key_Call: number; // 17825796
    Key_Hangup: number; // 17825797
    Key_Flip: number; // 17825798
    Key_ToggleCallHangup: number; // 17825799
    Key_VoiceDial: number; // 17825800
    Key_LastNumberRedial: number; // 17825801
    Key_Camera: number; // 17825824
    Key_CameraFocus: number; // 17825825
    Key_unknown: number; // 33554431
    NoArrow: number; // 0
    UpArrow: number; // 1
    DownArrow: number; // 2
    LeftArrow: number; // 3
    RightArrow: number; // 4
    NoPen: number; // 0
    SolidLine: number; // 1
    DashLine: number; // 2
    DotLine: number; // 3
    DashDotLine: number; // 4
    DashDotDotLine: number; // 5
    CustomDashLine: number; // 6
    FlatCap: number; // 0
    SquareCap: number; // 16
    RoundCap: number; // 32
    MPenCapStyle: number; // 48
    MiterJoin: number; // 0
    BevelJoin: number; // 64
    RoundJoin: number; // 128
    SvgMiterJoin: number; // 256
    MPenJoinStyle: number; // 448
    NoBrush: number; // 0
    SolidPattern: number; // 1
    Dense1Pattern: number; // 2
    Dense2Pattern: number; // 3
    Dense3Pattern: number; // 4
    Dense4Pattern: number; // 5
    Dense5Pattern: number; // 6
    Dense6Pattern: number; // 7
    Dense7Pattern: number; // 8
    HorPattern: number; // 9
    VerPattern: number; // 10
    CrossPattern: number; // 11
    BDiagPattern: number; // 12
    FDiagPattern: number; // 13
    DiagCrossPattern: number; // 14
    LinearGradientPattern: number; // 15
    RadialGradientPattern: number; // 16
    ConicalGradientPattern: number; // 17
    TexturePattern: number; // 24
    AbsoluteSize: number; // 0
    RelativeSize: number; // 1
    ArrowCursor: number; // 0
    UpArrowCursor: number; // 1
    CrossCursor: number; // 2
    WaitCursor: number; // 3
    IBeamCursor: number; // 4
    SizeVerCursor: number; // 5
    SizeHorCursor: number; // 6
    SizeBDiagCursor: number; // 7
    SizeFDiagCursor: number; // 8
    SizeAllCursor: number; // 9
    BlankCursor: number; // 10
    SplitVCursor: number; // 11
    SplitHCursor: number; // 12
    PointingHandCursor: number; // 13
    ForbiddenCursor: number; // 14
    WhatsThisCursor: number; // 15
    BusyCursor: number; // 16
    OpenHandCursor: number; // 17
    ClosedHandCursor: number; // 18
    DragCopyCursor: number; // 19
    DragMoveCursor: number; // 20
    DragLinkCursor: number; // 21
    LastCursor: number; // 21
    BitmapCursor: number; // 24
    CustomCursor: number; // 25
    PlainText: number; // 0
    RichText: number; // 1
    AutoText: number; // 2
    LogText: number; // 3
    IgnoreAspectRatio: number; // 0
    KeepAspectRatio: number; // 1
    KeepAspectRatioByExpanding: number; // 2
    LeftDockWidgetArea: number; // 1
    RightDockWidgetArea: number; // 2
    TopDockWidgetArea: number; // 4
    BottomDockWidgetArea: number; // 8
    DockWidgetArea_Mask: number; // 15
    AllDockWidgetAreas: number; // 15
    NoDockWidgetArea: number; // 0
    LeftToolBarArea: number; // 1
    RightToolBarArea: number; // 2
    TopToolBarArea: number; // 4
    BottomToolBarArea: number; // 8
    ToolBarArea_Mask: number; // 15
    AllToolBarAreas: number; // 15
    NoToolBarArea: number; // 0
    TextDate: number; // 0
    ISODate: number; // 1
    SystemLocaleDate: number; // 2
    LocalDate: number; // 2
    LocaleDate: number; // 3
    SystemLocaleShortDate: number; // 4
    SystemLocaleLongDate: number; // 5
    DefaultLocaleShortDate: number; // 6
    DefaultLocaleLongDate: number; // 7
    LocalTime: number; // 0
    UTC: number; // 1
    OffsetFromUTC: number; // 2
    Monday: number; // 1
    Tuesday: number; // 2
    Wednesday: number; // 3
    Thursday: number; // 4
    Friday: number; // 5
    Saturday: number; // 6
    Sunday: number; // 7
    ScrollBarAsNeeded: number; // 0
    ScrollBarAlwaysOff: number; // 1
    ScrollBarAlwaysOn: number; // 2
    FixedColor: number; // 0
    FixedPixmap: number; // 1
    NoBackground: number; // 2
    PaletteForeground: number; // 3
    PaletteButton: number; // 4
    PaletteLight: number; // 5
    PaletteMidlight: number; // 6
    PaletteDark: number; // 7
    PaletteMid: number; // 8
    PaletteText: number; // 9
    PaletteBrightText: number; // 10
    PaletteBase: number; // 11
    PaletteBackground: number; // 12
    PaletteShadow: number; // 13
    PaletteHighlight: number; // 14
    PaletteHighlightedText: number; // 15
    PaletteButtonText: number; // 16
    PaletteLink: number; // 17
    PaletteLinkVisited: number; // 18
    X11ParentRelative: number; // 19
    CaseInsensitive: number; // 0
    CaseSensitive: number; // 1
    TopLeftCorner: number; // 0
    TopRightCorner: number; // 1
    BottomLeftCorner: number; // 2
    BottomRightCorner: number; // 3
    AutoConnection: number; // 0
    DirectConnection: number; // 1
    QueuedConnection: number; // 2
    AutoCompatConnection: number; // 3
    BlockingQueuedConnection: number; // 4
    UniqueConnection: number; // 128
    WidgetShortcut: number; // 0
    WindowShortcut: number; // 1
    ApplicationShortcut: number; // 2
    WidgetWithChildrenShortcut: number; // 3
    OddEvenFill: number; // 0
    WindingFill: number; // 1
    MaskInColor: number; // 0
    MaskOutColor: number; // 1
    NoClip: number; // 0
    ReplaceClip: number; // 1
    IntersectClip: number; // 2
    UniteClip: number; // 3
    ContainsItemShape: number; // 0
    IntersectsItemShape: number; // 1
    ContainsItemBoundingRect: number; // 2
    IntersectsItemBoundingRect: number; // 3
    FastTransformation: number; // 0
    SmoothTransformation: number; // 1
    XAxis: number; // 0
    YAxis: number; // 1
    ZAxis: number; // 2
    NoContextMenu: number; // 0
    DefaultContextMenu: number; // 1
    ActionsContextMenu: number; // 2
    CustomContextMenu: number; // 3
    PreventContextMenu: number; // 4
    ImhNone: number; // 0
    ImhHiddenText: number; // 1
    ImhNoAutoUppercase: number; // 2
    ImhPreferNumbers: number; // 4
    ImhPreferUppercase: number; // 8
    ImhPreferLowercase: number; // 16
    ImhNoPredictiveText: number; // 32
    ImhDigitsOnly: number; // 65536
    ImhFormattedNumbersOnly: number; // 131072
    ImhUppercaseOnly: number; // 262144
    ImhLowercaseOnly: number; // 524288
    ImhDialableCharactersOnly: number; // 1048576
    ImhEmailCharactersOnly: number; // 2097152
    ImhUrlCharactersOnly: number; // 4194304
    ImhExclusiveInputMask: number; // -65536
    ToolButtonIconOnly: number; // 0
    ToolButtonTextOnly: number; // 1
    ToolButtonTextBesideIcon: number; // 2
    ToolButtonTextUnderIcon: number; // 3
    ToolButtonFollowStyle: number; // 4
    LeftToRight: number; // 0
    RightToLeft: number; // 1
    LayoutDirectionAuto: number; // 2
    CopyAction: number; // 1
    MoveAction: number; // 2
    LinkAction: number; // 4
    ActionMask: number; // 255
    TargetMoveAction: number; // 32770
    IgnoreAction: number; // 0
    Unchecked: number; // 0
    PartiallyChecked: number; // 1
    Checked: number; // 2
    NoItemFlags: number; // 0
    ItemIsSelectable: number; // 1
    ItemIsEditable: number; // 2
    ItemIsDragEnabled: number; // 4
    ItemIsDropEnabled: number; // 8
    ItemIsUserCheckable: number; // 16
    ItemIsEnabled: number; // 32
    ItemIsTristate: number; // 64
    MatchExactly: number; // 0
    MatchContains: number; // 1
    MatchStartsWith: number; // 2
    MatchEndsWith: number; // 3
    MatchRegExp: number; // 4
    MatchWildcard: number; // 5
    MatchFixedString: number; // 8
    MatchCaseSensitive: number; // 16
    MatchWrap: number; // 32
    MatchRecursive: number; // 64
    NonModal: number; // 0
    WindowModal: number; // 1
    ApplicationModal: number; // 2
    NoTextInteraction: number; // 0
    TextSelectableByMouse: number; // 1
    TextSelectableByKeyboard: number; // 2
    LinksAccessibleByMouse: number; // 4
    LinksAccessibleByKeyboard: number; // 8
    TextEditable: number; // 16
    TextEditorInteraction: number; // 19
    TextBrowserInteraction: number; // 13
    MinimumSize: number; // 0
    PreferredSize: number; // 1
    MaximumSize: number; // 2
    MinimumDescent: number; // 3
    NSizeHints: number; // 4
    NoGesture: number; // 0
    GestureStarted: number; // 1
    GestureUpdated: number; // 2
    GestureFinished: number; // 3
    GestureCanceled: number; // 4
    TapGesture: number; // 1
    TapAndHoldGesture: number; // 2
    PanGesture: number; // 3
    PinchGesture: number; // 4
    SwipeGesture: number; // 5
    CustomGesture: number; // 256
    LastGestureType: number; // -1
    LogicalMoveStyle: number; // 0
    VisualMoveStyle: number; // 1

    /* Properties */
    x: number;
    y: number;
    globalX: number;
    globalY: number;
    height: number;
    width: number;
    minHeight: number;
    minWidth: number;
    maxHeight: number;
    maxWidth: number;
    palette: QObject;
    paletteForegroundColor: QObject;
    paletteBackgroundColor: QObject;
    paletteBackgroundPixmap: QObject;
    font: QObject;
    enabled: boolean;
    statusTip: String;
    toolTip: String;
    whatsThis: String;

    constructor(parent?: QWidget)

    /* Methods */
}

declare class DzSystem {
    getenv(environmentVariable: QString): QString
    print(expression: QString): void
    println(expression: QString): void
    setenv(environmentVariable : QString, value : QString) : void
}

interface ISignal {
    connect(o: DzAction, funcName: QString);
    disconnect(): void;
}

declare class DzApp extends QApplication {

    /* Properties */
    //applicationName: string;
    //applicationVersion: string;
    //organizationName: string;
    //organizationDomain: string;
    //layoutDirection: number;
    //windowIcon: QObject;
    //cursorFlashTime: number;
    //doubleClickInterval: number;
    //keyboardInputInterval: number;
    //wheelScrollLines: number;
    //globalStrut: QObject;
    //startDragTime: number;
    //startDragDistance: number;
    //quitOnLastWindowClosed: boolean;
    //styleSheet: string;
    //autoSipEnabled: boolean;
    orgName: string;
    appName: string;
    version: number;
    version64: number;
    versionString: string;
    longVersionString: string;
    static Windows: number;
    static MacOSX: number;
    static WindowsUnknown: number;
    static Windows95: number;
    static Windows98: number;
    static WindowsMe: number;
    static Windows2000: number;
    static WindowsXP: number;
    static Windows2003: number;
    static WindowsVista: number;
    static Windows7: number;
    static Windows8: number;
    static Windows8_1: number;
    static MacUnknown: number;
    static Mac10_0: number;
    static Mac10_1: number;
    static Mac10_2: number;
    static Mac10_3: number;
    static Mac10_4: number;
    static Mac10_5: number;
    static Mac10_6: number;
    static Mac10_7: number;
    static Mac10_8: number;
    static Mac10_9: number;
    static Free: number;
    static Standard: number;
    static Advanced: number;
    static Pro: number;
    static Alpha: number;
    static Beta: number;
    static GeneralRelease: number;
    static PublicBuild: number;
    static PrivateBuild: number;
    static DevBuild: number;
    static NoInterface: number;
    static NoInterfaceWithOpenGL: number;
    static FullInterface: number;

    /* Methods */
    saveStateScript(script: DzScript): void;
    starting(): void;
    closing(): void;
    styleChanged(newStyle: DzStyle): void;
    debugMsg(msg: QString): void;
    warningMsg(msg: QString): void;
    skinChanged(): void;
    styleAboutToChange(): void;
    multiThreadingChanged(onOff: boolean): void;
    eventLoopStarted(): void;
    mouseEvent(): any; // TODO ;
    sceneBuilderRejected(): any; // TODO ;
    sceneBuilderAccepted(): any; // TODO ;
    getTempFilename(): QString;
    getTempRenderFilename(): QString;
    showURL(url: QString): void;
    showInNativeBrowser(): any; // TODO ;
    setLoadSavePath(dir: QString): void;
    statusLine(msg: QString, writeToLog?: boolean): void;
    byteSizeToString(): any; // TODO ;
    log(buffer: QString): void;
    debug(msg: QString): void;
    warning(msg: QString): void;
    flushLogBuffer(): boolean;
    setStyleDefinition(name: QString): boolean;
    setTempPath(tempPath: QString): boolean;
    restoreDefaultTempPath(): void;
    enableMultiThreading(onOff: boolean): void;
    delayedExit(): any; // TODO ;
    platform(): number;
    operatingSystem(): number;
    operatingSystemString(): QString;
    isStarting(): boolean;
    isRunning(): boolean;
    isClosing(): boolean;
    isDeleting(): any; // TODO ;
    isSlave(): boolean;
    writeConfigScript(configScriptFilename: QString): boolean;
    writeConfigScript(configScriptFilename: QString): boolean;
    getInterface(): DzMainWindow;
    getHomePath(): QString;
    getDAZDataPath(): QString;
    getProgramDataPath(): QString;
    getProgramDataAppPath(): any; // TODO ;
    getCommonUserDocumentPath(): any; // TODO ;
    getAppDataPath(): QString;
    getDocumentsPath(): QString;
    getShadersPath(): QString;
    getGeneratedShadersPath(): QString;
    getTempShadersPath(): any; // TODO ;
    getUtilitiesPath(): QString;
    getPluginsPath(): QString;
    getTempPath(): QString;
    getScriptsPath(): QString;
    getGeneratedScriptsPath(): QString;
    getAbsoluteScriptPath(scriptName: QString): QString;
    getResourcesPath(): QString;
    getDocumentationPath(): QString;
    getCurrentAuthor(): DzAuthor;
    getLoadSavePath(): QString;
    getImportMgr(): DzImportMgr;
    getExportMgr(): DzExportMgr;
    getFileIOPresetMgr(): DzFileIOPresetMgr;
    getSaveFilterMgr(): DzSaveFilterMgr;
    getAssetIOMgr(): DzAssetIOMgr;
    getContentMgr(): DzContentMgr;
    getAssetMgr(): DzAssetMgr;
    getAppSettingsMgr(): DzAppSettingsMgr;
    getImageMgr(): DzImageMgr;
    getHelpMgr(): DzHelpMgr;
    getRenderMgr(): DzRenderMgr;
    getTextureConvertorMgr(): DzTextureConvertorMgr;
    getTextureBakerMgr(): DzTextureBakerMgr;
    getMultiMediaMgr(): DzMultiMediaMgr;
    getDeviceMgr(): DzDeviceMgr;
    getCallBackMgr(): DzCallBackMgr;
    getPluginMgr(): DzPluginMgr;
    getAuthenticationMgr(): DzAuthenticationMgr;
    modifierKeyState(): number;
    getStyle(): DzStyle;
    getStyleDefinition(): QString;
    getStyleDefinitionList(): String[];
    isMultiThreadingEnabled(): boolean;
    usingInterface(): boolean;
    getDataFolderName(): QString;
    getDataFolderPathBase(): QString;
    getDataFolderPath(): QString;
    isRegistered(): boolean;
    releaseEdition(): number;
    releaseEditionString(): QString;
    releaseCycle(): any; // TODO ;
    releaseCycleString(): any; // TODO ;
    bitArchitecture(): number;
    bitArchitectureString(): QString;
    getDialogParent(): QWidget;
    breadCrumbTrackingIsActive(): boolean;
    setBreadCrumbTrackingActive(onOff: boolean): void;
    sendSourceBreadCrumb(id: number, shortmsg: QString, numeric: QString, longMsg: QString): void;
    sendSourceBreadCrumb(id: number, shortmsg: QString, numeric: QString, longMsg: QString): void;
    sendSourceBreadCrumb(id: number, shortmsg: QString, numeric: QString, longMsg: QString): void;
    sendSourceBreadCrumb(id: number, shortmsg: QString, numeric: QString, longMsg: QString): void;
    setUpBreadCrumbTrackingSignalWatch(obj: QObject, signal: string, id: number): void;
    setUpBreadCrumbTrackingSignalWatch(obj: QObject, signal: string, id: number): void;
    clearDelayedDeleteStack(doProgress: boolean): void;
    addSessionFileLoad(name: QString): void;
    refreshStyleSheet(rereadFromFile: boolean): void;
    refreshStyleSheet(rereadFromFile: boolean): void;
    getSkin(): DzSkin;
    setSkin(fileName: QString): boolean;
    clearSkin(): void;
    createUuid(): QString;
    createDigest(tokens: String[]): QString;
    createDigest(data: number[]): QString;
    createDigest(tokens: String[]): QString;
    createDigest(data: number[]): QString;
    getGraphicsMode(): number;
    releaseCycleSuffix(): any; // TODO ;
    releaseCycleSuffixStripped(): any; // TODO ;
    showSceneBuilder(): any; // TODO ;
    showSceneBuilder(): any; // TODO ;
    showSceneBuilder(): any; // TODO ;
    canShowSceneBuilder(): any; // TODO ;
    canShowSceneBuilder(): any; // TODO ;
    isKeyDown(): any; // TODO ;
    isKeySequenceDown(): any; // TODO ;
}

declare class DzDir extends QObject {

    constructor(path?: QString);

    cd(dir: QString): boolean;
    cdUp(): boolean;
    setPath(path: QString): void;
    relativeFilePath(filePath: QString): QString;
    filePath(fp: QString): QString;
    absFilePath(filePath: QString): QString;
    entryList(filter: QString, filterSpec?: number, sortSpec?: number): QString[];
    entryList(filters: QString[], filterSpec?: number, sortSpec?: number): QString[];
    mkdir(dir?: QString): boolean;
    mkdirs(dirs?: QString): boolean;
    mkpath(path?: QString): boolean;
    rmdir(dir?: QString): boolean;
    rmdirs(dirs?: QString): boolean;
    rmpath(path?: QString): boolean;
    remove(path: QString): boolean;
    rename(oldName: QString, newName: QString): boolean;
    copy(srcFile: QString, destFile: QString): boolean;
    move(srcFile: QString, destFile: QString): boolean;
    fileExists(file: QString): boolean;
    setCurrent(): boolean;
    dirName(): QString;
    path(): QString;
    absPath(): QString;
    canonicalPath(): QString;
    isAbsolute(): boolean;
    isReadable(): boolean;
    isRelative(): boolean;
    isRoot(): boolean;
    exists(): boolean;
    refresh(): void;
    /** var files = dir.getFilesFromDir(["*.log"], false); */
    getFilesFromDir(extensions: QString[], recursive?: boolean): QString[];

    static Dirs: number; // 1
    static Files: number; // 2
    static Drives: number; // 4
    static NoSymLinks: number; // 8
    static AllEntries: number; // 7
    static All: number; // 7
    static TypeMask: number; // 15
    static Readable: number; // 16
    static Writable: number; // 32
    static Executable: number; // 64
    static PermissionMask: number; // 112
    static RWEMask: number; // 112
    static Modified: number; // 128
    static Hidden: number; // 256
    static System: number; // 512
    static AccessMask: number; // 1008
    static AllDirs: number; // 1024
    static CaseSensitive: number; // 2048
    static NoDotAndDotDot: number; // 4096
    static NoDot: number; // 8192
    static NoDotDot: number; // 16384
    static NoFilter: number; // -1
    static Name: number; // 0
    static Time: number; // 1
    static Size: number; // 2
    static Unsorted: number; // 3
    static SortByMask: number; // 3
    static DirsFirst: number; // 4
    static Reversed: number; // 8
    static IgnoreCase: number; // 16
    static DirsLast: number; // 32
    static LocaleAware: number; // 64
    static Type: number; // 128
    static NoSort: number; // -1
}

declare class DzFile extends Q3TextStream {

    /* Properties */
    static ReadOnly: number;
    static WriteOnly: number;
    static ReadWrite: number;
    static Append: number;
    static Truncate: number;
    static Text: number;
    static Translate: number;

    constructor(file: QString);

    /* Methods */
    remove(): boolean;
    remove(fileName: QString): boolean;
    fileName(): QString;
    path(): QString; // TODO ;
    absFileName(): QString; // TODO ;
    baseName(): QString; // TODO ;
    extension(): QString; // TODO ;
    exists(): boolean;
    exists(fileName: QString): boolean;
    isReadable(): boolean; // TODO ;
    isWritable(): boolean; // TODO ;
    isHidden(): boolean; // TODO ;
    created(): any; // TODO ;
    lastModified(): any; // TODO ;
    lastRead(): any; // TODO ;
    size(): number;
    sizeStr(): any; // TODO ;
    open(accessMode: number, flags?: number): boolean;
    open(f: any, ioFlags: number, handleFlags: number): boolean;
    //open(f: any, flags: number, handleFlags: number): boolean;
    //open(fd: number, flags: number): boolean;
    //open(fd: number, ioFlags: number, handleFlags: number): boolean;
    close(): void;
    readByte(): number;
    readLines(): String[];
    readByteLine(): any; // TODO ;
    readAll(): any; // TODO ;
    writeByte(byte: number): void;
    write(data: String, length?: number): void;
    writeLine(data: String): void;
    copy(newName: QString): boolean;
    copy(fileName: QString, newName: QString): boolean;
}

declare class DzWidget extends QWidget {
    constructor(parent: DzWidget);
}

declare class DzDialog extends QWidget {

    /* Properties */
    caption: String;
    orientation: number;
    sizeGripEnabled: boolean;

    /* Methods */
    getWidget(): any; // TODO ;
    getLayout(): any; // TODO ;
    show(): any; // TODO ;
    hide(): any; // TODO ;
    setFixedSize(): any; // TODO ;
    setFixedWidth(): any; // TODO ;
    setFixedHeight(): any; // TODO ;
    setGeometry(): any; // TODO ;
    getChildrenOfWidget(): any; // TODO ;
    getChildrenOfWidget(): any; // TODO ;
    findChildOfWidget(): any; // TODO ;
    reparent(): any; // TODO ;
    reparent(): any; // TODO ;
    exec(): Boolean;
    close(): Boolean; // TODO ;
    setAcceptButton(button: DzPushButton): any; // TODO ;
    setRejectButton(button: DzPushButton): any; // TODO ;
    setExtension(extension: DzWidget): void;
    extension(): DzWidget;
    showExtension(obj: boolean): void;
    hideExtension(): void;
    showExtension(obj: boolean): void;
}



declare class DzBox3 extends QObject {

    /* Properties */
    min: QObject;
    max: QObject;
    minX: number;
    minY: number;
    minZ: number;
    maxX: number;
    maxY: number;
    maxZ: number;

    /* Methods */
    toString(): any; // TODO ;
    getSize(): number;
    getCenter(): DzVec3;
    getTransformedBox(): any; // TODO ;
    include(box: DzBox3): void;
    include(pnt: DzVec3): void;
    include(pnt: number[]): void;
    translate(): any; // TODO ;
}

declare class DsIntSlider extends DzSlider {

    /* Properties */
    value: number;
    sensitivity: number;
    min: number;
    max: number;
    indeterminate: boolean;
    displayAsPercent: boolean;
    text: string;
    textEditable: boolean;
    clamped: boolean;
    textVisible: boolean;
    label: string;
    labelVisible: boolean;

    /* Methods */
}

declare class DsFloatSlider extends DzSlider {

    /* Properties */
    value: number;
    sensitivity: number;
    min: number;
    max: number;
    indeterminate: boolean;
    displayAsPercent: boolean;
    textEditable: boolean;
    clamped: boolean;
    text: string;
    textVisible: boolean;
    labelVisible: boolean;
    label: string;

    /* Methods */
}

declare class DzComboBox extends QWidget {
    /* Properties */

    count: number; // 0
    currentItem: number; // -1
    currentText: string; // 
    maxVisibleItems: number; // 10
    minimumContentsLength: number; // 0
    insertPolicy: number; // 3
    sizeAdjustPolicy: number; // 1

    /** activated(index: number): ISignal;
      * activated(item: QString): ISignal; */
    activated: ISignal;
    /** currentIndexChanged(index: number): ISignal;
     * currentIndexChanged(item: QString): ISignal;
     */
    currentIndexChanged: ISignal;
    
    highlighted(index: number): ISignal;
    highlighted(item: QString): ISignal;
    textChanged(item: QString): ISignal;
    addItem(item: QString, data: QString): ISignal;
    addItem(item: QString): ISignal;
    addItems(items: QString[]): ISignal;
    findData(data: QString): ISignal;
    findText(text: QString): ISignal;
    insertItem(index: number, item: QString, data?: QString): ISignal;
    insertItems(index: number, items: QString[]): ISignal;
    insertSeparator(index: number): ISignal;
    itemData(index: number): ISignal;
    itemText(index: number): ISignal;
    removeItem(index: number): ISignal;
    setItemData(index: number, data: QString): ISignal;
    setItemText(index: number, text: QString): ISignal;
    clear(): any;
    insertItem(item: QString): ISignal;

    text(index: number): QString;
    /** text(index: number): ISignal; */
    //text: ISignal;
    

    static NoInsert: number; // 0
    static InsertAtTop: number; // 1
    static InsertAtCurrent: number; // 2
    static InsertAtBottom: number; // 3
    static InsertAfterCurrent: number; // 4
    static InsertBeforeCurrent: number; // 5
    static InsertAlphabetically: number; // 6
    static AdjustToContents: number; // 0
    static AdjustToContentsOnFirstShow: number; // 1
    static AdjustToMinimumContentsLength: number; // 2
    static AdjustToMinimumContentsLengthWithIcon: number; // 3
}

declare class DzGroupBox extends QWidget {
    /* Properties */   
    checkable: boolean; // false
    checked: boolean; // false
    flat: boolean; // false
    title: string; // 
    columns: number; // 1
    orientation: number; // 1
    insideMargin: number; // 9
    insideSpacing: number; // 6
    margin: number;
    spacing: number;

    /* Methods */   
    clicked(clicked: boolean): ISignal;
    clicked(): any;
    toggled(state: boolean): ISignal;
    addSpace(space: number): ISignal;
}

declare class DzHGroupBox extends DzGroupBox {
}

declare class DzVGroupBox extends DzGroupBox {
}

declare class DzLabel extends QWidget {
    /* Properties */
    alignment: number; // 129
    hasSelectedText: boolean; // false
    indent: number; // -1
    openExternalLinks: boolean; // false
    pixmap: QPixmap; // [object Object]
    scaledContents: boolean; // false
    selectedText: string; // 
    text: QString; // 
    textFormat: number; // 2
    textInteractionFlags: number; // 4
    wordWrap: boolean; // false


    /* Methods */
    
    constructor(parent: DzWidget);
    clear(): any;
    buddy(): any;
    setBuddy(widget: DzWidget): ISignal;
}

declare class DzTextEdit {
    text: string | ((para: number) => string); //
    
    documentTitle: string; // 
    blockCount: number; // 1
    paragraphs: number; // 1
    lines: number; // 1
    length: number; // 1
    italic: boolean; // false
    bold: boolean; // false
    underline: boolean; // false
    color: QColor;
    linkUnderline: boolean; // false
    pointSize: number; // 0

    constructor(parent: DzWidget);

    hasSelectedText(): boolean;
    selectedText(): String;
    selectionStart(): number;
    selectionEnd(): number;
    selectionParaStart(): number;
    selectionIndexStart(): number;
    selectionParaEnd(): number;
    selectionIndexEnd(): number;
    append(text: String): void;
    clear(): void;
}

declare class DzLineEdit {
    static Normal: number; // 0
    static NoEcho: number; // 1
    static Password: number; // 2
    static PasswordEchoOnEdit: number; // 3

    acceptableInput: boolean; // true
    alignment: number; // 129
    cursorPosition: number; // 0
    echoMode: number; // 0
    frame: boolean; // true
    hasSelectedText: boolean | (() => boolean); // false
    inputMask: string; // 
    maxLength: number; // 32767
    modified: boolean; // false
    placeholderText: string; // 
    readOnly: boolean; // false
    redoAvailable: boolean; // false
    selectedText: String | (() => String); // 
    text: string; // 
    undoAvailable: boolean; // false

    constructor(parent: DzWidget);

    lostFocus(): void;
    cursorPositionChanged(p0: number, p1: number): void;
    editingFinished(): any;
    returnPressed(): any;
    selectionChanged(): any;
    textChanged(QString): ISignal;
    textEdited(QString): ISignal;
    hasAcceptableInput(): any;
    backspace(): any;
    clearModified(): any;
    cursorBackward(mark: boolean, p1?: number): any;
    cursorForward(mark: boolean, p1?: number): any;
    cursorWordBackward(bool): ISignal;
    cursorWordForward(bool): ISignal;
    del(): void;
    deselect(): void;
    end(mark: boolean): void;
    home(mark: boolean): void;
    selectionStart(): number;
    setSelection(start: number, length: number): void;
    clear(): void;
    copy(): any;
    cut(): void;
    paste(): void;
    redo(): void;
    selectAll(): any;
    undo(): void;
    setDoubleValidator(bottom: number, top: number, decimals: number, scientific?: boolean): void;
    setIntValidator(minimum: number, maximum: number): void;
    setRegExValidator(rx: QString, caseSensitive?: boolean): any;
}

declare class DzListBox extends QWidget {

    /* Properties */
    count: number;
    currentItem: number;
    currentText: string;
    numColumns: number;
    numItemsVisible: number;
    numRows: number;
    topItem: number;
    selected: number;
    selectionMode: number;
    variableHeight: boolean;
    variableWidth: boolean;
    columnMode: number;
    rowMode: number;
    Single: number;
    Multi: number;
    Extended: number;
    NoSelection: number;
    FixedNumber: number;
    FitToWidth: number;
    FitToHeight: number;
    Variable: number;

    /* Methods */
    getWidget(): any; // TODO ;
    getLayout(): any; // TODO ;
    show(): any; // TODO ;
    hide(): any; // TODO ;
    setFixedSize(): any; // TODO ;
    setFixedWidth(): any; // TODO ;
    setFixedHeight(): any; // TODO ;
    setGeometry(): any; // TODO ;
    getChildrenOfWidget(): any; // TODO ;
    getChildrenOfWidget(): any; // TODO ;
    findChildOfWidget(): any; // TODO ;
    reparent(): any; // TODO ;
    reparent(): any; // TODO ;
    highlighted(): any; // TODO ;
    //selected(s: String): any; // TODO ;
    highlighted(): any; // TODO ;
    //selected(index: number): any; // TODO ;
    selectionChanged(): any; // TODO ;
    selectionChanged(): any; // TODO ;
    currentChanged(): any; // TODO ;
    clicked(): any; // TODO ;
    clicked(): any; // TODO ;
    pressed(): any; // TODO ;
    pressed(): any; // TODO ;
    doubleClicked(): any; // TODO ;
    returnPressed(): any; // TODO ;
    rightButtonClicked(): any; // TODO ;
    rightButtonPressed(): any; // TODO ;
    mouseButtonPressed(): any; // TODO ;
    mouseButtonClicked(): any; // TODO ;
    contextMenuRequested(): any; // TODO ;
    onItem(): any; // TODO ;
    onViewport(): any; // TODO ;
    clear(): any; // TODO ;
    insertItem(): any; // TODO ;
    removeItem(): any; // TODO ;
    text(): any; // TODO ;
    setSelected(): any; // TODO ;
    isSelected(): any; // TODO ;
    ensureCurrentVisible(): any; // TODO ;
    clearSelection(): any; // TODO ;
    selectAll(): any; // TODO ;
    invertSelection(): any; // TODO ;
    sort(): any; // TODO ;
    sort(): any; // TODO ;
}

declare class DzButton extends QWidget {
    objectName: string; // CheckBox
    x: number; // 0
    y: number; // 0
    globalX: number; // 0
    globalY: number; // 0
    height: number; // 30
    width: number; // 100
    minHeight: number; // 0
    minWidth: number; // 0
    maxHeight: number; // 16777215
    maxWidth: number; // 16777215
    palette: QObject; // [object Object]
    paletteForegroundColor: QObject; // [object Object]
    paletteBackgroundColor: QObject; // [object Object]
    paletteBackgroundPixmap: QObject; // [object Object]
    font: QObject; // [object Object]
    enabled: boolean; // true
    statusTip: QString; // 
    toolTip: QString; // 
    whatsThis: QString; // 
    autoExclusive: boolean; // false
    autoRepeat: boolean; // false
    autoRepeatDelay: number; // 300
    autoRepeatInterval: number; // 100
    checkable: boolean; // true
    down: boolean; // false
    icon: QObject; // QVariant(QIcon)
    iconSize: QObject; // [object Object]
    pixmap: QPixmap; // [object Object]
    shortcut: QObject; // 
    text: string; // 
    toggleButton: boolean; // true
    exclusiveToggle: boolean; // false
    on: boolean; // false
    toggleState: number; // 1
    toggleType: number; // 0
    checked: boolean; // false
    getWidget(): any;
    getLayout(): any;
    show(): any;
    hide(): any;
    /**
      * setFixedSize(x: number, y: number): ISignal
      */
    setFixedSize: ISignal;
    /**
      *     setFixedWidth(width: number): ISignal;
      */
    setFixedWidth: ISignal;
    /**
      *     setFixedHeight(height: number): ISignal;
      */
    setFixedHeight: ISignal;
    /**
      *     setGeometry(index: number, int, int, int): ISignal;
      */
    setGeometry: ISignal;
    /**
      *     getChildrenOfWidget(QString): ISignal;
      */
    getChildrenOfWidget: ISignal;
    //getChildrenOfWidget(): any;
    /**
      *     findChildOfWidget(QString): ISignal;
      */
    findChildOfWidget: ISignal;
    /**
      *     reparent(widget: DzWidget,QPoint, bool): ISignal;;
      */
    reparent: ISignal;
    pressed: ISignal;
    released: ISignal;
    clicked: ISignal;
    /**
      *     toggled(bool): ISignal;
      */
    toggled: ISignal;
    /**
      *     stateChanged(index: number): ISignal;
      */
    stateChanged: ISignal;
    toggle(): any;
    Off: number; // 0
    NoChange: number; // 1
    On: number; // 2
    SingleShot: number; // 0
    Toggle: number; // 1
    Tristate: number; // 2
    inherits(): any;
    name: string; // CheckBox
    className(): any;
}

declare class DzCheckBox extends DzButton {
    tristate: boolean; // false
}

declare class DzPushButton extends DzButton {
    autoDefault: boolean; // true
    default: boolean; // false
    flat: boolean; // false
    buttonStyle: number; // 0
    buttonTextFormat: number; // 132
    primitive: string; // PanelButtonCommand
    downArrowPrimitive: string; // DZ_ComboBoxArrow
    textStyle: string; // ButtonCommand
    elideMode: number; // 3
    displayDownArrow: boolean; // false
    iconMetric: string; // ButtonIconSize
    downArrowMetric: string; // DZ_ComboBoxArrowExtent

    buttonStyleChanged(buttonStyle: number): ISignal;
    buttonTextFormatChanged(format: number): ISignal;
    primitiveChanged(name: QString): ISignal;
    downArrowPrimitiveChanged(name: QString): ISignal;
    textStyleChanged(style: QString): ISignal;
    elideModeChanged(mode: number): ISignal;
    displayDownArrowChanged(state: boolean): ISignal;
    iconMetricChanged(metric: QString): ISignal;
    downArrowMetricChanged(metric: QString): ISignal;
    setToggleButton(state: boolean): ISignal;
    setCheckable(checkable: boolean): ISignal;

    static BCommand: number; // 0
    static BTool: number; // 1
    static BDefault: number; // 2
    static BBasic: number; // 3
    static BNoFrame: number; // 4
    static BCustom: number; // 5
}

declare class DzRadioButton extends DzButton {
}

declare class DzTabWidget extends QWidget {
    count: number; // 0
    currentPage: number; // -1
    currentIndex: number; // -1
    documentMode: boolean; // false
    movable: boolean; // false
    tabPosition: number; // 0
    tabsClosable: boolean; // false
    usesScrollButtons: boolean; // true
    currentChanged(index: number): ISignal;
    tabCloseRequested(index: number): ISignal;
    currentChanged(widget: DzWidget): ISignal;
    addTab(widget: DzWidget, name: QString): ISignal;
    clear(): any;
    cornerWidget(): DzWidget;
    currentWidget(): DzWidget;
    indexOf(widget: DzWidget): ISignal;
    insertTab(index: number, widget: DzWidget, name: QString): ISignal;
    isTabEnabled(index: number): ISignal;
    removeTab(index: number): ISignal;
    setCornerWidget(widget: DzWidget): ISignal;
    setTabEnabled(index: number, state: boolean): ISignal;
    setTabText(index: number, text: QString): ISignal;
    setTabToolTip(index: number, text: QString): ISignal;
    setTabWhatsThis(index: number, text: QString): ISignal;
    tabText(index: number): ISignal;
    tabToolTip(index: number): ISignal;
    tabWhatsThis(index: number): ISignal;
    widget(index: number): ISignal;
    setCurrentWidget(widget: DzWidget): ISignal;
    changeTab(widget: DzWidget, text: QString): ISignal;
    currentPageWidget(): DzWidget;
    insertTab(widget: DzWidget, text: QString, index: number): ISignal;
    insertTab(widget: DzWidget, text: QString): ISignal;
    isTabEnabled(widget: DzWidget): ISignal;
    label(index: number): ISignal;
    page(page: number): ISignal;
    removeTabToolTip(widget: DzWidget): ISignal;
    setTabEnabled(widget: DzWidget, state: boolean): ISignal;
    setTabLabel(widget: DzWidget, label: QString): ISignal;
    setTabToolTip(widget: DzWidget, toolTip: QString): ISignal;
    tabLabel(widget: DzWidget): ISignal;
    tabToolTip(widget: DzWidget): ISignal;
    removePage(widget: DzWidget): ISignal;
    setCurrentPage(page: number): ISignal;
    showPage(widget: DzWidget): ISignal;

    static North: number; // 0
    static South: number; // 1
    static West: number; // 2
    static East: number; // 3
}



declare class DzButtonGroup extends QWidget {

    /* Properties */
    alignment: number;
    checkable: boolean;
    checked: boolean;
    flat: boolean;
    title: string;
    columns: number;
    orientation: number;
    insideMargin: number;
    insideSpacing: number;
    exclusive: boolean;
    radioButtonExclusive: boolean;
    selected: number;
    count: number;

    /* Methods */
    getWidget(): any; // TODO ;
    getLayout(): any; // TODO ;
    show(): any; // TODO ;
    hide(): any; // TODO ;
    setFixedSize(): any; // TODO ;
    setFixedWidth(): any; // TODO ;
    setFixedHeight(): any; // TODO ;
    setGeometry(): any; // TODO ;
    getChildrenOfWidget(): any; // TODO ;
    getChildrenOfWidget(): any; // TODO ;
    findChildOfWidget(): any; // TODO ;
    reparent(): any; // TODO ;
    reparent(): any; // TODO ;
    clicked(): any; // TODO ;
    clicked(): any; // TODO ;
    toggled(): any; // TODO ;
    addSpace(): any; // TODO ;
    pressed(): any; // TODO ;
    released(): any; // TODO ;
    clicked(): any; // TODO ;
    addButton(obj: QAbstractButton): void;
    addButton(obj: QAbstractButton, id: number): void;
    addButton(obj: QAbstractButton): void;
    addButton(obj: QAbstractButton, id: number): void;
    button(id: number): QAbstractButton;
    buttons(): QAbstractButton[];
    checkedButton(): QAbstractButton;
    id(button: QAbstractButton): number;
    removeButton(obj: QAbstractButton): void;
    insert(): any; // TODO ;
    insert(): any; // TODO ;
    remove(): any; // TODO ;
}

declare class DzHButtonGroup extends DzButtonGroup {

    /* Properties */

    /* Methods */
}

declare class DzVButtonGroup extends QWidget {

    /* Properties */
    alignment: number;
    checkable: boolean;
    checked: boolean;
    flat: boolean;
    title: string;
    columns: number;
    orientation: number;
    insideMargin: number;
    insideSpacing: number;
    exclusive: boolean;
    radioButtonExclusive: boolean;
    selected: number;
    count: number;

    /* Methods */
    getWidget(): any; // TODO ;
    getLayout(): any; // TODO ;
    show(): any; // TODO ;
    hide(): any; // TODO ;
    setFixedSize(): any; // TODO ;
    setFixedWidth(): any; // TODO ;
    setFixedHeight(): any; // TODO ;
    setGeometry(): any; // TODO ;
    getChildrenOfWidget(): any; // TODO ;
    getChildrenOfWidget(): any; // TODO ;
    findChildOfWidget(): any; // TODO ;
    reparent(): any; // TODO ;
    reparent(): any; // TODO ;
    clicked(): any; // TODO ;
    clicked(): any; // TODO ;
    toggled(): any; // TODO ;
    addSpace(): any; // TODO ;
    pressed(): any; // TODO ;
    released(): any; // TODO ;
    clicked(): any; // TODO ;
    addButton(): any; // TODO ;
    addButton(): any; // TODO ;
    button(): any; // TODO ;
    buttons(): any; // TODO ;
    checkedButton(): any; // TODO ;
    id(): any; // TODO ;
    removeButton(): any; // TODO ;
    insert(): any; // TODO ;
    insert(): any; // TODO ;
    remove(): any; // TODO ;
}

// TODO:  checar definiciones para comprobar nombres de argumentos a metodos.
declare enum ScriptFileMode { UseExtension, TextScriptFile, DAZScriptFile, EncDAZScriptFile }
declare enum ScriptLanguage { Unknown, DAZScript1, DAZScript2 } 

/** Encapsulates a DAZ Script script. */
declare class DzScript extends QObject {

    /* Properties */
    objectName: string;
    name: string;
    static UseExtension: number;
    static TextScriptFile: number;
    static DAZScriptFile: number;
    static EncDAZScriptFile: number;
    static Unknown: number;
    static DAZScript1: number;
    static DAZScript2: number;

    constructor(name?: string);
    constructor(script: DzScript);

    /* Methods */
    nameChanged(name: String): any;
    className(): any;
    makePersistent(): any;
    inherits(base: String): any;
    iskindof(kind: String): any;
    getName(): any;
    executeScript(script: DzScript, ...list: String[]): any;
    checkSyntax(): any;
    execute(): any;
    execute(...list: QVariant[]): any;
    call(funcname: String, ...args: QVariant[]): any;
    loadFromFile(filename: String, b: boolean): any;
    loadFromFile(filename: String): any;
    getLastStatus(): any;
    addCode(code: String): any;
    addLines(line: String, value: number): any;
    addLines(String): any;
    addLine(String, int): any;
    addLine(String): any;
    setCode(String): any;
    makeEncrypted(): any;
    clear(): any;
    setContext(scriptContext: DzScriptContext): any;
    convertToDAZScript2(): any;
    getFilename(): any;
    saveToFile(name: String, scriptFileMode: number, filetype: String): any;
    saveToFile(name: String, scriptFileMode: number): any;
    saveToFile(name: String): any;
    getCode(): any;
    isEmpty(): any;
    isEncrypted(): any;
    wasConverted(scriptLanguage: any): any;
    wasConverted(): any;
    result(): any;
    errorMessage(): any;
    errorLine(): any;
    stackTrace(): any;
    getScriptVersion(): any;
    getScriptType(): any;
    getScriptLanguage(): any;
    getAuthor(): any;
    getShouldReuseInterpreter(): any;
    setReuseInterpreter(bool): any;
    evaluate(code: String, context: QObject, compatibilityMode: boolean): any;
    evaluate(code: String, context: QObject): any;
    evaluate(code: String): any;
    isScriptFile(filename: String): any;
    isScriptBinaryFile(filename: String): any;
    isScriptTextFile(filename: String): any;
    isScriptExtension(filename: String): any;
    isScriptBinaryExtension(filename: String): any;
    isScriptTextExtension(filename: String): any;
    getScriptFile(filenameWithoutExtension: String): any;
    addScriptOpenExtensionsToFilter(filter: DzFileFilter): any;
    addScriptSaveExtensionsToFilter(filter: DzFileFilter): any;
    addScriptBinaryExtensionsToFilter(filter: DzFileFilter): any;
    addScriptTextExtensionsToFilter(filter: DzFileFilter, bool): any;
    addScriptTextExtensionsToFilter(filter: DzFileFilter): any;
    addScriptOpenExtensionsAsMultipleFilters(filter: DzFileFilter): any;
    addScriptSaveExtensionsAsMultipleFilters(filter: DzFileFilter): any;
    addScriptBinaryExtensionsAsMultipleFilters(filter: DzFileFilter): any;
    addScriptTextExtensionsAsMultipleFilters(filter: DzFileFilter, bool): any;
    addScriptTextExtensionsAsMultipleFilters(filter: DzFileFilter): any;
    getScriptExtensions(): any;
    legalizeName(name: String): any;
}


declare class DzScene extends DzBase {

    /* Properties */
    DefaultMethod: number;
    OpenNew: number;
    MergeFile: number;
    DzObjectsOnly: number;
    DzIncludeLightsFlag: number;
    DzIncludeCamerasFlag: number;
    DzIncludeNonShadowersFlag: number;
    DzIncludeNonVisibleFlag: number;
    DzIncludeAllFlag: number;

    /* Methods */
    drawnDataChanged(): void;
    nodeSelectionListChanged(): void;
    skeletonSelectionListChanged(): void;
    lightSelectionListChanged(): void;
    cameraSelectionListChanged(): void;
    primarySelectionChanged(node: DzNode): void;
    highlightNodeChanged(node: DzNode): void;
    sceneClearStarting(): void;
    sceneCleared(): void;
    sceneLoadStarting(): void;
    sceneLoaded(): void;
    sceneFilenameChanged(newName: QString): void;
    timeChanging(newTime: DzTime): void;
    timeChanged(time: DzTime): void;
    currentTimeChanged(): any; // TODO ;
    timeStepChanged(time: DzTime): void;
    playRangeChanged(range: DzTimeRange): void;
    animRangeChanged(range: DzTimeRange): void;
    timeSelectionChanged(): void;
    nodeAdded(node: DzNode): void;
    aboutToRemoveNode(node: DzNode): void;
    nodeRemoved(node: DzNode): void;
    nodeListChanged(): void;
    skeletonAdded(node: DzSkeleton): void;
    skeletonRemoved(node: DzSkeleton): void;
    skeletonListChanged(): void;
    lightAdded(node: DzLight): void;
    lightRemoved(node: DzLight): void;
    lightListChanged(): void;
    cameraAdded(node: DzCamera): void;
    cameraRemoved(node: DzCamera): void;
    cameraListChanged(): void;
    wsModifierAdded(modifier: DzWSModifier): void;
    wsModifierRemoved(modifier: DzWSModifier): void;
    wsModifierStackChanged(): void;
    playbackStarted(): void;
    playbackFinished(): void;
    loopPlaybackChanged(onOff: boolean): void;
    aboutToRender(r: DzRenderer): void;
    renderFinished(r: DzRenderer): void;
    materialListChanged(): void;
    materialSelectionChanged(): void;
    sceneSaveStarting(filename: QString): void;
    sceneSaved(filename: QString): void;
    assetModified(): void;
    assetWasSaved(): void;
    sceneTopologyChanged(): any; // TODO ;
    backdropChanged(): any; // TODO ;
    clear(): void;
    isClearing(): boolean;
    isLoading(): boolean;
    isDAZLoading(): boolean;
    setBackdrop(backdrop: DzBackdrop): void;
    setAudio(audio: DzAudioClip, startFrame: number): void;
    setAudio(audio: DzAudioClip, startFrame: number): void;
    addNode(node: DzNode): boolean;
    removeNode(node: DzNode): boolean;
    removeSelected(): void;
    removeAllLights(): void;
    removeAllCameras(): void;
    addWSModifier(modifier: DzWSModifier, index: number): DzError;
    addWSModifier(modifier: DzWSModifier, index: number): DzError;
    removeWSModifier(modifier: DzWSModifier): DzError;
    addDataItem(item: DzSceneData): DzError;
    removeDataItem(item: DzSceneData): DzError;
    update(): void;
    markChanged(): void;
    saveScene(filename: QString): DzError;
    saveScene(filename: QString): DzError;
    loadScene(filename: QString, method: DzOpenMethod): DzError;
    saveThumbnail(filename: QString): void;
    selectAllNodes(onOff: boolean): void;
    selectAllSkeletons(onOff: boolean): void;
    setPrimarySelection(node: DzNode): boolean;
    setHighlightNode(node: DzNode): void;
    beginTimeEdit(): void;
    finishTimeEdit(): void;
    setTime(time: DzTime): void;
    setFrame(frame: number): void;
    stepTime(nFrames: number, forward: boolean): void;
    stepTime(nFrames: number, forward: boolean): void;
    stepTime(nFrames: number, forward: boolean): void;
    setTimeStep(time: DzTime): void;
    setPlayRange(range: DzTimeRange): void;
    setAnimRange(range: DzTimeRange): void;
    play(realtime: boolean): void;
    play(realtime: boolean): void;
    pause(): void;
    loopPlayback(onOff: boolean): void;
    selectAllTime(onOff: boolean): void;
    invalidate(): void;
    getNumStorablesInScene(): number;
    setAssetLoadPath(absolutePath: QString): void;
    getAssetLoadPath(saveToCur: boolean): QString;
    getAssetLoadPath(saveToCur: boolean): QString;
    setPreviewLights(onoff: boolean): void;
    getPreviewLights(): boolean;
    invalidateLightSorting(): any; // TODO ;
    needsSave(): boolean;
    getBackdrop(): DzBackdrop;
    getBoundingBox(flags: number): DzBox3;
    getBoundingBox(flags: number): DzBox3;
    getAudio(): DzAudioClip;
    getAudioStartFrame(): number;
    getFilename(savedTo: boolean): QString;
    getFilename(savedTo: boolean): QString;
    getNumNodes(): number;
    getNumSkeletons(): number;
    getNumLights(): number;
    getNumCameras(): number;
    getNumWSModifiers(): number;
    getNode(which: number): DzNode;
    getNodeList(): Array<DzNode>;
    getSkeleton(which: number): DzSkeleton;
    getSkeletonList(): QObject[];
    getLight(which: number): DzLight;
    getLightList(): QObject[];
    getCamera(which: number): DzCamera;
    getCameraList(): QObject[];
    getWSModifier(which: number): DzWSModifier;
    getWSModifierList(): QObject[];
    findNode(name: QString): DzNode;
    findNodeByLabel(label: QString): DzNode;
    findSkeleton(name: QString): DzSkeleton;
    findSkeletonByLabel(label: QString): DzSkeleton;
    findCamera(name: QString): DzCamera;
    findCameraByLabel(label: QString): DzCamera;
    findLight(name: QString): DzLight;
    findLightByLabel(label: QString): DzLight;
    findNodeIndex(node: DzNode): number;
    findSkeletonIndex(skelton: DzSkeleton): number;
    findDataItem(name: QString): DzSceneData;
    getPrimarySelection(): DzNode;
    getNumSelectedNodes(): number;
    getSelectedNode(index: number): DzNode;
    getSelectedNodeList(): DzNode[];
    getNumSelectedSkeletons(): number;
    getSelectedSkeleton(index: number): DzSkeleton;
    getSelectedSkeletonList(): QObject[];
    getNumSelectedLights(): number;
    getSelectedLight(index: number): DzLight;
    getSelectedLightList(): QObject[];
    getNumSelectedCameras(): number;
    getSelectedCamera(index: number): DzCamera;
    getSelectedCameraList(): QObject[];
    getHighlightNode(): DzNode;
    getSortedLightList(): any; // TODO ;
    getTime(): DzTime;
    getFrame(): number;
    getTimeStep(): DzTime;
    isPlaying(): boolean;
    isLoopingEnabled(): boolean;
    getPlayRange(): DzTimeRange;
    getAnimRange(): DzTimeRange;
    getNumSelectedTimeRanges(): number;
    getNumDataItems(): number;
    getDataItem(i: number): DzSceneData;
    getDataItemList(): any; // TODO ;
    getUniqueTopLevelLabel(label: QString, node: DzNode): QString;
    getUniqueTopLevelLabel(label: QString, node: DzNode): QString;
    stripLabelNumber(label: QString): QString;
    clearDebugPoints(): any; // TODO ;
    setDebugPoints(): any; // TODO ;
    setDebugPoints(): any; // TODO ;
    findNodeByElementID(): any; // TODO ;
    findObjectByElementID(): any; // TODO ;
    findShapeByElementID(): any; // TODO ;
    findModifierByElementID(): any; // TODO ;
    findMaterialByElementID(): any; // TODO ;
}

declare class DzNode extends DzElement {

    /* Properties */
    elementID: number;
    renderPriority: number;
    assetIdAliases: QObject;
    nameAliases: QObject;
    assetId: string;

    /* Methods */
    propertyListInTreeChanged(): any; // TODO ;
    privatePropertyListInTreeChanged(): any; // TODO ;
    mergeElementSignal(): any; // TODO ;
    duplicateElementSignal(): any; // TODO ;
    createElementCopySignal(): any; // TODO ;
    moveDataItemToIndex(): any; // TODO ;
    findDataItemIndex(): any; // TODO ;
    duplicateMissingCustomDataWithContext(): any; // TODO ;
    duplicateMissingPropertiesWithContext(): any; // TODO ;
    duplicateMissingPrivatePropertiesWithContext(): any; // TODO ;
    doMergeElement(): any; // TODO ;
    doDuplicateElement(): any; // TODO ;
    mergeElement(): any; // TODO ;
    duplicateElement(): any; // TODO ;
    createElementCopy(): any; // TODO ;
    transformChanged(): void;
    selected(node: DzNode, onOff: boolean): void;
    rotationOrderChanged(): void;
    childAdded(child: DzNode): void;
    childRemoved(child: DzNode): void;
    childListChanged(): void;
    objectChanged(node: DzNode, oldObject: DzObject, newObject: DzObject): void;
    drawnDataChanged(): void;
    visibilityChanged(): void;
    selectabilityChanged(): void;
    aboutToBeRemoved(): void;
    removed(): void;
    added(): void;
    hiddenChanged(hidden: boolean): void;
    riggingChanged(): void;
    materialListChanged(): void;
    materialSelectionChanged(): void;
    uvsChanged(): void;
    assetModified(): void;
    assetWasSaved(): void;
    boundBoxInvalidated(): void;
    aboutToDelete(node: DzNode): void;
    inheritScaleChanged(): void;
    materialSelectionSetsChanged(): any; // TODO ;
    childListOrderChanged(): any; // TODO ;
    promoteSelectionChanged(): any; // TODO ;
    topologyChanged(): any; // TODO ;
    objectDuplicateAndSetSignal(): any; // TODO ;
    modifierDuplicateFinished(): any; // TODO ;
    setManipOverColor(color: QColor): void;
    clearManipOverColor(): void;
    finalize(isRender: boolean, allowResChange: boolean): void;
    finalize(isRender: boolean, allowResChange: boolean): void;
    finalize(isRender: boolean, allowResChange: boolean): void;
    select(onOff: boolean): void;
    select(onOff: boolean): void;
    setSelectable(onOff: boolean): void;
    setVisible(onOff: boolean): void;
    setRotationOrder(order: DzRotationOrder): void;
    setObject(object: DzObject): void;
    addNodeChild(child: DzNode, inPlace: boolean): DzError;
    addNodeChild(child: DzNode, inPlace: boolean): DzError;
    removeNodeChild(child: DzNode, inPlace: boolean): DzError;
    removeNodeChild(child: DzNode, inPlace: boolean): DzError;
    removeAllNodeChildren(): void;
    moveNodeChildToIndex(): any; // TODO ;
    moveNodeChildToIndex(): any; // TODO ;
    findChildIndex(): any; // TODO ;
    setWSTransform(tm: DzTime, pos: DzVec3, rot: DzQuat): void;
    setWSTransform(pos: DzVec3, rot: DzQuat): void;
    setWSTransform(tm: DzTime, pos: DzVec3, rot: DzQuat): void;
    setWSTransform(pos: DzVec3, rot: DzQuat): void;
    setWSPos(tm: DzTime, pos: DzVec3): void;
    setWSPos(pos: DzVec3): void;
    setWSPos(tm: DzTime, pos: DzVec3): void;
    setWSPos(pos: DzVec3): void;
    setWSRot(tm: DzTime, rot: DzQuat): void;
    setWSRot(rot: DzQuat): void;
    setWSRot(tm: DzTime, rot: DzQuat): void;
    setWSRot(rot: DzQuat): void;
    setWSScale(tm: DzTime, scale: DzMatrix3): void;
    setWSScale(scale: DzMatrix3): void;
    setWSScale(tm: DzTime, scale: DzMatrix3): void;
    setWSScale(scale: DzMatrix3): void;
    setLocalTransform(tm: DzTime, pos: DzVec3, rot: DzQuat): void;
    setLocalTransform(pos: DzVec3, rot: DzQuat): void;
    setLocalTransform(tm: DzTime, pos: DzVec3, rot: DzQuat): void;
    setLocalTransform(pos: DzVec3, rot: DzQuat): void;
    setLocalTransform(tm: DzTime, pos: DzVec3, rot: DzQuat): void;
    setLocalTransform(pos: DzVec3, rot: DzQuat): void;
    setLocalTransform(tm: DzTime, pos: DzVec3, rot: DzQuat): void;
    setLocalTransform(pos: DzVec3, rot: DzQuat): void;
    setToolLocalTransform(): any; // TODO ;
    setToolLocalTransform(): any; // TODO ;
    setLocalPos(tm: DzTime, pos: DzVec3): void;
    setLocalPos(pos: DzVec3): void;
    setLocalPos(tm: DzTime, pos: DzVec3): void;
    setLocalPos(pos: DzVec3): void;
    setLocalRot(tm: DzTime, rot: DzQuat): void;
    setLocalRot(rot: DzQuat): void;
    setLocalRot(tm: DzTime, rot: DzQuat): void;
    setLocalRot(rot: DzQuat): void;
    setToolLocalRot(): any; // TODO ;
    setToolLocalRot(): any; // TODO ;
    setLocalScale(tm: DzTime, scale: DzMatrix3): void;
    setLocalScale(tm: DzTime, scale: DzMatrix3, generalScale: number): void;
    setLocalScale(scale: DzMatrix3): void;
    setLocalScale(scale: DzMatrix3, generalScale: number): void;
    setLocalScale(tm: DzTime, scale: DzMatrix3): void;
    setLocalScale(tm: DzTime, scale: DzMatrix3, generalScale: number): void;
    setLocalScale(scale: DzMatrix3): void;
    setLocalScale(scale: DzMatrix3, generalScale: number): void;
    setLocalScale(tm: DzTime, scale: DzMatrix3): void;
    setLocalScale(tm: DzTime, scale: DzMatrix3, generalScale: number): void;
    setLocalScale(scale: DzMatrix3): void;
    setLocalScale(scale: DzMatrix3, generalScale: number): void;
    setLocalScale(tm: DzTime, scale: DzMatrix3): void;
    setLocalScale(tm: DzTime, scale: DzMatrix3, generalScale: number): void;
    setLocalScale(scale: DzMatrix3): void;
    setLocalScale(scale: DzMatrix3, generalScale: number): void;
    setOrientation(orientation: DzQuat, makeDefault: boolean): void;
    setOrientation(orientation: DzQuat, makeDefault: boolean): void;
    setOrientationAngles(): any; // TODO ;
    setOrientationAngles(): any; // TODO ;
    setOrigin(origin: DzVec3, makeDefault: boolean): void;
    setOrigin(origin: DzVec3, makeDefault: boolean): void;
    setEndPoint(endPnt: DzVec3, makeDefault: boolean): void;
    setEndPoint(endPnt: DzVec3, makeDefault: boolean): void;
    adjustOrientation(): any; // TODO ;
    adjustOrientationAngles(): any; // TODO ;
    adjustOrigin(): any; // TODO ;
    adjustEndPoint(): any; // TODO ;
    clearTransformData(range: DzTimeRange): void;
    clearAllTransformData(): void;
    setInheritScale(onOff: boolean): void;
    setPointAtTarget(target: DzNode): void;
    setPointAtStrength(strength: number): void;
    setHidden(onOff: boolean): void;
    setPromoteSelection(): any; // TODO ;
    setRenderPriority(priority: number): void;
    setRenderPriority(priority: number): void;
    setRenderPriority(priority: number): void;
    setRenderPriority(priority: number): void;
    setVisibleInRender(onOff: boolean): void;
    setSelectionMap(map: DzSelectionMap): void;
    setPresentation(pres: DzPresentation): void;
    setPreviewBox(box: DzOrientedBox3): void;
    invalidateBoundingBoxes(checkSkeleton: boolean): void;
    invalidateBoundingBoxes(checkSkeleton: boolean): void;
    getSkeleton(): DzSkeleton;
    getRotationOrder(): DzRotationOrder;
    isSelected(): boolean;
    isSelectable(): boolean;
    isVisible(): boolean;
    isVisibileInRender(): boolean;
    castsShadow(): boolean;
    getObject(): DzObject;
    getNumNodeChildren(): number;
    getNodeChild(i: number): DzNode;
    getNodeChildren(scanHierarchy: boolean): QObject[];
    getNodeChildren(nodes: DzNode[], scanHierarchy: boolean): void;
    getNodeChildren(scanHierarchy: boolean): QObject[];
    getNodeChildren(nodes: DzNode[], scanHierarchy: boolean): void;
    isNodeChild(node: DzNode): boolean;
    findNodeChild(name: QString, scanHierarchy: boolean): DzNode;
    findNodeChild(name: QString, scanHierarchy: boolean): DzNode;
    findNodeChildByAssetID(assetID: QString, scanHierarchy: boolean, checkSource: boolean): DzNode;
    findNodeChildByAssetID(assetID: QString, scanHierarchy: boolean, checkSource: boolean): DzNode;
    findNodeChildByAssetID(assetID: QString, scanHierarchy: boolean, checkSource: boolean): DzNode;
    findNodeChildByNameOrAlias(): any; // TODO ;
    findNodeChildByNameOrAlias(): any; // TODO ;
    getNodeParent(): DzNode;
    isRootNode(): boolean;
    getLocalBoundingBox(): DzBox3;
    getLocalOrientedBox(): DzOrientedBox3;
    getWSBoundingBox(): DzBox3;
    getWSOrientedBox(): DzOrientedBox3;
    getPreviewBox(): DzOrientedBox3;
    getWSTransform(tm: DzTime, defaultVal: boolean): DzMatrix3;
    getWSTransform(): DzMatrix3;
    getWSTransform(tm: DzTime, pos: DzVec3, rot: DzQuat, scale: DzMatrix3, defaults: boolean): void;
    getWSTransform(pos: DzVec3, rot: DzQuat, scale: DzMatrix3): void;
    getWSTransform(tm: DzTime, defaultVal: boolean): DzMatrix3;
    getWSTransform(): DzMatrix3;
    getWSTransform(tm: DzTime, pos: DzVec3, rot: DzQuat, scale: DzMatrix3, defaults: boolean): void;
    getWSTransform(pos: DzVec3, rot: DzQuat, scale: DzMatrix3): void;
    getWSTransform(tm: DzTime, defaultVal: boolean): DzMatrix3;
    getWSTransform(): DzMatrix3;
    getWSTransform(tm: DzTime, pos: DzVec3, rot: DzQuat, scale: DzMatrix3, defaults: boolean): void;
    getWSTransform(pos: DzVec3, rot: DzQuat, scale: DzMatrix3): void;
    getToolWSTransform(): any; // TODO ;
    getToolWSTransform(): any; // TODO ;
    getWSPos(tm: DzTime, defaultVal: boolean): DzVec3;
    getWSPos(): DzVec3;
    getWSPos(tm: DzTime, defaultVal: boolean): DzVec3;
    getWSPos(): DzVec3;
    getWSPos(tm: DzTime, defaultVal: boolean): DzVec3;
    getWSPos(): DzVec3;
    getWSRot(tm: DzTime, defaultVal: boolean): DzQuat;
    getWSRot(): DzQuat;
    getWSRot(tm: DzTime, defaultVal: boolean): DzQuat;
    getWSRot(): DzQuat;
    getWSRot(tm: DzTime, defaultVal: boolean): DzQuat;
    getWSRot(): DzQuat;
    getToolWSRot(): any; // TODO ;
    getToolWSRot(): any; // TODO ;
    getWSScale(tm: DzTime, defaultVal: boolean): DzMatrix3;
    getWSScale(): DzMatrix3;
    getWSScale(tm: DzTime, defaultVal: boolean): DzMatrix3;
    getWSScale(): DzMatrix3;
    getWSScale(tm: DzTime, defaultVal: boolean): DzMatrix3;
    getWSScale(): DzMatrix3;
    getLocalTransform(tm: DzTime, defaultVal: boolean): DzMatrix3;
    getLocalTransform(): DzMatrix3;
    getLocalTransform(tm: DzTime, pos: DzVec3, rot: DzQuat, scale: DzMatrix3, defaults: boolean): void;
    getLocalTransform(pos: DzVec3, rot: DzQuat, scale: DzMatrix3): void;
    getLocalTransform(tm: DzTime, defaultVal: boolean): DzMatrix3;
    getLocalTransform(): DzMatrix3;
    getLocalTransform(tm: DzTime, pos: DzVec3, rot: DzQuat, scale: DzMatrix3, defaults: boolean): void;
    getLocalTransform(pos: DzVec3, rot: DzQuat, scale: DzMatrix3): void;
    getLocalTransform(tm: DzTime, defaultVal: boolean): DzMatrix3;
    getLocalTransform(): DzMatrix3;
    getLocalTransform(tm: DzTime, pos: DzVec3, rot: DzQuat, scale: DzMatrix3, defaults: boolean): void;
    getLocalTransform(pos: DzVec3, rot: DzQuat, scale: DzMatrix3): void;
    getLocalPos(tm: DzTime, defaultVal: boolean): DzVec3;
    getLocalPos(): DzVec3;
    getLocalPos(tm: DzTime, defaultVal: boolean): DzVec3;
    getLocalPos(): DzVec3;
    getLocalPos(tm: DzTime, defaultVal: boolean): DzVec3;
    getLocalPos(): DzVec3;
    getLocalRot(tm: DzTime, defaultVal: boolean): DzQuat;
    getLocalRot(): DzQuat;
    getLocalRot(tm: DzTime, defaultVal: boolean): DzQuat;
    getLocalRot(): DzQuat;
    getLocalRot(tm: DzTime, defaultVal: boolean): DzQuat;
    getLocalRot(): DzQuat;
    getToolLocalRot(): any; // TODO ;
    getToolLocalRot(): any; // TODO ;
    getLocalScale(tm: DzTime, defaultVal: boolean): DzMatrix3;
    getLocalScale(): DzMatrix3;
    getLocalScale(tm: DzTime, defaultVal: boolean): DzMatrix3;
    getLocalScale(): DzMatrix3;
    getLocalScale(tm: DzTime, defaultVal: boolean): DzMatrix3;
    getLocalScale(): DzMatrix3;
    getOrientation(defaultVal: boolean): DzQuat;
    getOrientation(defaultVal: boolean): DzQuat;
    updateOrientation(): void;
    getOrigin(defaultVal: boolean): DzVec3;
    getOrigin(defaultVal: boolean): DzVec3;
    getEndPoint(defaultVal: boolean): DzVec3;
    getEndPoint(defaultVal: boolean): DzVec3;
    getSelectionMap(): DzSelectionMap;
    getXPosControl(): DzFloatProperty;
    getYPosControl(): DzFloatProperty;
    getZPosControl(): DzFloatProperty;
    getXRotControl(): DzFloatProperty;
    getYRotControl(): DzFloatProperty;
    getZRotControl(): DzFloatProperty;
    getScaleControl(): DzFloatProperty;
    getXScaleControl(): DzFloatProperty;
    getYScaleControl(): DzFloatProperty;
    getZScaleControl(): DzFloatProperty;
    getSelectabilityControl(): DzBoolProperty;
    getVisibilityControl(): DzBoolProperty;
    getRenderVisibilityControl(): DzBoolProperty;
    getShadowControl(): DzBoolProperty;
    getRenderPriorityControl(): DzEnumProperty;
    getPointAtControl(): DzNumericNodeProperty;
    getOriginXControl(): DzFloatProperty;
    getOriginYControl(): DzFloatProperty;
    getOriginZControl(): DzFloatProperty;
    getEndXControl(): DzFloatProperty;
    getEndYControl(): DzFloatProperty;
    getEndZControl(): DzFloatProperty;
    getOrientXControl(): DzFloatProperty;
    getOrientYControl(): DzFloatProperty;
    getOrientZControl(): DzFloatProperty;
    inheritsScale(): boolean;
    isHidden(): boolean;
    isInScene(): any; // TODO ;
    isSelectionPromoted(): any; // TODO ;
    getRenderPriority(): number;
    getPresentation(): DzPresentation;
    getSelectionNode(): any; // TODO ;
    isBoneSelectingNode(): any; // TODO ;
    setInvisibleByGroup(yesNo: boolean): void;
    setUnselectableByGroup(yesNo: boolean): void;
    invisibleByGroup(): boolean;
    unselectableByGroup(): boolean;
    getWeightMapHandler(): any; // TODO ;
    doObjectDuplicateAndSet(): any; // TODO ;
    isEditorNode(): any; // TODO ;
    getToolXRotControl(): any; // TODO ;
    getToolYRotControl(): any; // TODO ;
    getToolZRotControl(): any; // TODO ;
    invalidateCache(): void;
    selectionMapModified(): void;
    updateTransform(): void;
    updateVis(): void;
    updateRenderable(): void;
    invalidateOrientation(): any; // TODO ;
    objectDuplicateAndSet(): any; // TODO ;
    handleRendererModeChanged(): any; // TODO ;
}

declare class DzMainWindow extends QMainWindow {

    /* Properties */
    modal: boolean;
    windowModality: number;
    geometry: QObject;
    frameGeometry: QObject;
    normalGeometry: QObject;
    pos: QObject;
    frameSize: QObject;
    size: QObject;
    rect: QObject;
    childrenRect: QObject;
    childrenRegion: QObject;
    sizePolicy: QObject;
    minimumSize: QObject;
    maximumSize: QObject;
    minimumWidth: number;
    minimumHeight: number;
    maximumWidth: number;
    maximumHeight: number;
    sizeIncrement: QObject;
    baseSize: QObject;
    cursor: QObject;
    mouseTracking: boolean;
    isActiveWindow: boolean;
    focusPolicy: number;
    focus: boolean;
    contextMenuPolicy: number;
    updatesEnabled: boolean;
    visible: boolean;
    minimized: boolean;
    maximized: boolean;
    fullScreen: boolean;
    sizeHint: QObject;
    minimumSizeHint: QObject;
    acceptDrops: boolean;
    windowTitle: string;
    windowIcon: QObject;
    windowIconText: string;
    windowOpacity: number;
    windowModified: boolean;
    accessibleName: string;
    accessibleDescription: string;
    layoutDirection: number;
    autoFillBackground: boolean;
    styleSheet: string;
    locale: QObject;
    windowFilePath: string;
    inputMethodHints: number;
    //iconSize: QObject;
    //toolButtonStyle: number;
    animated: boolean;
    //documentMode: boolean;
    //tabShape: number;
    dockNestingEnabled: boolean;
    //dockOptions: number;
    //unifiedTitleAndToolBarOnMac: boolean;
    alwaysOnTop: boolean;
    toolTipsEnabled: boolean;
    AnimatedDocks: number;
    AllowNestedDocks: number;
    AllowTabbedDocks: number;
    ForceTabbedDocks: number;
    VerticalTabs: number;

    /* Methods */
    customContextMenuRequested(): any; // TODO ;
    setEnabled(): any; // TODO ;
    setDisabled(): any; // TODO ;
    setWindowModified(): any; // TODO ;
    setWindowTitle(): any; // TODO ;
    setStyleSheet(): any; // TODO ;
    setFocus(): any; // TODO ;
    update(): any; // TODO ;
    repaint(): any; // TODO ;
    setVisible(): any; // TODO ;
    setHidden(): any; // TODO ;
    show(): any; // TODO ;
    hide(): any; // TODO ;
    setShown(): any; // TODO ;
    showMinimized(): any; // TODO ;
    showMaximized(): any; // TODO ;
    showFullScreen(): any; // TODO ;
    showNormal(): any; // TODO ;
    close(): any; // TODO ;
    raise(): any; // TODO ;
    lower(): any; // TODO ;
    updateMicroFocus(): any; // TODO ;
    started(): void;
    aboutToClose(): void;
    alwaysOnTopChanged(onOff: boolean): void;
    uiLockedChanged(): void;
    doDirectoryDialog(caption: QString, dir: QString): boolean;
    doDirectoryDialog(caption: QString, dir: QString): boolean;
    doFileDialog(open: boolean, title: QString, startWith: QString): boolean;
    doFileDialog(open: boolean, title: QString, startWith: QString): boolean;
    doFileDialog(open: boolean, title: QString, startWith: QString): boolean;
    doOpenFilesDialog(title: QString, startWith: QString): boolean;
    doOpenFilesDialog(title: QString, startWith: QString): boolean;
    doOpenFilesDialog(title: QString, startWith: QString): boolean;
    doFileDialog(open: boolean, title: QString, startWith: QString): boolean;
    doFileDialog(open: boolean, title: QString, startWith: QString): boolean;
    doFileDialog(open: boolean, title: QString, startWith: QString): boolean;
    doOpenFilesDialog(title: QString, startWith: QString): boolean;
    doOpenFilesDialog(title: QString, startWith: QString): boolean;
    doOpenFilesDialog(title: QString, startWith: QString): boolean;
    displayPrompt(msg: QString, millisec: number): void;
    displayPrompt(msg: QString, millisec: number): void;
    removePrompt(): void;
    repaintActive3DViewport(): void;
    doImageDialog(open: boolean, filename: QString, parent: QWidget): boolean;
    doImageDialog(open: boolean, filename: QString, parent: QWidget): boolean;
    doImageDialog(open: boolean, filename: QString, parent: QWidget): boolean;
    doTextureFolderDialog(filename: QString, parent: QWidget): boolean;
    doTextureFolderDialog(filename: QString, parent: QWidget): boolean;
    doTextureFolderDialog(filename: QString, parent: QWidget): boolean;
    doVideoClipSaveDialog(filename: QString, parent: QWidget): boolean;
    doVideoClipSaveDialog(filename: QString, parent: QWidget): boolean;
    doVideoClipSaveDialog(filename: QString, parent: QWidget): boolean;
    doAudioClipOpenDialog(filename: QString, parent: QWidget): boolean;
    doAudioClipOpenDialog(filename: QString, parent: QWidget): boolean;
    doAudioClipOpenDialog(filename: QString, parent: QWidget): boolean;
    doFileOpen(parent: QWidget): boolean;
    doFileOpen(parent: QWidget): boolean;
    doFileMerge(parent: QWidget): boolean;
    doFileMerge(parent: QWidget): boolean;
    doFileSave(parent: QWidget): boolean;
    doFileSave(parent: QWidget): boolean;
    doFileSaveAs(finalFileName: QString, parent: QWidget, startWith: QString): boolean;
    doFileSaveAs(parent: QWidget, startWith: QString): boolean;
    doFileSaveAs(finalFileName: QString, parent: QWidget, startWith: QString): boolean;
    doFileSaveAs(parent: QWidget, startWith: QString): boolean;
    doFileSaveAs(finalFileName: QString, parent: QWidget, startWith: QString): boolean;
    doFileSaveAs(parent: QWidget, startWith: QString): boolean;
    doFileSaveAs(finalFileName: QString, parent: QWidget, startWith: QString): boolean;
    doFileSaveAs(parent: QWidget, startWith: QString): boolean;
    doFileSaveAs(finalFileName: QString, parent: QWidget, startWith: QString): boolean;
    doFileSaveAs(parent: QWidget, startWith: QString): boolean;
    doFileSaveAs(finalFileName: QString, parent: QWidget, startWith: QString): boolean;
    doFileSaveAs(parent: QWidget, startWith: QString): boolean;
    doDAZSave(parent: QWidget): boolean;
    doDAZSave(parent: QWidget): boolean;
    doDAZSaveAs(finalFileName: QString, parent: QWidget, startWith: QString): boolean;
    doDAZSaveAs(parent: QWidget, startWith: QString): boolean;
    doDAZSaveAs(finalFileName: QString, parent: QWidget, startWith: QString): boolean;
    doDAZSaveAs(parent: QWidget, startWith: QString): boolean;
    doDAZSaveAs(finalFileName: QString, parent: QWidget, startWith: QString): boolean;
    doDAZSaveAs(parent: QWidget, startWith: QString): boolean;
    doDAZSaveAs(finalFileName: QString, parent: QWidget, startWith: QString): boolean;
    doDAZSaveAs(parent: QWidget, startWith: QString): boolean;
    doDAZSaveAs(finalFileName: QString, parent: QWidget, startWith: QString): boolean;
    doDAZSaveAs(parent: QWidget, startWith: QString): boolean;
    doDAZSaveAs(finalFileName: QString, parent: QWidget, startWith: QString): boolean;
    doDAZSaveAs(parent: QWidget, startWith: QString): boolean;
    doFileImport(parent: QWidget): boolean;
    doFileImport(parent: QWidget): boolean;
    doGeometryImport(shape: DzShape, parent: QWidget): boolean;
    doGeometryImport(shape: DzShape, parent: QWidget): boolean;
    doFileExport(parent: QWidget): boolean;
    doFileExport(parent: QWidget): boolean;
    doImageOpen(parent: QWidget): QImage;
    doImageOpen(parent: QWidget): QImage;
    doImageSaveAs(image: QImage, filename: QString, parent: QWidget): boolean;
    doImageSaveAs(image: QImage, parent: QWidget): boolean;
    doImageSaveAs(image: QImage, filename: QString, parent: QWidget): boolean;
    doImageSaveAs(image: QImage, parent: QWidget): boolean;
    doImageSaveAs(image: QImage, filename: QString, parent: QWidget): boolean;
    doImageSaveAs(image: QImage, parent: QWidget): boolean;
    doImageSaveAs(image: QImage, filename: QString, parent: QWidget): boolean;
    doImageSaveAs(image: QImage, parent: QWidget): boolean;
    doVideoClipSaveAs(clip: DzVideoClip, parent: QWidget): boolean;
    doVideoClipSaveAs(clip: DzVideoClip, parent: QWidget): boolean;
    doNewFile(): boolean;
    askSaveChanges(): boolean;
    askTurnOffLimits(): boolean;
    checkExistingFile(name: QString): boolean;
    goFullScreen(): void;
    exitFullScreen(): void;
    isUILocked(): boolean;
    restoreUILockState(): void;
    setUILocked(onOff: boolean, storeSetting: boolean): void;
    setUILocked(onOff: boolean, storeSetting: boolean): void;
    clearUIPopUp(): void;
    getUIPopUp(): DzUIPopUpWgt;
    showUIPopUpWgt(filename: QString, posWgt: QWidget): DzUIPopUpWgt;
    showUIPopUpWgt(filename: QString, posWgt: QWidget): DzUIPopUpWgt;
    toggleUIPopUpWgt(filename: QString, posWgt: QWidget): DzUIPopUpWgt;
    toggleUIPopUpWgt(filename: QString, posWgt: QWidget): DzUIPopUpWgt;
    positionUIPopUp(posWgt: QWidget): void;
    getTopDockArea(): DzDockArea;
    getBottomDockArea(): DzDockArea;
    getLeftDockArea(): DzDockArea;
    getRightDockArea(): DzDockArea;
    getCenterDockArea(): any; // TODO ;
    dockArea(pos: QPoint): DzDockArea;
    getViewportMgr(): DzViewportMgr;
    getActionMgr(): DzActionMgr;
    getPaneMgr(): DzPaneMgr;
    getInteractiveLessonMgr(): any; // TODO ;
    showHomeDlg(): any; // TODO ;
}

declare class DzAuthor extends QObject {

    /* Properties */
    email: string;
    url: string;
    valid: boolean;

    /* Methods */
    toString(): any; // TODO ;
}

declare class DzImportMgr extends QObject {

    /* Properties */

    /* Methods */
    fileImportStarting(): void;
    fileImported(): void;
    readFile(filename: QString, importerIdx?: number, filter?: DzFileLoadFilter): DzError;
    readFile(filename: QString, importerIdx?: number, options?: DzFileIOSettings, filter?: DzFileLoadFilter): DzError;
    readGeometry(filename: QString, shape: DzShape, importerIdx: number): DzError;
    readGeometry(filename: QString, shape: DzShape, importerIdx: number, options: DzFileIOSettings): DzError;
    readGeometry(filename: QString, importerIdx: number): DzShape;
    readGeometry(filename: QString, importerIdx: number, options: DzFileIOSettings): DzShape;
    readGeometry(filename: QString, shape: DzShape, importerIdx: number): DzError;
    readGeometry(filename: QString, shape: DzShape, importerIdx: number, options: DzFileIOSettings): DzError;
    readGeometry(filename: QString, importerIdx: number): DzShape;
    readGeometry(filename: QString, importerIdx: number, options: DzFileIOSettings): DzShape;
    readGeometry(filename: QString, shape: DzShape, importerIdx: number): DzError;
    readGeometry(filename: QString, shape: DzShape, importerIdx: number, options: DzFileIOSettings): DzError;
    readGeometry(filename: QString, importerIdx: number): DzShape;
    readGeometry(filename: QString, importerIdx: number, options: DzFileIOSettings): DzShape;
    isImporting(): boolean;
    getImportPath(): QString;
    setImportPath(path: QString): void;
    getImportFileName(): QString;
    setImportFileName(fileName: QString): void;
    getNumImporters(): number;
    getImporter(i: number): DzImporter;
    canImport(filename: QString): boolean;
    findImporterIndex(filename: QString): number;
    findImporter(filename: QString): DzImporter;
    findImporterByClassName(className: QString): DzImporter;
    makeImportFileFilter(filter: DzFileFilter): void;
    makeImportFileFilter(filter: DzFileFilter): void;
    makeImportFileFilter(filter: DzFileFilter): void;
    makeGeometryFileFilter(filter: DzFileFilter): void;
    makeGeometryFileFilter(filter: DzFileFilter): void;
    makeGeometryFileFilter(filter: DzFileFilter): void;
}

declare class DzExportMgr extends QObject {

    /* Properties */

    /* Methods */
    fileExportStarting(): void;
    fileExported(): void;
    exportFile(fileName: QString, exporterIndex: number): DzError;
    exportFile(fileName: QString, exporterIndex: number, options: DzFileIOSettings): DzError;
    exportFile(fileName: QString, exporterIndex: number): DzError;
    exportFile(fileName: QString, exporterIndex: number, options: DzFileIOSettings): DzError;
    getExportPath(): QString;
    setExportPath(path: QString): void;
    isExporting(): boolean;
    getNumExporters(): number;
    getExporter(i: number): DzExporter;
    canExport(filename: QString): boolean;
    findExporterIndex(filename: QString): number;
    findExporter(filename: QString): DzExporter;
    findExporterByClassName(className: QString): DzExporter;
    makeExportFileFilter(filter: DzFileFilter): void;
    makeExportFileFilter(filter: DzFileFilter): void;
}

declare class DzFileIOPresetMgr extends QObject {

    /* Properties */

    /* Methods */
    presetLoadFinished(): void;
    presetRemoved(presetName: QString, className: QString): void;
    presetAdded(presetName: QString, className: QString): void;
    getAvailablePresets(className: QString): String[];
    getAvailablePresets(className: QString): String[];
    getUserPresets(className: QString): String[];
    getUserPresets(className: QString): String[];
    getSystemPresets(className: QString): String[];
    getSystemPresets(className: QString): String[];
    getAvailableClasses(presetName: QString): String[];
    isUserPreset(presetName: QString): boolean;
    isSystemPreset(presetName: QString): boolean;
    presetExists(presetName: QString, className: QString): boolean;
    presetExists(id: number, className: QString): boolean;
    presetExists(presetName: QString, className: QString): boolean;
    presetExists(id: number, className: QString): boolean;
    presetExists(presetName: QString, className: QString): boolean;
    presetExists(id: number, className: QString): boolean;
    presetExists(presetName: QString, className: QString): boolean;
    presetExists(id: number, className: QString): boolean;
    saveUserPreset(presetName: QString, className: QString, keepCommonSettings: boolean, overwrite: boolean, settings: DzFileIOSettings): boolean;
    removeUserPreset(presetName: QString, className: QString): boolean;
    getPresetName(id: number, className: QString): QString;
    getPresetName(id: number, className: QString): QString;
    getPresetID(presetName: QString, className: QString): number;
    getPresetID(presetName: QString, className: QString): number;
    getSpecificSettings(presetName: QString, className: QString, settings: DzFileIOSettings): boolean;
    getCommonSettings(presetName: QString, settings: DzFileIOSettings): boolean;
    getCommonSettings(presetName: QString, className: QString, settings: DzFileIOSettings): boolean;
    getCommonSettings(presetName: QString, settings: DzFileIOSettings): boolean;
    getCommonSettings(presetName: QString, className: QString, settings: DzFileIOSettings): boolean;
    getAllSettings(presetName: QString, className: QString, settings: DzFileIOSettings): boolean;
    getSpecificDefaults(className: QString, settings: DzFileIOSettings): boolean;
    getCommonDefaults(className: QString, settings: DzFileIOSettings): boolean;
    getAllDefaults(className: QString, settings: DzFileIOSettings): boolean;
    getAllCurrentSettings(className: QString, settings: DzFileIOSettings): boolean;
    getCurrentCommonSettings(className: QString, settings: DzFileIOSettings): boolean;
    getCurrentSpecificSettings(className: QString, settings: DzFileIOSettings): boolean;
    getCommonApplicationDefaults(settings: DzFileIOSettings): void;
    getCustomPresetLabel(): QString;
    getLateralAxisKey(): QString;
    getVerticalAxisKey(): QString;
    getDepthAxisKey(): QString;
    getInvertLateralAxisKey(): QString;
    getInvertVerticalAxisKey(): QString;
    getInvertDepthAxisKey(): QString;
    getScaleKey(): QString;
}

declare class DzSaveFilterMgr extends QObject {

    /* Properties */
    UseExtension: number;
    TextScriptFile: number;
    DAZScriptFile: number;
    EncDAZScriptFile: number;

    /* Methods */
    writeFile(mode: number, fileName: QString, filterName: QString): DzError;
    writeFile(mode: number, fileName: QString, filterName: QString): DzError;
    doSave(filterIndex: number, dir: QString): DzError;
    doSave(filterIndex: number, dir: QString): DzError;
    getSavePath(): QString;
    getNumFilters(): number;
    getFilterName(i: number): QString;
    getFilter(i: number): DzSaveFilter;
    findFilter(className: QString): number;
}

declare class DzAssetIOMgr extends QObject {

    /* Properties */
    DefaultMethod: number;
    OpenNew: number;
    MergeFile: number;

    /* Methods */
    assetImportStarting(): void;
    assetImported(): void;
    assetSaved(): void;
    doLoad(filePath: QString, open: DzOpenMethod, filter: DzFileLoadFilter): DzError;
    doLoad(filePath: QString, open: DzOpenMethod, filter: DzFileLoadFilter): DzError;
    doLoad(filePath: QString, open: DzOpenMethod, filter: DzFileLoadFilter): DzError;
    doScopedLoad(): any; // TODO ;
    doScopedLoad(): any; // TODO ;
    doSave(filter: DzAssetIOFilter, filePath: QString, saveOnly: boolean, dir: QString): DzError;
    doSave(filterIndex: number): DzError;
    doSave(filterIndex: number, filePath: QString, dir: QString, category: QString): DzError;
    doSave(filter: DzAssetIOFilter, filePath: QString, saveOnly: boolean, dir: QString): DzError;
    doSave(filterIndex: number): DzError;
    doSave(filterIndex: number, filePath: QString, dir: QString, category: QString): DzError;
    doSave(filter: DzAssetIOFilter, filePath: QString, saveOnly: boolean, dir: QString): DzError;
    doSave(filterIndex: number): DzError;
    doSave(filterIndex: number, filePath: QString, dir: QString, category: QString): DzError;
    doSave(filter: DzAssetIOFilter, filePath: QString, saveOnly: boolean, dir: QString): DzError;
    doSave(filterIndex: number): DzError;
    doSave(filterIndex: number, filePath: QString, dir: QString, category: QString): DzError;
    doSave(filter: DzAssetIOFilter, filePath: QString, saveOnly: boolean, dir: QString): DzError;
    doSave(filterIndex: number): DzError;
    doSave(filterIndex: number, filePath: QString, dir: QString, category: QString): DzError;
    doSave(filter: DzAssetIOFilter, filePath: QString, saveOnly: boolean, dir: QString): DzError;
    doSave(filterIndex: number): DzError;
    doSave(filterIndex: number, filePath: QString, dir: QString, category: QString): DzError;
    doSave(filter: DzAssetIOFilter, filePath: QString, saveOnly: boolean, dir: QString): DzError;
    doSave(filterIndex: number): DzError;
    doSave(filterIndex: number, filePath: QString, dir: QString, category: QString): DzError;
    doSaveWithOptions(filter: DzAssetIOFilter, options: DzFileIOSettings, saveOnly: boolean): DzError;
    doSaveWithOptions(filter: DzAssetIOFilter, options: DzFileIOSettings, saveOnly: boolean): DzError;
    doSaveWithOptions(filter: DzAssetIOFilter, options: DzFileIOSettings, saveOnly: boolean): DzError;
    doSaveWithOptions(filter: DzAssetIOFilter, options: DzFileIOSettings, saveOnly: boolean): DzError;
    doSaveWithOptions(filter: DzAssetIOFilter, options: DzFileIOSettings, saveOnly: boolean): DzError;
    doSceneSave(filePath: QString, category: QString): DzError;
    doSceneSave(filePath: QString, category: QString): DzError;
    doSceneSaveAs(): DzError;
    doSceneSaveAs(filePath: QString, startingDir: QString, category: QString): DzError;
    doSceneSaveAs(): DzError;
    doSceneSaveAs(filePath: QString, startingDir: QString, category: QString): DzError;
    doSceneSaveAs(): DzError;
    doSceneSaveAs(filePath: QString, startingDir: QString, category: QString): DzError;
    doSceneSaveAs(): DzError;
    doSceneSaveAs(filePath: QString, startingDir: QString, category: QString): DzError;
    getSavePath(): QString;
    getLoadPath(): QString;
    getDSONAssetCachePath(): QString;
    setDSONAssetCachePath(cacheFullPath: QString): void;
    getDefaultDSONAssetCachePath(): QString;
    getNumFilters(): number;
    getFilterName(i: number): QString;
    getFilter(i: number): DzAssetIOFilter;
    findFilter(className: QString): number;
}

declare class DzContentMgr extends DzBase {

    /* Properties */
    startupScene: string;
    autoRefresh: boolean;
    showBuiltInContent: boolean;
    maxRecentFiles: number;
    NativeDirs: number;
    PoserDirs: number;
    ImportDirs: number;
    BuiltInDirs: number;
    NativeAndBuiltInDirs: number;
    AllDirs: number;

    /* Methods */
    contentDirectoryListChanged(): void;
    importDirectoryListChanged(): void;
    poserDirectoryListChanged(): void;
    mdlDirectoryListChanged(): any; // TODO ;
    folderTreeChanged(): void;
    autoRefreshChanged(onOff: boolean): void;
    startupSceneChanged(filename: QString): void;
    onNewSceneChanged(filename: QString): void;
    newFileCreated(filename: QString): void;
    recentFileListChanged(): any; // TODO ;
    loadScriptStarting(): any; // TODO ;
    loadScriptFinished(): any; // TODO ;
    scriptLoadStarting(): any; // TODO ;
    scriptLoadFailed(): any; // TODO ;
    scriptStarting(): any; // TODO ;
    scriptFailed(): any; // TODO ;
    scriptFinished(): any; // TODO ;
    setUseDatabaseSearch(useDatabase: boolean): void;
    setCheckCompatibilityOn(useCheckCompatibility: boolean): void;
    usingDatabaseSearch(): boolean;
    usingCheckCompatibility(): boolean;
    doContentSearch(): boolean;
    clearRecentFileList(): any; // TODO ;
    addRecentFile(): any; // TODO ;
    getRecentFileList(): any; // TODO ;
    addContentDirectory(directory: QString, saveSetting: boolean): void;
    addContentDirectory(directory: QString, saveSetting: boolean): void;
    addImportDirectory(directory: QString, saveSetting: boolean): void;
    addImportDirectory(directory: QString, saveSetting: boolean): void;
    addPoserDirectory(directory: QString, saveSetting: boolean): void;
    addPoserDirectory(directory: QString, saveSetting: boolean): void;
    addMDLDirectory(): any; // TODO ;
    addMDLDirectory(): any; // TODO ;
    removeContentDirectory(directory: QString): boolean;
    removeAllContentDirectories(): void;
    removeImportDirectory(directory: QString): boolean;
    removeAllImportDirectories(): void;
    removePoserDirectory(directory: QString): boolean;
    removeAllPoserDirectories(): void;
    removeMDLDirectory(): any; // TODO ;
    removeAllMDLDirectories(): any; // TODO ;
    refresh(reloadIcons: boolean): void;
    refresh(reloadIcons: boolean): void;
    openFile(filename: QString, merge: boolean): boolean;
    openFile(filename: QString, merge: boolean): boolean;
    mergeFiles(filenames: String[]): boolean;
    shouldMerge(): any; // TODO ;
    openNativeFile(filename: QString, isMerge: boolean): boolean;
    openNativeFile(filename: QString, isMerge: boolean): boolean;
    importFile(path: QString): boolean;
    fileCreated(filename: QString): void;
    contentDirectoryIsMapped(): any; // TODO ;
    poserDirectoryIsMapped(dirPath: QString): boolean;
    importDirectoryIsMapped(): any; // TODO ;
    mdlDirectoryIsMapped(): any; // TODO ;
    getContentPath(node: DzNode): QString;
    getRelativePath(absolutePath: QString, useImportFolders: boolean): QString;
    getRelativePath(folderPath: QString, absolutePath: QString): QString;
    getRelativePaths(absolutePath: QString, useImportFolders: boolean): String[];
    getMappedPath(folderPath: QString, path: QString, isRelative: boolean): QString;
    getMappedPath(path: QString, useImportFolders: boolean, isRelative: boolean): QString;
    getAbsolutePath(folderPath: QString, relativePath: QString): QString;
    getAbsolutePath(relativePath: QString, useImportFolders: boolean, perferredPath: QString): QString;
    getAbsolutePath(folderPath: QString, relativePath: QString): QString;
    getAbsolutePath(relativePath: QString, useImportFolders: boolean, perferredPath: QString): QString;
    getAbsolutePaths(relativePath: QString, useImportFolders: boolean): String[];
    getPoserAbsolutePath(relativePath: QString): QString;
    getNativeAbsolutePath(relativePath: QString): QString;
    getImportAbsolutePath(relativePath: QString): QString;
    getMDLAbsolutePath(): any; // TODO ;
    getMDLRelativePath(): any; // TODO ;
    getBuiltInContentDirectory(): DzContentFolder;
    getBuiltInContentDirectoryPath(): QString;
    getNumContentDirectories(): number;
    getContentDirectory(which: number): DzContentFolder;
    getContentDirectoryPath(which: number): QString;
    getNumImportDirectories(): number;
    getImportDirectory(which: number): DzContentFolder;
    getImportDirectoryPath(which: number): QString;
    getNumPoserDirectories(): number;
    getPoserDirectory(which: number): DzContentFolder;
    getPoserDirectoryPath(which: number): QString;
    getNumMDLDirectories(): any; // TODO ;
    getMDLDirectory(): any; // TODO ;
    getMDLDirectoryPath(): any; // TODO ;
    getNumBuiltInMDLDirectories(): any; // TODO ;
    getBuiltInMDLDirectory(): any; // TODO ;
    getBuiltInMDLDirectoryPath(): any; // TODO ;
    findFile(partialPath: QString, dirTypes?: number): QString;
    findBaseDirectory(path: QString, useImportFolders: boolean): DzContentFolder;
    doDirNumCheck(): void;
    getContentReplaceMgr(): DzContentReplaceMgr;
    getDefaultContentDir(): QString;
    saveAllMappedDirectories(): void;
    isDirectoryMapped(directory: QString): boolean;
    reloadSceneAssetsFromSource(settings: DzSettings): boolean;
    reloadAssetsFromSource(sceneNode: DzNode, settings: DzSettings, srcFilePath: QString): DzError;
    reloadAssetsFromSource(sceneNodes: DzNode[], settings: DzSettings, absolutePath: QString): DzError;
    reloadAssetsFromSource(sceneNode: DzNode, settings: DzSettings, srcFilePath: QString): DzError;
    reloadAssetsFromSource(sceneNodes: DzNode[], settings: DzSettings, absolutePath: QString): DzError;
    reloadAssetsFromSource(sceneNode: DzNode, settings: DzSettings, srcFilePath: QString): DzError;
    reloadAssetsFromSource(sceneNodes: DzNode[], settings: DzSettings, absolutePath: QString): DzError;
    findSourcePathForNode(sceneNode: DzNode): QString;
}

declare class DzAssetMgr extends DzBase {

    /* Properties */
    None: number;
    WholeWord: number;
    RegExp: number;
    NativeScenes: number;
    NativeScripts: number;
    PoserFigures: number;
    PoserPoses: number;
    PoserProps: number;
    PoserHair: number;
    PoserFaces: number;
    PoserLights: number;
    PoserCameras: number;
    PoserHands: number;
    PoserMaterials: number;
    PoserScenes: number;
    ImportFiles: number;
    AllNativeFiles: number;
    NoNativeFilesMask: number;
    AllPoserFiles: number;
    NoPoserFilesMask: number;
    AllFiles: number;
    DefaultOptions: number;

    /* Methods */
    categoryUpdate(idPath: QVariant[]): void;
    containerUpdate(idPath: QVariant[]): void;
    markFoldersContainingNewContentChanged(): void;
    showLargeIconsChanged(): void;
    showExtensionsChanged(): void;
    showAssetToolTipChanged(): void;
    itemsPerPageChanged(newPerPage: number): void;
    typeListChanged(): void;
    compatibilityBaseListChanged(): void;
    basePathsChanged(): void;
    storeListChanged(): void;
    getPoserDirs(): DzTopLevelAssetContainer;
    getContentDirs(): DzTopLevelAssetContainer;
    getImportDirs(): DzTopLevelAssetContainer;
    getProducts(): DzTopLevelAssetContainer;
    getCategories(): DzCategoryAssetContainer;
    saveUserDBData(directory: QString, prefix: QString): DzError;
    getMetaHost(): QString;
    setCompatibilityBase(uri: QString, compatibility: DzDBCompatibilityBaseTable, isVendor: boolean): boolean;
    getStudioDirID(): QVariant;
    getImportDirID(): QVariant;
    getPoserDirID(): QVariant;
    getCategoriesID(): QVariant;
    getProductsID(): QVariant;
    setTopLevelPoserNameOnContainer(name: QString, cont: DzFolderAssetContainer): void;
    normalizePath(type: QString, relative: boolean): QString;
    normalizePath(type: QString, relative: boolean): QString;
    escapeSearchTerm(searchTerm: QString): QString;
    getRealPathCasing(path: QString, search: QString): QString;
    getStudioExcludes(): String[];
    updateUserMetadata(): void;
    emitCategoryChanged(idPath: QVariant[]): void;
    markCategoriesChanged(): void;
    markProductsChanged(): void;
    showLargeIcons(): boolean;
    showExtensions(): boolean;
    showAssetToolTip(): boolean;
    getNumMaxItemsPerPage(): number;
    getMaxChunkSize(): number;
    getMarkFoldersContainingNewContent(): boolean;
    setMarkFoldersContainingNewContent(onOff: boolean): void;
    setShowLargeIcons(onOff: boolean): void;
    setShowExtensions(onOff: boolean): void;
    setShowAssetToolTip(onOff: boolean): void;
    setMaxItemsPerPage(maxNum: number): void;
    setMaxChunkSize(maxSize: number): void;
    refreshTypes(): void;
    getTypes(): String[];
    findTypeID(type: QString, create: boolean, defaultLoad: boolean): number;
    findTypeID(type: QString, create: boolean, defaultLoad: boolean): number;
    findTypeID(type: QString, create: boolean, defaultLoad: boolean): number;
    createType(type: QString, defaultLoad: boolean): number;
    getType(id: number): QString;
    findTypeRowID(): any; // TODO ;
    findTypeRowID(): any; // TODO ;
    findTypeRowID(): any; // TODO ;
    createTypeWithRowID(): any; // TODO ;
    getTypeByRowID(): any; // TODO ;
    getAudiences(): String[];
    findAudienceID(audience: QString): number;
    getAudience(id: number): QString;
    getRootCategoryStrings(): String[];
    refreshCategoryRoots(): void;
    findCompatibilityBaseTable(plat: QString, create: boolean): DzDBCompatibilityBaseTable;
    findCompatibilityBaseTable(plat: QString, create: boolean): DzDBCompatibilityBaseTable;
    findCompatibilityBaseID(plat: QString, create: boolean): number;
    findCompatibilityBaseID(plat: QString, create: boolean): number;
    createCompatibilityBase(plat: QString): number;
    getCompatibilityBase(id: number): QString;
    findCompatibilityBaseRowID(): any; // TODO ;
    findCompatibilityBaseRowID(): any; // TODO ;
    createCompatibilityBaseWithRowID(): any; // TODO ;
    getCompatibilityBaseByRowID(): any; // TODO ;
    refreshBasePaths(): void;
    getBasePaths(): String[];
    findBasePathID(basePath: QString, create: boolean): number;
    findBasePathID(basePath: QString, create: boolean): number;
    createBasePath(basePath: QString): number;
    getBasePath(id: number): QString;
    removeAndCleanBasePath(id: number): void;
    findBasePathRowID(): any; // TODO ;
    findBasePathRowID(): any; // TODO ;
    createBasePathWithRowID(): any; // TODO ;
    getBasePathByRowID(): any; // TODO ;
    removeAndCleanBasePathByRowID(): any; // TODO ;
    getUnMappedBasePaths(): String[];
    refreshStores(): void;
    getStoresIDs(): String[];
    getStoreUrl(storeID: QString): QString;
    getStoreToken(storeID: QString): QString;
    createStore(storeID: QString, token: QString, url: QString): boolean;
    stopDBSearch(): void;
    stopProductSyncThread(): void;
    stopFileSearch(): void;
    stopFileScan(): void;
    stopSearchForFileAssociations(): void;
    stopStoreSearch(): void;
    stopSearchForProducts(): void;
    stopAllSearches(): void;
    //searchForFileAssociations(tab: DzDBContentTable, DzSearchContainerPtr: \/): boolean;
    //searchForFileAssociations(tab: DzDBContentTable, DzSearchContainerPtr: \/): boolean;
    //searchForFileAssociations(tab: DzDBContentTable, DzSearchContainerPtr: \/): boolean;
    scanFiles(opts: number, markFound: boolean, addToUnassigned: boolean, onlyNewToUnassigned: boolean, finishObj: QObject, progress: QObject): void;
    scanFiles(opts: number, markFound: boolean, addToUnassigned: boolean, onlyNewToUnassigned: boolean, finishObj: QObject, progress: QObject): void;
    scanFiles(opts: number, markFound: boolean, addToUnassigned: boolean, onlyNewToUnassigned: boolean, finishObj: QObject, progress: QObject): void;
    searchFiles(str: QString, opts: number, finishObj: QObject): DzSearchContainerPtr;
    searchFiles(str: QString, opts: number, finishObj: QObject): DzSearchContainerPtr;
    searchFiles(str: QString, opts: number, finishObj: QObject): DzSearchContainerPtr;
    searchDB(str: QString, opts: number, finishObj: QObject): DzSearchContainerPtr;
    searchDB(str: QString, categories: String[], compatibilityBases: String[]): DzSearchContainerPtr;
    searchDB(str: QString, opts: number, finishObj: QObject): DzSearchContainerPtr;
    searchDB(str: QString, categories: String[], compatibilityBases: String[]): DzSearchContainerPtr;
    searchDB(str: QString, opts: number, finishObj: QObject): DzSearchContainerPtr;
    searchDB(str: QString, categories: String[], compatibilityBases: String[]): DzSearchContainerPtr;
    searchDB(str: QString, opts: number, finishObj: QObject): DzSearchContainerPtr;
    searchDB(str: QString, categories: String[], compatibilityBases: String[]): DzSearchContainerPtr;
    searchDB(str: QString, opts: number, finishObj: QObject): DzSearchContainerPtr;
    searchDB(str: QString, categories: String[], compatibilityBases: String[]): DzSearchContainerPtr;
    searchDB(str: QString, opts: number, finishObj: QObject): DzSearchContainerPtr;
    searchDB(str: QString, categories: String[], compatibilityBases: String[]): DzSearchContainerPtr;
    searchDB(str: QString, opts: number, finishObj: QObject): DzSearchContainerPtr;
    searchDB(str: QString, categories: String[], compatibilityBases: String[]): DzSearchContainerPtr;
    productSearchDB(str: QString, categories: String[]): DzProductHolderContainerPtr;
    productSearchDB(str: QString, categories: String[]): DzProductHolderContainerPtr;
    productSearchDB(str: QString, categories: String[]): DzProductHolderContainerPtr;
    storeSearch(str: QString, types: String[]): DzProductHolderContainerPtr;
    storeSearch(str: QString, types: String[]): DzProductHolderContainerPtr;
    storeSearch(str: QString, types: String[]): DzProductHolderContainerPtr;
    getDatabaseFilePath(): QString;
    vacuumDatabase(): boolean;
    markAllContentSeen(notify: boolean): void;
    markAllContentSeen(notify: boolean): void;
    syncFileMetadata(relativeFilePaths: String[], prepend: boolean): void;
    syncFileMetadata(relativeFilePaths: String[], prepend: boolean): void;
    syncProductMetadata(productTables: DzDBObjectBasePtr[], prepend: boolean): void;
    syncProductMetadata(productTables: DzDBObjectBasePtr[], prepend: boolean): void;
    prependToMetadataSyncList(productGuid: QString): void;
    prependToMetadataSyncList(productGuidList: String[]): void;
    prependToMetadataSyncList(productGuid: QString): void;
    prependToMetadataSyncList(productGuidList: String[]): void;
    processSyncList(): void;
    processDBMetaFile(productRelativePath: QString, runSilent: boolean, isVendor: boolean, markNew: boolean): String[];
    processDBMetaFile(productRelativePath: QString, runSilent: boolean, isVendor: boolean, markNew: boolean): String[];
    processDBMetaFile(productRelativePath: QString, runSilent: boolean, isVendor: boolean, markNew: boolean): String[];
    processDBMetaFile(productRelativePath: QString, runSilent: boolean, isVendor: boolean, markNew: boolean): String[];
    processDBMetaFileNoEmit(): any; // TODO ;
    processDBMetaFileNoEmit(): any; // TODO ;
    processDBMetaFileNoEmit(): any; // TODO ;
    processDBMetaFileNoEmit(): any; // TODO ;
    queueDBMetaFile(productRelativePath: QString): void;
    getDBMetaFileQueue(): String[];
    processDBMetaFileQueue(): void;
    checkforNewMetadataScripts(): any; // TODO ;
    clearDBMetaFileQueue(): void;
    reimportDBMetaFiles(): void;
    getBaseAndRelativePath(absolutePath: QString, rPath: QString, basePath: QString): void;
    getAssetUriForNode(node: DzNode): QString;
    getCompatibilityBasePathForNode(node: DzNode): QString;
    getRelativePaths(absolutePath: QString, useImportFolders: boolean): String[];
    getTypeForNode(node: DzNode): QString;
    getTypeForContentFile(fullPath: QString): QString;
    getTypeForContentFile(fullPath: QString, type: QString): boolean;
    isClothingType(type: QString): boolean;
    isFigureType(type: QString): boolean;
    isHairType(type: QString): boolean;
    isPresetType(type: QString): boolean;
    isPresetForFigureType(type: QString): boolean;
    isPropType(type: QString): boolean;
    isFollowingType(type: QString): boolean;
    isReplaceableType(type: QString): boolean;
    isNeedsBaseFigureType(type: QString): boolean;
    getFirstCategory(): any; // TODO ;
    findAssetPathFromShortFilename(): any; // TODO ;
    findCategoryAndAssetFromShortFilename(): any; // TODO ;
    setCMSOptions(): any; // TODO ;
    getCMSOptions(): any; // TODO ;
    stopCMS(): any; // TODO ;
    stopCMS(): any; // TODO ;
    startCMS(): any; // TODO ;
    canStartAndStopCMS(): any; // TODO ;
    isConnectedToCMS(): any; // TODO ;
    convertFromValentina(): any; // TODO ;
}

declare class DzAppSettingsMgr extends QObject {

    /* Properties */

    /* Methods */
    pushPath(path: QString): void;
    popPath(): void;
    setBoolValue(key: QString, setting: boolean): boolean;
    setIntValue(key: QString, setting: number): boolean;
    setFloatValue(key: QString, setting: number): boolean;
    setStringValue(key: QString, setting: QString): boolean;
    setColorValue(key: QString, setting: QColor): boolean;
    removeValue(key: QString): boolean;
    getBoolValue(key: QString, def: boolean, ok: boolean): boolean;
    getBoolValue(key: QString, def: boolean, ok: boolean): boolean;
    getBoolValue(key: QString, def: boolean, ok: boolean): boolean;
    getIntValue(key: QString, def: number, ok: boolean): number;
    getIntValue(key: QString, def: number, ok: boolean): number;
    getIntValue(key: QString, def: number, ok: boolean): number;
    getFloatValue(key: QString, def: number, ok: boolean): number;
    getFloatValue(key: QString, def: number, ok: boolean): number;
    getFloatValue(key: QString, def: number, ok: boolean): number;
    getStringValue(key: QString, def: QString, ok: boolean): QString;
    getStringValue(key: QString, def: QString, ok: boolean): QString;
    getStringValue(key: QString, def: QString, ok: boolean): QString;
    getColorValue(key: QString, def: QColor, ok: boolean): QColor;
    getColorValue(key: QString, def: QColor, ok: boolean): QColor;
    getColorValue(key: QString, def: QColor, ok: boolean): QColor;
}

declare class DzImageMgr extends QObject {

    /* Properties */

    /* Methods */
    imageListChanged(): void;
    autoRefreshChanged(onOff: boolean): void;
    loadImage(filename: QString, img: QImage, importerIdx: number): DzError;
    loadImage(filename: QString): QImage;
    loadImage(filename: QString, img: QImage, importerIdx: number): DzError;
    loadImage(filename: QString): QImage;
    loadImage(filename: QString, img: QImage, importerIdx: number): DzError;
    loadImage(filename: QString): QImage;
    saveImage(filename: QString, image: QImage, exporterIdx: number): DzError;
    saveImage(filename: QString, image: QImage, exporterIdx: number): DzError;
    loadLayeredImage(filename: QString, img: DzLayeredImage, importerIdx: number): DzError;
    loadLayeredImage(filename: QString, img: DzLayeredImage, importerIdx: number): DzError;
    saveLayeredImage(filename: QString, image: DzLayeredImage, exporterIdx: number): DzError;
    saveLayeredImage(filename: QString, image: DzLayeredImage, exporterIdx: number): DzError;
    setImageOpenPath(path: QString): void;
    setImageSavePath(path: QString): void;
    prepareAllImages(r: DzRenderer): void;
    imagePrepared(img: DzTexture, tempName: QString): void;
    deleteUnusedTextureObjects(): void;
    refresh(): void;
    getNumImages(): number;
    getImage(fullPath: QString): DzTexture;
    getImage(which: number): DzTexture;
    getImage(fullPath: QString): DzTexture;
    getImage(which: number): DzTexture;
    getImage(fullPath: QString): DzTexture;
    getImage(which: number): DzTexture;
    getImage(fullPath: QString): DzTexture;
    getImage(which: number): DzTexture;
    findImage(fullPath: QString): DzTexture;
    findImageByName(name: QString): DzTexture;
    findTexture(): any; // TODO ;
    findLayeredTexture(uri: DzUri): DzLayeredTexture;
    createLayeredTexture(name: QString): DzLayeredTexture;
    getImageOpenPath(): QString;
    getImageSavePath(): QString;
    getUniqueImageName(name: QString): QString;
    beginEditingImage(): void;
    finishedEditingImage(img: DzTexture): void;
    findLayerImageFiles(filename: QString): boolean;
    findLayerImageFile(path: QString, askUser: boolean): QString;
    addGLImageToDelete(): any; // TODO ;
}

declare class DzHelpMgr extends QObject {

    /* Properties */

    /* Methods */
    browseToPage(page: QString): void;
    //browseToUrl(urlString: QString, provided: \/\/): void;
    browseToUrl(url: QUrl): void;
    browseToKeyword(keyword: QString): void;
    browseToIdentifier(identifier: QString): void;
    getNumKeywords(): number;
    getKeyword(which: number): QString;
    getKeywordUrl(which: number): QUrl;
    findKeywordUrl(keyword: QString): QUrl;
    getNumIdentifiers(): number;
    getIdentifier(which: number): QString;
    getIdentifierUrl(which: number): QUrl;
    findIdentifierUrl(id: QString): QUrl;
    getHelpContents(): DzHelpContentsItem;
    getNumFilters(): number;
    getFilterName(which: number): QString;
    getFilterAttributes(which: number): String[];
    findFilterAttributes(name: QString): String[];
    getHelpItemLabels(): String[];
    hasHelpItem(label: QString): boolean;
    isHelpItemUsed(label: QString): boolean;
    getGroup(label: QString): QString;
    getDescription(label: QString): QString;
    getToolTip(label: QString): QString;
    getStatusTip(label: QString): QString;
    getHelpString(label: QString): QString;
    setHelpItem(label: QString, group: QString, description: QString): void;
    setGroup(label: QString, group: QString): void;
    setDescription(label: QString, description: QString): void;
    setToolTip(label: QString, toolTip: QString): void;
    setStatusTip(label: QString, statusTip: QString): void;
    setHelpString(label: QString, helpString: QString): void;
    renameHelpItem(oldLabel: QString, newLabel: QString): boolean;
    removeHelpItem(label: QString): boolean;
    saveInlineHelp(filename: QString): DzError;
    updateHelp(a: DzAction): void;
    updateHelp(w: QWidget): void;
    updateHelp(a: DzAction): void;
    updateHelp(w: QWidget): void;
}

declare class DzRenderMgr extends DzBase {

    /* Properties */
    RENDER_PRIORITY_LOWEST: number;
    RENDER_PRIORITY_LOW: number;
    RENDER_PRIORITY_BELOW_NORMAL: number;
    RENDER_PRIORITY_NORMAL: number;
    RENDER_PRIORITY_ABOVE_NORMAL: number;
    RENDER_PRIORITY_HIGH: number;
    RENDER_PRIORITY_HIGHEST: number;

    /* Methods */
    rendererAdded(renderer: DzRenderer): void;
    activeRendererChanged(renderer: DzRenderer): void;
    rendererModeChanged(): any; // TODO ;
    renderStarting(): void;
    renderFinished(succeeded: boolean): void;
    hasRenderChanged(state: boolean): void;
    renderDirectoryListChanged(): void;
    renderFolderChanged(): void;
    activeRendererIPRRenderHandlerChanged(): any; // TODO ;
    rendererIPRRenderHandlerChanged(): any; // TODO ;
    doIPRRenderStop(): any; // TODO ;
    IPRRenderStarted(): any; // TODO ;
    IPRRenderStopped(): any; // TODO ;
    renderElementsListChanged(): any; // TODO ;
    buildRenderElementsList(): any; // TODO ;
    renderOptionDefaultsRestored(): any; // TODO ;
    doRender(opt: DzRenderOptions): boolean;
    doRender(): boolean;
    setActiveRenderer(r: DzRenderer): void;
    showRenderDialog(): void;
    shutdown(): void;
    getNumRenderers(): number;
    getRenderer(which: number): DzRenderer;
    getRendererList(): Array<DzRenderer>;
    findRenderer(className: QString): DzRenderer;
    getActiveRenderer(): DzRenderer;
    isRendering(): boolean;
    hasRender(): boolean;
    getLastSavedRenderPath(): QString;
    saveLastRender(): QString;
    getRenderOptions(): DzRenderOptions;
    addRenderDirectory(directory: QString, saveNow: boolean): void;
    addRenderDirectory(directory: QString, saveNow: boolean): void;
    removeRenderDirectory(directory: QString): boolean;
    removeAllRenderDirectories(): void;
    getNumRenderDirectories(): number;
    getRenderDirectoryPath(which: number): QString;
    getBaseAndRelativePath(absPath: QString): String[];
    emitRenderFolderChanged(): void;
    doIPRRender(): any; // TODO ;
    doIPRRender(): any; // TODO ;
    stopIPRRender(): any; // TODO ;
    getRenderIconFileName(imageName: QString, justFileName: boolean): QString;
    getMetaXmlFileName(imageName: QString, justFileName: boolean): QString;
    getIconSuffix(): QString;
    getRenderElementObjects(): any; // TODO ;
    getOptionHelper(): any; // TODO ;
    rebuildRenderElements(): any; // TODO ;
    restoreDefaultRenderOptions(): any; // TODO ;
    postProcessRender(): any; // TODO ;
}

declare class DzTextureConvertorMgr {

    /* Properties */
    objectName: string;
    name: string;

    /* Methods */
    destroyed(): any; // TODO ;
    destroyed(): any; // TODO ;
    deleteLater(): any; // TODO ;
    nameChanged(): any; // TODO ;
    className(): any; // TODO ;
    makePersistent(): any; // TODO ;
    inherits(): any; // TODO ;
    iskindof(): any; // TODO ;
    getName(): any; // TODO ;
    rendererAdded(): any; // TODO ;
    activeRendererChanged(): any; // TODO ;
    renderStarting(): any; // TODO ;
    renderFinished(): any; // TODO ;
    hasRenderChanged(): any; // TODO ;
    saveConfiguration(): any; // TODO ;
    loadConfiguration(): any; // TODO ;
    setActiveRenderer(): any; // TODO ;
    showTextureConvertorDialog(): any; // TODO ;
    doConversion(): any; // TODO ;
    getNumRenderers(): any; // TODO ;
    getRenderer(): any; // TODO ;
    getRendererList(): any; // TODO ;
    findRenderer(): any; // TODO ;
    getActiveRenderer(): any; // TODO ;
    hasRender(): any; // TODO ;
    getLastSavedRenderPath(): any; // TODO ;
    saveLastRender(): any; // TODO ;
    getTextureConvertorOptions(): any; // TODO ;
    getTempTextureConvertPath(): any; // TODO ;
    inherits(): any; // TODO ;
    className(): any; // TODO ;
}

declare class DzTextureBakerMgr {

    /* Properties */
    objectName: string;
    name: string;

    /* Methods */
    destroyed(): any; // TODO ;
    destroyed(): any; // TODO ;
    deleteLater(): any; // TODO ;
    nameChanged(): any; // TODO ;
    className(): any; // TODO ;
    makePersistent(): any; // TODO ;
    inherits(): any; // TODO ;
    iskindof(): any; // TODO ;
    getName(): any; // TODO ;
    bakerAdded(): any; // TODO ;
    activeBakerChanged(): any; // TODO ;
    setActiveBaker(): any; // TODO ;
    getNumBakers(): any; // TODO ;
    getBaker(): any; // TODO ;
    getBakerList(): any; // TODO ;
    findBaker(): any; // TODO ;
    getActiveBaker(): any; // TODO ;
    getBakerOptions(): any; // TODO ;
    setBakerOptions(): any; // TODO ;
    saveConfiguration(): any; // TODO ;
    loadConfiguration(): any; // TODO ;
    inherits(): any; // TODO ;
    className(): any; // TODO ;
}

declare class DzMultiMediaMgr extends QObject {

    /* Properties */

    /* Methods */
    exportVideoClip(fileName: QString, clip: DzVideoClip, exporterIndex: number): DzError;
    exportVideoClip(fileName: QString, clip: DzVideoClip, exporterIndex: number): DzError;
    importAudioClip(fileName: QString, clip: DzAudioClip, importerIndex: number): DzError;
    importAudioClip(fileName: QString, clip: DzAudioClip, importerIndex: number): DzError;
    getVideoClipSavePath(): QString;
    getAudioClipLoadPath(): QString;
    getNumVideoExporters(): number;
    getVideoExporter(i: number): DzVideoExporter;
    findVideoExporter(filename: QString): DzVideoExporter;
    getNumAudioImporters(): number;
    getAudioImporter(i: number): DzAudioImporter;
    findAudioImporter(filename: QString): DzAudioImporter;
    makeAudioImportFileFilter(filter: DzFileFilter): void;
    makeAudioImportFileFilter(filter: DzFileFilter): void;
    makeAudioImportFileFilter(filter: DzFileFilter): void;
    makeVideoExportFileFilter(filter: DzFileFilter): void;
    makeVideoExportFileFilter(filter: DzFileFilter): void;
}

declare class DzDeviceMgr extends QObject {

    /* Properties */

    /* Methods */
    getNumDevices(): number;
    getDevice(which: number): DzDevice;
}

declare class DzCallBackMgr extends QObject {

    /* Properties */

    /* Methods */
    
    createCallBack(name: QString, script?: QString, seval?: boolean): DzCallBack;
    clearAllCallBacks(): void;
    deleteCallBack(callBack: DzCallBack): void;
    deleteCallBack(name: QString): void;
    deleteCallBack(index: number): void;
    deleteCallBack(callBack: DzCallBack): void;
    deleteCallBack(name: QString): void;
    deleteCallBack(index: number): void;
    deleteCallBackGroup(name: QString): void;
    deleteCallBack(callBack: DzCallBack): void;
    deleteCallBack(name: QString): void;
    deleteCallBack(index: number): void;
    getCallBack(name: QString): DzCallBack;
    getCallBack(index: number): DzCallBack;
    getCallBack(name: QString): DzCallBack;
    getCallBack(index: number): DzCallBack;
    getCallBackIndex(name: QString): number;
    getNumCallBacks(): number;
    getGroup(name: QString): QObject[];
    getCallBackList(): QObject[];
    getSignalSignature(obj: QObject, signalName: QString): String[];
    getSignalSignature(obj: QObject, signalName: QString): String[];
}

declare class DzPluginMgr extends QObject {

    /* Properties */

    /* Methods */
    pluginAdded(): any; // TODO ;
    doAboutPluginsDlg(): void;
    getNumPlugins(): number;
    findPlugin(pluginName: QString): DzPlugin;
    getPlugin(which: number): DzPlugin;
}

declare class DzAuthenticationMgr extends QObject {

    /* Properties */

    /* Methods */
    loggedIn(): void;
    loggedOut(): void;
    authenticateUser(): boolean;
    isAuthenticated(): boolean;
    getUserToken(): QString;
    logout(): void;
}

declare class DzStyle extends DzStyleInterface {

    /* Properties */
    objectName: string;
    Normal: number;
    Disabled: number;
    Active: number;
    Selected: number;
    On: number;
    Off: number;
    name: string;

    /* Methods */
    destroyed(): any; // TODO ;
    destroyed(): any; // TODO ;
    deleteLater(): any; // TODO ;
    standardIconImplementation(standardIcon: number, opt: QStyleOption): QIcon;
    standardIconImplementation(standardIcon: number, opt: QStyleOption): QIcon;
    standardIconImplementation(standardIcon: number, opt: QStyleOption): QIcon;
    layoutSpacingImplementation(control1: number): number;
    layoutSpacingImplementation(control1: number): number;
    layoutSpacingImplementation(control1: number): number;
    interfaceColorsChanged(): void;
    findInterfaceColor(): any; // TODO ;
    getNumInterfaceColors(): number;
    getInterfaceColorName(): any; // TODO ;
    getInterfaceColorDescription(which: number): QString;
    getInterfaceColor(name: QString): QColor;
    getInterfaceColor(which: number): QColor;
    getInterfaceColor(name: QString): QColor;
    getInterfaceColor(which: number): QColor;
    getInterfaceColorDefault(which: number): QColor;
    setInterfaceColor(which: number, color: QColor): void;
    compileStyleDefinition(infile: QString, outfile: QString): DzError;
    getStyleDefinition(): QString;
    textStyleColor(styleName: QString): QColor;
    pixelMetric(metricName: QString): number;
    pixelMetric(m: number, option: QStyleOption, widget: QWidget): number;
    standardPixmap(pixmapName: QString): QPixmap;
    standardPixmap(standardPixmap: number, opt: QStyleOption): QPixmap;
    actionPixmap(className: QString, mode: number, state: number): QPixmap;
    setStyledIcon(): any; // TODO ;
    getNumPrimitiveElements(): number;
    getNumPixelMetrics(): number;
    getNumStyleHints(): number;
    getNumStandardPixmaps(): number;
    getNumTextStyles(): number;
    getPrimitiveElementName(which: number): QString;
    getPixelMetricName(which: number): QString;
    getStyleHintName(which: number): QString;
    getStandardPixmapName(which: number): QString;
    getTextStyleName(which: number): QString;
    findPrimitiveElement(name: QString): number;
    findPixelMetric(name: QString): number;
    findStyleHint(name: QString): number;
    findStandardPixmap(name: QString): number;
    findTextStyle(name: QString): number;
    inherits(): any; // TODO ;
    className(): any; // TODO ;
}

declare class QDialog extends QWidget {

    /* Properties */
    windowModality: number;
    geometry: QObject;
    frameGeometry: QObject;
    normalGeometry: QObject;
    pos: QObject;
    frameSize: QObject;
    size: QObject;
    rect: QObject;
    childrenRect: QObject;
    childrenRegion: QObject;
    sizePolicy: QObject;
    minimumSize: QObject;
    maximumSize: QObject;
    minimumWidth: number;
    minimumHeight: number;
    maximumWidth: number;
    maximumHeight: number;
    sizeIncrement: QObject;
    baseSize: QObject;
    cursor: QObject;
    mouseTracking: boolean;
    isActiveWindow: boolean;
    focusPolicy: number;
    focus: boolean;
    contextMenuPolicy: number;
    updatesEnabled: boolean;
    visible: boolean;
    minimized: boolean;
    maximized: boolean;
    fullScreen: boolean;
    sizeHint: QObject;
    minimumSizeHint: QObject;
    acceptDrops: boolean;
    windowTitle: string;
    windowIcon: QObject;
    windowIconText: string;
    windowOpacity: number;
    windowModified: boolean;
    accessibleName: string;
    accessibleDescription: string;
    layoutDirection: number;
    autoFillBackground: boolean;
    styleSheet: string;
    locale: QObject;
    windowFilePath: string;
    inputMethodHints: number;
    sizeGripEnabled: boolean;
    modal: boolean;

    /* Methods */
    setVisible(visible: boolean): void;
    finished(result: number): void;
    accepted(): void;
    rejected(): void;
    open(): void;
    exec(): number;
    done(obj: number): void;
    accept(): void;
    reject(): void;
    showExtension(obj: boolean): void;
}

declare class DzVec3 {

    /* Properties */
    objectName: string;
    x: number;
    y: number;
    z: number;

    /* Methods */
    destroyed(): any; // TODO ;
    destroyed(): any; // TODO ;
    deleteLater(): any; // TODO ;
    inherits(): any; // TODO ;
    className(): any; // TODO ;
    toString(): any; // TODO ;
    length(): number;
    lengthSquared(): number;
    normalized(): DzVec3;
    cross(vec: DzVec3): DzVec3;
    dot(vec: DzPnt3): number;
    dot(vec: DzVec3): number;
    getAngleTo(vec: DzVec3): number;
    getRotationTo(vec: DzVec3): DzQuat;
    add(): any; // TODO ;
    subtract(): any; // TODO ;
    multiply(): any; // TODO ;
    divide(): any; // TODO ;
    makeZero(): void;
    makeIdentity(): void;
    negate(): void;
    setLength(length: number): void;
    normalize(): number;
    square(): void;
    abs(): void;
}

declare class DzIntSlider extends DzSlider {

    /* Properties */
    modal: boolean;
    windowModality: number;
    geometry: QObject;
    frameGeometry: QObject;
    normalGeometry: QObject;
    pos: QObject;
    frameSize: QObject;
    size: QObject;
    rect: QObject;
    childrenRect: QObject;
    childrenRegion: QObject;
    sizePolicy: QObject;
    minimumSize: QObject;
    maximumSize: QObject;
    minimumWidth: number;
    minimumHeight: number;
    maximumWidth: number;
    maximumHeight: number;
    sizeIncrement: QObject;
    baseSize: QObject;
    cursor: QObject;
    mouseTracking: boolean;
    isActiveWindow: boolean;
    focusPolicy: number;
    focus: boolean;
    contextMenuPolicy: number;
    updatesEnabled: boolean;
    visible: boolean;
    minimized: boolean;
    maximized: boolean;
    fullScreen: boolean;
    sizeHint: QObject;
    minimumSizeHint: QObject;
    acceptDrops: boolean;
    windowTitle: string;
    windowIcon: QObject;
    windowIconText: string;
    windowOpacity: number;
    windowModified: boolean;
    accessibleName: string;
    accessibleDescription: string;
    layoutDirection: number;
    autoFillBackground: boolean;
    styleSheet: string;
    locale: QObject;
    windowFilePath: string;
    inputMethodHints: number;

    /* Methods */
    customContextMenuRequested(): any; // TODO ;
    setEnabled(): any; // TODO ;
    setDisabled(): any; // TODO ;
    setWindowModified(): any; // TODO ;
    setWindowTitle(): any; // TODO ;
    setStyleSheet(): any; // TODO ;
    setFocus(): any; // TODO ;
    update(): any; // TODO ;
    repaint(): any; // TODO ;
    setVisible(): any; // TODO ;
    setHidden(): any; // TODO ;
    show(): any; // TODO ;
    hide(): any; // TODO ;
    setShown(): any; // TODO ;
    showMinimized(): any; // TODO ;
    showMaximized(): any; // TODO ;
    showFullScreen(): any; // TODO ;
    showNormal(): any; // TODO ;
    close(): any; // TODO ;
    raise(): any; // TODO ;
    lower(): any; // TODO ;
    updateMicroFocus(): any; // TODO ;
    fullLengthTextEditBegin(): any; // TODO ;
    setFullLengthTextEdit(): any; // TODO ;
    getFullLengthTextEdit(): any; // TODO ;
    adjustFullLengthTextForEdit(): any; // TODO ;
    valueChanged(val: number): void;
}

declare class DzFloatSlider extends DzSlider {

    /* Properties */
    modal: boolean;
    windowModality: number;
    geometry: QObject;
    frameGeometry: QObject;
    normalGeometry: QObject;
    pos: QObject;
    frameSize: QObject;
    size: QObject;
    rect: QObject;
    childrenRect: QObject;
    childrenRegion: QObject;
    sizePolicy: QObject;
    minimumSize: QObject;
    maximumSize: QObject;
    minimumWidth: number;
    minimumHeight: number;
    maximumWidth: number;
    maximumHeight: number;
    sizeIncrement: QObject;
    baseSize: QObject;
    cursor: QObject;
    mouseTracking: boolean;
    isActiveWindow: boolean;
    focusPolicy: number;
    focus: boolean;
    contextMenuPolicy: number;
    updatesEnabled: boolean;
    visible: boolean;
    minimized: boolean;
    maximized: boolean;
    fullScreen: boolean;
    sizeHint: QObject;
    minimumSizeHint: QObject;
    acceptDrops: boolean;
    windowTitle: string;
    windowIcon: QObject;
    windowIconText: string;
    windowOpacity: number;
    windowModified: boolean;
    accessibleName: string;
    accessibleDescription: string;
    layoutDirection: number;
    autoFillBackground: boolean;
    styleSheet: string;
    locale: QObject;
    windowFilePath: string;
    inputMethodHints: number;

    /* Methods */
    customContextMenuRequested(): any; // TODO ;
    setEnabled(): any; // TODO ;
    setDisabled(): any; // TODO ;
    setWindowModified(): any; // TODO ;
    setWindowTitle(): any; // TODO ;
    setStyleSheet(): any; // TODO ;
    setFocus(): any; // TODO ;
    update(): any; // TODO ;
    repaint(): any; // TODO ;
    setVisible(): any; // TODO ;
    setHidden(): any; // TODO ;
    show(): any; // TODO ;
    hide(): any; // TODO ;
    setShown(): any; // TODO ;
    showMinimized(): any; // TODO ;
    showMaximized(): any; // TODO ;
    showFullScreen(): any; // TODO ;
    showNormal(): any; // TODO ;
    close(): any; // TODO ;
    raise(): any; // TODO ;
    lower(): any; // TODO ;
    updateMicroFocus(): any; // TODO ;
    fullLengthTextEditBegin(): any; // TODO ;
    setFullLengthTextEdit(): any; // TODO ;
    getFullLengthTextEdit(): any; // TODO ;
    adjustFullLengthTextForEdit(): any; // TODO ;
    valueChanged(val: number): void;
}

declare class QCheckBox extends QAbstractButton {

    /* Properties */
    modal: boolean;
    windowModality: number;
    geometry: QObject;
    frameGeometry: QObject;
    normalGeometry: QObject;
    pos: QObject;
    frameSize: QObject;
    size: QObject;
    rect: QObject;
    childrenRect: QObject;
    childrenRegion: QObject;
    sizePolicy: QObject;
    minimumSize: QObject;
    maximumSize: QObject;
    minimumWidth: number;
    minimumHeight: number;
    maximumWidth: number;
    maximumHeight: number;
    sizeIncrement: QObject;
    baseSize: QObject;
    cursor: QObject;
    mouseTracking: boolean;
    isActiveWindow: boolean;
    focusPolicy: number;
    focus: boolean;
    contextMenuPolicy: number;
    updatesEnabled: boolean;
    visible: boolean;
    minimized: boolean;
    maximized: boolean;
    fullScreen: boolean;
    sizeHint: QObject;
    minimumSizeHint: QObject;
    acceptDrops: boolean;
    windowTitle: string;
    windowIcon: QObject;
    windowIconText: string;
    windowOpacity: number;
    windowModified: boolean;
    accessibleName: string;
    accessibleDescription: string;
    layoutDirection: number;
    autoFillBackground: boolean;
    styleSheet: string;
    locale: QObject;
    windowFilePath: string;
    inputMethodHints: number;
    //text: string;
    //icon: QObject;
    //iconSize: QObject;
    //shortcut: QObject;
    checkable: boolean;
    checked: boolean;
    //autoRepeat: boolean;
    //autoExclusive: boolean;
    //autoRepeatDelay: number;
    //autoRepeatInterval: number;
    down: boolean;
    tristate: boolean;

    /* Methods */
    stateChanged(obj: number): void;
}

declare class QComboBox extends QWidget {

    /* Properties */
    modal: boolean;
    windowModality: number;
    geometry: QObject;
    frameGeometry: QObject;
    normalGeometry: QObject;
    pos: QObject;
    frameSize: QObject;
    size: QObject;
    rect: QObject;
    childrenRect: QObject;
    childrenRegion: QObject;
    sizePolicy: QObject;
    minimumSize: QObject;
    maximumSize: QObject;
    minimumWidth: number;
    minimumHeight: number;
    maximumWidth: number;
    maximumHeight: number;
    sizeIncrement: QObject;
    baseSize: QObject;
    cursor: QObject;
    mouseTracking: boolean;
    isActiveWindow: boolean;
    focusPolicy: number;
    focus: boolean;
    contextMenuPolicy: number;
    updatesEnabled: boolean;
    visible: boolean;
    minimized: boolean;
    maximized: boolean;
    fullScreen: boolean;
    sizeHint: QObject;
    minimumSizeHint: QObject;
    acceptDrops: boolean;
    windowTitle: string;
    windowIcon: QObject;
    windowIconText: string;
    windowOpacity: number;
    windowModified: boolean;
    accessibleName: string;
    accessibleDescription: string;
    layoutDirection: number;
    autoFillBackground: boolean;
    styleSheet: string;
    locale: QObject;
    windowFilePath: string;
    inputMethodHints: number;
    editable: boolean;
    count: number;
    currentText: string;
    currentIndex: number;
    maxVisibleItems: number;
    maxCount: number;
    insertPolicy: number;
    sizeAdjustPolicy: number;
    minimumContentsLength: number;
    iconSize: QObject;
    autoCompletion: boolean;
    autoCompletionCaseSensitivity: number;
    duplicatesEnabled: boolean;
    frame: boolean;
    modelColumn: number;

    /* Methods */
    editTextChanged(obj: QString): void;
    activated(obj: QString): void;
    activated(index: number): void;
    activated(obj: QString): void;
    activated(index: number): void;
    highlighted(obj: QString): void;
    highlighted(index: number): void;
    highlighted(obj: QString): void;
    highlighted(index: number): void;
    currentIndexChanged(obj: QString): void;
    currentIndexChanged(index: number): void;
    currentIndexChanged(obj: QString): void;
    currentIndexChanged(index: number): void;
    textChanged(obj: QString): void;
    clear(): void;
    clearEditText(): void;
    setEditText(text: QString): void;
    setCurrentIndex(index: number): void;
}

declare class DzGroupBoxBC extends QWidget {

    /* Properties */
    modal: boolean;
    windowModality: number;
    geometry: QObject;
    frameGeometry: QObject;
    normalGeometry: QObject;
    pos: QObject;
    frameSize: QObject;
    size: QObject;
    rect: QObject;
    childrenRect: QObject;
    childrenRegion: QObject;
    sizePolicy: QObject;
    minimumSize: QObject;
    maximumSize: QObject;
    minimumWidth: number;
    minimumHeight: number;
    maximumWidth: number;
    maximumHeight: number;
    sizeIncrement: QObject;
    baseSize: QObject;
    cursor: QObject;
    mouseTracking: boolean;
    isActiveWindow: boolean;
    focusPolicy: number;
    focus: boolean;
    contextMenuPolicy: number;
    updatesEnabled: boolean;
    visible: boolean;
    minimized: boolean;
    maximized: boolean;
    fullScreen: boolean;
    sizeHint: QObject;
    minimumSizeHint: QObject;
    acceptDrops: boolean;
    windowTitle: string;
    windowIcon: QObject;
    windowIconText: string;
    windowOpacity: number;
    windowModified: boolean;
    accessibleName: string;
    accessibleDescription: string;
    layoutDirection: number;
    autoFillBackground: boolean;
    styleSheet: string;
    locale: QObject;
    windowFilePath: string;
    inputMethodHints: number;
    title: string;
    alignment: number;
    flat: boolean;
    checkable: boolean;
    checked: boolean;

    /* Methods */
    customContextMenuRequested(): any; // TODO ;
    setEnabled(): any; // TODO ;
    setDisabled(): any; // TODO ;
    setWindowModified(): any; // TODO ;
    setWindowTitle(): any; // TODO ;
    setStyleSheet(): any; // TODO ;
    setFocus(): any; // TODO ;
    update(): any; // TODO ;
    repaint(): any; // TODO ;
    setVisible(): any; // TODO ;
    setHidden(): any; // TODO ;
    show(): any; // TODO ;
    hide(): any; // TODO ;
    setShown(): any; // TODO ;
    showMinimized(): any; // TODO ;
    showMaximized(): any; // TODO ;
    showFullScreen(): any; // TODO ;
    showNormal(): any; // TODO ;
    close(): any; // TODO ;
    raise(): any; // TODO ;
    lower(): any; // TODO ;
    updateMicroFocus(): any; // TODO ;
    clicked(): any; // TODO ;
    clicked(): any; // TODO ;
    toggled(): any; // TODO ;
    setChecked(): any; // TODO ;
    addSpace(): any; // TODO ;
}

declare class QLayout extends QObject {

    /* Properties */
    autoAdd: boolean;
    margin: number;
    spacing: number;

    addWidget(item: DzWidget): void;
}

declare class QLabel extends QFrame {

    /* Properties */
    modal: boolean;
    windowModality: number;
    geometry: QObject;
    frameGeometry: QObject;
    normalGeometry: QObject;
    pos: QObject;
    frameSize: QObject;
    size: QObject;
    rect: QObject;
    childrenRect: QObject;
    childrenRegion: QObject;
    sizePolicy: QObject;
    minimumSize: QObject;
    maximumSize: QObject;
    minimumWidth: number;
    minimumHeight: number;
    maximumWidth: number;
    maximumHeight: number;
    sizeIncrement: QObject;
    baseSize: QObject;
    cursor: QObject;
    mouseTracking: boolean;
    isActiveWindow: boolean;
    focusPolicy: number;
    focus: boolean;
    contextMenuPolicy: number;
    updatesEnabled: boolean;
    visible: boolean;
    minimized: boolean;
    maximized: boolean;
    fullScreen: boolean;
    //sizeHint: QObject;
    minimumSizeHint: QObject;
    acceptDrops: boolean;
    windowTitle: string;
    windowIcon: QObject;
    windowIconText: string;
    windowOpacity: number;
    windowModified: boolean;
    accessibleName: string;
    accessibleDescription: string;
    layoutDirection: number;
    autoFillBackground: boolean;
    styleSheet: string;
    locale: QObject;
    windowFilePath: string;
    inputMethodHints: number;
    //frameShape: number;
    //frameShadow: number;
    //lineWidth: number;
    //midLineWidth: number;
    //frameWidth: number;
    //frameRect: QObject;
    text: string;
    textFormat: number;
    pixmap: QObject;
    scaledContents: boolean;
    alignment: number;
    wordWrap: boolean;
    margin: number;
    indent: number;
    openExternalLinks: boolean;
    textInteractionFlags: number;
    hasSelectedText: boolean;
    selectedText: string;

    /* Methods */
    linkActivated(link: QString): void;
    linkHovered(link: QString): void;
    setText(obj: QString): void;
    setPixmap(obj: QPixmap): void;
    setPicture(obj: QPicture): void;
    setMovie(movie: QMovie): void;
    setNum(obj: number): void;
    setNum(obj: number): void;
    setNum(obj: number): void;
    setNum(obj: number): void;
    clear(): void;
}

declare class Q3ListBox extends Q3ScrollView {

    /* Properties */
    modal: boolean;
    windowModality: number;
    geometry: QObject;
    frameGeometry: QObject;
    normalGeometry: QObject;
    pos: QObject;
    frameSize: QObject;
    size: QObject;
    rect: QObject;
    childrenRect: QObject;
    childrenRegion: QObject;
    sizePolicy: QObject;
    minimumSize: QObject;
    maximumSize: QObject;
    minimumWidth: number;
    minimumHeight: number;
    maximumWidth: number;
    maximumHeight: number;
    sizeIncrement: QObject;
    baseSize: QObject;
    cursor: QObject;
    mouseTracking: boolean;
    isActiveWindow: boolean;
    focusPolicy: number;
    focus: boolean;
    contextMenuPolicy: number;
    updatesEnabled: boolean;
    visible: boolean;
    minimized: boolean;
    maximized: boolean;
    fullScreen: boolean;
    //sizeHint: QObject;
    //minimumSizeHint: QObject;
    acceptDrops: boolean;
    windowTitle: string;
    windowIcon: QObject;
    windowIconText: string;
    windowOpacity: number;
    windowModified: boolean;
    accessibleName: string;
    accessibleDescription: string;
    layoutDirection: number;
    autoFillBackground: boolean;
    styleSheet: string;
    locale: QObject;
    windowFilePath: string;
    inputMethodHints: number;
    //frameShape: number;
    //frameShadow: number;
    //lineWidth: number;
    //midLineWidth: number;
    //frameWidth: number;
    //frameRect: QObject;
    margin: number;
    //contentsRect: QObject;
    //resizePolicy: number;
    //vScrollBarMode: number;
    //hScrollBarMode: number;
    //visibleWidth: number;
    //visibleHeight: number;
    //contentsWidth: number;
    //contentsHeight: number;
    //contentsX: number;
    //contentsY: number;
    //dragAutoScroll: boolean;
    count: number;
    numItemsVisible: number;
    currentItem: number;
    currentText: string;
    topItem: number;
    selectionMode: number;
    multiSelection: boolean;
    columnMode: number;
    rowMode: number;
    numColumns: number;
    numRows: number;
    variableWidth: boolean;
    variableHeight: boolean;

    /* Methods */
    highlighted(obj: Q3ListBoxItem): void;
    highlighted(obj: QString): void;
    highlighted(index: number): void;
    selected(obj: Q3ListBoxItem): void;
    selected(obj: QString): void;
    selected(index: number): void;
    highlighted(obj: Q3ListBoxItem): void;
    highlighted(obj: QString): void;
    highlighted(index: number): void;
    selected(obj: Q3ListBoxItem): void;
    selected(obj: QString): void;
    selected(index: number): void;
    highlighted(obj: Q3ListBoxItem): void;
    highlighted(obj: QString): void;
    highlighted(index: number): void;
    selected(obj: Q3ListBoxItem): void;
    selected(obj: QString): void;
    selected(index: number): void;
    selectionChanged(): void;
    selectionChanged(obj: Q3ListBoxItem): void;
    selectionChanged(): void;
    selectionChanged(obj: Q3ListBoxItem): void;
    currentChanged(obj: Q3ListBoxItem): void;
    clicked(obj: Q3ListBoxItem, point?: QPoint): void;
    pressed(obj: Q3ListBoxItem, point?: QPoint): void;
    doubleClicked(obj: Q3ListBoxItem): void;
    returnPressed(obj: Q3ListBoxItem): void;
    rightButtonClicked(obj: Q3ListBoxItem, point: QPoint): void;
    rightButtonPressed(obj: Q3ListBoxItem, point: QPoint): void;
    mouseButtonPressed(obj: number, item: Q3ListBoxItem, point: QPoint): void;
    mouseButtonClicked(obj: number, item: Q3ListBoxItem, point: QPoint): void;
    contextMenuRequested(item: Q3ListBoxItem, point: QPoint): void;
    onItem(item: Q3ListBoxItem): void;
    onViewport(): void;
    clear(): void;
    ensureCurrentVisible(): void;
    clearSelection(): void;
    selectAll(select: boolean): void;
    invertSelection(): void;
    clearInputString(): void;
}

declare class DzStyledButton extends QPushButton {

    /* Properties */
    modal: boolean;
    windowModality: number;
    geometry: QObject;
    frameGeometry: QObject;
    normalGeometry: QObject;
    pos: QObject;
    frameSize: QObject;
    size: QObject;
    rect: QObject;
    childrenRect: QObject;
    childrenRegion: QObject;
    sizePolicy: QObject;
    minimumSize: QObject;
    maximumSize: QObject;
    minimumWidth: number;
    minimumHeight: number;
    maximumWidth: number;
    maximumHeight: number;
    sizeIncrement: QObject;
    baseSize: QObject;
    cursor: QObject;
    mouseTracking: boolean;
    isActiveWindow: boolean;
    focusPolicy: number;
    focus: boolean;
    contextMenuPolicy: number;
    updatesEnabled: boolean;
    visible: boolean;
    minimized: boolean;
    maximized: boolean;
    fullScreen: boolean;
    //sizeHint: QObject;
    //minimumSizeHint: QObject;
    acceptDrops: boolean;
    windowTitle: string;
    windowIcon: QObject;
    windowIconText: string;
    windowOpacity: number;
    windowModified: boolean;
    accessibleName: string;
    accessibleDescription: string;
    layoutDirection: number;
    autoFillBackground: boolean;
    styleSheet: string;
    locale: QObject;
    windowFilePath: string;
    inputMethodHints: number;
    //text: string;
    //icon: QObject;
    //iconSize: QObject;
    //shortcut: QObject;
    checkable: boolean;
    checked: boolean;
    //autoRepeat: boolean;
    //autoExclusive: boolean;
    //autoRepeatDelay: number;
    //autoRepeatInterval: number;
    down: boolean;
    //autoDefault: boolean;
    default: boolean;
    flat: boolean;

    /* Methods */
    customContextMenuRequested(): any; // TODO ;
    setEnabled(): any; // TODO ;
    setDisabled(): any; // TODO ;
    setWindowModified(): any; // TODO ;
    setWindowTitle(): any; // TODO ;
    setStyleSheet(): any; // TODO ;
    setFocus(): any; // TODO ;
    update(): any; // TODO ;
    repaint(): any; // TODO ;
    setVisible(): any; // TODO ;
    setHidden(): any; // TODO ;
    show(): any; // TODO ;
    hide(): any; // TODO ;
    setShown(): any; // TODO ;
    showMinimized(): any; // TODO ;
    showMaximized(): any; // TODO ;
    showFullScreen(): any; // TODO ;
    showNormal(): any; // TODO ;
    close(): any; // TODO ;
    raise(): any; // TODO ;
    lower(): any; // TODO ;
    updateMicroFocus(): any; // TODO ;
    setOn(): any; // TODO ;
}

declare class QRadioButton extends QAbstractButton {

    /* Properties */
    modal: boolean;
    windowModality: number;
    geometry: QObject;
    frameGeometry: QObject;
    normalGeometry: QObject;
    pos: QObject;
    frameSize: QObject;
    size: QObject;
    rect: QObject;
    childrenRect: QObject;
    childrenRegion: QObject;
    sizePolicy: QObject;
    minimumSize: QObject;
    maximumSize: QObject;
    minimumWidth: number;
    minimumHeight: number;
    maximumWidth: number;
    maximumHeight: number;
    sizeIncrement: QObject;
    baseSize: QObject;
    cursor: QObject;
    mouseTracking: boolean;
    isActiveWindow: boolean;
    focusPolicy: number;
    focus: boolean;
    contextMenuPolicy: number;
    updatesEnabled: boolean;
    visible: boolean;
    minimized: boolean;
    maximized: boolean;
    fullScreen: boolean;
    sizeHint: QObject;
    minimumSizeHint: QObject;
    acceptDrops: boolean;
    windowTitle: string;
    windowIcon: QObject;
    windowIconText: string;
    windowOpacity: number;
    windowModified: boolean;
    accessibleName: string;
    accessibleDescription: string;
    layoutDirection: number;
    autoFillBackground: boolean;
    styleSheet: string;
    locale: QObject;
    windowFilePath: string;
    inputMethodHints: number;
    //text: string;
    //icon: QObject;
    //iconSize: QObject;
    //shortcut: QObject;
    checkable: boolean;
    checked: boolean;
    //autoRepeat: boolean;
    //autoExclusive: boolean;
    //autoRepeatDelay: number;
    //autoRepeatInterval: number;
    down: boolean;

    /* Methods */
}

declare class DzExtendedTabWidget extends QTabWidget {

    /* Properties */
    modal: boolean;
    windowModality: number;
    geometry: QObject;
    frameGeometry: QObject;
    normalGeometry: QObject;
    pos: QObject;
    frameSize: QObject;
    size: QObject;
    rect: QObject;
    childrenRect: QObject;
    childrenRegion: QObject;
    sizePolicy: QObject;
    minimumSize: QObject;
    maximumSize: QObject;
    minimumWidth: number;
    minimumHeight: number;
    maximumWidth: number;
    maximumHeight: number;
    sizeIncrement: QObject;
    baseSize: QObject;
    cursor: QObject;
    mouseTracking: boolean;
    isActiveWindow: boolean;
    focusPolicy: number;
    focus: boolean;
    contextMenuPolicy: number;
    updatesEnabled: boolean;
    visible: boolean;
    minimized: boolean;
    maximized: boolean;
    //fullScreen: boolean;
    //sizeHint: QObject;
    //minimumSizeHint: QObject;
    acceptDrops: boolean;
    windowTitle: string;
    windowIcon: QObject;
    windowIconText: string;
    windowOpacity: number;
    windowModified: boolean;
    accessibleName: string;
    accessibleDescription: string;
    layoutDirection: number;
    autoFillBackground: boolean;
    styleSheet: string;
    locale: QObject;
    windowFilePath: string;
    inputMethodHints: number;
    //tabPosition: number;
    //tabShape: number;
    //currentIndex: number;
    //count: number;
    //iconSize: QObject;
    //elideMode: number;
    //usesScrollButtons: boolean;
    //documentMode: boolean;
    //tabsClosable: boolean;
    movable: boolean;

    /* Methods */
    customContextMenuRequested(): any; // TODO ;
    setEnabled(): any; // TODO ;
    setDisabled(): any; // TODO ;
    setWindowModified(): any; // TODO ;
    setWindowTitle(): any; // TODO ;
    setStyleSheet(): any; // TODO ;
    setFocus(): any; // TODO ;
    update(): any; // TODO ;
    repaint(): any; // TODO ;
    setVisible(): any; // TODO ;
    setHidden(): any; // TODO ;
    show(): any; // TODO ;
    hide(): any; // TODO ;
    setShown(): any; // TODO ;
    showMinimized(): any; // TODO ;
    showMaximized(): any; // TODO ;
    showFullScreen(): any; // TODO ;
    showNormal(): any; // TODO ;
    close(): any; // TODO ;
    raise(): any; // TODO ;
    lower(): any; // TODO ;
    updateMicroFocus(): any; // TODO ;
    setCurrentPage(): any; // TODO ;
    showPage(): any; // TODO ;
    removePage(): any; // TODO ;
    tabClicked(tabIndex: number): void;
}

declare class DzButtonGroupBC extends QWidget {

    /* Properties */
    modal: boolean;
    windowModality: number;
    geometry: QObject;
    frameGeometry: QObject;
    normalGeometry: QObject;
    pos: QObject;
    frameSize: QObject;
    size: QObject;
    rect: QObject;
    childrenRect: QObject;
    childrenRegion: QObject;
    sizePolicy: QObject;
    minimumSize: QObject;
    maximumSize: QObject;
    minimumWidth: number;
    minimumHeight: number;
    maximumWidth: number;
    maximumHeight: number;
    sizeIncrement: QObject;
    baseSize: QObject;
    cursor: QObject;
    mouseTracking: boolean;
    isActiveWindow: boolean;
    focusPolicy: number;
    focus: boolean;
    contextMenuPolicy: number;
    updatesEnabled: boolean;
    visible: boolean;
    minimized: boolean;
    maximized: boolean;
    fullScreen: boolean;
    sizeHint: QObject;
    minimumSizeHint: QObject;
    acceptDrops: boolean;
    windowTitle: string;
    windowIcon: QObject;
    windowIconText: string;
    windowOpacity: number;
    windowModified: boolean;
    accessibleName: string;
    accessibleDescription: string;
    layoutDirection: number;
    autoFillBackground: boolean;
    styleSheet: string;
    locale: QObject;
    windowFilePath: string;
    inputMethodHints: number;
    title: string;
    alignment: number;
    flat: boolean;
    checkable: boolean;
    checked: boolean;

    /* Methods */
    customContextMenuRequested(): any; // TODO ;
    setEnabled(): any; // TODO ;
    setDisabled(): any; // TODO ;
    setWindowModified(): any; // TODO ;
    setWindowTitle(): any; // TODO ;
    setStyleSheet(): any; // TODO ;
    setFocus(): any; // TODO ;
    update(): any; // TODO ;
    repaint(): any; // TODO ;
    setVisible(): any; // TODO ;
    setHidden(): any; // TODO ;
    show(): any; // TODO ;
    hide(): any; // TODO ;
    setShown(): any; // TODO ;
    showMinimized(): any; // TODO ;
    showMaximized(): any; // TODO ;
    showFullScreen(): any; // TODO ;
    showNormal(): any; // TODO ;
    close(): any; // TODO ;
    raise(): any; // TODO ;
    lower(): any; // TODO ;
    updateMicroFocus(): any; // TODO ;
    clicked(): any; // TODO ;
    clicked(): any; // TODO ;
    toggled(): any; // TODO ;
    setChecked(): any; // TODO ;
    addSpace(): any; // TODO ;
    pressed(): any; // TODO ;
    released(): any; // TODO ;
    clicked(): any; // TODO ;
    buttonPressed(): any; // TODO ;
    buttonReleased(): any; // TODO ;
    buttonClicked(): any; // TODO ;
}

declare class DzBackdrop extends DzElement {

    /* Properties */
    elementID: number;
    flipHorizontal: boolean;
    flipVertical: boolean;
    rotation: number;
    backgroundColor: QObject;
    visible: boolean;
    visibleInRender: boolean;
    NO_ROTATION: number;
    ROTATE_LEFT_90: number;
    ROTATE_RIGHT_90: number;
    ROTATE_180: number;

    /* Methods */
    propertyListInTreeChanged(): any; // TODO ;
    privatePropertyListInTreeChanged(): any; // TODO ;
    mergeElementSignal(): any; // TODO ;
    duplicateElementSignal(): any; // TODO ;
    createElementCopySignal(): any; // TODO ;
    moveDataItemToIndex(): any; // TODO ;
    findDataItemIndex(): any; // TODO ;
    duplicateMissingCustomDataWithContext(): any; // TODO ;
    duplicateMissingPropertiesWithContext(): any; // TODO ;
    duplicateMissingPrivatePropertiesWithContext(): any; // TODO ;
    doMergeElement(): any; // TODO ;
    doDuplicateElement(): any; // TODO ;
    mergeElement(): any; // TODO ;
    duplicateElement(): any; // TODO ;
    createElementCopy(): any; // TODO ;
    drawnDataChanged(): void;
    backgroundColorChanged(): any; // TODO ;
    visiblityChanged(): any; // TODO ;
    setTexture(map: DzTexture): void;
    showOptions(parent: QWidget): void;
    showOptions(parent: QWidget): void;
    clear(): void;
    getMaterial(): DzMaterial;
    getTexture(): DzTexture;
    getBackgroundColorControl(): any; // TODO ;
    getRotationControl(): DzEnumProperty;
    getVerticalFlipControl(): DzBoolProperty;
    getHorizontalFlipControl(): DzBoolProperty;
    getVisibleControl(): any; // TODO ;
    getVisibleInRenderControl(): any; // TODO ;
    adjustRenderAspectRatioToMatchTexture(): any; // TODO ;
    adjustRenderDimensionsToMatchTexture(): any; // TODO ;
}

declare class DzTimeRange {

    /* Properties */
    objectName: string;
    start: number;
    end: number;

    /* Methods */
    destroyed(): any; // TODO ;
    destroyed(): any; // TODO ;
    deleteLater(): any; // TODO ;
    inherits(): any; // TODO ;
    className(): any; // TODO ;
    toString(): any; // TODO ;
    getDuration(): DzTime;
    isEmpty(): boolean;
    isIncluded(t: DzTime): boolean;
    isIncluded(iv: DzTimeRange): boolean;
    isIncluded(t: DzTime): boolean;
    isIncluded(iv: DzTimeRange): boolean;
    overlaps(iv: DzTimeRange): boolean;
    add(): any; // TODO ;
    subtract(): any; // TODO ;
    include(t: DzTime): void;
    include(interval: DzTimeRange): void;
    include(t: DzTime): void;
    include(interval: DzTimeRange): void;
    intersect(interval: DzTimeRange): void;
    extendEndsBy(val: DzTime): void;
    makeEmpty(): void;
}

declare class DzPropertyGroupTree extends DzBase {

    /* Properties */

    /* Methods */
    childListChanged(): void;
    treeChanged(): void;
    treeSorted(): any; // TODO ;
    propertyVisiblityChanged(): any; // TODO ;
    getAllPaths(): String[];
    getOwner(): DzElement;
    getFirstChild(): DzPropertyGroup;
    findChild(name: QString): DzPropertyGroup;
    moveChildToIndex(childName: QString, newIndex: number): boolean;
    isPrivate(): boolean;
    setIsPrivate(onoff: boolean): void;
    getDefaultGroup(): DzPropertyGroup;
    sortGroups(): void;
    findProperty(): any; // TODO ;
}

declare class DzRotationOrder {

    /* Properties */
    objectName: string;
    order: number;
    firstAxis: number;
    secondAxis: number;
    thirdAxis: number;

    /* Methods */
    destroyed(): any; // TODO ;
    destroyed(): any; // TODO ;
    deleteLater(): any; // TODO ;
    inherits(): any; // TODO ;
    className(): any; // TODO ;
    toString(): QString;
}

declare class DzObject extends DzElement {

    /* Properties */
    elementID: number;

    /* Methods */
    propertyListInTreeChanged(): any; // TODO ;
    privatePropertyListInTreeChanged(): any; // TODO ;
    mergeElementSignal(): any; // TODO ;
    duplicateElementSignal(): any; // TODO ;
    createElementCopySignal(): any; // TODO ;
    moveDataItemToIndex(): any; // TODO ;
    findDataItemIndex(): any; // TODO ;
    duplicateMissingCustomDataWithContext(): any; // TODO ;
    duplicateMissingPropertiesWithContext(): any; // TODO ;
    duplicateMissingPrivatePropertiesWithContext(): any; // TODO ;
    doMergeElement(): any; // TODO ;
    doDuplicateElement(): any; // TODO ;
    mergeElement(): any; // TODO ;
    duplicateElement(): any; // TODO ;
    createElementCopy(): any; // TODO ;
    modifierAdded(mod: DzModifier): void;
    modifierRemoved(mod: DzModifier): void;
    aboutToAddModifier(): any; // TODO ;
    modifierStackChanged(): void;
    shapeAdded(shape: DzShape): void;
    shapeRemoved(shape: DzShape): void;
    currentShapeSwitched(): void;
    materialListChanged(): void;
    materialSelectionChanged(): void;
    drawnDataChanged(): void;
    uvsChanged(): void;
    cachedGeomInvalidated(): void;
    cachedGeomUpdated(): void;
    cachedGeomFinalized(): void;
    shapeTopologyChanged(): void;
    aboutToDelete(): void;
    aboutToFinalize(): any; // TODO ;
    materialSelectionSetsChanged(): any; // TODO ;
    cahceTopologyChanged(): any; // TODO ;
    modifierDuplicateSignal(): any; // TODO ;
    addShape(shape: DzShape, index: number): DzError;
    addShape(shape: DzShape, index: number): DzError;
    removeShape(index: number): DzError;
    moveShape(shape: DzShape, index: number): DzError;
    moveShape(shape: DzShape, index: number): DzError;
    removeAllShapes(): DzError;
    addModifier(modifier: DzModifier, index: number): DzError;
    addModifier(modifier: DzModifier, index: number): DzError;
    removeModifier(modifier: DzModifier): DzError;
    moveModifier(modifier: DzModifier, index: number): DzError;
    moveModifier(modifier: DzModifier, index: number): DzError;
    removeAllModifiers(): DzError;
    invalidateCache(): void;
    forceCacheUpdate(node: DzNode, isRender: boolean): void;
    forceCacheUpdate(node: DzNode, isRender: boolean): void;
    buildFilteredGeometry(node: DzNode, filter: DzAbstractBuildGeometryFilter, finalizeGeom: boolean, finalGeom: DzVertexMeshPtr): void;
    getCurrentShape(): DzShape;
    getNumShapes(): number;
    getShape(which: number): DzShape;
    getCachedGeom(): DzVertexMesh;
    getNumModifiers(): number;
    getModifier(which: number): DzModifier;
    findModifier(name: QString): DzModifier;
    findModifierIndex(mod: DzModifier): number;
    getGeometryControl(): DzEnumProperty;
    getBoundingBox(): DzBox3;
    getLocalBoundingBox(): DzBox3;
    getLocalOrientedBox(): DzOrientedBox3;
    doModifierDuplicate(): any; // TODO ;
    modifierDuplicate(): any; // TODO ;
}

declare class DzOrientedBox3 {

    /* Properties */
    objectName: string;
    localBox: QObject;
    transform: QObject;

    /* Methods */
    destroyed(): any; // TODO ;
    destroyed(): any; // TODO ;
    deleteLater(): any; // TODO ;
    inherits(): any; // TODO ;
    className(): any; // TODO ;
    toString(): any; // TODO ;
}

declare class DzMatrix3 {

    /* Properties */
    objectName: string;
    m11: number;
    m12: number;
    m13: number;
    m14: number;
    m21: number;
    m22: number;
    m23: number;
    m24: number;
    m31: number;
    m32: number;
    m33: number;
    m34: number;
    isIdentity: boolean;

    /* Methods */
    destroyed(): any; // TODO ;
    destroyed(): any; // TODO ;
    deleteLater(): any; // TODO ;
    inherits(): any; // TODO ;
    className(): any; // TODO ;
    toString(): any; // TODO ;
    inverse(): DzMatrix3;
    orthogonal(): boolean;
    multMatrixVec(): any; // TODO ;
    multiply(): any; // TODO ;
    makeIdentity(): void;
    noTrans(): void;
    noRot(): void;
    noScale(): void;
    orthogonalize(): void;
    setTrans(pnt: DzVec3): void;
    translate(v: DzVec3): void;
    preTranslate(v: DzVec3): void;
    rotateX(radians: number): void;
    rotateY(radians: number): void;
    rotateZ(radians: number): void;
    rotate(rot: DzQuat): void;
    preRotateX(radians: number): void;
    preRotateY(radians: number): void;
    preRotateZ(radians: number): void;
    preRotate(rot: DzQuat): void;
    scale(vec: DzVec3, affectTrans: boolean): void;
    scale(scale: number, affectTrans: boolean): void;
    scale(scale: number, direction: DzVec3, affectTrans: boolean): void;
    scale(vec: DzVec3, affectTrans: boolean): void;
    scale(scale: number, affectTrans: boolean): void;
    scale(scale: number, direction: DzVec3, affectTrans: boolean): void;
}

declare class DzQuat {

    /* Properties */
    objectName: string;
    x: number;
    y: number;
    z: number;
    w: number;

    /* Methods */
    destroyed(): any; // TODO ;
    destroyed(): any; // TODO ;
    deleteLater(): any; // TODO ;
    inherits(): any; // TODO ;
    className(): any; // TODO ;
    toString(): any; // TODO ;
    isIdentity(): boolean;
    inverse(): DzQuat;
    multVec(src: DzVec3): DzVec3;
    multiply(): any; // TODO ;
    getValue(m: DzMatrix3): void;
    getValue(m: DzMatrix4): void;
    getValue(order: DzRotationOrder, angles: DzVec3): void;
    getValue(axis: DzVec3, radians: number): void;
    getValue(vec: DzVec3): void;
    getValue(q: number, q1: number, q2: number, q3: number): void;
    getValue(vec: number[]): void;
    getXAxis(vec: DzVec3): void;
    getYAxis(vec: DzVec3): void;
    getZAxis(vec: DzVec3): void;
    invert(): void;
    makeClosest(r: DzQuat): void;
    scaleAngle(scaleFactor: number): void;
    makeIdentity(): void;
    normalize(): void;
    setValue(order: DzRotationOrder, angles: DzVec3): void;
    setValue(mtx: DzMatrix3): void;
    setValue(mtx: DzMatrix4): void;
    setValue(quat: DzQuat): void;
    setValue(axis: DzVec3, radians: number): void;
    setValue(vec: DzVec3): void;
    setValue(xAxis: DzVec3, yAxis: DzVec3): void;
    setValue(vec: number[], normalize: boolean): void;
    setValue(q: number, q1: number, q2: number, q3: number, normalize: boolean): void;
    setValue(axis: number, radians: number): void;
    setValue(order: DzRotationOrder, angles: DzVec3): void;
    setValue(mtx: DzMatrix3): void;
    setValue(mtx: DzMatrix4): void;
    setValue(quat: DzQuat): void;
    setValue(axis: DzVec3, radians: number): void;
    setValue(vec: DzVec3): void;
    setValue(xAxis: DzVec3, yAxis: DzVec3): void;
    setValue(vec: number[], normalize: boolean): void;
    setValue(q: number, q1: number, q2: number, q3: number, normalize: boolean): void;
    setValue(axis: number, radians: number): void;
    setValue(order: DzRotationOrder, angles: DzVec3): void;
    setValue(mtx: DzMatrix3): void;
    setValue(mtx: DzMatrix4): void;
    setValue(quat: DzQuat): void;
    setValue(axis: DzVec3, radians: number): void;
    setValue(vec: DzVec3): void;
    setValue(xAxis: DzVec3, yAxis: DzVec3): void;
    setValue(vec: number[], normalize: boolean): void;
    setValue(q: number, q1: number, q2: number, q3: number, normalize: boolean): void;
    setValue(axis: number, radians: number): void;
    setValue(order: DzRotationOrder, angles: DzVec3): void;
    setValue(mtx: DzMatrix3): void;
    setValue(mtx: DzMatrix4): void;
    setValue(quat: DzQuat): void;
    setValue(axis: DzVec3, radians: number): void;
    setValue(vec: DzVec3): void;
    setValue(xAxis: DzVec3, yAxis: DzVec3): void;
    setValue(vec: number[], normalize: boolean): void;
    setValue(q: number, q1: number, q2: number, q3: number, normalize: boolean): void;
    setValue(axis: number, radians: number): void;
}

declare class DzFloatProperty extends DzNumericProperty {
    static className(): QString;

    /* Properties */
    emitValueChangedOnSceneClear: boolean;
    LINEAR_INTERP: number;
    CONSTANT_INTERP: number;
    TCB_INTERP: number;
    HERMITE_INTERP: number;
    NON_TRANSFORM: number;
    SCALE: number;
    TRANSLATE: number;
    ROT_FIRST_AXIS: number;
    ROT_SECOND_AXIS: number;
    ROT_THIRD_AXIS: number;
    NO_INTEREST: number;
    X_INTEREST: number;
    Y_INTEREST: number;
    Z_INTEREST: number;
    ALL_INTEREST: number;

    /* Methods */
    dynamicallyHiddenChanged(): any; // TODO ;
    dynamicallyAutoFollowChanged(): any; // TODO ;
    controllerListChanged(): any; // TODO ;
    slaveControllerListChanged(): any; // TODO ;
    aliasListChanged(): any; // TODO ;
    keysAreClamped(): any; // TODO ;
    setKeysAreClamped(): any; // TODO ;
    toggleKeysAreClamped(): any; // TODO ;
    setDynamicallyHidden(): any; // TODO ;
    setDynamicallyAutoFollow(): any; // TODO ;
    currentValueIsDefinitionValue(): any; // TODO ;
    doCopyBaseData(): any; // TODO ;
    getEmitValueChangedOnSceneClear(): any; // TODO ;
    setEmitValueChangedOnSceneClear(): any; // TODO ;
    isDynamicallyHidden(): any; // TODO ;
    isDynamicallyAutoFollow(): any; // TODO ;
    emitRemoved(): any; // TODO ;
    invalidateCacheValue(): any; // TODO ;
    addValueToSettings(): any; // TODO ;
    addValueToSettings(): any; // TODO ;
    setValueFromSettings(): any; // TODO ;
    setValueFromSettings(): any; // TODO ;
    addValueToSettings(): any; // TODO ;
    addValueToSettings(): any; // TODO ;
    setValueFromSettings(): any; // TODO ;
    setValueFromSettings(): any; // TODO ;
    setWidgetClassOverride(): any; // TODO ;
    getWidgetClassOverride(): any; // TODO ;
    getWidgetClassOverride(): any; // TODO ;
    hasWidgetClassOverride(): any; // TODO ;
    hasWidgetClassOverride(): any; // TODO ;
    isMappableChanged(): any; // TODO ;
    defaultMapGammaChanged(): any; // TODO ;
    defaultMapTextureTypeChanged(): any; // TODO ;
    textureModifierChanged(): any; // TODO ;
    textureModifierFlagsChanged(): any; // TODO ;
    getDefaultMapGamma(): any; // TODO ;
    setDefaultMapGamma(): any; // TODO ;
    getDefaultMapTextureType(): any; // TODO ;
    setDefaultMapTextureType(): any; // TODO ;
    setTextureModifier(): any; // TODO ;
    getTextureModifier(): any; // TODO ;
    setTextureModifierFlags(): any; // TODO ;
    getTextureModifierFlags(): any; // TODO ;
    getNDoubleValue(): any; // TODO ;
    getNDoubleValue(): any; // TODO ;
    getNValueCount(): any; // TODO ;
    getValueAsFloatColor(): any; // TODO ;
    getValueAsFloatColor(): any; // TODO ;
    getValueAsVec3(): any; // TODO ;
    getValueAsVec3(): any; // TODO ;
    getValueAsVec2(): any; // TODO ;
    getValueAsVec2(): any; // TODO ;
    getValueAsInt2(): any; // TODO ;
    getValueAsInt2(): any; // TODO ;
    getValueAsDouble(): any; // TODO ;
    getValueAsDouble(): any; // TODO ;
    emitDefaultMapGammaChanged(): any; // TODO ;
    emitDefaultMapTextureTypeChanged(): any; // TODO ;
    emitTextureModifierChanged(): any; // TODO ;
    emitTextureModifierFlagsChanged(): any; // TODO ;
    emitIsMappableChanged(): any; // TODO ;
    displayAsPercentChanged(): void;
    adjustValue(tm: DzTime, val: number): number;
    adjustValue(val: number): number;
    adjustValue(tm: DzTime, val: number): number;
    adjustValue(val: number): number;
    setValue(tm: DzTime, val: number, interp?: number): void;
    setValue(val: number): void;
    setDefaultValue(val: number): void;
    setKeyValue(i: number, val: number): void;
    setKeyInterpolation(i: number, interp: number): void;
    setKeyInterpolation(i: number, interp: number): void;
    setKeyInterpolation(i: number, interp: number): void;
    setKeyInterpolation(i: number, interp: number): void;
    setSensitivity(sens: number): void;
    setDisplayAsPercent(onOff: boolean): void;
    multiply(val: number, applyToDefault: boolean): void;
    multiply(val: number, applyToDefault: boolean): void;
    divide(val: number, applyToDefault: boolean): void;
    divide(val: number, applyToDefault: boolean): void;
    add(val: number, applyToDefault: boolean): void;
    add(val: number, applyToDefault: boolean): void;
    subtract(val: number, applyToDefault: boolean): void;
    subtract(val: number, applyToDefault: boolean): void;
    setTransformType(type: number): void;
    getRawValue(tm: DzTime): number;
    getRawValue(): number;
    getRawValue(tm: DzTime): number;
    getRawValue(): number;
    getValue(tm: DzTime): number;
    getValue(): number;
    getValue(tm: DzTime): number;
    getValue(): number;
    getLocalValue(tm: DzTime): number;
    getLocalValue(): number;
    getLocalValue(tm: DzTime): number;
    getLocalValue(): number;
    getDefaultValue(): number;
    getKeyValue(i: number): number;
    getKeyInterpolationType(i: number, param: number): number;
    getKeyInterpolationType(i: number, param: number): number;
    getKeyInterpolationType(i: number, param: number): number;
    getKeyInterpolationType(i: number, param: number): number;
    getDisplayAsPercent(): boolean;
    getSensitivity(): number;
    getTransformType(): number;
    getScaledFollowValue(): any; // TODO ;
    emitDisplayAsPercentChanged(): void;
    getMax(): Number
    getMin(): Number
}

declare class DzFloatColorProperty extends DzFloatProperty {
    
    //labelChanged(QString)
    //hiddenChanged(bool)
    //dynamicallyHiddenChanged(bool)
    //dynamicallyAutoFollowChanged(bool)
    //isFavoriteChanged(bool)
    //isGlobalFavoriteChanged(bool)
    //groupChanged(DzPropertyGroup *)
    //selectionStateChanged()
    //newStateChanged()
    //propertyDeleted(DzProperty *)
    //removed()
    //presentationIconChanged()
    //regionChanged()
    //controllerListChanged()
    //slaveControllerListChanged()
    //aliasListChanged()
    //currentValueChanged()
    //valueChanged(DzTimeRange)
    //isUserPropertyChanged(bool)
    //isManipulatorChanged(bool)
    //canAnimateChanged(bool)
    //keySelectionChanged(DzTimeRange)
    //lockStateChanged()
    //canAutoFollowChanged(bool)
    //overridingControllersChanged(bool)
    //editFinished()
    //assetModified()
    //assetWasSaved()
    //keysAreClamped()
    //setKeysAreClamped(bool)
    //toggleKeysAreClamped()
    //beginEdit()
    //finishEdit()
    //cancelEdit()
    //isEditing()
    //setLabel(QString)
    //setHidden(bool)
    //setDynamicallyHidden(bool)
    //setDynamicallyAutoFollow(bool)
    //setPath(QString)
    //setIsUserProperty(bool)
    //setIsRigProperty(bool)
    //setCanAnimate(bool)
    //selectKey(index: number, bool)
    //selectKey(index: number)
    //selectKeys(DzTimeRange, bool)
    //selectAllKeys(bool)
    //selectAllKeys()
    //deleteKeys(DzTimeRange)
    //deleteKeys(index: number, int)
    //deleteSelectedKeys()
    //deleteAllKeys()
    //copyFrom(DzProperty *)
    //lock(bool)
    //removeController(index: number)
    //removeController(DzController *)
    //removeAllControllers()
    //moveControllerToIndex(index: number, int)
    //moveControllerToIndex(DzController *,int)
    //setCurrentAttributesAsDefinition()
    //doCurrentAttributesMatchDefinition()
    //getGroupOnlyPath()
    //setIsManipulator(bool)
    //setIsFavorite(bool)
    //setIsGlobalFavorite(bool)
    //setSelected(bool)
    //setCanAutoFollow(bool)
    //setOverrideControllers(bool)
    //setNew(bool)
    //setAttributes(DzPropertySettings)
    //setAttributes(const DzPropertySettings*)
    //removeController(DzProperty *)
    //isCombinable(DzProperty *)
    //currentValueIsDefaultValue()
    //currentValueIsDefinitionValue()
    //findMatchingProperty(DzNode *)
    //getPresentation()
    //setPresentation(DzPresentation *)
    //getRegion()
    //setRegion(DzGeometryRegion *)
    //clearRegion(bool)
    //clearRegion()
    //modifyAsset()
    //modifyAsset(DzUri)
    //propertyDuplicate()
    //doCopyBaseData(DzProperty *)
    //getEmitValueChangedOnSceneClear()
    //setEmitValueChangedOnSceneClear(bool)
    //isNumeric()
    //isAlias()
    //getAliasTarget()
    //createAlias()
    //getLabel()
    //canAnimate()
    //isUserProperty()
    //isRigProperty()
    //isPrivateProperty()
    //isHidden()
    //isDynamicallyHidden()
    //isDynamicallyAutoFollow()
    //getOwner()
    //getGroup()
    //getPath()
    //hasKeys()
    //getNumKeys()
    //getNumKeys(DzTimeRange)
    //getKeyRange()
    //getSelectedKeyRange()
    //getNumSelectedKeys()
    //getKeyTime(index: number)
    //getKeyIndexRange(DzTimeRange, int &)
    //isKey(DzTime, int &)
    //isKeySelected(index: number)
    //isLocked()
    //getWidgetClass(bool)
    //getWidgetClass()
    //getNumControllers()
    //getController(index: number)
    //getControllerList()
    //hasControllers()
    //getNumSlaveControllers()
    //getIndexOfSlaveControllers(DzController *)
    //getSlaveController(index: number)
    //getSlaveControllerList()
    //hasSlaveControllers()
    //isManipulator()
    //isFavorite()
    //isGlobalFavorite()
    //isSelected()
    //canAutoFollow()
    //isOverridingControllers()
    //isNew()
    //getAttributes(DzPropertySettings &)
    //getAttributes(DzPropertySettings *)
    //emitRemoved()
    //getNumAliases()
    //getAlias(index: number)
    //copyToClipboard()
    //invalidateCacheValue()
    //addValueToSettings(DzTime, DzSettings *,PropertyValueSettingsFlags)
    //addValueToSettings(DzTime, DzSettings *)
    //setValueFromSettings(DzTime,const DzSettings*,PropertyValueSettingsFlags)
    //setValueFromSettings(DzTime,const DzSettings*)
    //addValueToSettings(DzSettings *,PropertyValueSettingsFlags)
    //addValueToSettings(DzSettings *)
    //setValueFromSettings(const DzSettings*,PropertyValueSettingsFlags)
    //setValueFromSettings(const DzSettings*)
    //setWidgetClassOverride(QString, QString)
    //getWidgetClassOverride(bool)
    //getWidgetClassOverride()
    //hasWidgetClassOverride(bool)
    //hasWidgetClassOverride()
    //emitCurrentValueChanged()
    //emitValueChanged(DzTimeRange)
    //emitIsUserPropertyChanged(bool)
    //emitIsManipulatorChanged(bool)
    //emitCanAnimateChanged(bool)
    //emitKeySelectionChanged(DzTimeRange)
    //emitLockStateChanged()
    //emitCanAutoFollowChanged(bool)
    //emitOverridingControllersChanged(bool)
    //emitEditFinished()
    //minMaxChanged()
    //clampedChanged(bool)
    //mapChanged()
    //isMappableChanged()
    //linked()
    //unlinked()
    //defaultMapGammaChanged()
    //defaultMapTextureTypeChanged()
    //textureModifierChanged()
    //textureModifierFlagsChanged()
    //setXYZInterest(XYZInterest)
    //setIsModulo(bool)
    //setIsClamped(bool)
    //setIsMappable(bool)
    //setMap(const DzTexture*)
    //setMap(QString)
    //setMustHaveMap(bool)
    //clearMap()
    //insertController(DzNumericController *,int)
    //insertController(DzNumericController *)
    //linkTo(DzNumericProperty *)
    //unlink()
    //isInvalidWithoutMap()
    //isMappable()
    //isMapped()
    //getMapValue(DzTime)
    //getMapValue()
    //getXYZInterest()
    //isModulo()
    //isClamped()
    //isLinked()
    //isMaster()
    //getLinkProperty()
    //getFollowProperty()
    //setDoubleValue(double)
    //setDoubleValue(DzTime, double)
    //getDoubleValue()
    //getDoubleValue(DzTime)
    //setDoubleDefaultValue(double)
    //getDoubleDefaultValue()
    //getFollowValue()
    //getFollowValue(DzTime)
    //getDefaultMapGamma()
    //setDefaultMapGamma(float)
    //getDefaultMapTextureType()
    //setDefaultMapTextureType(index: number)
    //setTextureModifier(DzTextureModifier *)
    //getTextureModifier()
    //setTextureModifierFlags(index: number)
    //getTextureModifierFlags()
    //findMatchingProperty(DzNode *,bool)
    //setFollowListeners()
    //getNDoubleValue()
    //getNDoubleValue(DzTime)
    //getNValueCount()
    //getValueAsFloatColor()
    //getValueAsFloatColor(DzTime)
    //getValueAsVec3()
    //getValueAsVec3(DzTime)
    //getValueAsVec2()
    //getValueAsVec2(DzTime)
    //getValueAsInt2()
    //getValueAsInt2(DzTime)
    //getValueAsDouble()
    //getValueAsDouble(DzTime)
    //emitMinMaxChanged()
    //emitClampedChanged(bool)
    //emitMapChanged()
    //emitLinked()
    //emitUnlinked()
    //emitDefaultMapGammaChanged()
    //emitDefaultMapTextureTypeChanged()
    //emitTextureModifierChanged()
    //emitTextureModifierFlagsChanged()
    //emitIsMappableChanged()
    //adjustValue(index: number)
    //adjustValue(DzTime, int)
    //setValue(index: number)
    //setValue(DzTime, int)
    //setDefaultValue(index: number)
    //setKeyValue(index: number, int)
    //setMin(index: number)
    //setMax(index: number)
    //setMinMax(index: number, int)
    //setSensitivity(index: number)
    //getRawValue()
    //getRawValue(DzTime)
    //getValue(DzTime)
    //getValue()
    //getLocalValue()
    //getLocalValue(DzTime)
    //getDefaultValue()
    //getKeyValue(index: number)
    //getMin()
    //getMax()
    //getSensitivity()
    //animationBlendModeChanged()
    setColorValue(color: QColor);
    setColorValue(time: DzTime, color: QColor);
    //setDefaultColorValue(QColor)
    //setKeyColorValue(index: number, QColor)
    getColorValue(): QColor;
    //getColorValue(DzTime)
    //getDefaultColorValue()
    //getRawColorValue()
    //getRawColorValue(DzTime)
    //getKeyColorValue(index: number)
    //animationBlendModeToStr(index: number)
    //animationBlendModeFromStr(QString)
    //setAnimationBlendMode(AnimationBlendMode)
    //getAnimationBlendMode()
    //emitAnimationBlendModeChanged()
    //setFloatMin(double)
    //setFloatMax(double)
    //setFloatMinMax(double, double)
    //setFloatSensitivity(double)
    //setRawFloatColorValue(DzFloatColor)
    //setRawFloatColorValue(DzTime, DzFloatColor)
    //setFloatColorValue(DzFloatColor)
    //setFloatColorValue(DzTime, DzFloatColor)
    //setFloatColorValue(DzTime, DzFloatColor, InterpolationType)
    //setFloatColorValue(DzTime, DzFloatColor, InterpolationType, float, float, float)
    //setDefaultFloatColorValue(DzFloatColor)
    //setKeyFloatColorValue(index: number, DzFloatColor)
    //setKeyInterpolation(index: number, InterpolationType)
    //setKeyInterpolation(index: number, InterpolationType, float, float, float)
    //getFloatMin()
    //getFloatMax()
    //getFloatMinMax(float &,float &)
    //getFloatMinMax(double &,double &)
    //adjustFloatColorValue(DzFloatColor)
    //adjustFloatColorValue(DzTime, DzFloatColor)
    //getFloatColorValue()
    //getFloatColorValue(DzTime)
    //getLocalFloatColorValue()
    //getLocalFloatColorValue(DzTime)
    //getDefaultFloatColorValue()
    //getRawFloatColorValue()
    //getRawFloatColorValue(DzTime)
    //getKeyFloatColorValue(index: number)
    //getFloatSensitivity()
    //getKeyInterpolationTypeValues(index: number)
    //getFloatColorFollowValue()
    //getFloatColorFollowValue(DzTime)
    
}

declare class DzBoolProperty extends DzIntProperty {

    /* Properties */
    emitValueChangedOnSceneClear: boolean;
    NO_INTEREST: number;
    X_INTEREST: number;
    Y_INTEREST: number;
    Z_INTEREST: number;
    ALL_INTEREST: number;

    /* Methods */
    dynamicallyHiddenChanged(): any; // TODO ;
    dynamicallyAutoFollowChanged(): any; // TODO ;
    controllerListChanged(): any; // TODO ;
    slaveControllerListChanged(): any; // TODO ;
    aliasListChanged(): any; // TODO ;
    keysAreClamped(): any; // TODO ;
    setKeysAreClamped(): any; // TODO ;
    toggleKeysAreClamped(): any; // TODO ;
    setDynamicallyHidden(): any; // TODO ;
    setDynamicallyAutoFollow(): any; // TODO ;
    currentValueIsDefinitionValue(): any; // TODO ;
    doCopyBaseData(): any; // TODO ;
    getEmitValueChangedOnSceneClear(): any; // TODO ;
    setEmitValueChangedOnSceneClear(): any; // TODO ;
    isDynamicallyHidden(): any; // TODO ;
    isDynamicallyAutoFollow(): any; // TODO ;
    emitRemoved(): any; // TODO ;
    invalidateCacheValue(): any; // TODO ;
    addValueToSettings(): any; // TODO ;
    addValueToSettings(): any; // TODO ;
    setValueFromSettings(): any; // TODO ;
    setValueFromSettings(): any; // TODO ;
    addValueToSettings(): any; // TODO ;
    addValueToSettings(): any; // TODO ;
    setValueFromSettings(): any; // TODO ;
    setValueFromSettings(): any; // TODO ;
    setWidgetClassOverride(): any; // TODO ;
    getWidgetClassOverride(): any; // TODO ;
    getWidgetClassOverride(): any; // TODO ;
    hasWidgetClassOverride(): any; // TODO ;
    hasWidgetClassOverride(): any; // TODO ;
    isMappableChanged(): any; // TODO ;
    defaultMapGammaChanged(): any; // TODO ;
    defaultMapTextureTypeChanged(): any; // TODO ;
    textureModifierChanged(): any; // TODO ;
    textureModifierFlagsChanged(): any; // TODO ;
    getDefaultMapGamma(): any; // TODO ;
    setDefaultMapGamma(): any; // TODO ;
    getDefaultMapTextureType(): any; // TODO ;
    setDefaultMapTextureType(): any; // TODO ;
    setTextureModifier(): any; // TODO ;
    getTextureModifier(): any; // TODO ;
    setTextureModifierFlags(): any; // TODO ;
    getTextureModifierFlags(): any; // TODO ;
    getNDoubleValue(): any; // TODO ;
    getNDoubleValue(): any; // TODO ;
    getNValueCount(): any; // TODO ;
    getValueAsFloatColor(): any; // TODO ;
    getValueAsFloatColor(): any; // TODO ;
    getValueAsVec3(): any; // TODO ;
    getValueAsVec3(): any; // TODO ;
    getValueAsVec2(): any; // TODO ;
    getValueAsVec2(): any; // TODO ;
    getValueAsInt2(): any; // TODO ;
    getValueAsInt2(): any; // TODO ;
    getValueAsDouble(): any; // TODO ;
    getValueAsDouble(): any; // TODO ;
    emitDefaultMapGammaChanged(): any; // TODO ;
    emitDefaultMapTextureTypeChanged(): any; // TODO ;
    emitTextureModifierChanged(): any; // TODO ;
    emitTextureModifierFlagsChanged(): any; // TODO ;
    emitIsMappableChanged(): any; // TODO ;
    setBoolValue(tm: DzTime, val: boolean): void;
    setBoolValue(val: boolean): void;
    setBoolValue(tm: DzTime, val: boolean): void;
    setBoolValue(val: boolean): void;
    setDefaultBoolValue(val: boolean): void;
    setKeyBoolValue(i: number, val: boolean): void;
    getBoolValue(tm: DzTime): boolean;
    getBoolValue(): boolean;
    getBoolValue(tm: DzTime): boolean;
    getBoolValue(): boolean;
    getDefaultBoolValue(): boolean;
    getRawBoolValue(tm: DzTime): boolean;
    getRawBoolValue(): boolean;
    getRawBoolValue(tm: DzTime): boolean;
    getRawBoolValue(): boolean;
    getKeyBoolValue(i: number): boolean;
}

declare class DzEnumProperty extends DzIntProperty {

    /* Properties */
    emitValueChangedOnSceneClear: boolean;
    NO_INTEREST: number;
    X_INTEREST: number;
    Y_INTEREST: number;
    Z_INTEREST: number;
    ALL_INTEREST: number;

    /* Methods */
    dynamicallyHiddenChanged(): any; // TODO ;
    dynamicallyAutoFollowChanged(): any; // TODO ;
    controllerListChanged(): any; // TODO ;
    slaveControllerListChanged(): any; // TODO ;
    aliasListChanged(): any; // TODO ;
    keysAreClamped(): any; // TODO ;
    setKeysAreClamped(): any; // TODO ;
    toggleKeysAreClamped(): any; // TODO ;
    setDynamicallyHidden(): any; // TODO ;
    setDynamicallyAutoFollow(): any; // TODO ;
    currentValueIsDefinitionValue(): any; // TODO ;
    doCopyBaseData(): any; // TODO ;
    getEmitValueChangedOnSceneClear(): any; // TODO ;
    setEmitValueChangedOnSceneClear(): any; // TODO ;
    isDynamicallyHidden(): any; // TODO ;
    isDynamicallyAutoFollow(): any; // TODO ;
    emitRemoved(): any; // TODO ;
    invalidateCacheValue(): any; // TODO ;
    addValueToSettings(): any; // TODO ;
    addValueToSettings(): any; // TODO ;
    setValueFromSettings(): any; // TODO ;
    setValueFromSettings(): any; // TODO ;
    addValueToSettings(): any; // TODO ;
    addValueToSettings(): any; // TODO ;
    setValueFromSettings(): any; // TODO ;
    setValueFromSettings(): any; // TODO ;
    setWidgetClassOverride(): any; // TODO ;
    getWidgetClassOverride(): any; // TODO ;
    getWidgetClassOverride(): any; // TODO ;
    hasWidgetClassOverride(): any; // TODO ;
    hasWidgetClassOverride(): any; // TODO ;
    isMappableChanged(): any; // TODO ;
    defaultMapGammaChanged(): any; // TODO ;
    defaultMapTextureTypeChanged(): any; // TODO ;
    textureModifierChanged(): any; // TODO ;
    textureModifierFlagsChanged(): any; // TODO ;
    getDefaultMapGamma(): any; // TODO ;
    setDefaultMapGamma(): any; // TODO ;
    getDefaultMapTextureType(): any; // TODO ;
    setDefaultMapTextureType(): any; // TODO ;
    setTextureModifier(): any; // TODO ;
    getTextureModifier(): any; // TODO ;
    setTextureModifierFlags(): any; // TODO ;
    getTextureModifierFlags(): any; // TODO ;
    getNDoubleValue(): any; // TODO ;
    getNDoubleValue(): any; // TODO ;
    getNValueCount(): any; // TODO ;
    getValueAsFloatColor(): any; // TODO ;
    getValueAsFloatColor(): any; // TODO ;
    getValueAsVec3(): any; // TODO ;
    getValueAsVec3(): any; // TODO ;
    getValueAsVec2(): any; // TODO ;
    getValueAsVec2(): any; // TODO ;
    getValueAsInt2(): any; // TODO ;
    getValueAsInt2(): any; // TODO ;
    getValueAsDouble(): any; // TODO ;
    getValueAsDouble(): any; // TODO ;
    emitDefaultMapGammaChanged(): any; // TODO ;
    emitDefaultMapTextureTypeChanged(): any; // TODO ;
    emitTextureModifierChanged(): any; // TODO ;
    emitTextureModifierFlagsChanged(): any; // TODO ;
    emitIsMappableChanged(): any; // TODO ;
    itemListChanged(): void;
    addItem(item: QString, index: number): number;
    addItem(item: QString, index: number): number;
    removeItem(index: number): boolean;
    removeAllItems(): void;
    replaceItem(index: number, item: QString): boolean;
    setValueFromString(tm: DzTime, str: QString): boolean;
    setValueFromString(str: QString): boolean;
    setValueFromString(tm: DzTime, str: QString): boolean;
    setValueFromString(str: QString): boolean;
    setItems(): any; // TODO ;
    getDefaultStringValue(): QString;
    getRawStringValue(tm: DzTime): QString;
    getRawStringValue(): QString;
    getRawStringValue(tm: DzTime): QString;
    getRawStringValue(): QString;
    getKeyStringValue(i: number): QString;
    getNumItems(): number;
    getItem(i: number): QString;
    getUniqueItemString(item: QString): QString;
    findItemString(str: QString): number;
    emitItemListChanged(): void;
}

declare class DzNumericNodeProperty extends DzFloatProperty {

    /* Properties */

    /* Methods */
    nodeChanged(node: DzNode): void;
    invalidWithoutNodeChanged(onOff: boolean): void;
    setMustHaveNode(onOff: boolean): void;
    setNode(node: DzNode): void;
    isInvalidWithoutNode(): boolean;
    redirectNodes(): any; // TODO ;
    emitNodeChanged(node: DzNode): void;
    emitInvalidWithoutNodeChanged(onOff: boolean): void;
}

declare class DzPresentation extends DzBase {

    /* Properties */
    type: string;
    label: string;
    description: string;
    iconLarge: string;
    iconSmall: string;
    colorA: QObject;
    colorB: QObject;
    autoFitBase: string;
    preferredBase: string;

    /* Methods */
    iconReady(): void;
    attributeChanged(): void;
}

declare class DzDockArea extends QWidget {

    /* Properties */
    modal: boolean;
    windowModality: number;
    geometry: QObject;
    frameGeometry: QObject;
    normalGeometry: QObject;
    pos: QObject;
    frameSize: QObject;
    size: QObject;
    rect: QObject;
    childrenRect: QObject;
    childrenRegion: QObject;
    sizePolicy: QObject;
    minimumSize: QObject;
    maximumSize: QObject;
    minimumWidth: number;
    minimumHeight: number;
    maximumWidth: number;
    maximumHeight: number;
    sizeIncrement: QObject;
    baseSize: QObject;
    cursor: QObject;
    mouseTracking: boolean;
    isActiveWindow: boolean;
    focusPolicy: number;
    focus: boolean;
    contextMenuPolicy: number;
    updatesEnabled: boolean;
    visible: boolean;
    minimized: boolean;
    maximized: boolean;
    fullScreen: boolean;
    sizeHint: QObject;
    minimumSizeHint: QObject;
    acceptDrops: boolean;
    windowTitle: string;
    windowIcon: QObject;
    windowIconText: string;
    windowOpacity: number;
    windowModified: boolean;
    accessibleName: string;
    accessibleDescription: string;
    layoutDirection: number;
    autoFillBackground: boolean;
    styleSheet: string;
    locale: QObject;
    windowFilePath: string;
    inputMethodHints: number;

    /* Methods */
    customContextMenuRequested(): any; // TODO ;
    setEnabled(): any; // TODO ;
    setDisabled(): any; // TODO ;
    setWindowModified(): any; // TODO ;
    setWindowTitle(): any; // TODO ;
    setStyleSheet(): any; // TODO ;
    setFocus(): any; // TODO ;
    update(): any; // TODO ;
    repaint(): any; // TODO ;
    setVisible(): any; // TODO ;
    setHidden(): any; // TODO ;
    show(): any; // TODO ;
    hide(): any; // TODO ;
    setShown(): any; // TODO ;
    showMinimized(): any; // TODO ;
    showMaximized(): any; // TODO ;
    showFullScreen(): any; // TODO ;
    showNormal(): any; // TODO ;
    close(): any; // TODO ;
    raise(): any; // TODO ;
    lower(): any; // TODO ;
    updateMicroFocus(): any; // TODO ;
    getNumColumns(): number;
    getColumn(which: number): DzDockAreaColumn;
}

declare class DzViewportMgr extends QWidget {

    /* Properties */
    modal: boolean;
    windowModality: number;
    geometry: QObject;
    frameGeometry: QObject;
    normalGeometry: QObject;
    pos: QObject;
    frameSize: QObject;
    size: QObject;
    rect: QObject;
    childrenRect: QObject;
    childrenRegion: QObject;
    sizePolicy: QObject;
    minimumSize: QObject;
    maximumSize: QObject;
    minimumWidth: number;
    minimumHeight: number;
    maximumWidth: number;
    maximumHeight: number;
    sizeIncrement: QObject;
    baseSize: QObject;
    cursor: QObject;
    mouseTracking: boolean;
    isActiveWindow: boolean;
    focusPolicy: number;
    focus: boolean;
    contextMenuPolicy: number;
    updatesEnabled: boolean;
    visible: boolean;
    minimized: boolean;
    maximized: boolean;
    fullScreen: boolean;
    sizeHint: QObject;
    minimumSizeHint: QObject;
    acceptDrops: boolean;
    windowTitle: string;
    windowIcon: QObject;
    windowIconText: string;
    windowOpacity: number;
    windowModified: boolean;
    accessibleName: string;
    accessibleDescription: string;
    layoutDirection: number;
    autoFillBackground: boolean;
    styleSheet: string;
    locale: QObject;
    windowFilePath: string;
    inputMethodHints: number;
    NO_PANES: number;
    SINGLE_PANE: number;
    LEFT_RIGHT: number;
    TOP_BOTTOM: number;
    LEFT2_RIGHT: number;
    LEFT3_RIGHT: number;
    LEFT_RIGHT2: number;
    LEFT_RIGHT3: number;
    TOP2_BOTTOM: number;
    TOP3_BOTTOM: number;
    TOP_BOTTOM2: number;
    TOP_BOTTOM3: number;
    FOUR_PANE: number;
    NUM_LAYOUTS: number;
    QDOff: number;
    QDWire: number;
    QDSmooth: number;
    NoOperation: number;
    OrbitCamera: number;
    RotateCamera: number;
    PanCamera: number;
    DollyCamera: number;
    BankCamera: number;
    ZoomDCamera: number;
    ZoomFCamera: number;
    Node: number;
    SkeletonThenNode: number;
    Skeleton: number;
    Nested: number;
    Flat: number;
    NoAccel: number;
    LeftClick: number;
    RightClick: number;
    MidClick: number;
    AltLeftClick: number;
    AltRightClick: number;
    AltMidClick: number;
    CtrlLeftClick: number;
    CtrlRightClick: number;
    CtrlMidClick: number;
    ShiftLeftClick: number;
    ShiftRightClick: number;
    ShiftMidClick: number;
    CtrlAltLeftClick: number;
    CtrlAltRightClick: number;
    CtrlAltMidClick: number;
    CtrlShiftLeftClick: number;
    CtrlShiftRightClick: number;
    CtrlShiftMidClick: number;
    AltShiftLeftClick: number;
    AltShiftRightClick: number;
    AltShiftMidClick: number;
    CtrlAltShiftLeftClick: number;
    CtrlAltShiftRightClick: number;
    CtrlAltShiftMidClick: number;
    NoModifier: number;
    Alt: number;
    Shift: number;
    Ctrl: number;
    CtrlAlt: number;
    CtrlShift: number;
    CtrlAltShift: number;
    ShiftAlt: number;

    /* Methods */
    customContextMenuRequested(): any; // TODO ;
    setEnabled(): any; // TODO ;
    setDisabled(): any; // TODO ;
    setWindowModified(): any; // TODO ;
    setWindowTitle(): any; // TODO ;
    setStyleSheet(): any; // TODO ;
    setFocus(): any; // TODO ;
    update(): any; // TODO ;
    repaint(): any; // TODO ;
    setVisible(): any; // TODO ;
    setHidden(): any; // TODO ;
    show(): any; // TODO ;
    hide(): any; // TODO ;
    setShown(): any; // TODO ;
    showMinimized(): any; // TODO ;
    showMaximized(): any; // TODO ;
    showFullScreen(): any; // TODO ;
    showNormal(): any; // TODO ;
    close(): any; // TODO ;
    raise(): any; // TODO ;
    lower(): any; // TODO ;
    updateMicroFocus(): any; // TODO ;
    toolListChanged(): void;
    activeToolSwitched(): void;
    activeViewSwitched(): void;
    activeViewResized(): void;
    propagateBackgroundColorChanged(onOff: boolean): void;
    viewLayoutChanged(): void;
    contextMenuAboutToShow(menu: DzMenu, view: Dz3DViewport, pos: QPoint): void;
    viewportCameraListChanged(): void;
    redrawsLocked(onOff: boolean): void;
    manipStarted(): void;
    manipFinished(): void;
    quickDrawModeChanged(mode: number): void;
    subDManipulationChanged(obj: boolean): void;
    accelChanged(operation: number, accel: number): void;
    acceleratorsChanged(): void;
    invertMouseWheelChanged(onOff: boolean): void;
    nodeClickModeChanged(obj: number): void;
    regionClickModeChanged(obj: number): void;
    graftDrawingChanged(): void;
    manipulationBindingChanged(obj: boolean): void;
    activeToolDrawnDataChanged(): any; // TODO ;
    acitve3DViewCurrentDimensionsChanged(): any; // TODO ;
    drawElementsListChanged(): any; // TODO ;
    setLayout(val: number): void;
    resetViewCameras(): void;
    setActiveViewport(activeView: DzViewport): void;
    setPropagateBackgroundColor(onOff: boolean): void;
    repaintActive3DViewport(): void;
    setActiveTool(tool: DzViewTool): void;
    setActiveTool(which: number): void;
    setActiveTool(tool: DzViewTool): void;
    setActiveTool(which: number): void;
    activateNextTool(): void;
    activatePrevTool(): void;
    setViewRatios(hSingle: number, h1: number, h2: number, vSingle: number, v1: number, v2: number): void;
    setMouseBtnAccelerator(operation: number, accel: number): void;
    validateMouseBtnAccelerator(accel: number): boolean;
    validateMouseWheelAccelerator(accel: number): boolean;
    setInvertMouseWheel(onOff: boolean): void;
    setNodeClickMode(mode: number): void;
    getNodeClickMode(): number;
    setRegionClickMode(mode: number): void;
    getRegionClickMode(): number;
    getNumViews(): number;
    getView(which: number): DzView;
    getViewIcon(): any; // TODO ;
    getViewDescription(): any; // TODO ;
    getNumUserDrawStyles(): number;
    getUserDrawStyle(which: number): DzUserDrawStyle;
    findUserDrawStyle(): any; // TODO ;
    getActiveViewportDimensionsController(): any; // TODO ;
    getActiveViewport(): DzViewport;
    getNumViewports(): any; // TODO ;
    getNumDefaultViewports(): any; // TODO ;
    getNumCustomViewports(): any; // TODO ;
    getViewport(which: number): DzViewport;
    getDefaultViewport(): any; // TODO ;
    getCustomViewport(): any; // TODO ;
    getNumVisibleViewports(): number;
    getNumVisibleDefaultViewports(): any; // TODO ;
    getNumVisibleCustomViewports(): any; // TODO ;
    getLayout(): number;
    getPropagateBackgroundColor(): boolean;
    getNumTools(): number;
    getTool(i: number): DzViewTool;
    getActiveTool(): DzViewTool;
    findTool(className: QString): DzViewTool;
    getOverrideTool(): any; // TODO ;
    setOverrideTool(): any; // TODO ;
    clearOverrideTool(): any; // TODO ;
    getNumViewCameras(): number;
    getViewCamera(type: number): DzCamera;
    getViewCamera(which: number): DzCamera;
    getViewCamera(type: number): DzCamera;
    getViewCamera(which: number): DzCamera;
    getMouseBtnAcceleratorString(accel: number): QString;
    getMouseBtnAcceleratorString(operation: number): QString;
    getMouseBtnAcceleratorString(accel: number): QString;
    getMouseBtnAcceleratorString(operation: number): QString;
    getMouseBtnAccelerator(operation: number): number;
    getMouseBtnAccelerator(button: number, modifiers: number): number;
    getMouseBtnAccelerator(str: QString): number;
    getMouseBtnAccelerator(mouseBtn: number, ctrl: boolean, alt: boolean, shift: boolean): number;
    getMouseBtnAccelerator(operation: number): number;
    getMouseBtnAccelerator(button: number, modifiers: number): number;
    getMouseBtnAccelerator(str: QString): number;
    getMouseBtnAccelerator(mouseBtn: number, ctrl: boolean, alt: boolean, shift: boolean): number;
    getMouseBtnAccelerator(operation: number): number;
    getMouseBtnAccelerator(button: number, modifiers: number): number;
    getMouseBtnAccelerator(str: QString): number;
    getMouseBtnAccelerator(mouseBtn: number, ctrl: boolean, alt: boolean, shift: boolean): number;
    getMouseBtnAccelerator(operation: number): number;
    getMouseBtnAccelerator(button: number, modifiers: number): number;
    getMouseBtnAccelerator(str: QString): number;
    getMouseBtnAccelerator(mouseBtn: number, ctrl: boolean, alt: boolean, shift: boolean): number;
    getOperation(accel: number): number;
    getInvertMouseWheel(): boolean;
    getMouseModifierString(accel: number): QString;
    getMouseModifier(modifiers: number): number;
    getMouseModifier(ctrl: boolean, alt: boolean, shift: boolean): number;
    getMouseModifier(str: QString): number;
    getMouseModifier(modifiers: number): number;
    getMouseModifier(ctrl: boolean, alt: boolean, shift: boolean): number;
    getMouseModifier(str: QString): number;
    getMouseModifier(modifiers: number): number;
    getMouseModifier(ctrl: boolean, alt: boolean, shift: boolean): number;
    getMouseModifier(str: QString): number;
    setUsePerPixelLighting(): any; // TODO ;
    getUsePerPixelLighting(): any; // TODO ;
    applyStyleColors(): any; // TODO ;
}

declare class DzActionMgr extends QMenuBar {

    /* Properties */
    modal: boolean;
    windowModality: number;
    geometry: QObject;
    frameGeometry: QObject;
    normalGeometry: QObject;
    pos: QObject;
    frameSize: QObject;
    size: QObject;
    rect: QObject;
    childrenRect: QObject;
    childrenRegion: QObject;
    sizePolicy: QObject;
    minimumSize: QObject;
    maximumSize: QObject;
    minimumWidth: number;
    minimumHeight: number;
    maximumWidth: number;
    maximumHeight: number;
    sizeIncrement: QObject;
    baseSize: QObject;
    cursor: QObject;
    mouseTracking: boolean;
    isActiveWindow: boolean;
    focusPolicy: number;
    focus: boolean;
    contextMenuPolicy: number;
    updatesEnabled: boolean;
    visible: boolean;
    minimized: boolean;
    maximized: boolean;
    fullScreen: boolean;
    //sizeHint: QObject;
    //minimumSizeHint: QObject;
    acceptDrops: boolean;
    windowTitle: string;
    windowIcon: QObject;
    windowIconText: string;
    windowOpacity: number;
    windowModified: boolean;
    accessibleName: string;
    accessibleDescription: string;
    layoutDirection: number;
    autoFillBackground: boolean;
    styleSheet: string;
    locale: QObject;
    windowFilePath: string;
    inputMethodHints: number;
    defaultUp: boolean;
    nativeMenuBar: boolean;

    /* Methods */
    customContextMenuRequested(): any; // TODO ;
    setEnabled(): any; // TODO ;
    setDisabled(): any; // TODO ;
    setWindowModified(): any; // TODO ;
    setWindowTitle(): any; // TODO ;
    setStyleSheet(): any; // TODO ;
    setFocus(): any; // TODO ;
    update(): any; // TODO ;
    repaint(): any; // TODO ;
    setHidden(): any; // TODO ;
    show(): any; // TODO ;
    hide(): any; // TODO ;
    setShown(): any; // TODO ;
    showMinimized(): any; // TODO ;
    showMaximized(): any; // TODO ;
    showFullScreen(): any; // TODO ;
    showNormal(): any; // TODO ;
    close(): any; // TODO ;
    raise(): any; // TODO ;
    lower(): any; // TODO ;
    updateMicroFocus(): any; // TODO ;
    customActionListChanged(): void;
    customActionAdded(name: QString): void;
    customActionRemoved(name: QString): void;
    setAccel(className: QString, key: QKeySequence): void;
    setAccel(className: QString, key: QString): void;
    unsetAccel(key: QKeySequence): void;
    unsetAccel(key: QString): void;
    addCustomAction(text: QString, desc: QString, script: QString): QString;
    addCustomAction(text: QString, desc: QString, script: QString): QString;
    addCustomAction(text: QString, desc: QString, script: QString): QString;
    addCustomAction(text: QString, desc: QString, script: QString): QString;
    setCustomActionText(which: number, text: QString): void;
    setCustomActionDesc(which: number, desc: QString): void;
    setCustomActionScript(which: number, script: QString, isFile: boolean): void;
    setCustomActionScript(which: number, script: QString, isFile: boolean): void;
    setCustomActionAccel(which: number, shortcut: QKeySequence): void;
    setCustomActionAccel(which: number, shortcut: QString): void;
    setCustomActionIcon(which: number, iconFile: QString): void;
    setCustomActionShowTextWithIcon(which: number, onOff: boolean): void;
    removeCustomAction(which: number): void;
    removeAllCustomActions(): void;
    getCustomAction(which: number): DzAction;
    getCustomAction(name: QString): number;
    loadInterfaceFile(filename: QString): boolean;
    loadInterfaceFile(filename: QString): boolean;
    getNumActions(): number;
    getAction(which: number): DzAction;
    findAction(className: QString): DzAction;
    getNumPersistentMenus(): number;
    getPersistentMenu(which: number): DzPersistentMenu;
    findPersistentMenu(className: QString): DzPersistentMenu;
    getNumCustomActions(): number;
    findCustomAction(name: QString): number;
    getCustomActionName(which: number): QString;
    getCustomActionText(which: number): QString;
    getCustomActionDesc(which: number): QString;
    getCustomActionScript(which: number): QString;
    getCustomActionScript(which: number, script: QString, isFile: boolean): void;
    getCustomActionFile(which: number): QString;
    getCustomActionShortcut(which: number): QString;
    getCustomActionIcon(which: number): QString;
    saveInterfaceFiles(): boolean;
    saveMenusFile(filename: QString): boolean;
    saveToolBarsFile(filename: QString): boolean;
    saveActionsFile(filename: QString): boolean;
    saveCustomActionsFile(filename: QString): boolean;
    getMenu(): DzActionMenu;
    setActiveMenu(menu: DzActionMenu): void;
    getActiveMenu(): DzActionMenu;
    clearActiveMenu(): void;
    legalizeName(): any; // TODO ;
}

declare class DzPaneMgr extends QWidget {

    /* Properties */
    modal: boolean;
    windowModality: number;
    geometry: QObject;
    frameGeometry: QObject;
    normalGeometry: QObject;
    pos: QObject;
    frameSize: QObject;
    size: QObject;
    rect: QObject;
    childrenRect: QObject;
    childrenRegion: QObject;
    sizePolicy: QObject;
    minimumSize: QObject;
    maximumSize: QObject;
    minimumWidth: number;
    minimumHeight: number;
    maximumWidth: number;
    maximumHeight: number;
    sizeIncrement: QObject;
    baseSize: QObject;
    cursor: QObject;
    mouseTracking: boolean;
    isActiveWindow: boolean;
    focusPolicy: number;
    focus: boolean;
    contextMenuPolicy: number;
    updatesEnabled: boolean;
    visible: boolean;
    minimized: boolean;
    maximized: boolean;
    fullScreen: boolean;
    sizeHint: QObject;
    minimumSizeHint: QObject;
    acceptDrops: boolean;
    windowTitle: string;
    windowIcon: QObject;
    windowIconText: string;
    windowOpacity: number;
    windowModified: boolean;
    accessibleName: string;
    accessibleDescription: string;
    layoutDirection: number;
    autoFillBackground: boolean;
    styleSheet: string;
    locale: QObject;
    windowFilePath: string;
    inputMethodHints: number;
    NO_DOCKING: number;
    DOCK_LEFT: number;
    DOCK_TOP: number;
    DOCK_RIGHT: number;
    DOCK_BOTTOM: number;
    DOCK_CENTER: number;

    /* Methods */
    customContextMenuRequested(): any; // TODO ;
    setEnabled(): any; // TODO ;
    setDisabled(): any; // TODO ;
    setWindowModified(): any; // TODO ;
    setWindowTitle(): any; // TODO ;
    setStyleSheet(): any; // TODO ;
    setFocus(): any; // TODO ;
    update(): any; // TODO ;
    repaint(): any; // TODO ;
    setVisible(): any; // TODO ;
    setHidden(): any; // TODO ;
    show(): any; // TODO ;
    hide(): any; // TODO ;
    setShown(): any; // TODO ;
    showMinimized(): any; // TODO ;
    showMaximized(): any; // TODO ;
    showFullScreen(): any; // TODO ;
    showNormal(): any; // TODO ;
    close(): any; // TODO ;
    raise(): any; // TODO ;
    lower(): any; // TODO ;
    updateMicroFocus(): any; // TODO ;
    layoutListChanged(): void;
    activeLayoutAboutToChange(newLayoutIdx: number): void;
    activeLayoutChanged(which: number): void;
    toolbarListChanged(): void;
    activityBarEnabled(onOff: boolean): void;
    layoutRestored(filename: QString): void;
    orientTabsAlongTopChanged(onOff: boolean): void;
    workflowAssistanceModeChanged(): void;
    workflowAssistanceEnableStateChanged(onOff: boolean): void;
    setSessionLayout(filename: QString): DzError;
    saveLayout(filename: QString, description: QString): DzError;
    saveLayout(): void;
    saveLayout(filename: QString, description: QString): DzError;
    saveLayout(): void;
    restoreLayout(filename: QString): DzError;
    restoreLayout(filename: QString, executeScript: boolean): DzError;
    restoreLayout(root: QDomElement): void;
    restoreLayout(): void;
    restoreLayout(filename: QString): DzError;
    restoreLayout(filename: QString, executeScript: boolean): DzError;
    restoreLayout(root: QDomElement): void;
    restoreLayout(): void;
    showPane(pane: DzPane): DzError;
    showPane(className: QString): DzError;
    showPane(pane: DzPane): DzError;
    showPane(className: QString): DzError;
    showAllPanes(): void;
    hidePane(pane: DzPane): DzError;
    hidePane(className: QString): DzError;
    hidePane(pane: DzPane): DzError;
    hidePane(className: QString): DzError;
    hideAllPanes(): void;
    togglePane(pane: DzPane): DzError;
    togglePane(className: QString): DzError;
    togglePane(index: number): DzError;
    togglePane(pane: DzPane): DzError;
    togglePane(className: QString): DzError;
    togglePane(index: number): DzError;
    togglePane(pane: DzPane): DzError;
    togglePane(className: QString): DzError;
    togglePane(index: number): DzError;
    tearOffPane(pane: DzPane, x: number, y: number): DzError;
    tearOffPane(className: QString, x: number, y: number): DzError;
    tearOffPane(index: number, x: number, y: number): DzError;
    tearOffPane(pane: DzPane, x: number, y: number): DzError;
    tearOffPane(className: QString, x: number, y: number): DzError;
    tearOffPane(index: number, x: number, y: number): DzError;
    tearOffPane(pane: DzPane, x: number, y: number): DzError;
    tearOffPane(className: QString, x: number, y: number): DzError;
    tearOffPane(index: number, x: number, y: number): DzError;
    tearOffPane(pane: DzPane, x: number, y: number): DzError;
    tearOffPane(className: QString, x: number, y: number): DzError;
    tearOffPane(index: number, x: number, y: number): DzError;
    tearOffPane(pane: DzPane, x: number, y: number): DzError;
    tearOffPane(className: QString, x: number, y: number): DzError;
    tearOffPane(index: number, x: number, y: number): DzError;
    tearOffPane(pane: DzPane, x: number, y: number): DzError;
    tearOffPane(className: QString, x: number, y: number): DzError;
    tearOffPane(index: number, x: number, y: number): DzError;
    tearOffPane(pane: DzPane, x: number, y: number): DzError;
    tearOffPane(className: QString, x: number, y: number): DzError;
    tearOffPane(index: number, x: number, y: number): DzError;
    tearOffPane(pane: DzPane, x: number, y: number): DzError;
    tearOffPane(className: QString, x: number, y: number): DzError;
    tearOffPane(index: number, x: number, y: number): DzError;
    tearOffPane(pane: DzPane, x: number, y: number): DzError;
    tearOffPane(className: QString, x: number, y: number): DzError;
    tearOffPane(index: number, x: number, y: number): DzError;
    showPaneGroup(group: DzPaneGroup): DzError;
    showPaneGroup(which: number): DzError;
    showPaneGroup(group: DzPaneGroup): DzError;
    showPaneGroup(which: number): DzError;
    hidePaneGroup(group: DzPaneGroup): DzError;
    hidePaneGroup(which: number): DzError;
    hidePaneGroup(group: DzPaneGroup): DzError;
    hidePaneGroup(which: number): DzError;
    clearAllGroups(): void;
    movePaneGroup(group: DzPaneGroup, dock: number): DzError;
    movePaneGroup(group: DzPaneGroup, dock: number, index: number, newLine: boolean): DzError;
    movePaneGroup(group: DzPaneGroup, dock: number): DzError;
    movePaneGroup(group: DzPaneGroup, dock: number, index: number, newLine: boolean): DzError;
    movePaneGroup(group: DzPaneGroup, dock: number): DzError;
    movePaneGroup(group: DzPaneGroup, dock: number, index: number, newLine: boolean): DzError;
    movePaneGroup(group: DzPaneGroup, dock: number): DzError;
    movePaneGroup(group: DzPaneGroup, dock: number, index: number, newLine: boolean): DzError;
    createToolBar(name: QString): DzToolBar;
    removeToolBar(name: QString): void;
    removeAllToolBars(): void;
    hideAllToolBars(): void;
    createActivityLayout(name: QString, description: QString): DzActivityLayout;
    addActivityLayout(layout: DzActivityLayout): void;
    removeActivityLayout(name: QString): boolean;
    removeActivityLayout(which: number): boolean;
    removeActivityLayout(name: QString): boolean;
    removeActivityLayout(which: number): boolean;
    removeAllActivityLayouts(): void;
    setActiveActivityLayout(which: DzActivityLayout): void;
    setActiveActivityLayout(which: number): void;
    setActiveActivityLayout(which: DzActivityLayout): void;
    setActiveActivityLayout(which: number): void;
    enableActivityBar(onOff: boolean): void;
    setActivityBarImage(img: QString): void;
    loadNextActivityBarImage(): void;
    setPaneEnabled(pane: DzPane, enabled: boolean): DzError;
    setPaneEnabled(className: QString, enabled: boolean): DzError;
    setPaneEnabled(pane: DzPane, enabled: boolean): DzError;
    setPaneEnabled(className: QString, enabled: boolean): DzError;
    getSessionLayout(): QString;
    getDefaultLayoutNames(): String[];
    getDefaultLayout(): QString;
    getSimpleLayout(): QString;
    getBasicLayout(): QString;
    getStandardLayout(): QString;
    getAdvancedLayout(): QString;
    getProLayout(): any; // TODO ;
    getNumPanes(): number;
    getPaneList(): QObject[];
    getPaneGroupList(): QObject[];
    findPane(className: QString): DzPane;
    getNumPaneGroups(): number;
    getPaneGroup(which: number): DzPaneGroup;
    isUnpinnedMenu(pane: DzPane): boolean;
    getNumToolBars(): number;
    getToolBar(i: number): DzToolBar;
    findToolBar(name: QString): DzToolBar;
    getNumDockBars(): number;
    getDockBar(i: number): DzDockBar;
    findDockBar(className: QString): DzDockBar;
    findDockBarByName(name: QString): DzDockBar;
    getNumActivityLayouts(): number;
    getActivityLayout(which: number): DzActivityLayout;
    findActivityLayout(name: QString): DzActivityLayout;
    getActiveActivityLayout(): DzActivityLayout;
    getActiveActivityLayoutIndex(): number;
    isActivityBarEnabled(): boolean;
    getActivityBarImage(): QString;
    getActivityBarImageList(): String[];
    createEmptyPaneGroup(): DzPaneGroup;
    closeAllPaneGroupDlgs(): void;
    getPaneGroupDlg(which: number): DzPaneGroupDlg;
    getNumPaneGroupDlgs(): number;
    addPaneGroupDlg(dlg: DzPaneGroupDlg): void;
    removePaneGroupDlg(dlg: DzPaneGroupDlg): void;
    removePaneGroup(group: DzPaneGroup): void;
    setShowLessonStrip(onOff: boolean): void;
    getShowLessonStrip(): boolean;
    selectLesson(path: QString): boolean;
    setOrientTabsAlongTop(onOff: boolean): void;
    getOrientTabsAlongTop(): boolean;
    setUseWorkflowAssistance(onOff: boolean): void;
    getUseWorkflowAssistance(): boolean;
}

declare class DzInteractiveLessonMgr {

    /* Properties */
    objectName: string;
    progressWidth: number;
    name: string;

    /* Methods */
    destroyed(): any; // TODO ;
    destroyed(): any; // TODO ;
    deleteLater(): any; // TODO ;
    started(): any; // TODO ;
    stepped(): any; // TODO ;
    stopped(): any; // TODO ;
    skipped(): any; // TODO ;
    begin(): any; // TODO ;
    stop(): any; // TODO ;
    scheduleStop(): any; // TODO ;
    skip(): any; // TODO ;
    scheduleSkip(): any; // TODO ;
    isRunning(): any; // TODO ;
    currentPath(): any; // TODO ;
    currentIndex(): any; // TODO ;
    currentType(): any; // TODO ;
    currentQuery(): any; // TODO ;
    menuHook(): any; // TODO ;
    menuHook(): any; // TODO ;
    iterate(): any; // TODO ;
    instructionTypes(): any; // TODO ;
    getInstruction(): any; // TODO ;
    getInstruction(): any; // TODO ;
    getInstruction(): any; // TODO ;
    getWidgetInstruction(): any; // TODO ;
    getWidgetInstruction(): any; // TODO ;
    getWidgetInstruction(): any; // TODO ;
    getActionInstruction(): any; // TODO ;
    getActionInstruction(): any; // TODO ;
    getActionInstruction(): any; // TODO ;
    getActivityInstruction(): any; // TODO ;
    getActivityInstruction(): any; // TODO ;
    getActivityInstruction(): any; // TODO ;
    getLayoutInstruction(): any; // TODO ;
    getLayoutInstruction(): any; // TODO ;
    getLayoutInstruction(): any; // TODO ;
    getDisplayInstruction(): any; // TODO ;
    getDisplayInstruction(): any; // TODO ;
    getRecordedInstructions(): any; // TODO ;
    startRecording(): any; // TODO ;
    finishRecording(): any; // TODO ;
    inherits(): any; // TODO ;
    className(): any; // TODO ;
}

declare class DzContentFolder extends DzBase {

    /* Properties */
    fullPath: string;
    folderName: string;
    label: string;
    icon: QObject;
    foldersAreLoaded: boolean;
    filesAreLoaded: boolean;
    canAddSubFolder: boolean;
    folderType: number;
    canDelete: boolean;
    canRename: boolean;
    isBuiltInContentFolder: boolean;
    NATIVE_TYPE: number;
    POSER_TYPE: number;
    IMPORT_TYPE: number;

    /* Methods */
    addedFolder(newFolder: DzContentFolder): void;
    removedFolder(folder: DzContentFolder): void;
    folderListChanged(): void;
    fileListChanged(): void;
    getParent(): DzContentFolder;
    refresh(reloadIcons: boolean): boolean;
    refresh(reloadIcons: boolean): boolean;
    getFirstFolder(): DzContentFolder;
    getFirstHiddenFolder(): DzContentFolder;
    getNext(): DzContentFolder;
    getFirstFile(): DzContentFile;
    getFirstHiddenFile(): DzContentFile;
    canMoveFile(file: DzContentFilePtr): boolean;
    canMoveFiles(files: DzContentFilePtr[]): boolean;
    moveFile(file: DzContentFilePtr): boolean;
    moveFiles(files: DzContentFilePtr[]): boolean;
    copyFile(file: DzContentFilePtr): boolean;
    copyFile(srcFilename: QString, tgtFilename: QString): boolean;
    copyFiles(files: DzContentFilePtr[]): boolean;
    hasSubFolders(): boolean;
    addSubFolder(folderName: QString): boolean;
    deleteFolder(): boolean;
    rename(newName: QString): boolean;
    isModifiable(): boolean;
}

declare class DzContentReplaceMgr extends QObject {

    /* Properties */
    ALWAYS_REPLACE: number;
    NEVER_REPLACE: number;
    ASK_WHEN_MATCHING: number;
    ASK_TO_REPLACE: number;

    /* Methods */
    contentReplaceModeChanged(mode: number): void;
    getReplaceMode(): number;
    setReplaceMode(mode: number): void;
    getNewContentPath(): QString;
    setNewContentPath(contentPath: QString): void;
    getNewContentType(): QString;
    setNewContentType(contentType: QString): void;
    getReplaceNodes(replaceNodes: DzNode[]): void;
    setReplaceNodes(replaceNodes: DzNode[]): void;
    getPotentialReplaceNodes(potentialReplaceNodes: DzNode[], baseNode: DzNode): void;
    getDefaultReplaceNodes(defaultReplaceNodes: DzNode[], baseNode: DzNode): void;
    updateReplaceNodes(baseNode: DzNode): void;
    removeReplaceNodes(): void;
    clearReplaceData(): void;
    initReplaceForContentLoad(path: QString, baseNode: DzNode): void;
    doReplace(): void;
}

declare class DzTopLevelAssetContainer extends DzAbstractAssetContainer {

    /* Properties */
    id: string;
    icon: QObject;
    tooltip: string;
    canCopyContainers: boolean;
    canInsertSubContainer: boolean;
    canDeleteContainer: boolean;
    canRenameContainer: boolean;
    canModifyAssets: boolean;
    useCount: number;

    /* Methods */
}

declare class DzCategoryAssetContainer extends DzAbstractAssetContainer {

    /* Properties */
    id: string;
    icon: QObject;
    tooltip: string;
    canCopyContainers: boolean;
    canInsertSubContainer: boolean;
    canDeleteContainer: boolean;
    canRenameContainer: boolean;
    canModifyAssets: boolean;
    useCount: number;

    /* Methods */
    updateChildren(): boolean;
    getIconForStandardCategory(folder: DzCategoryAssetContainer): DzPixmapPair;
    getCategoryTable(): DzDBCategoriesTable;
}

declare class DzRenderOptions extends QObject {

    /* Properties */
    renderImgToId: number;
    renderMovToId: number;
    renderImgFilename: string;
    renderMovFilename: string;
    renderSerFilename: string;
    lastRenderImgFilename: string;
    lastRenderMovFilename: string;
    lastRenderSerFilename: string;
    renderViewport: boolean;
    isAspectConstrained: boolean;
    aspect: number;
    aspectWidth: number;
    aspectHeight: number;
    imageSize: QObject;
    renderType: number;
    renderStyle: number;
    rayTraceDepth: number;
    openGLPasses: number;
    useGLSL: boolean;
    isCurrentFrameRender: boolean;
    getStartTime: QObject;
    startTime: QObject;
    getEndTime: QObject;
    endTime: QObject;
    useMotionBlur: boolean;
    motionBlurPct: number;
    motionBlurSamples: number;
    motionBlurOffset: number;
    xPixelSamples: number;
    yPixelSamples: number;
    shadowSamples: number;
    shadingRate: number;
    doubleSided: boolean;
    gain: number;
    gamma: number;
    pixelFilter: number;
    xFilterWidth: number;
    yFilterWidth: number;
    showPreview: boolean;
    gammaCorrection: number;
    ScreenShot: number;
    HardwareAssisted: number;
    Software: number;
    ActiveView: number;
    NewWindow: number;
    DirectToFile: number;
    MovieFile: number;
    ImageSeries: number;
    Normal: number;
    Cartoon: number;
    Box: number;
    Triangle: number;
    CatmullRom: number;
    Gaussian: number;
    Sinc: number;
    GCOff: number;
    GCOn: number;

    /* Methods */
    aspectChanged(val: number): void;
    aspectChanged(w: number, h: number): void;
    aspectChanged(val: number): void;
    aspectChanged(w: number, h: number): void;
    renderImgTargetChanged(id: number): void;
    renderMovTargetChanged(id: number): void;
    renderImgFilenameChanged(filename: QString): void;
    renderMovFilenameChanged(filename: QString): void;
    renderSerFilenameChanged(filename: QString): void;
    renderViewportChanged(onOff: boolean): void;
    aspectConstrainChanged(onOff: boolean): void;
    imageSizeChanged(size: QSize): void;
    renderTypeChanged(type: number): void;
    renderStyleChanged(style: number): void;
    rayTraceDepthChanged(depth: number): void;
    openGLPassesChanged(passes: number): void;
    useGLSLChanged(onOff: boolean): void;
    renderCurrentFrameChanged(onOff: boolean): void;
    startTimeChanged(time: DzTime): void;
    endTimeChanged(time: DzTime): void;
    useMotionBlurChanged(onOff: boolean): void;
    motionBlurPctChanged(pct: number): void;
    motionBlurOffsetChanged(offset: number): void;
    motionBlurSamplesChanged(samples: number): void;
    xPixelSamplesChanged(samples: number): void;
    yPixelSamplesChanged(samples: number): void;
    shadowSamplesChanged(samples: number): void;
    shadingRateChanged(rate: number): void;
    doubleSidedChanged(onOff: boolean): void;
    gainChanged(gain: number): void;
    gammaChanged(gamma: number): void;
    pixelFilterChanged(filter: number): void;
    gammaCorrectionChanged(): any; // TODO ;
    xFilterWidthChanged(width: number): void;
    yFilterWidthChanged(width: number): void;
    showPreviewChanged(onoff: boolean): void;
    settingsChanged(): void;
    defaultsRestored(): void;
    setAspectRatio(widthRatio: number, heightRatio: number): void;
    applyChanges(): void;
    resetOptions(): void;
    restoreDefaultSettings(): void;
    setToDefaults(): void;
    gammaCorrectColor(): any; // TODO ;
}

declare class DzRenderOptionsHelper {

    /* Properties */
    objectName: string;
    name: string;
    elementID: number;

    /* Methods */
    destroyed(): any; // TODO ;
    destroyed(): any; // TODO ;
    deleteLater(): any; // TODO ;
    nameChanged(): any; // TODO ;
    className(): any; // TODO ;
    makePersistent(): any; // TODO ;
    inherits(): any; // TODO ;
    iskindof(): any; // TODO ;
    getName(): any; // TODO ;
    propertyAdded(): any; // TODO ;
    propertyRemoved(): any; // TODO ;
    propertyListChanged(): any; // TODO ;
    propertyListInTreeChanged(): any; // TODO ;
    propertyTreeChanged(): any; // TODO ;
    privatePropertyAdded(): any; // TODO ;
    privatePropertyRemoved(): any; // TODO ;
    privatePropertyListChanged(): any; // TODO ;
    privatePropertyListInTreeChanged(): any; // TODO ;
    privatePropertyTreeChanged(): any; // TODO ;
    labelChanged(): any; // TODO ;
    parentChanged(): any; // TODO ;
    mergeElementSignal(): any; // TODO ;
    duplicateElementSignal(): any; // TODO ;
    createElementCopySignal(): any; // TODO ;
    setAttributes(): any; // TODO ;
    setName(): any; // TODO ;
    setLabel(): any; // TODO ;
    update(): any; // TODO ;
    clearAnimData(): any; // TODO ;
    clearAllAnimData(): any; // TODO ;
    addProperty(): any; // TODO ;
    insertProperty(): any; // TODO ;
    removeProperty(): any; // TODO ;
    removeProperty(): any; // TODO ;
    moveProperty(): any; // TODO ;
    addPrivateProperty(): any; // TODO ;
    insertPrivateProperty(): any; // TODO ;
    removePrivateProperty(): any; // TODO ;
    removePrivateProperty(): any; // TODO ;
    movePrivateProperty(): any; // TODO ;
    addDataItem(): any; // TODO ;
    removeDataItem(): any; // TODO ;
    deleteDataItem(): any; // TODO ;
    copyFrom(): any; // TODO ;
    setLoadScript(): any; // TODO ;
    beginEdit(): any; // TODO ;
    finishEdit(): any; // TODO ;
    cancelEdit(): any; // TODO ;
    shouldSortOnLoad(): any; // TODO ;
    getLabel(): any; // TODO ;
    getAttributes(): any; // TODO ;
    getNumProperties(): any; // TODO ;
    getProperty(): any; // TODO ;
    getPropertyList(): any; // TODO ;
    isPropertyNameUnique(): any; // TODO ;
    isPropertyNameUnique(): any; // TODO ;
    findProperty(): any; // TODO ;
    findProperty(): any; // TODO ;
    findPropertyByLabel(): any; // TODO ;
    findPropertyByLabel(): any; // TODO ;
    getPropertyGroups(): any; // TODO ;
    findMatchingProperty(): any; // TODO ;
    getNumPrivateProperties(): any; // TODO ;
    getPrivateProperty(): any; // TODO ;
    getPrivatePropertyList(): any; // TODO ;
    isPrivatePropertyNameUnique(): any; // TODO ;
    isPrivatePropertyNameUnique(): any; // TODO ;
    findPrivateProperty(): any; // TODO ;
    findPrivateProperty(): any; // TODO ;
    findPrivatePropertyByLabel(): any; // TODO ;
    findPrivatePropertyByLabel(): any; // TODO ;
    getPrivatePropertyGroups(): any; // TODO ;
    getNumDataItems(): any; // TODO ;
    getDataItem(): any; // TODO ;
    getDataItemList(): any; // TODO ;
    isDataItemNameUnique(): any; // TODO ;
    isDataItemNameUnique(): any; // TODO ;
    findDataItem(): any; // TODO ;
    getLoadScript(): any; // TODO ;
    copyToClipboard(): any; // TODO ;
    copyToClipboard(): any; // TODO ;
    getNumElementChildren(): any; // TODO ;
    getElementChild(): any; // TODO ;
    getElementParent(): any; // TODO ;
    inEdit(): any; // TODO ;
    moveDataItemToIndex(): any; // TODO ;
    findDataItemIndex(): any; // TODO ;
    duplicateMissingCustomData(): any; // TODO ;
    duplicateMissingProperties(): any; // TODO ;
    duplicateMissingPrivateProperties(): any; // TODO ;
    duplicateMissingCustomDataWithContext(): any; // TODO ;
    duplicateMissingPropertiesWithContext(): any; // TODO ;
    duplicateMissingPrivatePropertiesWithContext(): any; // TODO ;
    doMergeElement(): any; // TODO ;
    doDuplicateElement(): any; // TODO ;
    mergeElement(): any; // TODO ;
    duplicateElement(): any; // TODO ;
    createElementCopy(): any; // TODO ;
    autoHeadlampModeChanged(): any; // TODO ;
    getHeadlampaAutoMode(): any; // TODO ;
    setHeadlampAutoMode(): any; // TODO ;
    inherits(): any; // TODO ;
    className(): any; // TODO ;
}

declare class DzTextureConvertorOptions {

    /* Properties */
    objectName: string;
    renderImgToId: number;
    renderMovToId: number;
    renderImgFilename: string;
    renderMovFilename: string;
    renderSerFilename: string;
    lastRenderImgFilename: string;
    lastRenderMovFilename: string;
    lastRenderSerFilename: string;
    renderViewport: boolean;
    isAspectConstrained: boolean;
    aspect: number;
    aspectWidth: number;
    aspectHeight: number;
    imageSize: QObject;
    renderType: number;
    renderStyle: number;
    rayTraceDepth: number;
    openGLPasses: number;
    useGLSL: boolean;
    isCurrentFrameRender: boolean;
    getStartTime: QObject;
    startTime: QObject;
    getEndTime: QObject;
    endTime: QObject;
    useMotionBlur: boolean;
    motionBlurPct: number;
    motionBlurSamples: number;
    motionBlurOffset: number;
    xPixelSamples: number;
    yPixelSamples: number;
    shadowSamples: number;
    shadingRate: number;
    doubleSided: boolean;
    gain: number;
    gamma: number;
    pixelFilter: number;
    xFilterWidth: number;
    yFilterWidth: number;
    showPreview: boolean;
    gammaCorrection: number;
    convertImgPath: string;
    imageType: string;
    presetId: number;
    hardwareCutOffSize: number;
    forceResize: boolean;
    ScreenShot: number;
    HardwareAssisted: number;
    Software: number;
    ActiveView: number;
    NewWindow: number;
    DirectToFile: number;
    MovieFile: number;
    ImageSeries: number;
    Normal: number;
    Cartoon: number;
    Box: number;
    Triangle: number;
    CatmullRom: number;
    Gaussian: number;
    Sinc: number;
    GCOff: number;
    GCOn: number;
    name: string;

    /* Methods */
    destroyed(): any; // TODO ;
    destroyed(): any; // TODO ;
    deleteLater(): any; // TODO ;
    aspectChanged(): any; // TODO ;
    aspectChanged(): any; // TODO ;
    renderImgTargetChanged(): any; // TODO ;
    renderMovTargetChanged(): any; // TODO ;
    renderImgFilenameChanged(): any; // TODO ;
    renderMovFilenameChanged(): any; // TODO ;
    renderSerFilenameChanged(): any; // TODO ;
    renderViewportChanged(): any; // TODO ;
    aspectConstrainChanged(): any; // TODO ;
    imageSizeChanged(): any; // TODO ;
    renderTypeChanged(): any; // TODO ;
    renderStyleChanged(): any; // TODO ;
    rayTraceDepthChanged(): any; // TODO ;
    openGLPassesChanged(): any; // TODO ;
    useGLSLChanged(): any; // TODO ;
    renderCurrentFrameChanged(): any; // TODO ;
    startTimeChanged(): any; // TODO ;
    endTimeChanged(): any; // TODO ;
    useMotionBlurChanged(): any; // TODO ;
    motionBlurPctChanged(): any; // TODO ;
    motionBlurOffsetChanged(): any; // TODO ;
    motionBlurSamplesChanged(): any; // TODO ;
    xPixelSamplesChanged(): any; // TODO ;
    yPixelSamplesChanged(): any; // TODO ;
    shadowSamplesChanged(): any; // TODO ;
    shadingRateChanged(): any; // TODO ;
    doubleSidedChanged(): any; // TODO ;
    gainChanged(): any; // TODO ;
    gammaChanged(): any; // TODO ;
    pixelFilterChanged(): any; // TODO ;
    gammaCorrectionChanged(): any; // TODO ;
    xFilterWidthChanged(): any; // TODO ;
    yFilterWidthChanged(): any; // TODO ;
    showPreviewChanged(): any; // TODO ;
    settingsChanged(): any; // TODO ;
    defaultsRestored(): any; // TODO ;
    setAspectRatio(): any; // TODO ;
    applyChanges(): any; // TODO ;
    resetOptions(): any; // TODO ;
    restoreDefaultSettings(): any; // TODO ;
    setToDefaults(): any; // TODO ;
    gammaCorrectColor(): any; // TODO ;
    imageTypeChanged(): any; // TODO ;
    inherits(): any; // TODO ;
    className(): any; // TODO ;
}

declare class Dz3DelightTextureBaker {

    /* Properties */
    objectName: string;
    name: string;

    /* Methods */
    destroyed(): any; // TODO ;
    destroyed(): any; // TODO ;
    deleteLater(): any; // TODO ;
    autoBake(): any; // TODO ;
    manualBake(): any; // TODO ;
    refreshBakeTextures(): any; // TODO ;
    packImageFiles(): any; // TODO ;
    extractImageFiles(): any; // TODO ;
    finishBaking(): any; // TODO ;
    autoBakeOnMaterialSettingsChanged(): any; // TODO ;
    sceneLoadStarting(): any; // TODO ;
    sceneLoaded(): any; // TODO ;
    sceneCleared(): any; // TODO ;
    sceneClearStarting(): any; // TODO ;
    sceneFilenameChanged(): any; // TODO ;
    saveFileFinished(): any; // TODO ;
    autoBakeChanged(): any; // TODO ;
    useBakeChanged(): any; // TODO ;
    inherits(): any; // TODO ;
    className(): any; // TODO ;
}

declare class QRectWrapper {

    /* Properties */
    objectName: string;
    bottom: number;
    center: QObject;
    height: number;
    left: number;
    right: number;
    top: number;
    width: number;
    x: number;
    y: number;
    name: string;

    /* Methods */
}

declare class DzDefaultMaterial extends DzMaterial {

    /* Properties */
    elementID: number;
    renderPriority: number;

    /* Methods */
    propertyListInTreeChanged(): any; // TODO ;
    privatePropertyListInTreeChanged(): any; // TODO ;
    mergeElementSignal(): any; // TODO ;
    duplicateElementSignal(): any; // TODO ;
    createElementCopySignal(): any; // TODO ;
    moveDataItemToIndex(): any; // TODO ;
    findDataItemIndex(): any; // TODO ;
    duplicateMissingCustomDataWithContext(): any; // TODO ;
    duplicateMissingPropertiesWithContext(): any; // TODO ;
    duplicateMissingPrivatePropertiesWithContext(): any; // TODO ;
    doMergeElement(): any; // TODO ;
    doDuplicateElement(): any; // TODO ;
    mergeElement(): any; // TODO ;
    duplicateElement(): any; // TODO ;
    createElementCopy(): any; // TODO ;
    calcNeedsPtexSignal(): any; // TODO ;
    tagsChanged(): any; // TODO ;
    isOpaque(): boolean;
    getTags(): any; // TODO ;
    getTagsControl(): any; // TODO ;
    needsPtex(): any; // TODO ;
    duplicateOrDefaultMaterial(): any; // TODO ;
    calcNeedsPtex(): any; // TODO ;
    setDiffuseStrength(val: number): void;
    setDiffuseValueMap(img: DzTexture): void;
    setAmbientStrength(val: number): void;
    setAmbientValueMap(img: DzTexture): void;
    setAmbientColor(color: QColor): void;
    setAmbientColorMap(img: DzTexture): void;
    setBumpMap(img: DzTexture): void;
    setBumpStrength(val: number): void;
    setBumpMin(val: number): void;
    setBumpMax(val: number): void;
    setDisplacementMap(img: DzTexture): void;
    setDisplacementStrength(val: number): void;
    setDisplacementMin(val: number): void;
    setDisplacementMax(val: number): void;
    setReflectionColor(color: QColor): void;
    setReflectionMap(img: DzTexture): void;
    setReflectionStrength(val: number): void;
    setReflectionValueMap(img: DzTexture): void;
    setRefractionColor(color: QColor): void;
    setRefractionColorMap(img: DzTexture): void;
    setRefractionStrength(val: number): void;
    setRefractionValueMap(img: DzTexture): void;
    setSheenColor(): any; // TODO ;
    setSheenColorMap(): any; // TODO ;
    setScatterColor(): any; // TODO ;
    setScatterColorMap(): any; // TODO ;
    setThickness(): any; // TODO ;
    setThicknessValueMap(): any; // TODO ;
    setIndexOfRefraction(val: number): void;
    setSurfaceType(val: number): void;
    setGlossinessStrength(size: number): void;
    setGlossinessValueMap(img: DzTexture): void;
    setMultThroughOpacity(onOff: boolean): void;
    setSpecularStrength(size: number): void;
    setSpecularValueMap(img: DzTexture): void;
    setSpecularColor(color: QColor): void;
    setSpecularColorMap(img: DzTexture): void;
    setNormalValueMap(img: DzTexture): void;
    setHorizontalTiles(tiles: number): void;
    setVerticalTiles(tiles: number): void;
    setHorizontalOffset(offset: number): void;
    setVerticalOffset(offset: number): void;
    getDiffuseStrength(): number;
    getDiffuseValueMap(): DzTexture;
    getAmbientStrength(): number;
    getAmbientValueMap(): DzTexture;
    getAmbientColor(): QColor;
    getAmbientColorMap(): DzTexture;
    getBumpStrength(): number;
    getBumpMap(): DzTexture;
    getBumpMin(): number;
    getBumpMax(): number;
    getDisplacementStrength(): number;
    getDisplacementMin(): number;
    getDisplacementMax(): number;
    getDisplacementMap(): DzTexture;
    getReflectionColor(): QColor;
    getReflectionMap(): DzTexture;
    getReflectionStrength(): number;
    getReflectionValueMap(): DzTexture;
    getRefractionColor(): QColor;
    getRefractionColorMap(): DzTexture;
    getRefractionStrength(): number;
    getRefractionValueMap(): DzTexture;
    getSheenColor(): any; // TODO ;
    getSheenColorMap(): any; // TODO ;
    getScatterColor(): any; // TODO ;
    getScatterColorMap(): any; // TODO ;
    getThickness(): any; // TODO ;
    getThicknessValueMap(): any; // TODO ;
    getIndexOfRefraction(): number;
    getSurfaceType(): number;
    isMultThroughOpacity(): boolean;
    getSpecularColor(): QColor;
    getSpecularColorMap(): DzTexture;
    getSpecularStrength(): number;
    getSpecularValueMap(): DzTexture;
    getGlossinessStrength(): number;
    getGlossinessValueMap(): DzTexture;
    getNormalValueMap(): DzTexture;
    getHorizontalOffset(): number;
    getHorizontalTiles(): number;
    getVerticalOffset(): number;
    getVerticalTiles(): number;
    getDiffuseColorControl(): DzColorProperty;
    getDiffuseStrengthControl(): DzFloatProperty;
    getAmbientColorControl(): DzColorProperty;
    getAmbientStrengthControl(): DzFloatProperty;
    getSpecularColorControl(): DzColorProperty;
    getSpecularStrengthControl(): DzFloatProperty;
    getGlossinessControl(): DzFloatProperty;
    getOpacityControl(): DzFloatProperty;
    getBumpControl(): DzFloatProperty;
    getBumpMinControl(): DzFloatProperty;
    getBumpMaxControl(): DzFloatProperty;
    getDisplacementControl(): DzFloatProperty;
    getDisplacementMinControl(): DzFloatProperty;
    getDisplacementMaxControl(): DzFloatProperty;
    getReflectionColorControl(): DzColorProperty;
    getReflectionStrengthControl(): DzFloatProperty;
    getRefractionColorControl(): DzColorProperty;
    getRefractionStrengthControl(): DzFloatProperty;
    getSheenColorControl(): any; // TODO ;
    getScatterColorControl(): any; // TODO ;
    getThicknessControl(): any; // TODO ;
    getIndexOfRefractionControl(): DzFloatProperty;
    getSurfaceTypeControl(): DzEnumProperty;
    getMultThroughOpacityControl(): DzBoolProperty;
    getNormalValueMapControl(): DzImageProperty;
    getHorizontalTilesControl(): DzFloatProperty;
    getHorizontalOffsetControl(): DzFloatProperty;
    getVerticalTilesControl(): DzFloatProperty;
    getVerticalOffsetControl(): DzFloatProperty;
}

declare class DzColorProperty extends DzIntProperty {

    /* Properties */
    emitValueChangedOnSceneClear: boolean;
    HSV: number;
    HSL: number;
    RGB: number;
    NO_INTEREST: number;
    X_INTEREST: number;
    Y_INTEREST: number;
    Z_INTEREST: number;
    ALL_INTEREST: number;

    /* Methods */
    dynamicallyHiddenChanged(): any; // TODO ;
    dynamicallyAutoFollowChanged(): any; // TODO ;
    controllerListChanged(): any; // TODO ;
    slaveControllerListChanged(): any; // TODO ;
    aliasListChanged(): any; // TODO ;
    keysAreClamped(): any; // TODO ;
    setKeysAreClamped(): any; // TODO ;
    toggleKeysAreClamped(): any; // TODO ;
    setDynamicallyHidden(): any; // TODO ;
    setDynamicallyAutoFollow(): any; // TODO ;
    currentValueIsDefinitionValue(): any; // TODO ;
    doCopyBaseData(): any; // TODO ;
    getEmitValueChangedOnSceneClear(): any; // TODO ;
    setEmitValueChangedOnSceneClear(): any; // TODO ;
    isDynamicallyHidden(): any; // TODO ;
    isDynamicallyAutoFollow(): any; // TODO ;
    emitRemoved(): any; // TODO ;
    invalidateCacheValue(): any; // TODO ;
    addValueToSettings(): any; // TODO ;
    addValueToSettings(): any; // TODO ;
    setValueFromSettings(): any; // TODO ;
    setValueFromSettings(): any; // TODO ;
    addValueToSettings(): any; // TODO ;
    addValueToSettings(): any; // TODO ;
    setValueFromSettings(): any; // TODO ;
    setValueFromSettings(): any; // TODO ;
    setWidgetClassOverride(): any; // TODO ;
    getWidgetClassOverride(): any; // TODO ;
    getWidgetClassOverride(): any; // TODO ;
    hasWidgetClassOverride(): any; // TODO ;
    hasWidgetClassOverride(): any; // TODO ;
    isMappableChanged(): any; // TODO ;
    defaultMapGammaChanged(): any; // TODO ;
    defaultMapTextureTypeChanged(): any; // TODO ;
    textureModifierChanged(): any; // TODO ;
    textureModifierFlagsChanged(): any; // TODO ;
    getDefaultMapGamma(): any; // TODO ;
    setDefaultMapGamma(): any; // TODO ;
    getDefaultMapTextureType(): any; // TODO ;
    setDefaultMapTextureType(): any; // TODO ;
    setTextureModifier(): any; // TODO ;
    getTextureModifier(): any; // TODO ;
    setTextureModifierFlags(): any; // TODO ;
    getTextureModifierFlags(): any; // TODO ;
    getNDoubleValue(): any; // TODO ;
    getNDoubleValue(): any; // TODO ;
    getNValueCount(): any; // TODO ;
    getValueAsFloatColor(): any; // TODO ;
    getValueAsFloatColor(): any; // TODO ;
    getValueAsVec3(): any; // TODO ;
    getValueAsVec3(): any; // TODO ;
    getValueAsVec2(): any; // TODO ;
    getValueAsVec2(): any; // TODO ;
    getValueAsInt2(): any; // TODO ;
    getValueAsInt2(): any; // TODO ;
    getValueAsDouble(): any; // TODO ;
    getValueAsDouble(): any; // TODO ;
    emitDefaultMapGammaChanged(): any; // TODO ;
    emitDefaultMapTextureTypeChanged(): any; // TODO ;
    emitTextureModifierChanged(): any; // TODO ;
    emitTextureModifierFlagsChanged(): any; // TODO ;
    emitIsMappableChanged(): any; // TODO ;
    animationBlendModeChanged(): any; // TODO ;
    setColorValue(tm: DzTime, val: QColor): void;
    setColorValue(val: QColor): void;
    setColorValue(tm: DzTime, val: QColor): void;
    setColorValue(val: QColor): void;
    setDefaultColorValue(val: QColor): void;
    setKeyColorValue(i: number, val: QColor): void;
    getColorValue(tm: DzTime): QColor;
    getColorValue(): QColor;
    getColorValue(tm: DzTime): QColor;
    getColorValue(): QColor;
    getDefaultColorValue(): QColor;
    getRawColorValue(tm: DzTime): QColor;
    getRawColorValue(): QColor;
    getRawColorValue(tm: DzTime): QColor;
    getRawColorValue(): QColor;
    getKeyColorValue(i: number): QColor;
    animationBlendModeToStr(): any; // TODO ;
    animationBlendModeFromStr(): any; // TODO ;
    setAnimationBlendMode(): any; // TODO ;
    getAnimationBlendMode(): any; // TODO ;
    emitAnimationBlendModeChanged(): any; // TODO ;
}

declare class DzActiveViewportDimensionsController {

    /* Properties */
    objectName: string;
    name: string;

    /* Methods */
    destroyed(): any; // TODO ;
    destroyed(): any; // TODO ;
    deleteLater(): any; // TODO ;
    nameChanged(): any; // TODO ;
    className(): any; // TODO ;
    makePersistent(): any; // TODO ;
    inherits(): any; // TODO ;
    iskindof(): any; // TODO ;
    getName(): any; // TODO ;
    currentValueChanged(): any; // TODO ;
    invalidateDimensions(): any; // TODO ;
    inherits(): any; // TODO ;
    className(): any; // TODO ;
}

declare class DzViewport extends QFrame {

    /* Properties */
    modal: boolean;
    windowModality: number;
    geometry: QObject;
    frameGeometry: QObject;
    normalGeometry: QObject;
    pos: QObject;
    frameSize: QObject;
    size: QObject;
    rect: QObject;
    childrenRect: QObject;
    childrenRegion: QObject;
    sizePolicy: QObject;
    minimumSize: QObject;
    maximumSize: QObject;
    minimumWidth: number;
    minimumHeight: number;
    maximumWidth: number;
    maximumHeight: number;
    sizeIncrement: QObject;
    baseSize: QObject;
    cursor: QObject;
    mouseTracking: boolean;
    isActiveWindow: boolean;
    focusPolicy: number;
    focus: boolean;
    contextMenuPolicy: number;
    updatesEnabled: boolean;
    visible: boolean;
    minimized: boolean;
    maximized: boolean;
    fullScreen: boolean;
    //sizeHint: QObject;
    minimumSizeHint: QObject;
    acceptDrops: boolean;
    windowTitle: string;
    windowIcon: QObject;
    windowIconText: string;
    windowOpacity: number;
    windowModified: boolean;
    accessibleName: string;
    accessibleDescription: string;
    layoutDirection: number;
    autoFillBackground: boolean;
    styleSheet: string;
    locale: QObject;
    windowFilePath: string;
    inputMethodHints: number;
    //frameShape: number;
    //frameShadow: number;
    //lineWidth: number;
    //midLineWidth: number;
    //frameWidth: number;
    //frameRect: QObject;
    NoFrame: number;
    Box: number;
    Panel: number;
    WinPanel: number;
    HLine: number;
    VLine: number;
    StyledPanel: number;
    Plain: number;
    Raised: number;
    Sunken: number;

    /* Methods */
    customContextMenuRequested(): any; // TODO ;
    setEnabled(): any; // TODO ;
    setDisabled(): any; // TODO ;
    setWindowModified(): any; // TODO ;
    setWindowTitle(): any; // TODO ;
    setStyleSheet(): any; // TODO ;
    setFocus(): any; // TODO ;
    update(): any; // TODO ;
    repaint(): any; // TODO ;
    setVisible(): any; // TODO ;
    setHidden(): any; // TODO ;
    show(): any; // TODO ;
    hide(): any; // TODO ;
    setShown(): any; // TODO ;
    showMinimized(): any; // TODO ;
    showMaximized(): any; // TODO ;
    showFullScreen(): any; // TODO ;
    showNormal(): any; // TODO ;
    close(): any; // TODO ;
    raise(): any; // TODO ;
    lower(): any; // TODO ;
    updateMicroFocus(): any; // TODO ;
    viewChanged(view: DzView): void;
    dimensionsChanged(): void;
    view3dCurrentDimensionsChanged(): any; // TODO ;
    setView(view: DzView): void;
    isCustom(): any; // TODO ;
    get3DViewport(): Dz3DViewport;
    getManager(): DzViewportMgr;
    getView(): DzView;
    setViewVisible(): any; // TODO ;
    interactiveLessonQuery(): any; // TODO ;
}

declare class DzUniversalTool {

    /* Properties */
    objectName: string;
    name: string;

    /* Methods */
    destroyed(): any; // TODO ;
    destroyed(): any; // TODO ;
    deleteLater(): any; // TODO ;
    nameChanged(): any; // TODO ;
    className(): any; // TODO ;
    makePersistent(): any; // TODO ;
    inherits(): any; // TODO ;
    iskindof(): any; // TODO ;
    getName(): any; // TODO ;
    drawnDataChanged(): any; // TODO ;
    activated(): any; // TODO ;
    deactivated(): any; // TODO ;
    rebuildMenu(): any; // TODO ;
    getOptionsMenu(): any; // TODO ;
    changedLineWidth(): any; // TODO ;
    lineWidth(): any; // TODO ;
    setLineWidth(): any; // TODO ;
    getNodeClickMode(): any; // TODO ;
    changedSpace(): any; // TODO ;
    changedTransMaster(): any; // TODO ;
    changedTransX(): any; // TODO ;
    changedTransY(): any; // TODO ;
    changedTransZ(): any; // TODO ;
    changedTransAux(): any; // TODO ;
    changedRotMaster(): any; // TODO ;
    changedRotX(): any; // TODO ;
    changedRotY(): any; // TODO ;
    changedRotZ(): any; // TODO ;
    changedRotFree(): any; // TODO ;
    changedRotCam(): any; // TODO ;
    changedScaleMaster(): any; // TODO ;
    changedScaleX(): any; // TODO ;
    changedScaleY(): any; // TODO ;
    changedScaleZ(): any; // TODO ;
    changedScaleAux(): any; // TODO ;
    changedGuides(): any; // TODO ;
    changedGuidesColor(): any; // TODO ;
    changedSnapTrans(): any; // TODO ;
    changedSnapRot(): any; // TODO ;
    changedSnapScale(): any; // TODO ;
    changedSnapValueTrans(): any; // TODO ;
    changedSnapValueRot(): any; // TODO ;
    changedSnapValueScale(): any; // TODO ;
    changedShowPins(): any; // TODO ;
    changedShowHome(): any; // TODO ;
    space(): any; // TODO ;
    spaceAdjusted(): any; // TODO ;
    transMaster(): any; // TODO ;
    transX(): any; // TODO ;
    transY(): any; // TODO ;
    transZ(): any; // TODO ;
    transAux(): any; // TODO ;
    rotMaster(): any; // TODO ;
    rotX(): any; // TODO ;
    rotY(): any; // TODO ;
    rotZ(): any; // TODO ;
    rotFree(): any; // TODO ;
    rotCam(): any; // TODO ;
    scaleMaster(): any; // TODO ;
    scaleX(): any; // TODO ;
    scaleY(): any; // TODO ;
    scaleZ(): any; // TODO ;
    scaleAux(): any; // TODO ;
    snapTrans(): any; // TODO ;
    snapRot(): any; // TODO ;
    snapScale(): any; // TODO ;
    guides(): any; // TODO ;
    guidesColor(): any; // TODO ;
    snapValueTrans(): any; // TODO ;
    snapValueRot(): any; // TODO ;
    snapValueScale(): any; // TODO ;
    showHome(): any; // TODO ;
    showPins(): any; // TODO ;
    setSpace(): any; // TODO ;
    enableTransMaster(): any; // TODO ;
    enableTransX(): any; // TODO ;
    enableTransY(): any; // TODO ;
    enableTransZ(): any; // TODO ;
    enableTransAux(): any; // TODO ;
    enableRotMaster(): any; // TODO ;
    enableRotX(): any; // TODO ;
    enableRotY(): any; // TODO ;
    enableRotZ(): any; // TODO ;
    enableRotFree(): any; // TODO ;
    enableRotCam(): any; // TODO ;
    enableScaleMaster(): any; // TODO ;
    enableScaleX(): any; // TODO ;
    enableScaleY(): any; // TODO ;
    enableScaleZ(): any; // TODO ;
    enableScaleAux(): any; // TODO ;
    enableSnapTrans(): any; // TODO ;
    enableSnapRot(): any; // TODO ;
    enableSnapScale(): any; // TODO ;
    enableGuides(): any; // TODO ;
    setGuidesColor(): any; // TODO ;
    setSnapValueTrans(): any; // TODO ;
    setSnapValueRot(): any; // TODO ;
    setSnapValueScale(): any; // TODO ;
    enableShowHome(): any; // TODO ;
    enableShowPins(): any; // TODO ;
    stylize(): any; // TODO ;
    inherits(): any; // TODO ;
    className(): any; // TODO ;
}

declare class DzActionMenu extends QObject {

    /* Properties */
    menuType: number;
    CustomMenu: number;
    PaneMenu: number;
    ViewToolMenu: number;
    SaveAsMenu: number;
    OpenRecentMenu: number;

    /* Methods */
    itemListChanged(): void;
    clear(): void;
    insertItem(item: DzActionMenuItem, at: number): void;
    insertItem(item: DzActionMenuItem, at: number): void;
    removeItem(item: DzActionMenuItem): void;
    insertAction(action: QString, at: number): void;
    insertAction(action: QString, at: number): void;
    insertCustomAction(action: QString, at: number): void;
    insertCustomAction(action: QString, at: number): void;
    insertFileOpenAction(): any; // TODO ;
    insertFileOpenAction(): any; // TODO ;
    insertFileOpenAction(): any; // TODO ;
    insertFileMergeAction(): any; // TODO ;
    insertFileMergeAction(): any; // TODO ;
    insertFileMergeAction(): any; // TODO ;
    insertMenu(text: QString, menu: DzActionMenu, at: number): void;
    insertMenu(text: QString, menu: DzActionMenu, at: number): void;
    insertSeparator(where: number): void;
    insertSeparator(where: number): void;
    getSubMenu(name: QString): DzActionMenu;
    simplifySeparators(): void;
    hasItems(): boolean;
    getNumItems(): number;
    getItem(which: number): DzActionMenuItem;
    getItemList(): QObject[];
    findSubMenu(name: QString): DzActionMenu;
    exec(pos: QPoint): void;
    exec(): void;
    exec(pos: QPoint): void;
    exec(): void;
    getMenu(): QMenu;
}

declare class DzActivityLayout extends DzRefCountedItem {

    /* Properties */
    label: string;
    description: string;

    /* Methods */
    labelChanged(label: QString): void;
    setToolbarEnabled(toolbar: QString, onOff: boolean): void;
    isToolBarEnabled(toolbar: QString): boolean;
    clearMemorizedState(): void;
}

declare class QSizeWrapper {

    /* Properties */
    objectName: string;
    width: number;
    height: number;
    name: string;

    /* Methods */
}

declare class DzDBCategoriesTableWrapper {

    /* Properties */
    objectName: string;
    rowID: number;
    categoryName: string;
    isVendor: boolean;
    isUnassigned: boolean;
    newCount: number;
    name: string;

    /* Methods */
    destroyed(): any; // TODO ;
    destroyed(): any; // TODO ;
    deleteLater(): any; // TODO ;
    getIsDirty(): any; // TODO ;
    getWasFetched(): any; // TODO ;
    insert(): any; // TODO ;
    insertDirect(): any; // TODO ;
    update(): any; // TODO ;
    fetch(): any; // TODO ;
    removeObj(): any; // TODO ;
    markChanged(): any; // TODO ;
    updateList(): any; // TODO ;
    insertList(): any; // TODO ;
    insertList(): any; // TODO ;
    getCategoryParent(): any; // TODO ;
    setCategoryParent(): any; // TODO ;
    getCategoryIDPath(): any; // TODO ;
    getCategoryPath(): any; // TODO ;
    isChildOfCategory(): any; // TODO ;
    createdByFind(): any; // TODO ;
    getSubCategories(): any; // TODO ;
    createSubCategory(): any; // TODO ;
    createSubCategory(): any; // TODO ;
    addSubCategory(): any; // TODO ;
    addContent(): any; // TODO ;
    addContent(): any; // TODO ;
    removeContent(): any; // TODO ;
    removeContent(): any; // TODO ;
    removeContentIfVendor(): any; // TODO ;
    getContent(): any; // TODO ;
    getContentInstances(): any; // TODO ;
    findCategory(): any; // TODO ;
    findCategory(): any; // TODO ;
    findCategory(): any; // TODO ;
    inherits(): any; // TODO ;
    className(): any; // TODO ;
}

declare class DzIrayPropertyHolder {

    /* Properties */
    objectName: string;
    name: string;
    elementID: number;
    renderToCanvases: boolean;

    /* Methods */
    destroyed(): any; // TODO ;
    destroyed(): any; // TODO ;
    deleteLater(): any; // TODO ;
    nameChanged(): any; // TODO ;
    className(): any; // TODO ;
    makePersistent(): any; // TODO ;
    inherits(): any; // TODO ;
    iskindof(): any; // TODO ;
    getName(): any; // TODO ;
    propertyAdded(): any; // TODO ;
    propertyRemoved(): any; // TODO ;
    propertyListChanged(): any; // TODO ;
    propertyListInTreeChanged(): any; // TODO ;
    propertyTreeChanged(): any; // TODO ;
    privatePropertyAdded(): any; // TODO ;
    privatePropertyRemoved(): any; // TODO ;
    privatePropertyListChanged(): any; // TODO ;
    privatePropertyListInTreeChanged(): any; // TODO ;
    privatePropertyTreeChanged(): any; // TODO ;
    labelChanged(): any; // TODO ;
    parentChanged(): any; // TODO ;
    mergeElementSignal(): any; // TODO ;
    duplicateElementSignal(): any; // TODO ;
    createElementCopySignal(): any; // TODO ;
    setAttributes(): any; // TODO ;
    setName(): any; // TODO ;
    setLabel(): any; // TODO ;
    update(): any; // TODO ;
    clearAnimData(): any; // TODO ;
    clearAllAnimData(): any; // TODO ;
    addProperty(): any; // TODO ;
    insertProperty(): any; // TODO ;
    removeProperty(): any; // TODO ;
    removeProperty(): any; // TODO ;
    moveProperty(): any; // TODO ;
    addPrivateProperty(): any; // TODO ;
    insertPrivateProperty(): any; // TODO ;
    removePrivateProperty(): any; // TODO ;
    removePrivateProperty(): any; // TODO ;
    movePrivateProperty(): any; // TODO ;
    addDataItem(): any; // TODO ;
    removeDataItem(): any; // TODO ;
    deleteDataItem(): any; // TODO ;
    copyFrom(): any; // TODO ;
    setLoadScript(): any; // TODO ;
    beginEdit(): any; // TODO ;
    finishEdit(): any; // TODO ;
    cancelEdit(): any; // TODO ;
    shouldSortOnLoad(): any; // TODO ;
    getLabel(): any; // TODO ;
    getAttributes(): any; // TODO ;
    getNumProperties(): any; // TODO ;
    getProperty(): any; // TODO ;
    getPropertyList(): any; // TODO ;
    isPropertyNameUnique(): any; // TODO ;
    isPropertyNameUnique(): any; // TODO ;
    findProperty(): any; // TODO ;
    findProperty(): any; // TODO ;
    findPropertyByLabel(): any; // TODO ;
    findPropertyByLabel(): any; // TODO ;
    getPropertyGroups(): any; // TODO ;
    findMatchingProperty(): any; // TODO ;
    getNumPrivateProperties(): any; // TODO ;
    getPrivateProperty(): any; // TODO ;
    getPrivatePropertyList(): any; // TODO ;
    isPrivatePropertyNameUnique(): any; // TODO ;
    isPrivatePropertyNameUnique(): any; // TODO ;
    findPrivateProperty(): any; // TODO ;
    findPrivateProperty(): any; // TODO ;
    findPrivatePropertyByLabel(): any; // TODO ;
    findPrivatePropertyByLabel(): any; // TODO ;
    getPrivatePropertyGroups(): any; // TODO ;
    getNumDataItems(): any; // TODO ;
    getDataItem(): any; // TODO ;
    getDataItemList(): any; // TODO ;
    isDataItemNameUnique(): any; // TODO ;
    isDataItemNameUnique(): any; // TODO ;
    findDataItem(): any; // TODO ;
    getLoadScript(): any; // TODO ;
    copyToClipboard(): any; // TODO ;
    copyToClipboard(): any; // TODO ;
    getNumElementChildren(): any; // TODO ;
    getElementChild(): any; // TODO ;
    getElementParent(): any; // TODO ;
    inEdit(): any; // TODO ;
    moveDataItemToIndex(): any; // TODO ;
    findDataItemIndex(): any; // TODO ;
    duplicateMissingCustomData(): any; // TODO ;
    duplicateMissingProperties(): any; // TODO ;
    duplicateMissingPrivateProperties(): any; // TODO ;
    duplicateMissingCustomDataWithContext(): any; // TODO ;
    duplicateMissingPropertiesWithContext(): any; // TODO ;
    duplicateMissingPrivatePropertiesWithContext(): any; // TODO ;
    doMergeElement(): any; // TODO ;
    doDuplicateElement(): any; // TODO ;
    mergeElement(): any; // TODO ;
    duplicateElement(): any; // TODO ;
    createElementCopy(): any; // TODO ;
    settingsChanged(): any; // TODO ;
    toneMapperChanged(): any; // TODO ;
    environmentChanged(): any; // TODO ;
    renderOptionsChanged(): any; // TODO ;
    renderModeChanged(): any; // TODO ;
    canvasDefitionListChanged(): any; // TODO ;
    canvasNameChanged(): any; // TODO ;
    canvasTypeChanged(): any; // TODO ;
    renderToCanvasesChanged(): any; // TODO ;
    nodeListChanged(): any; // TODO ;
    idListChanged(): any; // TODO ;
    renderContextOptionsChanged(): any; // TODO ;
    activeCanvasChanged(): any; // TODO ;
    getMaxSamples(): any; // TODO ;
    getRenderMode(): any; // TODO ;
    getNumCanvasDefinitions(): any; // TODO ;
    getCanvasDefinition(): any; // TODO ;
    findCanvasDefition(): any; // TODO ;
    findCanvasDefition(): any; // TODO ;
    removeCanvasDefition(): any; // TODO ;
    removeCanvasDefition(): any; // TODO ;
    clearCanvasDefitions(): any; // TODO ;
    getAlphaType(): any; // TODO ;
    addNode(): any; // TODO ;
    removeNode(): any; // TODO ;
    hasNode(): any; // TODO ;
    removeList(): any; // TODO ;
    setNodes(): any; // TODO ;
    getNodes(): any; // TODO ;
    hasNodeList(): any; // TODO ;
    getLists(): any; // TODO ;
    clearNodeLists(): any; // TODO ;
    renameNodeList(): any; // TODO ;
    getExpandedLPE(): any; // TODO ;
    getExpandedLPE(): any; // TODO ;
    inherits(): any; // TODO ;
    className(): any; // TODO ;
}

declare class DzDelightIPRRenderHandler {

    /* Properties */
    objectName: string;
    name: string;

    /* Methods */
    destroyed(): any; // TODO ;
    destroyed(): any; // TODO ;
    deleteLater(): any; // TODO ;
    renderStarted(): any; // TODO ;
    renderPaused(): any; // TODO ;
    renderRestarted(): any; // TODO ;
    renderFinished(): any; // TODO ;
    unsupportedEdit(): any; // TODO ;
    renderProgress(): any; // TODO ;
    render(): any; // TODO ;
    customRender(): any; // TODO ;
    addNode(): any; // TODO ;
    addLight(): any; // TODO ;
    activeCameraChanged(): any; // TODO ;
    isRendering(): any; // TODO ;
    stopRendering(): any; // TODO ;
    pauseRendering(): any; // TODO ;
    restartRendering(): any; // TODO ;
    isPaused(): any; // TODO ;
    emitRenderProgress(): any; // TODO ;
    lightAdded(): any; // TODO ;
    nodeAdded(): any; // TODO ;
    getRenderer(): any; // TODO ;
    inherits(): any; // TODO ;
    className(): any; // TODO ;
}

declare class DzPropertyGroup extends DzBase {

    /* Properties */

    /* Methods */
    parentChanged(newParent: DzPropertyGroup): void;
    addedChild(newChild: DzPropertyGroup): void;
    removedChild(child: DzPropertyGroup): void;
    childListChanged(): void;
    treeChanged(): void;
    propertyVisiblityChanged(): any; // TODO ;
    getAllPaths(): String[];
    getNumProperties(): number;
    getProperty(i: number): DzProperty;
    findProperty(): any; // TODO ;
    findProperty(): any; // TODO ;
    findProperty(): any; // TODO ;
    setUniquePropertyLabel(prop: DzProperty): void;
    movePropertyToIndex(prop: DzProperty, newIndex: number): boolean;
    movePropertyToIndex(propName: QString, newIndex: number): boolean;
    movePropertyToIndex(curIndex: number, newIndex: number): boolean;
    movePropertyToIndex(prop: DzProperty, newIndex: number): boolean;
    movePropertyToIndex(propName: QString, newIndex: number): boolean;
    movePropertyToIndex(curIndex: number, newIndex: number): boolean;
    indexOfProperty(prop: DzProperty): number;
    getPath(): QString;
    getParent(): DzPropertyGroup;
    findSibling(name: QString): DzPropertyGroup;
    getNextSibling(): DzPropertyGroup;
    getPreviousSibling(): any; // TODO ;
    getFirstChild(): DzPropertyGroup;
    findChild(name: QString): DzPropertyGroup;
    getTree(): DzPropertyGroupTree;
    moveChildToIndex(childName: QString, newIndex: number): boolean;
    getRegion(): DzGeometryRegion;
    isRegion(): boolean;
    setCollapsed(onOff: boolean): void;
    getCollapsed(): boolean;
    sort(): void;
    getDefaultGroupName(): any; // TODO ;
}

declare class QColorWrapper {

    /* Properties */
    objectName: string;
    red: number;
    blue: number;
    green: number;
    alpha: number;
    hue: number;
    name: string;
    rgb: number;
    saturation: number;
    value: number;

    /* Methods */
}

declare class DzStringProperty extends DzProperty {
    static className(): QString;
    /* Properties */
    emitValueChangedOnSceneClear: boolean;

    /* Methods */
    dynamicallyHiddenChanged(): any; // TODO ;
    dynamicallyAutoFollowChanged(): any; // TODO ;
    controllerListChanged(): any; // TODO ;
    slaveControllerListChanged(): any; // TODO ;
    aliasListChanged(): any; // TODO ;
    keysAreClamped(): any; // TODO ;
    setKeysAreClamped(): any; // TODO ;
    toggleKeysAreClamped(): any; // TODO ;
    setDynamicallyHidden(): any; // TODO ;
    setDynamicallyAutoFollow(): any; // TODO ;
    currentValueIsDefinitionValue(): any; // TODO ;
    doCopyBaseData(): any; // TODO ;
    getEmitValueChangedOnSceneClear(): any; // TODO ;
    setEmitValueChangedOnSceneClear(): any; // TODO ;
    isDynamicallyHidden(): any; // TODO ;
    isDynamicallyAutoFollow(): any; // TODO ;
    emitRemoved(): any; // TODO ;
    invalidateCacheValue(): any; // TODO ;
    addValueToSettings(): any; // TODO ;
    addValueToSettings(): any; // TODO ;
    setValueFromSettings(): any; // TODO ;
    setValueFromSettings(): any; // TODO ;
    addValueToSettings(): any; // TODO ;
    addValueToSettings(): any; // TODO ;
    setValueFromSettings(): any; // TODO ;
    setValueFromSettings(): any; // TODO ;
    setWidgetClassOverride(): any; // TODO ;
    getWidgetClassOverride(): any; // TODO ;
    getWidgetClassOverride(): any; // TODO ;
    hasWidgetClassOverride(): any; // TODO ;
    hasWidgetClassOverride(): any; // TODO ;
    setValue(val: QString): boolean;
    getValue(): QString;
    setAdvanceEditorWgtClass(): any; // TODO ;
    getAdvanceEditorWgtClass(): any; // TODO ;
}

declare class DzImageProperty extends DzProperty {
    static className(): QString;
    /* Properties */
    emitValueChangedOnSceneClear: boolean;

    /* Methods */
    dynamicallyHiddenChanged(): any; // TODO ;
    dynamicallyAutoFollowChanged(): any; // TODO ;
    controllerListChanged(): any; // TODO ;
    slaveControllerListChanged(): any; // TODO ;
    aliasListChanged(): any; // TODO ;
    keysAreClamped(): any; // TODO ;
    setKeysAreClamped(): any; // TODO ;
    toggleKeysAreClamped(): any; // TODO ;
    setDynamicallyHidden(): any; // TODO ;
    setDynamicallyAutoFollow(): any; // TODO ;
    currentValueIsDefinitionValue(): any; // TODO ;
    doCopyBaseData(): any; // TODO ;
    getEmitValueChangedOnSceneClear(): any; // TODO ;
    setEmitValueChangedOnSceneClear(): any; // TODO ;
    isDynamicallyHidden(): any; // TODO ;
    isDynamicallyAutoFollow(): any; // TODO ;
    emitRemoved(): any; // TODO ;
    invalidateCacheValue(): any; // TODO ;
    addValueToSettings(): any; // TODO ;
    addValueToSettings(): any; // TODO ;
    setValueFromSettings(): any; // TODO ;
    setValueFromSettings(): any; // TODO ;
    addValueToSettings(): any; // TODO ;
    addValueToSettings(): any; // TODO ;
    setValueFromSettings(): any; // TODO ;
    setValueFromSettings(): any; // TODO ;
    setWidgetClassOverride(): any; // TODO ;
    getWidgetClassOverride(): any; // TODO ;
    getWidgetClassOverride(): any; // TODO ;
    hasWidgetClassOverride(): any; // TODO ;
    hasWidgetClassOverride(): any; // TODO ;
    defaultMapGammaChanged(): any; // TODO ;
    defaultMapTextureTypeChanged(): any; // TODO ;
    textureModifierChanged(): any; // TODO ;
    textureModifierFlagsChanged(): any; // TODO ;
    setValue(val: DzTexture): boolean;
    setValue(imgFile: QString): boolean;
    setValue(val: DzTexture): boolean;
    setValue(imgFile: QString): boolean;
    getValue(): DzTexture;
    getDefaultMapGamma(): any; // TODO ;
    setDefaultMapGamma(): any; // TODO ;
    getDefaultMapTextureType(): any; // TODO ;
    setDefaultMapTextureType(): any; // TODO ;
    setTextureModifier(): any; // TODO ;
    getTextureModifier(): any; // TODO ;
    setTextureModifierFlags(): any; // TODO ;
    getTextureModifierFlags(): any; // TODO ;
    emitDefaultMapGammaChanged(): any; // TODO ;
    emitDefaultMapTextureTypeChanged(): any; // TODO ;
    emitTextureModifierChanged(): any; // TODO ;
    emitTextureModifierFlagsChanged(): any; // TODO ;
}

declare class DzFloatColor {

    /* Properties */
    objectName: string;
    red: number;
    blue: number;
    green: number;
    alpha: number;

    /* Methods */
    destroyed(): any; // TODO ;
    destroyed(): any; // TODO ;
    deleteLater(): any; // TODO ;
    inherits(): any; // TODO ;
    className(): any; // TODO ;
    toString(): any; // TODO ;
    getColor(): any; // TODO ;
    getGreyscale(): number;
    getGrayscale(): any; // TODO ;
    getMaxRGBValue(): any; // TODO ;
    getRelativeLuminance(): any; // TODO ;
    getRgba(): any; // TODO ;
    setRgba(): any; // TODO ;
    //setValue(color: QRgb, RGBA: \/\/): void;
    setValue(r: number, g: number, b: number, a: number): void;
    //setValue(color: QRgb, RGBA: \/\/): void;
    setValue(r: number, g: number, b: number, a: number): void;
    getHsv(): any; // TODO ;
    setHsv(): any; // TODO ;
    setHsv(): any; // TODO ;
    setHsv(): any; // TODO ;
    getHsl(): any; // TODO ;
    setHsl(): any; // TODO ;
    setHsl(): any; // TODO ;
    setHsl(): any; // TODO ;
    clampedMin(): any; // TODO ;
    clampedMin(): any; // TODO ;
    clampMin(): any; // TODO ;
    clampMin(): any; // TODO ;
    clampedMax(): any; // TODO ;
    clampedMax(): any; // TODO ;
    clampMax(): any; // TODO ;
    clampMax(): any; // TODO ;
    clamped(): any; // TODO ;
    clamped(): any; // TODO ;
    clamp(): any; // TODO ;
    clamp(): any; // TODO ;
    modulate(): any; // TODO ;
    modulate(): any; // TODO ;
    modulo(): any; // TODO ;
    modulo(): any; // TODO ;
    equals(): any; // TODO ;
    equals(): any; // TODO ;
    linearizeColor(): any; // TODO ;
    linearizeColor(): any; // TODO ;
    linearizeColor(): any; // TODO ;
    gammaColor(): any; // TODO ;
    gammaColor(): any; // TODO ;
    gammaColor(): any; // TODO ;
}

declare class DzVec2 {

    /* Properties */
    objectName: string;
    x: number;
    y: number;

    /* Methods */
    destroyed(): any; // TODO ;
    destroyed(): any; // TODO ;
    deleteLater(): any; // TODO ;
    inherits(): any; // TODO ;
    className(): any; // TODO ;
    toString(): any; // TODO ;
    length(): any; // TODO ;
    lengthSquared(): any; // TODO ;
    normalized(): any; // TODO ;
    cross(): any; // TODO ;
    dot(): any; // TODO ;
    add(): any; // TODO ;
    subtract(): any; // TODO ;
    multiply(): any; // TODO ;
    divide(): any; // TODO ;
    makeZero(): any; // TODO ;
    makeIdentity(): any; // TODO ;
    negate(): any; // TODO ;
    setLength(): any; // TODO ;
    normalize(): any; // TODO ;
    square(): any; // TODO ;
    abs(): any; // TODO ;
}

declare class DzInt2 {

    /* Properties */
    objectName: string;
    x: number;
    y: number;
    width: number;
    height: number;

    /* Methods */
    destroyed(): any; // TODO ;
    destroyed(): any; // TODO ;
    deleteLater(): any; // TODO ;
    inherits(): any; // TODO ;
    className(): any; // TODO ;
    toString(): any; // TODO ;
    length(): any; // TODO ;
    lengthSquared(): any; // TODO ;
    manhattanLength(): any; // TODO ;
    add(): any; // TODO ;
    subtract(): any; // TODO ;
    multiply(): any; // TODO ;
    divide(): any; // TODO ;
    isNull(): any; // TODO ;
    transpose(): any; // TODO ;
    makeZero(): any; // TODO ;
    makeIdentity(): any; // TODO ;
    negate(): any; // TODO ;
    setLength(): any; // TODO ;
    square(): any; // TODO ;
    abs(): any; // TODO ;
}

declare class Dz3DViewport extends QGLWidget {

    /* Properties */
    modal: boolean;
    windowModality: number;
    geometry: QObject;
    frameGeometry: QObject;
    normalGeometry: QObject;
    pos: QObject;
    frameSize: QObject;
    size: QObject;
    rect: QObject;
    childrenRect: QObject;
    childrenRegion: QObject;
    sizePolicy: QObject;
    minimumSize: QObject;
    maximumSize: QObject;
    minimumWidth: number;
    minimumHeight: number;
    maximumWidth: number;
    maximumHeight: number;
    sizeIncrement: QObject;
    baseSize: QObject;
    cursor: QObject;
    mouseTracking: boolean;
    isActiveWindow: boolean;
    focusPolicy: number;
    focus: boolean;
    contextMenuPolicy: number;
    updatesEnabled: boolean;
    visible: boolean;
    minimized: boolean;
    maximized: boolean;
    fullScreen: boolean;
    sizeHint: QObject;
    minimumSizeHint: QObject;
    acceptDrops: boolean;
    windowTitle: string;
    windowIcon: QObject;
    windowIconText: string;
    windowOpacity: number;
    windowModified: boolean;
    accessibleName: string;
    accessibleDescription: string;
    layoutDirection: number;
    autoFillBackground: boolean;
    styleSheet: string;
    locale: QObject;
    windowFilePath: string;
    inputMethodHints: number;
    background: QObject;
    floorStyle: number;
    shadeStyle: number;
    axesOn: boolean;
    aspectOn: boolean;
    thirdsGuideOn: boolean;
    showPoseTool: boolean;
    toolBarMode: number;
    NoFloor: number;
    WireFloor: number;
    SolidFloor: number;
    NO_FLOOR: number;
    WIRE_FLOOR: number;
    SOLID_FLOOR: number;
    WireBox: number;
    SolidBox: number;
    Wireframe: number;
    LitWireframe: number;
    HiddenLine: number;
    WireShaded: number;
    SmoothShaded: number;
    WireTextured: number;
    Textured: number;
    WIRE_BOX: number;
    SOLID_BOX: number;
    WIREFRAME: number;
    LIT_WIREFRAME: number;
    HIDDEN_LINE: number;
    WIRE_SHADED: number;
    SMOOTH_SHADED: number;
    WIRE_TEXTURED: number;
    TEXTURED: number;
    AnchorTopLeft: number;
    AnchorTopRight: number;
    AnchorBottomLeft: number;
    AnchorBottomRight: number;
    DockedToolBar: number;
    CameraCubeHUD: number;

    /* Methods */
    customContextMenuRequested(): any; // TODO ;
    setEnabled(): any; // TODO ;
    setDisabled(): any; // TODO ;
    setWindowModified(): any; // TODO ;
    setWindowTitle(): any; // TODO ;
    setStyleSheet(): any; // TODO ;
    setFocus(): any; // TODO ;
    update(): any; // TODO ;
    repaint(): any; // TODO ;
    setVisible(): any; // TODO ;
    setHidden(): any; // TODO ;
    show(): any; // TODO ;
    hide(): any; // TODO ;
    setShown(): any; // TODO ;
    showMinimized(): any; // TODO ;
    showMaximized(): any; // TODO ;
    showFullScreen(): any; // TODO ;
    showNormal(): any; // TODO ;
    close(): any; // TODO ;
    raise(): any; // TODO ;
    lower(): any; // TODO ;
    updateMicroFocus(): any; // TODO ;
    activeCameraChanged(cam: DzCamera): void;
    dimensionsChanged(): void;
    viewChanged(): void;
    drawStyleChanged(style: DzDrawStyle): void;
    contextMenuAboutToShow(menu: DzMenu, pos: QPoint): void;
    backgroundColorChanged(color: QColor): void;
    floorStyleChanged(style: number): void;
    axesOnChanged(onOff: boolean): void;
    aspectOnChanged(onOff: boolean): void;
    thirdsGuideOnChanged(): any; // TODO ;
    toolBarDocked(onOff: boolean): void;
    toolModeChanged(mode: number): void;
    activeCameraTransformChanged(): any; // TODO ;
    activeCameraProjectionChanged(): any; // TODO ;
    currentDimensionsChanged(): any; // TODO ;
    setDrawStyle(style: DzDrawStyle): void;
    setCamera(cam: DzCamera): void;
    setCamera(cam: QString): void;
    setCamera(cam: DzCamera): void;
    setCamera(cam: QString): void;
    aimCamera(): void;
    aimCameraAtPrimaryNode(): void;
    aimCameraAtBox(box: DzBox3): void;
    frameCamera(): void;
    frameCameraOnSelectedNodes(): void;
    frameCameraOnBox(box: DzBox3): void;
    resetCamera(): void;
    pickOnNode(pnt: QPoint, useSelectionMaps: boolean, region: DzGeometryRegion): DzNode;
    pickOnNode(pnt: QPoint, useSelectionMaps: boolean, region: DzGeometryRegion): DzNode;
    pickOnNode(pnt: QPoint, useSelectionMaps: boolean, region: DzGeometryRegion): DzNode;
    pickOnMaterial(pnt: QPoint): DzMaterial;
    pickOnFacet(pnt: QPoint, facetNode: DzNode): number;
    pickOnFacet(pnt: QPoint, facetNode: DzNode): number;
    pickOnGizmo(pnt: QPoint): number;
    pickNodes(area: QPolygonF, nodes: DzNode[], useSelectionMaps: boolean): void;
    pickNodes(area: QPolygonF, nodes: DzNode[], useSelectionMaps: boolean): void;
    pickMaterials(area: QPolygonF, mats: DzMaterial[]): void;
    pickFacets(area: QPolygonF, facets: number[], facetNode: DzNode): void;
    pickGizmos(area: QPolygonF, gizmos: number[]): void;
    appendHoverCursor(cursor: QCursor): void;
    updateGLOptions(): void;
    captureImage(): QImage;
    currentDimensions(): any; // TODO ;
    getViewport(): DzViewport;
    getCamera(): DzCamera;
    getAspectFrameRect(): QRect;
    isHardwareRenderable(): boolean;
    hardwareRender(handler: DzRenderHandler): boolean;
    renderThumbnail(handler: DzRenderHandler): boolean;
    mouseIsDown(): any; // TODO ;
    updateView(): void;
    removeCamera(cam: DzNode): void;
}

declare class DzDBObjectBasePtrListWrapper {

    /* Properties */
    objectName: string;
    length: number;
    name: string;

    /* Methods */
    destroyed(): any; // TODO ;
    destroyed(): any; // TODO ;
    deleteLater(): any; // TODO ;
    at(): any; // TODO ;
    remove(): any; // TODO ;
    append(): any; // TODO ;
    inherits(): any; // TODO ;
    className(): any; // TODO ;
}

declare class DzBasicCamera extends DzCamera {

    /* Properties */
    frameWidth: number;
    focalDistance: number;
    focalLength: number;
    type: number;
    nearClippingPlane: number;
    farClippingPlane: number;
    useLocalDimensions: boolean;
    pixelsWidth: number;
    pixelsHeight: number;
    aspectWidth: number;
    aspectHeight: number;
    aspectRatio: number;
    proportionsConstrained: boolean;
    headlightMode: any;
    headlightOffset: QObject;
    isPerspective: boolean;
    currentViewWidth: number;
    currentViewHeight: number;
    fStop: number;
    depthOfField: boolean;
    FRONT_CAMERA: number;
    BACK_CAMERA: number;
    LEFT_CAMERA: number;
    RIGHT_CAMERA: number;
    TOP_CAMERA: number;
    BOTTOM_CAMERA: number;
    PERSPECTIVE_CAMERA: number;
    ORTHO_CAMERA: number;
    GENERAL_CAMERA: number;
    LOCAL_PIXEL_WIDTH: number;
    LOCAL_PIXEL_HEIGHT: number;
    LOCAL_ASPECT_WIDTH: number;
    LOCAL_ASPECT_HEIGHT: number;

    /* Methods */
    pixelDimensionsChanged(): any; // TODO ;
    dimensionsChanged(): any; // TODO ;
    useLocalDimensionsChanged(): any; // TODO ;
    pixelsWidthChanged(): any; // TODO ;
    pixelsHeightChanged(): any; // TODO ;
    aspectWidthChanged(): any; // TODO ;
    aspectHeightChanged(): any; // TODO ;
    proportionsConstrainedChanged(): any; // TODO ;
    frameWidthChanged(): any; // TODO ;
    headlightModeChanged(): any; // TODO ;
    headlightOffsetChanged(): any; // TODO ;
    updateDimensions(): any; // TODO ;
    shouldDoHeadLight(): any; // TODO ;
    fStopChanged(range: DzTimeRange): void;
    depthOfFieldChanged(): void;
    setType(type: number): void;
    getFocalDistChannel(): DzFloatProperty;
    getFocalLengthChannel(): DzFloatProperty;
    getFStopChannel(): DzFloatProperty;
    getFrameWidthChannel(): any; // TODO ;
    getDepthOfFieldChannel(): DzBoolProperty;
    getDisplayPersistenceChannel(): DzBoolProperty;
    getSightLineOpacityChannel(): DzFloatProperty;
    getFovColorChannel(): DzColorProperty;
    getFovLengthChannel(): DzFloatProperty;
    getFovOpacityChannel(): DzFloatProperty;
    getFocalPointScaleChannel(): DzFloatProperty;
    getDofVisibilityChannel(): DzBoolProperty;
    getDofColorChannel(): DzColorProperty;
    getDofOverlayColorChannel(): DzColorProperty;
    getDofOverlayOpacityChannel(): DzFloatProperty;
    getNearDofVisibilityChannel(): DzBoolProperty;
    getFarDofVisibilityChannel(): DzBoolProperty;
    getHeadlampIntensityControl(): any; // TODO ;
    getLensThicknessControl(): any; // TODO ;
    cursorToScene(x: number, y: number, z: number): DzVec3;
    cursorToRay(x: number, y: number): DzVec3;
    isAtDefaultSceneCameraValues(): boolean;
    isDefaultSceneCamera(): boolean;
    setIsDefaultSceneCamera(yesNo: boolean): void;
}

declare class DzHeadLight {

    /* Properties */
    objectName: string;
    name: string;
    elementID: number;
    renderPriority: number;
    assetIdAliases: QObject;
    nameAliases: QObject;
    assetId: string;
    frameWidth: number;
    focalDistance: number;
    focalLength: number;
    type: number;
    nearClippingPlane: number;
    farClippingPlane: number;
    useLocalDimensions: boolean;
    pixelsWidth: number;
    pixelsHeight: number;
    aspectWidth: number;
    aspectHeight: number;
    aspectRatio: number;
    proportionsConstrained: boolean;
    headlightMode: any;
    headlightOffset: QObject;
    None: number;
    DeepShadowMap: number;
    Raytraced: number;
    FRONT_CAMERA: number;
    BACK_CAMERA: number;
    LEFT_CAMERA: number;
    RIGHT_CAMERA: number;
    TOP_CAMERA: number;
    BOTTOM_CAMERA: number;
    PERSPECTIVE_CAMERA: number;
    ORTHO_CAMERA: number;
    GENERAL_CAMERA: number;
    LOCAL_PIXEL_WIDTH: number;
    LOCAL_PIXEL_HEIGHT: number;
    LOCAL_ASPECT_WIDTH: number;
    LOCAL_ASPECT_HEIGHT: number;

    /* Methods */
    destroyed(): any; // TODO ;
    destroyed(): any; // TODO ;
    deleteLater(): any; // TODO ;
    nameChanged(): any; // TODO ;
    className(): any; // TODO ;
    makePersistent(): any; // TODO ;
    inherits(): any; // TODO ;
    iskindof(): any; // TODO ;
    getName(): any; // TODO ;
    propertyAdded(): any; // TODO ;
    propertyRemoved(): any; // TODO ;
    propertyListChanged(): any; // TODO ;
    propertyListInTreeChanged(): any; // TODO ;
    propertyTreeChanged(): any; // TODO ;
    privatePropertyAdded(): any; // TODO ;
    privatePropertyRemoved(): any; // TODO ;
    privatePropertyListChanged(): any; // TODO ;
    privatePropertyListInTreeChanged(): any; // TODO ;
    privatePropertyTreeChanged(): any; // TODO ;
    labelChanged(): any; // TODO ;
    parentChanged(): any; // TODO ;
    mergeElementSignal(): any; // TODO ;
    duplicateElementSignal(): any; // TODO ;
    createElementCopySignal(): any; // TODO ;
    setAttributes(): any; // TODO ;
    setName(): any; // TODO ;
    setLabel(): any; // TODO ;
    update(): any; // TODO ;
    clearAnimData(): any; // TODO ;
    clearAllAnimData(): any; // TODO ;
    addProperty(): any; // TODO ;
    insertProperty(): any; // TODO ;
    removeProperty(): any; // TODO ;
    removeProperty(): any; // TODO ;
    moveProperty(): any; // TODO ;
    addPrivateProperty(): any; // TODO ;
    insertPrivateProperty(): any; // TODO ;
    removePrivateProperty(): any; // TODO ;
    removePrivateProperty(): any; // TODO ;
    movePrivateProperty(): any; // TODO ;
    addDataItem(): any; // TODO ;
    removeDataItem(): any; // TODO ;
    deleteDataItem(): any; // TODO ;
    copyFrom(): any; // TODO ;
    setLoadScript(): any; // TODO ;
    beginEdit(): any; // TODO ;
    finishEdit(): any; // TODO ;
    cancelEdit(): any; // TODO ;
    shouldSortOnLoad(): any; // TODO ;
    getLabel(): any; // TODO ;
    getAttributes(): any; // TODO ;
    getNumProperties(): any; // TODO ;
    getProperty(): any; // TODO ;
    getPropertyList(): any; // TODO ;
    isPropertyNameUnique(): any; // TODO ;
    isPropertyNameUnique(): any; // TODO ;
    findProperty(): any; // TODO ;
    findProperty(): any; // TODO ;
    findPropertyByLabel(): any; // TODO ;
    findPropertyByLabel(): any; // TODO ;
    getPropertyGroups(): any; // TODO ;
    findMatchingProperty(): any; // TODO ;
    getNumPrivateProperties(): any; // TODO ;
    getPrivateProperty(): any; // TODO ;
    getPrivatePropertyList(): any; // TODO ;
    isPrivatePropertyNameUnique(): any; // TODO ;
    isPrivatePropertyNameUnique(): any; // TODO ;
    findPrivateProperty(): any; // TODO ;
    findPrivateProperty(): any; // TODO ;
    findPrivatePropertyByLabel(): any; // TODO ;
    findPrivatePropertyByLabel(): any; // TODO ;
    getPrivatePropertyGroups(): any; // TODO ;
    getNumDataItems(): any; // TODO ;
    getDataItem(): any; // TODO ;
    getDataItemList(): any; // TODO ;
    isDataItemNameUnique(): any; // TODO ;
    isDataItemNameUnique(): any; // TODO ;
    findDataItem(): any; // TODO ;
    getLoadScript(): any; // TODO ;
    copyToClipboard(): any; // TODO ;
    copyToClipboard(): any; // TODO ;
    getNumElementChildren(): any; // TODO ;
    getElementChild(): any; // TODO ;
    getElementParent(): any; // TODO ;
    inEdit(): any; // TODO ;
    moveDataItemToIndex(): any; // TODO ;
    findDataItemIndex(): any; // TODO ;
    duplicateMissingCustomData(): any; // TODO ;
    duplicateMissingProperties(): any; // TODO ;
    duplicateMissingPrivateProperties(): any; // TODO ;
    duplicateMissingCustomDataWithContext(): any; // TODO ;
    duplicateMissingPropertiesWithContext(): any; // TODO ;
    duplicateMissingPrivatePropertiesWithContext(): any; // TODO ;
    doMergeElement(): any; // TODO ;
    doDuplicateElement(): any; // TODO ;
    mergeElement(): any; // TODO ;
    duplicateElement(): any; // TODO ;
    createElementCopy(): any; // TODO ;
    parentChanged(): any; // TODO ;
    transformChanged(): any; // TODO ;
    selected(): any; // TODO ;
    rotationOrderChanged(): any; // TODO ;
    childAdded(): any; // TODO ;
    childRemoved(): any; // TODO ;
    childListChanged(): any; // TODO ;
    objectChanged(): any; // TODO ;
    drawnDataChanged(): any; // TODO ;
    visibilityChanged(): any; // TODO ;
    selectabilityChanged(): any; // TODO ;
    aboutToBeRemoved(): any; // TODO ;
    removed(): any; // TODO ;
    added(): any; // TODO ;
    hiddenChanged(): any; // TODO ;
    riggingChanged(): any; // TODO ;
    materialListChanged(): any; // TODO ;
    materialSelectionChanged(): any; // TODO ;
    uvsChanged(): any; // TODO ;
    assetModified(): any; // TODO ;
    assetWasSaved(): any; // TODO ;
    boundBoxInvalidated(): any; // TODO ;
    aboutToDelete(): any; // TODO ;
    inheritScaleChanged(): any; // TODO ;
    materialSelectionSetsChanged(): any; // TODO ;
    childListOrderChanged(): any; // TODO ;
    promoteSelectionChanged(): any; // TODO ;
    topologyChanged(): any; // TODO ;
    objectDuplicateAndSetSignal(): any; // TODO ;
    modifierDuplicateFinished(): any; // TODO ;
    setManipOverColor(): any; // TODO ;
    clearManipOverColor(): any; // TODO ;
    update(): any; // TODO ;
    finalize(): any; // TODO ;
    finalize(): any; // TODO ;
    finalize(): any; // TODO ;
    select(): any; // TODO ;
    select(): any; // TODO ;
    setSelectable(): any; // TODO ;
    setVisible(): any; // TODO ;
    setRotationOrder(): any; // TODO ;
    setObject(): any; // TODO ;
    addNodeChild(): any; // TODO ;
    addNodeChild(): any; // TODO ;
    removeNodeChild(): any; // TODO ;
    removeNodeChild(): any; // TODO ;
    removeAllNodeChildren(): any; // TODO ;
    moveNodeChildToIndex(): any; // TODO ;
    moveNodeChildToIndex(): any; // TODO ;
    findChildIndex(): any; // TODO ;
    setWSTransform(): any; // TODO ;
    setWSTransform(): any; // TODO ;
    setWSPos(): any; // TODO ;
    setWSPos(): any; // TODO ;
    setWSRot(): any; // TODO ;
    setWSRot(): any; // TODO ;
    setWSScale(): any; // TODO ;
    setWSScale(): any; // TODO ;
    setLocalTransform(): any; // TODO ;
    setLocalTransform(): any; // TODO ;
    setLocalTransform(): any; // TODO ;
    setLocalTransform(): any; // TODO ;
    setToolLocalTransform(): any; // TODO ;
    setToolLocalTransform(): any; // TODO ;
    setLocalPos(): any; // TODO ;
    setLocalPos(): any; // TODO ;
    setLocalRot(): any; // TODO ;
    setLocalRot(): any; // TODO ;
    setToolLocalRot(): any; // TODO ;
    setToolLocalRot(): any; // TODO ;
    setLocalScale(): any; // TODO ;
    setLocalScale(): any; // TODO ;
    setLocalScale(): any; // TODO ;
    setLocalScale(): any; // TODO ;
    setOrientation(): any; // TODO ;
    setOrientation(): any; // TODO ;
    setOrientationAngles(): any; // TODO ;
    setOrientationAngles(): any; // TODO ;
    setOrigin(): any; // TODO ;
    setOrigin(): any; // TODO ;
    setEndPoint(): any; // TODO ;
    setEndPoint(): any; // TODO ;
    adjustOrientation(): any; // TODO ;
    adjustOrientationAngles(): any; // TODO ;
    adjustOrigin(): any; // TODO ;
    adjustEndPoint(): any; // TODO ;
    clearTransformData(): any; // TODO ;
    clearAllTransformData(): any; // TODO ;
    setInheritScale(): any; // TODO ;
    setPointAtTarget(): any; // TODO ;
    setPointAtStrength(): any; // TODO ;
    setHidden(): any; // TODO ;
    setPromoteSelection(): any; // TODO ;
    setRenderPriority(): any; // TODO ;
    setRenderPriority(): any; // TODO ;
    setVisibleInRender(): any; // TODO ;
    setSelectionMap(): any; // TODO ;
    setPresentation(): any; // TODO ;
    setPreviewBox(): any; // TODO ;
    modifyAsset(): any; // TODO ;
    modifyAsset(): any; // TODO ;
    invalidateBoundingBoxes(): any; // TODO ;
    invalidateBoundingBoxes(): any; // TODO ;
    getSkeleton(): any; // TODO ;
    getRotationOrder(): any; // TODO ;
    isSelected(): any; // TODO ;
    isSelectable(): any; // TODO ;
    isVisible(): any; // TODO ;
    isVisibileInRender(): any; // TODO ;
    castsShadow(): any; // TODO ;
    getObject(): any; // TODO ;
    getNumNodeChildren(): any; // TODO ;
    getNodeChild(): any; // TODO ;
    getNodeChildren(): any; // TODO ;
    getNodeChildren(): any; // TODO ;
    isNodeChild(): any; // TODO ;
    findNodeChild(): any; // TODO ;
    findNodeChild(): any; // TODO ;
    findNodeChildByAssetID(): any; // TODO ;
    findNodeChildByAssetID(): any; // TODO ;
    findNodeChildByAssetID(): any; // TODO ;
    findNodeChildByNameOrAlias(): any; // TODO ;
    findNodeChildByNameOrAlias(): any; // TODO ;
    getNodeParent(): any; // TODO ;
    isRootNode(): any; // TODO ;
    getLocalBoundingBox(): any; // TODO ;
    getLocalOrientedBox(): any; // TODO ;
    getWSBoundingBox(): any; // TODO ;
    getWSOrientedBox(): any; // TODO ;
    getPreviewBox(): any; // TODO ;
    getWSTransform(): any; // TODO ;
    getWSTransform(): any; // TODO ;
    getWSTransform(): any; // TODO ;
    getToolWSTransform(): any; // TODO ;
    getToolWSTransform(): any; // TODO ;
    getWSPos(): any; // TODO ;
    getWSPos(): any; // TODO ;
    getWSPos(): any; // TODO ;
    getWSRot(): any; // TODO ;
    getWSRot(): any; // TODO ;
    getWSRot(): any; // TODO ;
    getToolWSRot(): any; // TODO ;
    getToolWSRot(): any; // TODO ;
    getWSScale(): any; // TODO ;
    getWSScale(): any; // TODO ;
    getWSScale(): any; // TODO ;
    getLocalTransform(): any; // TODO ;
    getLocalTransform(): any; // TODO ;
    getLocalTransform(): any; // TODO ;
    getLocalPos(): any; // TODO ;
    getLocalPos(): any; // TODO ;
    getLocalPos(): any; // TODO ;
    getLocalRot(): any; // TODO ;
    getLocalRot(): any; // TODO ;
    getLocalRot(): any; // TODO ;
    getToolLocalRot(): any; // TODO ;
    getToolLocalRot(): any; // TODO ;
    getLocalScale(): any; // TODO ;
    getLocalScale(): any; // TODO ;
    getLocalScale(): any; // TODO ;
    getOrientation(): any; // TODO ;
    getOrientation(): any; // TODO ;
    updateOrientation(): any; // TODO ;
    getOrigin(): any; // TODO ;
    getOrigin(): any; // TODO ;
    getEndPoint(): any; // TODO ;
    getEndPoint(): any; // TODO ;
    getSelectionMap(): any; // TODO ;
    getXPosControl(): any; // TODO ;
    getYPosControl(): any; // TODO ;
    getZPosControl(): any; // TODO ;
    getXRotControl(): any; // TODO ;
    getYRotControl(): any; // TODO ;
    getZRotControl(): any; // TODO ;
    getScaleControl(): any; // TODO ;
    getXScaleControl(): any; // TODO ;
    getYScaleControl(): any; // TODO ;
    getZScaleControl(): any; // TODO ;
    getSelectabilityControl(): any; // TODO ;
    getVisibilityControl(): any; // TODO ;
    getRenderVisibilityControl(): any; // TODO ;
    getShadowControl(): any; // TODO ;
    getRenderPriorityControl(): any; // TODO ;
    getPointAtControl(): any; // TODO ;
    getOriginXControl(): any; // TODO ;
    getOriginYControl(): any; // TODO ;
    getOriginZControl(): any; // TODO ;
    getEndXControl(): any; // TODO ;
    getEndYControl(): any; // TODO ;
    getEndZControl(): any; // TODO ;
    getOrientXControl(): any; // TODO ;
    getOrientYControl(): any; // TODO ;
    getOrientZControl(): any; // TODO ;
    inheritsScale(): any; // TODO ;
    isHidden(): any; // TODO ;
    isInScene(): any; // TODO ;
    isSelectionPromoted(): any; // TODO ;
    getRenderPriority(): any; // TODO ;
    getPresentation(): any; // TODO ;
    getSelectionNode(): any; // TODO ;
    isBoneSelectingNode(): any; // TODO ;
    setInvisibleByGroup(): any; // TODO ;
    setUnselectableByGroup(): any; // TODO ;
    invisibleByGroup(): any; // TODO ;
    unselectableByGroup(): any; // TODO ;
    getWeightMapHandler(): any; // TODO ;
    doObjectDuplicateAndSet(): any; // TODO ;
    isEditorNode(): any; // TODO ;
    getToolXRotControl(): any; // TODO ;
    getToolYRotControl(): any; // TODO ;
    getToolZRotControl(): any; // TODO ;
    invalidateCache(): any; // TODO ;
    selectionMapModified(): any; // TODO ;
    updateTransform(): any; // TODO ;
    updateVis(): any; // TODO ;
    updateRenderable(): any; // TODO ;
    invalidateOrientation(): any; // TODO ;
    objectDuplicateAndSet(): any; // TODO ;
    handleRendererModeChanged(): any; // TODO ;
    projectionChanged(): any; // TODO ;
    focalDistanceChanged(): any; // TODO ;
    focalLengthChanged(): any; // TODO ;
    pixelDimensionsChanged(): any; // TODO ;
    aspectRatioChanged(): any; // TODO ;
    dimensionsChanged(): any; // TODO ;
    useLocalDimensionsChanged(): any; // TODO ;
    pixelsWidthChanged(): any; // TODO ;
    pixelsHeightChanged(): any; // TODO ;
    aspectWidthChanged(): any; // TODO ;
    aspectHeightChanged(): any; // TODO ;
    proportionsConstrainedChanged(): any; // TODO ;
    frameWidthChanged(): any; // TODO ;
    headlightModeChanged(): any; // TODO ;
    headlightOffsetChanged(): any; // TODO ;
    reset(): any; // TODO ;
    aimAt(): any; // TODO ;
    frame(): any; // TODO ;
    getHeadlight(): any; // TODO ;
    getFocalPoint(): any; // TODO ;
    getFieldOfView(): any; // TODO ;
    isViewCamera(): any; // TODO ;
    updateDimensions(): any; // TODO ;
    shouldDoHeadLight(): any; // TODO ;
    categoriesChanged(): any; // TODO ;
    isDirectional(): any; // TODO ;
    getWSDirection(): any; // TODO ;
    isAreaLight(): any; // TODO ;
    getDiffuseColor(): any; // TODO ;
    isOn(): any; // TODO ;
    getCategories(): any; // TODO ;
    getCategoriesControl(): any; // TODO ;
    getShadowType(): any; // TODO ;
    getShadowTypeControl(): any; // TODO ;
    getNearClippingPlane(): any; // TODO ;
    getFarClippingPlane(): any; // TODO ;
    getIntensity(): any; // TODO ;
    getIntensityScale(): any; // TODO ;
    getFlux(): any; // TODO ;
    getLightTempature(): any; // TODO ;
    getLightWidth(): any; // TODO ;
    getLightHeight(): any; // TODO ;
    getLightTwoSided(): any; // TODO ;
    photometricMode(): any; // TODO ;
    getLightGeometry(): any; // TODO ;
    renderEmitter(): any; // TODO ;
    getShadowColorControl(): any; // TODO ;
    getShadowIntensityControl(): any; // TODO ;
    getShadowBiasControl(): any; // TODO ;
    getShadowSoftnessControl(): any; // TODO ;
    getIlluminationControl(): any; // TODO ;
    getDiffuseColorControl(): any; // TODO ;
    getIntensityControl(): any; // TODO ;
    getIntensityScaleControl(): any; // TODO ;
    getLightGeometryControl(): any; // TODO ;
    getLightHeightControl(): any; // TODO ;
    getLightWidthControl(): any; // TODO ;
    getLightTwoSidedControl(): any; // TODO ;
    getPhotometricModeControl(): any; // TODO ;
    getRenderEmitterControl(): any; // TODO ;
    getLightFluxControl(): any; // TODO ;
    getLightTemperatureControl(): any; // TODO ;
    handlePhotometricModeChanged(): any; // TODO ;
    getCamera(): any; // TODO ;
    inherits(): any; // TODO ;
    className(): any; // TODO ;
}

declare class QPaintDevice extends QObject {

    /* Properties */

    /* Methods */
    devType(): number;
    getDC(): number;
    metric(metric: number): number;
    paintEngine(): QPaintEngine;
    paintingActive(): boolean;
    qt_paint_device_metric(device: QPaintDevice, metric: number): any;
    qwsDisplay(): QWSDisplay;
    releaseDC(hdc: number): void;
    //x11AppCells(screen: number): any;
    //x11AppColormap(screen: number): any;
    //x11AppDefaultColormap(screen: number): any;
    //x11AppDefaultVisual(screen: number): any;
    //x11AppDepth(screen: number): any;
    //x11AppDisplay(): any;
    //x11AppDpiX(screen: number): any;
    //x11AppDpiY(screen: number): any;
    //x11AppRootWindow(screen: number): any;
    //x11AppScreen(): any;
    //x11AppVisual(screen: number): any;
    //x11Cells(): any;
    //x11Colormap(): any;
    //x11DefaultColormap(): any;
    //x11DefaultVisual(): any;
    //x11Depth(): any;
    //x11Display(): any;
    //x11Screen(): any;
    //x11SetAppDpiX(obj: number, obj: number): any;
    //x11SetAppDpiY(obj: number, obj: number): any;
    //x11Visual(): any;
}

declare class QApplication extends QCoreApplication {

    /* Properties */

    /* Methods */
    aboutQt(): void;
    aboutToReleaseGpuResources(): void;
    aboutToUseGpuResources(): void;
    activeModalWidget(): QWidget;
    activePopupWidget(): QWidget;
    activeWindow(): QWidget;
    alert(widget: QWidget, duration: number): void;
    allWidgets(): QWidget[];
    autoMaximizeThreshold(): number;
    autoSipEnabled(): boolean;
    beep(): void;
    changeOverrideCursor(obj: QCursor): void;
    clipboard(): QClipboard;
    closeAllWindows(): void;
    colorSpec(): number;
    commitData(sm: QSessionManager): void;
    commitDataRequest(sessionManager: QSessionManager): void;
    cursorFlashTime(): number;
    desktop(): QDesktopWidget;
    desktopSettingsAware(): boolean;
    doubleClickInterval(): number;
    focusChanged(old: QWidget, now: QWidget): void;
    focusWidget(): QWidget;
    font(): QFont;
    font(obj: QWidget): QFont;
    font(className: string): QFont;
    font(): QFont;
    font(obj: QWidget): QFont;
    font(className: string): QFont;
    font(): QFont;
    font(obj: QWidget): QFont;
    font(className: string): QFont;
    fontDatabaseChanged(): void;
    fontMetrics(): QFontMetrics;
    globalStrut(): QSize;
    horizontalAlignment(align: number): any;
    inputContext(): QInputContext;
    isEffectEnabled(obj: number): boolean;
    isSessionRestored(): boolean;
    keyboardInputDirection(): number;
    keyboardInputInterval(): number;
    keyboardInputLocale(): QLocale;
    keyboardModifiers(): number;
    keypadNavigationEnabled(): boolean;
    lastWindowClosed(): void;
    layoutDirection(): number;
    //macEventFilter(obj: any, obj: any): boolean;
    mainWidget(): any;
    mouseButtons(): number;
    navigationMode(): number;
    overrideCursor(): QCursor;
    palette(): QPalette;
    palette(obj: QWidget): QPalette;
    palette(className: string): QPalette;
    palette(): QPalette;
    palette(obj: QWidget): QPalette;
    palette(className: string): QPalette;
    palette(): QPalette;
    palette(obj: QWidget): QPalette;
    palette(className: string): QPalette;
    platformNativeInterface(): QPlatformNativeInterface;
    queryKeyboardModifiers(): number;
    quitOnLastWindowClosed(): boolean;
    qwsDecoration(): QDecoration;
    qwsEventFilter(obj: QWSEvent): boolean;
    qwsProcessEvent(obj: QWSEvent): number;
    qwsSetCustomColors(colortable: QRgb, start: number, numColors: number): void;
    qwsSetDecoration(decoration: QString): QDecoration;
    qwsSetDecoration(obj: QDecoration): void;
    qwsSetDecoration(decoration: QString): QDecoration;
    qwsSetDecoration(obj: QDecoration): void;
    restoreOverrideCursor(): void;
    saveState(sm: QSessionManager): void;
    saveStateRequest(sessionManager: QSessionManager): void;
    sessionId(): QString;
    sessionKey(): QString;
    setActiveWindow(act: QWidget): void;
    setArgs(index: number, value: string): void;
    setAutoMaximizeThreshold(threshold: number): void;
    setAutoSipEnabled(enabled: boolean): void;
    setColorSpec(obj: number): void;
    setCursorFlashTime(obj: number): void;
    setDesktopSettingsAware(obj: boolean): void;
    setDoubleClickInterval(obj: number): void;
    setEffectEnabled(obj: number, enable: boolean): void;
    setFont(obj: QFont, className: string): void;
    setGlobalStrut(obj: QSize): void;
    setGraphicsSystem(obj: QString): void;
    setInputContext(obj: QInputContext): void;
    setKeyboardInputInterval(obj: number): void;
    //setKeypadNavigationEnabled(obj: boolean): Q_DECL_DEPRECATED;
    setLayoutDirection(direction: number): void;
    //setMainWidget(obj: QWidget): any;
    setNavigationMode(mode: number): void;
    setOverrideCursor(obj: QCursor): void;
    setPalette(obj: QPalette, className: string): void;
    setQuitOnLastWindowClosed(quit: boolean): void;
    setStartDragDistance(l: number): void;
    setStartDragTime(ms: number): void;
    setStyle(obj: QString): QStyle;
    setStyle(obj: QStyle): void;
    setStyle(obj: QString): QStyle;
    setStyle(obj: QStyle): void;
    setStyleSheet(sheet: QString): void;
    setWheelScrollLines(obj: number): void;
    setWindowIcon(icon: QIcon): void;
    startDragDistance(): number;
    startDragTime(): number;
    style(): QStyle;
    styleSheet(): QString;
    //symbianEventFilter(event: QSymbianEvent): boolean;
    //symbianProcessEvent(event: QSymbianEvent): number;
    syncX(): void;
    topLevelAt(p: QPoint): QWidget;
    topLevelWidgets(): QWidget[];
    type(): any;
    wheelScrollLines(): number;
    widgetAt(p: QPoint): QWidget;
    winFocus(widget: QWidget, focus: boolean): void;
    winMouseButtonUp(): void;
    windowIcon(): QIcon;
    //x11ClientMessage(widget: QWidget, obj: any, passive_only: boolean): number;
    //x11EventFilter(obj: any): boolean;
    //x11ProcessEvent(obj: any): number;
}

declare class DzBase extends DzSceneAsset {

    /* Properties */

    /* Methods */
    assertCast(className: string): DzBase;
    finishLoad(file: DzInFile): DzError;
    getClassFactory(): any;
    getName(): QString;
    getName(): QString;
    getName(): QString;
    getName(): QString;
    iskindof(clname: QString): boolean;
    loadSection(file: DzInFile, sectionID: number): void;
    makePersistent(obj: QObject): void;
    makePersistent(): void;
    makePersistent(obj: QObject): void;
    makePersistent(): void;
    nameChanged(name: QString): void;
    postLoadFile(file: DzInFile): void;
    save(file: DzOutFile): void;
    setName(newName: QString): void;
    setPointer(file: DzInFile, sectionID: number, pointerID: number, ptr: DzBase): void;
    setStorablePaths(path: QString): void;
    startLoad(file: DzInFile): void;
}

declare class DzSceneAsset extends DzRefCountedItem {

    /* Properties */

    /* Methods */
    assetLoaded(): void;
    assetNeedSave(): boolean;
    assetSaved(): void;
    getAssetFileInfo(): DzSceneAssetFileInfo;
    getAssetId(): QString;
    getAssetUri(): DzUri;
    getConstFileInfoData(info: DzSceneAssetFileInfo): any;
    getFallBackOffset(): number;
    getFileInfoData(info: DzSceneAssetFileInfo): DzSceneAssetFileInfoData;
    getSource(): DzUri;
    loadAssetSection(file: DzInFile, sectionID: number): boolean;
    matchesAssetId(assetID: QString, checkSource: boolean): boolean;
    modifyAsset(newUri: DzUri): boolean;
    modifyAsset(): boolean;
    modifyAsset(newUri: DzUri): boolean;
    modifyAsset(): boolean;
    saveAsset(file: DzOutFile): void;
    setAssetId(assetID: QString): void;
    setFallBackOffset(offset: number): void;
    copyDataTo(data: DzSceneAssetFileInfoData): void;
    getContributor(): DzAuthor;
    getModifiedDate(): QDateTime;
    getRevision(): DzVersion;
    getUri(): DzUri;
}

declare class DzElement extends DzBase {

    /* Properties */

    /* Methods */
    addDataItem(item: DzElementData): DzError;
    addElementChild(child: DzElement): void;
    addPrivateProperty(prop: DzProperty): DzError;
    addPrivatePropertyInternal(newprop: DzProperty): void;
    addPrivatePropertyToList(prop: DzProperty): DzError;
    addProperty(prop: DzProperty): DzError;
    addPropertyInternal(newprop: DzProperty): void;
    addPropertyToList(prop: DzProperty): DzError;
    beginEdit(): void;
    cancelEdit(): void;
    clearAllAnimData(): void;
    clearAnimData(range: DzTimeRange): void;
    copyFrom(source: DzElement): void;
    copyToClipboard(contentTypes: String[]): DzElementClipboard;
    defaultPropertyGroupTree(): DzPropertyGroupTree;
    deleteDataItem(item: DzElementData): DzError;
    duplicateMissingCustomData(tgt: DzElement): void;
    duplicateMissingPrivateProperties(tgt: DzElement): void;
    duplicateMissingProperties(tgt: DzElement): void;
    elementChildIterator(): DzElementListIterator;
    findDataItem(dataName: QString): DzElementData;
    findMatchingProperty(srcProp: DzProperty): DzProperty;
    findPrivateProperty(name: QString): DzProperty;
    findPrivateProperty(name: QString, caseSensitive: boolean): DzProperty;
    findPrivateProperty(name: QString): DzProperty;
    findPrivateProperty(name: QString, caseSensitive: boolean): DzProperty;
    findPrivatePropertyByLabel(label: QString): DzProperty;
    findPrivatePropertyByLabel(label: QString, caseSensitive: boolean): DzProperty;
    findPrivatePropertyByLabel(label: QString): DzProperty;
    findPrivatePropertyByLabel(label: QString, caseSensitive: boolean): DzProperty;
    findProperty(name: QString): DzProperty;
    findProperty(name: QString, caseSensitive: boolean): DzProperty;
    findProperty(name: QString): DzProperty;
    findProperty(name: QString, caseSensitive: boolean): DzProperty;
    findPropertyByLabel(label: QString): DzProperty;
    findPropertyByLabel(label: QString, caseSensitive: boolean): DzProperty;
    findPropertyByLabel(label: QString): DzProperty;
    findPropertyByLabel(label: QString, caseSensitive: boolean): DzProperty;
    finishEdit(): void;
    getAttributes(settings: DzSettings): void;
    getDataItem(index: number): DzElementData;
    getDataItemList(): QObject[];
    getElementChild(which: number): DzElement;
    getElementParent(): DzElement;
    getIsPropertyTreeOwnedByParent(): boolean;
    getLabel(): QString;
    getLoadScript(): DzScript;
    getNumDataItems(): number;
    getNumElementChildren(): number;
    getNumPrivateProperties(): number;
    getNumProperties(): number;
    getPrivateProperty(index: number): DzProperty;
    getPrivatePropertyGroups(): DzPropertyGroupTree;
    getPrivatePropertyList(): QObject[];
    getProperty(index: number): DzProperty;
    getPropertyGroups(): DzPropertyGroupTree;
    getPropertyList(): DzProperty[];
    inEdit(): boolean;
    insertPrivateProperty(index: number, prop: DzProperty): DzError;
    insertPrivatePropertyInList(index: number, prop: DzProperty): DzError;
    insertProperty(index: number, prop: DzProperty): DzError;
    insertPropertyInList(index: number, prop: DzProperty): DzError;
    isDataItemNameUnique(dataName: QString, makeUnique: boolean): boolean;
    isPrivatePropertyNameUnique(name: QString, makeUnique: boolean): boolean;
    isPropertyNameUnique(name: QString, makeUnique: boolean): boolean;
    labelChanged(newLabel: QString): void;
    movePrivateProperty(prop: DzProperty, element: DzElement): DzError;
    moveProperty(prop: DzProperty, element: DzElement): DzError;
    parentChanged(): void;
    privatePropertyAdded(prop: DzProperty): void;
    privatePropertyListChanged(): void;
    privatePropertyListIterator(): DzPropertyListIterator;
    privatePropertyRemoved(prop: DzProperty): void;
    privatePropertyTreeChanged(): void;
    propertyAdded(prop: DzProperty): void;
    propertyListChanged(): void;
    propertyListIterator(): DzPropertyListIterator;
    propertyRemoved(prop: DzProperty): void;
    propertyTreeChanged(): void;
    regroupPrivateProperties(tree: DzPropertyGroupTree): void;
    regroupProperties(tree: DzPropertyGroupTree): void;
    removeDataItem(item: DzElementData): DzError;
    removeElementChild(child: DzElement): void;
    removePrivateProperty(prop: DzProperty): DzError;
    removePrivateProperty(name: QString): DzError;
    removePrivateProperty(prop: DzProperty): DzError;
    removePrivateProperty(name: QString): DzError;
    removeProperty(prop: DzProperty): DzError;
    removeProperty(name: QString): DzError;
    removeProperty(prop: DzProperty): DzError;
    removeProperty(name: QString): DzError;
    setAttributes(settings: DzSettings): DzElement;
    setElementParent(elem: DzElement, regroup: boolean): void;
    setIsPropertyTreeOwnedByParent(onoff: boolean): void;
    setLabel(name: QString): DzError;
    setLoadScript(script: DzScript): void;
    shouldSortOnLoad(): boolean;
    update(): void;
    getElementName(): QString;
    paste(elem: DzElement, contentTypes: String[]): DzError;
    duplicate(owner: DzElement): DzElementData;
    writeDataItem(dataItem: DzElementData, io: any): boolean;
    writeScene(io: any): boolean;
    shouldWriteProperty(prop: DzProperty): boolean;
    applyToProperty(prop: DzProperty, opts: DzFileIOSettings): boolean;
    getPropertyName(): QString;
    setPropertyName(name: QString): void;
    writeProperty(file: DzAssetOutFile, io: any, prop: DzProperty): boolean;
    writePropertyValue(file: DzAssetOutFile, io: any, prop: DzProperty): boolean;
    applyToElement(elem: DzElement, checkPrivateProperties: boolean, opts: DzFileIOSettings): boolean;
    writeElementProperties(file: DzAssetOutFile, io: any, elem: DzElement, filter: DzElementPropertyIOFilter): boolean;
    writeProperties(file: DzAssetOutFile, io: any, propIt: DzPropertyListIterator, filter: DzElementPropertyIOFilter): boolean;
}

declare class QMainWindow extends QWidget {

    /* Properties */

    /* Methods */
    constructor(parent: QWidget, name: string, flags: number);
    //QMainWindow(parent: QWidget, name: string, flags: number): any_CONSTRUCTOR;
    addDockWidget(area: number, dockwidget: QDockWidget): void;
    addDockWidget(area: number, dockwidget: QDockWidget): void;
    addDockWidget(area: number, dockwidget: QDockWidget): void;
    addDockWidget(area: number, dockwidget: QDockWidget): void;
    addToolBar(title: QString): QToolBar;
    addToolBar(toolbar: QToolBar): void;
    addToolBar(area: number, toolbar: QToolBar): void;
    addToolBar(title: QString): QToolBar;
    addToolBar(toolbar: QToolBar): void;
    addToolBar(area: number, toolbar: QToolBar): void;
    addToolBar(title: QString): QToolBar;
    addToolBar(toolbar: QToolBar): void;
    addToolBar(area: number, toolbar: QToolBar): void;
    addToolBarBreak(area: number): void;
    centralWidget(): QWidget;
    contextMenuEvent(event: QContextMenuEvent): void;
    corner(corner: number): number;
    createPopupMenu(): QMenu;
    dockOptions(): number;
    dockWidgetArea(dockwidget: QDockWidget): number;
    documentMode(): boolean;
    event(event: QEvent): boolean;
    iconSize(): QSize;
    iconSizeChanged(iconSize: QSize): void;
    insertToolBar(before: QToolBar, toolbar: QToolBar): void;
    insertToolBarBreak(before: QToolBar): void;
    isAnimated(): boolean;
    isDockNestingEnabled(): boolean;
    isSeparator(pos: QPoint): boolean;
    menuBar(): QMenuBar;
    menuWidget(): QWidget;
    removeDockWidget(dockwidget: QDockWidget): void;
    removeToolBar(toolbar: QToolBar): void;
    removeToolBarBreak(before: QToolBar): void;
    restoreDockWidget(dockwidget: QDockWidget): boolean;
    restoreState(state: number[], version: number): boolean;
    saveState(version: number): number[];
    setAnimated(enabled: boolean): void;
    setCentralWidget(widget: QWidget): void;
    setCorner(corner: number, area: number): void;
    setDockNestingEnabled(enabled: boolean): void;
    setDockOptions(options: number): void;
    setDocumentMode(enabled: boolean): void;
    setIconSize(iconSize: QSize): void;
    setMenuBar(menubar: QMenuBar): void;
    setMenuWidget(menubar: QWidget): void;
    setStatusBar(statusbar: QStatusBar): void;
    setTabPosition(areas: number, tabPosition: number): void;
    setTabShape(tabShape: number): void;
    setToolButtonStyle(toolButtonStyle: number): void;
    setUnifiedTitleAndToolBarOnMac(set: boolean): void;
    splitDockWidget(after: QDockWidget, dockwidget: QDockWidget): void;
    statusBar(): QStatusBar;
    tabPosition(area: number): number;
    tabShape(): number;
    tabifiedDockWidgets(dockwidget: QDockWidget): QDockWidget[];
    tabifyDockWidget(first: QDockWidget, second: QDockWidget): void;
    toolBarArea(toolbar: QToolBar): number;
    toolBarBreak(toolbar: QToolBar): boolean;
    toolButtonStyle(): number;
    toolButtonStyleChanged(toolButtonStyle: number): void;
    unifiedTitleAndToolBarOnMac(): boolean;
}

declare class DzStyleInterface {

    /* Properties */

    /* Methods */
    commonStyleSubElementRect(subElement: number): QRect;
    drawPrimitive(pe: number, opt: QStyleOption, p: QPainter, w: QWidget): void;
    systemStyleSizeFromContents(ct: number): QSize;
    systemStyleSubElementRect(subElement: number): QRect;
    textStyle(ts: number, option: QStyleOption, widget: QWidget): DzTextStyle;
}

declare class DzSlider extends QWidget {

    /* Properties */
    clamped: boolean;
    displayAsPercent: boolean;
    indeterminate: boolean;
    label: String;
    labelVisible: boolean;
    max: number;
    min: number;
    sensitivity: number;
    text: String;
    textEditable: boolean;
    textVisible: boolean;
    value: number; 


    /* Methods */
    calcEditRect(): QRect;
    calcLabelRect(): QRect;
    calcMinSize(): QSize;
    calcSliderRect(): QRect;
    calcTextRect(): QRect;
    dragSpinner(delta: number): void;
    editBoxChange(text: QString): void;
    editCancelled(): void;
    editEnd(): void;
    editStart(): void;
    endSpinnerDrag(): void;
    finishEdit(): void;
    getArea(): number;
    getEditRect(): QRect;
    getEndWidthPixelMetric(): number;
    getLabel(): QString;
    getLabelRect(): QRect;
    getPosition(): number;
    getSliderOrientation(): number;
    getSliderRect(): QRect;
    getSliderThicknessPixelMetric(): number;
    getState(): number;
    getText(): QString;
    getTextRect(): QRect;
    isClamped(): boolean;
    isEditing(): boolean;
    isInState(value: number): boolean;
    isTextEditable(): boolean;
    isTextVisible(): boolean;
    leaveEvent(e: QEvent): void;
    mouseMoveEvent(e: QMouseEvent): void;
    mousePressEvent(e: QMouseEvent): void;
    mouseReleaseEvent(e: QMouseEvent): void;
    paintEvent(e: QPaintEvent): void;
    resizeEvent(e: QResizeEvent): void;
    setClamped(onOff: boolean): void;
    setLabel(label: QString): void;
    setNoChange(onOff: boolean): void;
    setPosition(pos: number): void;
    setShowLabel(onOff: boolean): void;
    setText(text: QString): void;
    setTextEditable(onOff: boolean): void;
    setTextVisible(onOff: boolean): void;
    showEdit(rect: QRect): void;
    showingLabel(): boolean;
    startSpinnerDrag(pos: number): void;
    step(positive: boolean): void;
    tabletEvent(e: QTabletEvent): void;
    textChanged(text: QString): void;
    timerEvent(e: QTimerEvent): void;
    updateMinSize(): void;
    updateRect(): void;
}

declare class QAbstractButton extends QWidget {

    /* Properties */

    /* Methods */
    constructor(parent: QWidget, name: string, f: number);
    //QAbstractButton(parent: QWidget, name: string, f: number): any_CONSTRUCTOR;
    animateClick(msec: number): void;
    autoExclusive(): boolean;
    autoRepeat(): boolean;
    autoRepeatDelay(): number;
    autoRepeatInterval(): number;
    changeEvent(e: QEvent): void;
    checkStateSet(): void;
    click(): void;
    clicked(checked: boolean): void;
    event(e: QEvent): boolean;
    focusInEvent(e: QFocusEvent): void;
    focusOutEvent(e: QFocusEvent): void;
    group(): QButtonGroup;
    hitButton(pos: QPoint): boolean;
    icon(): QIcon;
    iconSet(): any;
    iconSize(): QSize;
    isCheckable(): boolean;
    isChecked(): boolean;
    isDown(): boolean;
    keyPressEvent(e: QKeyEvent): void;
    keyReleaseEvent(e: QKeyEvent): void;
    mouseMoveEvent(e: QMouseEvent): void;
    mousePressEvent(e: QMouseEvent): void;
    mouseReleaseEvent(e: QMouseEvent): void;
    nextCheckState(): void;
    paintEvent(e: QPaintEvent): void;
    pressed(): void;
    released(): void;
    setAutoExclusive(obj: boolean): void;
    setAutoRepeat(obj: boolean): void;
    setAutoRepeatDelay(obj: number): void;
    setAutoRepeatInterval(obj: number): void;
    setCheckable(obj: boolean): void;
    setChecked(obj: boolean): void;
    setDown(obj: boolean): void;
    setIcon(icon: QIcon): void;
    setIconSize(size: QSize): void;
    setShortcut(key: QKeySequence): void;
    setText(text: QString): void;
    shortcut(): QKeySequence;
    text(): QString;
    timerEvent(e: QTimerEvent): void;
    toggle(): void;
    toggled(checked: boolean): void;
}

declare class QFrame extends QWidget {

    /* Properties */

    /* Methods */
    contructor(parent: QWidget, name: string, f: number);
    changeEvent(obj: QEvent): void;
    drawFrame(obj: QPainter): void;
    event(e: QEvent): boolean;
    frameRect(): QRect;
    frameShadow(): number;
    frameShape(): number;
    frameStyle(): number;
    frameWidth(): number;
    lineWidth(): number;
    midLineWidth(): number;
    paintEvent(obj: QPaintEvent): void;
    setFrameRect(obj: QRect): void;
    setFrameShadow(obj: number): void;
    setFrameShape(obj: number): void;
    setFrameStyle(obj: number): void;
    setLineWidth(obj: number): void;
    setMidLineWidth(obj: number): void;
    sizeHint(): QSize;
}

declare class Q3ScrollView extends Q3Frame {

    /* Properties */

    /* Methods */
    addChild(child: QWidget, x: number, y: number): void;
    bottomMargin(): number;
    cachedSizeHint(): QSize;
    center(x: number, y: number): void;
    center(x: number, y: number, xmargin: number, ymargin: number): void;
    center(x: number, y: number): void;
    center(x: number, y: number, xmargin: number, ymargin: number): void;
    changeFrameRect(obj: QRect): void;
    childX(child: QWidget): number;
    childY(child: QWidget): number;
    clipper(): QWidget;
    contentsContextMenuEvent(obj: QContextMenuEvent): void;
    contentsDragEnterEvent(obj: QDragEnterEvent): void;
    contentsDragLeaveEvent(obj: QDragLeaveEvent): void;
    contentsDragMoveEvent(obj: QDragMoveEvent): void;
    contentsDropEvent(obj: QDropEvent): void;
    contentsHeight(): number;
    contentsMouseDoubleClickEvent(obj: QMouseEvent): void;
    contentsMouseMoveEvent(obj: QMouseEvent): void;
    contentsMousePressEvent(obj: QMouseEvent): void;
    contentsMouseReleaseEvent(obj: QMouseEvent): void;
    contentsMoving(x: number, y: number): void;
    contentsToViewport(obj: QPoint): QPoint;
    contentsToViewport(x: number, y: number, vx: number, vy: number): void;
    contentsToViewport(obj: QPoint): QPoint;
    contentsToViewport(x: number, y: number, vx: number, vy: number): void;
    contentsWheelEvent(obj: QWheelEvent): void;
    contentsWidth(): number;
    contentsX(): number;
    contentsY(): number;
    contextMenuEvent(obj: QContextMenuEvent): void;
    cornerWidget(): QWidget;
    disableSizeHintCaching(): void;
    doDragAutoScroll(): void;
    dragAutoScroll(): boolean;
    drawContentsOffset(obj: QPainter, ox: number, oy: number): void;
    enableClipper(y: boolean): void;
    ensureVisible(x: number, y: number): void;
    ensureVisible(x: number, y: number, xmargin: number, ymargin: number): void;
    ensureVisible(x: number, y: number): void;
    ensureVisible(x: number, y: number, xmargin: number, ymargin: number): void;
    eventFilter(obj: QObject, e: QEvent): boolean;
    focusNextPrevChild(next: boolean): boolean;
    fontChange(obj: QFont): void;
    hScrollBarMode(): number;
    hasStaticBackground(): boolean;
    hbarIsPressed(): void;
    hbarIsReleased(): void;
    horizontalScrollBar(): QScrollBar;
    horizontalSliderPressed(): void;
    horizontalSliderReleased(): void;
    hslide(obj: number): void;
    isHorizontalSliderPressed(): boolean;
    isVerticalSliderPressed(): boolean;
    leftMargin(): number;
    minimumSizeHint(): QSize;
    mouseDoubleClickEvent(obj: QMouseEvent): void;
    mouseMoveEvent(obj: QMouseEvent): void;
    mousePressEvent(obj: QMouseEvent): void;
    mouseReleaseEvent(obj: QMouseEvent): void;
    moveChild(child: QWidget, x: number, y: number): void;
    moveContents(x: number, y: number): void;
    removeChild(child: QObject): void;
    removeChild(child: QWidget): void;
    removeChild(child: QObject): void;
    removeChild(child: QWidget): void;
    repaintContents(r: QRect, erase: boolean): void;
    repaintContents(x: number, y: number, w: number, h: number, erase: boolean): void;
    repaintContents(erase: boolean): void;
    repaintContents(r: QRect, erase: boolean): void;
    repaintContents(x: number, y: number, w: number, h: number, erase: boolean): void;
    repaintContents(erase: boolean): void;
    repaintContents(r: QRect, erase: boolean): void;
    repaintContents(x: number, y: number, w: number, h: number, erase: boolean): void;
    repaintContents(erase: boolean): void;
    resize(obj: QSize): void;
    resize(w: number, h: number): void;
    resize(obj: QSize): void;
    resize(w: number, h: number): void;
    resizeContents(w: number, h: number): void;
    resizePolicy(): number;
    rightMargin(): number;
    scrollBy(dx: number, dy: number): void;
    setCachedSizeHint(sh: QSize): void;
    setContentsPos(x: number, y: number): void;
    setCornerWidget(obj: QWidget): void;
    setDragAutoScroll(b: boolean): void;
    setEnabled(enable: boolean): void;
    setHBarGeometry(hbar: QScrollBar, x: number, y: number, w: number, h: number): void;
    setHScrollBarMode(obj: number): void;
    setMargins(left: number, top: number, right: number, bottom: number): void;
    setResizePolicy(obj: number): void;
    setStaticBackground(y: boolean): void;
    setVBarGeometry(vbar: QScrollBar, x: number, y: number, w: number, h: number): void;
    setVScrollBarMode(obj: number): void;
    setVisible(visible: boolean): void;
    startDragAutoScroll(): void;
    stopDragAutoScroll(): void;
    styleChange(obj: QStyle): void;
    topMargin(): number;
    updateContents(r: QRect): void;
    updateContents(x: number, y: number, w: number, h: number): void;
    updateContents(): void;
    updateContents(r: QRect): void;
    updateContents(x: number, y: number, w: number, h: number): void;
    updateContents(): void;
    updateContents(r: QRect): void;
    updateContents(x: number, y: number, w: number, h: number): void;
    updateContents(): void;
    //updateScrollBars(###: \/\/): void;
vScrollBarMode(): number;
vbarIsPressed(): void;
vbarIsReleased(): void;
verticalScrollBar(): QScrollBar;
verticalSliderPressed(): void;
verticalSliderReleased(): void;
viewport(): QWidget;
viewportContextMenuEvent(obj: QContextMenuEvent): void;
viewportDragEnterEvent(obj: QDragEnterEvent): void;
viewportDragLeaveEvent(obj: QDragLeaveEvent): void;
viewportDragMoveEvent(obj: QDragMoveEvent): void;
viewportDropEvent(obj: QDropEvent): void;
viewportMouseDoubleClickEvent(obj: QMouseEvent): void;
viewportMouseMoveEvent(obj: QMouseEvent): void;
viewportMousePressEvent(obj: QMouseEvent): void;
viewportMouseReleaseEvent(obj: QMouseEvent): void;
viewportPaintEvent(obj: QPaintEvent): void;
viewportResizeEvent(obj: QResizeEvent): void;
viewportSize(obj1: number, obj2: number): QSize;
viewportToContents(obj: QPoint): QPoint;
viewportToContents(vx: number, vy: number, x: number, y: number): void;
viewportToContents(obj: QPoint): QPoint;
viewportToContents(vx: number, vy: number, x: number, y: number): void;
viewportWheelEvent(obj: QWheelEvent): void;
visibleHeight(): number;
visibleWidth(): number;
vslide(obj: number): void;
wheelEvent(obj: QWheelEvent): void;
}

declare class QPushButton extends QAbstractButton {

    /* Properties */

    /* Methods */
    constructor(parent: QWidget, name: string);
    constructor(icon: QIcon, text: QString, parent: QWidget, name: string);
    constructor(text: QString, parent: QWidget, name: string);

    autoDefault(): boolean;
    initStyleOption(option: QStyleOptionButton): void;
    isDefault(): boolean;
    isFlat(): boolean;
    menu(): QMenu;
    minimumSizeHint(): QSize;
    setAutoDefault(obj: boolean): void;
    setDefault(obj: boolean): void;
    setFlat(obj: boolean): void;
    setMenu(menu: QMenu): void;
    showMenu(): void;
    sizeHint(): QSize;
}

declare class QTabWidget extends QWidget {

    /* Properties */

    /* Methods */
    constructor(parent: QWidget, name: string, f: number);
    addTab(widget: QWidget, icon: QIcon, label: QString): number;
    addTab(widget: QWidget, obj: QString): number;
    addTab(widget: QWidget, icon: QIcon, label: QString): number;
    addTab(widget: QWidget, obj: QString): number;
    changeEvent(obj: QEvent): void;
    clear(): void;
    cornerWidget(corner: number): QWidget;
    count(): number;
    currentChanged(obj: QWidget): void;
    currentChanged(index: number): void;
    currentChanged(obj: QWidget): void;
    currentChanged(index: number): void;
    currentIndex(): number;
    currentWidget(): QWidget;
    documentMode(): boolean;
    elideMode(): number;
    event(obj: QEvent): boolean;
    heightForWidth(width: number): number;
    iconSize(): QSize;
    indexOf(widget: QWidget): number;
    initStyleOption(option: QStyleOptionTabWidgetFrame): void;
    insertTab(index: number, widget: QWidget, icon: QIcon, label: QString): number;
    insertTab(index: number, widget: QWidget, obj: QString): number;
    insertTab(index: number, widget: QWidget, icon: QIcon, label: QString): number;
    insertTab(index: number, widget: QWidget, obj: QString): number;
    isMovable(): boolean;
    isTabEnabled(index: number): boolean;
    keyPressEvent(obj: QKeyEvent): void;
    minimumSizeHint(): QSize;
    paintEvent(obj: QPaintEvent): void;
    removeTab(index: number): void;
    resizeEvent(obj: QResizeEvent): void;
    selected(obj: QString): void;
    setCornerWidget(w: QWidget, corner: number): void;
    setCurrentIndex(index: number): void;
    setCurrentWidget(widget: QWidget): void;
    setDocumentMode(set: boolean): void;
    setElideMode(obj: number): void;
    setIconSize(size: QSize): void;
    setMovable(movable: boolean): void;
    setTabBar(obj: QTabBar): void;
    setTabEnabled(index: number, obj: boolean): void;
    setTabIcon(index: number, icon: QIcon): void;
    setTabPosition(obj: number): void;
    setTabShape(s: number): void;
    setTabText(index: number, obj: QString): void;
    setTabToolTip(index: number, tip: QString): void;
    setTabWhatsThis(index: number, text: QString): void;
    setTabsClosable(closeable: boolean): void;
    setUpLayout(flag: boolean): void;
    setUsesScrollButtons(useButtons: boolean): void;
    showEvent(obj: QShowEvent): void;
    sizeHint(): QSize;
    tabBar(): QTabBar;
    tabCloseRequested(index: number): void;
    tabIcon(index: number): QIcon;
    tabInserted(index: number): void;
    tabPosition(): number;
    tabRemoved(index: number): void;
    tabShape(): number;
    tabText(index: number): QString;
    tabToolTip(index: number): QString;
    tabWhatsThis(index: number): QString;
    tabsClosable(): boolean;
    usesScrollButtons(): boolean;
    widget(index: number): QWidget;
}

declare class DzNumericProperty extends DzProperty {
    static className() : QString
    /* Properties */

    /* Methods */
    applyControllers(tm: DzTime, raw: number, local: boolean): number;
    applyControllersInverse(tm: DzTime, raw: number, local: boolean): number;
    changeFollowBone(bone: DzBone): void;
    changeFollowNode(node: DzNode): void;
    changeFollowTarget(skel: DzSkeleton): void;
    clampedChanged(onOff: boolean): void;
    clearLink(): void;
    clearMap(): void;
    emitClampedChanged(onOff: boolean): void;
    emitLinked(): void;
    emitMapChanged(): void;
    emitMinMaxChanged(): void;
    emitUnlinked(): void;
    getDoubleDefaultValue(): number;
    getDoubleValue(tm: DzTime): number;
    getDoubleValue(): number;
    getDoubleValue(tm: DzTime): number;
    getDoubleValue(): number;
    getFollowProperty(): DzNumericProperty;
    getFollowValue(tm: DzTime): number;
    getFollowValue(): number;
    getFollowValue(tm: DzTime): number;
    getFollowValue(): number;
    getLinkProperty(): DzNumericProperty;
    getMapValue(time: DzTime): DzTexture;
    getMapValue(): DzTexture;
    getMapValue(time: DzTime): DzTexture;
    getMapValue(): DzTexture;
    getXYZInterest(): number;
    isClamped(): boolean;
    isInvalidWithoutMap(): boolean;
    isLinked(): boolean;
    isMappable(): boolean;
    isMapped(): boolean;
    isMaster(): boolean;
    isModulo(): boolean;
    linkNotify(): void;
    linkTo(master: DzNumericProperty): void;
    linked(): void;
    mapChanged(): void;
    minMaxChanged(): void;
    removeFollowNode(): void;
    removeFollowProperty(): void;
    setDoubleDefaultValue(val: number): void;
    setDoubleValue(tm: DzTime, val: number): void;
    setDoubleValue(val: number): void;
    setDoubleValue(tm: DzTime, val: number): void;
    setDoubleValue(val: number): void;
    setFollowListeners(): void;
    setFollowProperty(prop: DzNumericProperty): void;
    setIsClamped(val: boolean): void;
    setIsMappable(val: boolean): void;
    setIsModulo(val: boolean): void;
    setLink(link: DzNumericProperty, isMaster: boolean): void;
    setMap(img: DzTexture): void;
    setMap(imgFile: QString): void;
    setMap(img: DzTexture): void;
    setMap(imgFile: QString): void;
    setMustHaveMap(val: boolean): void;
    setXYZInterest(interest: number): void;
    unlink(): void;
    unlinked(): void;
    addImageMapMenu(): void;
    addLabel(): void;
    addTieWgt(): void;
    addWidget(wgt: QWidget): void;
    changeMap(map: DzTexture): void;
    getMapDisplay(): number;
    setLayout(layout: number): void;
    setMap(map: DzTexture, indeterminate: boolean): void;
    setMapDisplay(mode: number): void;
    showEvent(e: QShowEvent): void;
    updateLabel(): void;
    updateLayout(layout: number): void;
    updateValue(): void;
}

declare class DzIntProperty extends DzNumericProperty {

    /* Properties */

    /* Methods */
    adjustValue(tm: DzTime, val: number): number;
    adjustValue(val: number): number;
    adjustValue(tm: DzTime, val: number): number;
    adjustValue(val: number): number;
    getDefaultValue(): number;
    getKeyValue(i: number): number;
    getKeys(): any;
    getLocalValue(tm: DzTime): number;
    getLocalValue(): number;
    getLocalValue(tm: DzTime): number;
    getLocalValue(): number;
    getMinMax(min: number, max: number): boolean;
    getRawValue(tm: DzTime): number;
    getRawValue(): number;
    getRawValue(tm: DzTime): number;
    getRawValue(): number;
    getSensitivity(): number;
    getValue(tm: DzTime): number;
    getValue(): number;
    getValue(tm: DzTime): number;
    getValue(): number;
    setDefaultValue(val: number): void;
    setKeyValue(keyIndex: number, val: number): void;
    setRawValue(tm: DzTime, val: number): void;
    setRawValue(val: number): void;
    setRawValue(tm: DzTime, val: number): void;
    setRawValue(val: number): void;
    setSensitivity(sens: number): void;
    setValue(tm: DzTime, val: number): void;
    setValue(val: number): void;
    setValue(tm: DzTime, val: number): void;
    setValue(val: number): void;
    addImageMenu(): void;
    calcEditRect(): QRect;
    calcLabelRect(): QRect;
    calcMinSize(): QSize;
    calcSliderRect(): QRect;
    calcTextRect(): QRect;
    enterEvent(e: QEvent): void;
    isMouseOverType(): boolean;
    isPropHidden(): boolean;
    leaveEvent(e: QEvent): void;
    mouseMoveEvent(e: QMouseEvent): void;
    mouseReleaseEvent(e: QMouseEvent): void;
    setIndent(indent: number): void;
    setIsMouseOverType(onOff: boolean): void;
    setLocked(onOff: boolean): void;
    setPropHidden(onOff: boolean): void;
    timerEvent(obj: QTimerEvent): void;
    updateImageMenuGeom(): void;
    isMouseOverSlider(): boolean;
    propStateChangeNotify(): void;
    propertyChangeNotify(): void;
    setIsMouseOverSlider(onOff: boolean): void;
    setValue(value: number): void;
    startEdit(): void;
    getMax(): Number;
    getMin(): Number;
}

declare class DzRefCountedItem extends QObject {

    /* Properties */

    /* Methods */
    getRefCount(): number;
    isShared(): boolean;
    isUnique(): boolean;
    ref(): void;
    unref(): void;
}

declare class QMenuBar extends QWidget {

    /* Properties */

    /* Methods */
    constructor(parent: QWidget, name: string);
    actionAt(obj: QPoint): QAction;
    actionEvent(obj: QActionEvent): void;
    actionGeometry(obj: QAction): QRect;
    activated(itemId: number): void;
    activeAction(): QAction;
    addAction(text: QString, receiver: QObject, member: string): QAction;
    addMenu(menu: QMenu): QAction;
    addMenu(icon: QIcon, title: QString): QMenu;
    addMenu(title: QString): QMenu;
    addMenu(menu: QMenu): QAction;
    addMenu(icon: QIcon, title: QString): QMenu;
    addMenu(title: QString): QMenu;
    addMenu(menu: QMenu): QAction;
    addMenu(icon: QIcon, title: QString): QMenu;
    addMenu(title: QString): QMenu;
    addSeparator(): QAction;
    autoGeometry(): any;
    changeEvent(obj: QEvent): void;
    clear(): void;
    cornerWidget(corner: number): QWidget;
    defaultAction(): QAction;
    event(obj: QEvent): boolean;
    eventFilter(obj: QObject, event: QEvent): boolean;
    findActionForId(id: number): QAction;
    findIdForAction(obj: QAction): number;
    focusInEvent(obj: QFocusEvent): void;
    focusOutEvent(obj: QFocusEvent): void;
    frameWidth(): any;
    heightForWidth(obj: number): number;
    highlighted(itemId: number): void;
    hovered(action: QAction): void;
    initStyleOption(option: QStyleOptionMenuItem, action: QAction): void;
    insertAny(icon: QIcon, text: QString, receiver: QObject, member: string): number;
    insertMenu(before: QAction, menu: QMenu): QAction;
    insertSeparator(before: QAction): QAction;
    insertSeparator(index: number): any;
    insertSeparator(before: QAction): QAction;
    insertSeparator(index: number): any;
    isDefaultUp(): boolean;
    isNativeMenuBar(): boolean;
    itemParameter(id: number): any;
    keyPressEvent(obj: QKeyEvent): void;
    leaveEvent(obj: QEvent): void;
    macMenu(): any;
    macUpdateMenuBar(): boolean;
    minimumSizeHint(): QSize;
    mouseMoveEvent(obj: QMouseEvent): void;
    mousePressEvent(obj: QMouseEvent): void;
    mouseReleaseEvent(obj: QMouseEvent): void;
    paintEvent(obj: QPaintEvent): void;
    //qt_mac_activate_action(obj: any, obj: number, obj: number, obj: boolean): any;
    resizeEvent(obj: QResizeEvent): void;
    setActiveAction(action: QAction): void;
    setAutoGeometry(obj: boolean): any;
    setCornerWidget(w: QWidget, corner: number): void;
    setDefaultAction(obj: QAction): void;
    setDefaultUp(obj: boolean): void;
    setItemParameter(id: number, param: number): any;
    setNativeMenuBar(nativeMenuBar: boolean): void;
    setVisible(visible: boolean): void;
    sizeHint(): QSize;
    timerEvent(obj: QTimerEvent): void;
    triggered(action: QAction): void;
    wceCommands(command: number): void;
    wceRefresh(): void;
}

declare class DzAbstractAssetContainer extends DzRefCountedItem {

    /* Properties */

    /* Methods */
    addConnectedModel(model: QAbstractItemModel): void;
    assetContainerValid(ptr: void): DzAbstractAssetContainer;
    assetIconChanged(asset: DzAsset): void;
    assetRenamed(asset: DzAsset, index: number): void;
    beginAssetAdd(start: number, end: number): void;
    beginAssetRemove(start: number, end: number): void;
    beginChildContainerAdd(con: DzAbstractAssetContainer, start: number, end: number): void;
    beginChildContainerRemove(con: DzAbstractAssetContainer, start: number, end: number): void;
    canAddSubContainer(): boolean;
    canDelete(): boolean;
    canModAssets(): boolean;
    canRename(): boolean;
    childContainerAboutToBeRemoved(childContainer: DzAbstractAssetContainerPtr): void;
    childContainerRemoved(childContainer: DzAbstractAssetContainerPtr): void;
    clearRebuildableAssets(): boolean;
    createNewChildContainer(containerName: QString): boolean;
    endAssetAdd(): void;
    endAssetRemove(): void;
    endChildContainerAdd(): void;
    endChildContainerRemove(): void;
    getAsset(index: number): DzAssetPtr;
    getAssets(): QObject[];
    getAssets(list: DzAsset[]): boolean;
    getAssets(): QObject[];
    getAssets(list: DzAsset[]): boolean;
    getCanCopyContainers(): boolean;
    getChildContainer(index: number): DzAbstractAssetContainerPtr;
    getChildContainers(): QObject[];
    getChildContainers(list: DzAbstractAssetContainer[]): boolean;
    getChildContainers(): QObject[];
    getChildContainers(list: DzAbstractAssetContainer[]): boolean;
    getChildIconSize(): QSize;
    getContainerName(): QString;
    getID(): QVariant;
    getIDPath(): QVariant[];
    getIcon(): QIcon;
    getNumAssets(): number;
    getNumChildContainers(): number;
    getOwner(): DzAbstractAssetContainer;
    getSmallChildIconSize(): QSize;
    getSupportFile(): QString;
    getToolTip(): QString;
    getUseCount(): number;
    hasAsset(asset: DzAsset): boolean;
    hasChildContainers(): boolean;
    ignoreAssetConflicts(): boolean;
    initChildren(): boolean;
    insertAsset(asset: DzAsset): boolean;
    insertChildContainer(container: DzAbstractAssetContainer): boolean;
    isConnectedToModel(model: QAbstractItemModel): boolean;
    isFileSystemBased(): boolean;
    loadMetadata(asset: DzAsset): void;
    moveFromParent(child: DzAbstractAssetContainer): boolean;
    removeAsset(asset: DzAsset): boolean;
    removeAssetCausesDelete(): boolean;
    removeAssetOnCut(toContainer: DzAbstractAssetContainer): boolean;
    removeChildContainer(container: DzAbstractAssetContainer): boolean;
    rename(name: QString): boolean;
    renameAsset(asset: DzAsset, newAssetName: QString): boolean;
    renameChildContainer(container: DzAbstractAssetContainer, name: QString): boolean;
    setCanAddSubContainer(yesNo: boolean): void;
    setCanDelete(yesNo: boolean): void;
    setCanModifyAssets(yesNo: boolean): void;
    setCanRename(yesNo: boolean): void;
    setContainerName(name: QString): void;
    setID(id: QVariant): void;
    setIcon(icon: QIcon): void;
    setOwner(newOwner: DzAbstractAssetContainer): void;
    setToolTip(tip: QString): void;
    setUseCount(count: number): void;
    showAsNew(): boolean;
    standardPasteAssets(list: DzAsset[], copy: boolean, from: DzAbstractAssetContainer): void;
    update(): boolean;
    updateAssets(): boolean;
    updateMetadata(asset: DzAsset): boolean;
}

declare class DzMaterial extends DzElement {

    /* Properties */

    /* Methods */
    addedTo(shape: DzShape): void;
    allowsAutoBake(): boolean;
    assetModified(): void;
    assetWasSaved(): void;
    bakedMapChanged(): void;
    connectForAutoBake(): void;
    createProperties(copyFrom: DzMaterial): void;
    enablePropagateRenderPriorityToNodes(propagate: boolean): void;
    followMaterialChanged(): void;
    getActiveUVSet(shape: DzShape): DzUVSet;
    getActiveUVSet(geom: DzGeometry): DzUVSet;
    getAllMaps(): QObject[];
    getAssetType(): any;
    getBakedMap(): DzTexture;
    getBaseOpacity(): number;
    getBoundingBox(): DzBox3;
    getColorMap(): DzTexture;
    getDiffuseColor(): QColor;
    getFollowBlendControl(): DzFloatProperty;
    getFollowMaterial(): DzMaterial;
    getIndex(): number;
    getMaterial(which: number): DzMaterial;
    getMaterialName(): QString;
    getNumGLMaps(): number;
    getNumMaterials(): number;
    getNumUVMaps(): number;
    getOpacityMap(): DzTexture;
    getPropagatePriorityControl(): DzBoolProperty;
    getRenderPriority(): number;
    getRenderPriorityControl(): DzEnumProperty;
    getShapeList(): QObject[];
    getSmoothAngleControl(): DzFloatProperty;
    getSmoothControl(): DzBoolProperty;
    getSmoothingAngle(): number;
    getUVSetControl(): DzEnumProperty;
    init(doCreateProperties: boolean, copyFrom: DzMaterial): void;
    isColorMappable(): boolean;
    isHighlighted(): boolean;
    isOpacityMappable(): boolean;
    isPropagateRenderPriorityToNodesEnabled(): boolean;
    isRenderingAsCoShader(): boolean;
    isSelected(): boolean;
    isSmoothingOn(): boolean;
    multiTexturingSupported(): boolean;
    needsTangentSpaceParams(): boolean;
    propagateRenderPriorityToNodes(): void;
    removedFrom(shape: DzShape): void;
    requestAutoBake(): void;
    resetBakedMap(): void;
    select(onOff: boolean): void;
    selectionStateChanged(mat: DzMaterial, onOff: boolean): void;
    setBakedMap(img: DzTexture): void;
    setBaseOpacity(val: number): void;
    setCoShader(settings: DzRenderSettings, info: DzCoShaderInfo): void;
    setColorMap(img: DzTexture): void;
    setDiffuseColor(color: QColor): void;
    setFollowMaterial(mat: DzMaterial): void;
    setGL(style: DzDrawStyle): void;
    setGLBakeMat(style: DzDrawStyle): void;
    setGLHighlight(style: DzDrawStyle): void;
    setGLMat(style: DzDrawStyle): void;
    setOpacityMap(img: DzTexture): void;
    setRender(settings: DzRenderSettings): void;
    setRenderPriority(priority: number): void;
    setRenderPriority(priority: number): void;
    setRenderPriority(priority: number): void;
    setRenderPriority(priority: number): void;
    setShader(settings: DzRenderSettings): void;
    setSmoothingAngle(angle: number): void;
    setSmoothingOn(onOff: boolean): void;
    setTextureConvertShader(settings: DzRenderSettings): void;
    setTextureConvertTokens(settings: DzRenderSettings): number;
    settingsChanged(): void;
    shadersMatch(otherMat: DzMaterial): boolean;
    shapeListIterator(): DzShapeListIterator;
    shouldAlwaysEmbed(): boolean;
    smoothingChanged(): void;
    startDrawHighlight(): void;
    stopDrawHighlight(): void;
    toQObject(): QObject;
    toQObject(): any;
    toQObject(): QObject;
    toQObject(): any;
    triggerAutoBake(): void;
    unsetGL(style: DzDrawStyle): void;
    unsetGLBakeMat(style: DzDrawStyle): void;
    unsetGLHighlight(style: DzDrawStyle): void;
    unsetGLMat(style: DzDrawStyle): void;
    unsetRender(settings: DzRenderSettings): void;
    updateUVList(): void;
    uvsChanged(): void;
    getShouldRenderAsCurve(): boolean;
    setRenderAsCurve(onOff: boolean): void;
    currentValueInAnimation(): boolean;
    getMaterialIncludeProperties(): DzProperty[];
    setWriteAnimation(onOff: boolean): void;
    setWriteInstances(onOff: boolean): void;
    writeAnimations(prop: DzProperty, io: any, foundAnimation: boolean): boolean;
    writeAnimations(io: any): boolean;
    writeAnimations(prop: DzProperty, io: any, foundAnimation: boolean): boolean;
    writeAnimations(io: any): boolean;
    writeMaterialInstances(io: any): boolean;
    writeUVSetAnimation(mat: DzMaterial, io: any, propRef: QString): boolean;
    activate(): void;
    aimCamera(view: Dz3DViewport): void;
    clearHighlighting(): void;
    contextMenu(view: Dz3DViewport, menu: DzMenu, pos: QPoint): void;
    deactivate(): void;
    draw(style: DzDrawStyle, view: Dz3DViewport): void;
    drawMaterial(mat: DzMaterial): void;
    drawSelectedMaterials(): void;
    frameCamera(view: Dz3DViewport): void;
    getPane(parent: QWidget): QWidget;
    getPropertyFromUser(imageOnly: boolean, mat: DzMaterial): DzProperty;
    getSelectionBoundingBox(box: DzBox3): void;
    getSurfacePane(): DzSurfacesPane;
    menuSelection(id: number): void;
    mouseLeave(view: Dz3DViewport, e: QEvent): void;
    mouseOver(view: Dz3DViewport, e: QMouseEvent, accel: number): void;
    mousePress(view: Dz3DViewport, e: QMouseEvent, accel: number): boolean;
    rebuildSelectedMats(): void;
    selectAllMaterials(match: DzMaterial): void;
    selectAllMaterials(onOff: boolean, match: DzMaterial, useTextureMap: boolean, prop: DzProperty): void;
    selectAllMaterials(match: DzMaterial): void;
    selectAllMaterials(onOff: boolean, match: DzMaterial, useTextureMap: boolean, prop: DzProperty): void;
    setHighlightMaterial(mat: DzMaterial, view: Dz3DViewport): void;
    setHighlightSelected(onOff: boolean): void;
    setHighlightWidth(width: number): void;
    stylize(): void;
    updateNodeSelection(): void;
    whatsThisText(): QString;
    buildSelectionGroup(parent: QWidget): void;
    highlightSelectedChanged(): void;
    initOptions(): void;
    outlineWidthChanged(): void;
}

declare class DzProperty extends DzBase {

    /* Properties */

    /* Methods */
    addAlias(prop: DzProperty, alias: DzProperty): void;
    addAlias(alias: DzProperty): void;
    addAlias(prop: DzProperty, alias: DzProperty): void;
    addAlias(alias: DzProperty): void;
    addSlaveController(control: DzController): void;
    assetModified(): void;
    assetWasSaved(): void;
    beginEdit(): void;
    canAnimate(): boolean;
    canAnimateChanged(enabled: boolean): void;
    canAutoFollow(): boolean;
    canAutoFollowChanged(canAutoFollow: boolean): void;
    cancelEdit(): void;
    clearGroup(): void;
    clearRegion(preservePath: boolean): void;
    controllerListIterator(): DzControllerListIterator;
    copyBaseData(prop: DzProperty): void;
    copyFrom(prop: DzProperty): void;
    copyToClipboard(): DzPropertyClipboard;
    createAlias(): DzProperty;
    currentValueChanged(): void;
    currentValueIsDefaultValue(): boolean;
    definitionLoadFromDAZ(): boolean;
    deleteAllKeys(): void;
    deleteKeys(interval: DzTimeRange): number;
    deleteKeys(start: number, end: number): number;
    deleteKeys(interval: DzTimeRange): number;
    deleteKeys(start: number, end: number): number;
    deleteSelectedKeys(): number;
    doCurrentAttributesMatchDefinition(): boolean;
    duplicate(): DzProperty;
    editFinished(): void;
    emitCanAnimateChanged(enabled: boolean): void;
    emitCanAutoFollowChanged(canAutoFollow: boolean): void;
    emitCurrentValueChanged(): void;
    emitEditFinished(): void;
    emitIsManipulatorChanged(isManip: boolean): void;
    emitIsUserPropertyChanged(isUserProp: boolean): void;
    emitKeySelectionChanged(range: DzTimeRange): void;
    emitLockStateChanged(): void;
    emitOverridingControllersChanged(overriding: boolean): void;
    emitValueChanged(range: DzTimeRange): void;
    ensurePropertyType(prop: DzProperty, srcProp: DzProperty): DzProperty;
    findMatchingProperty(node: DzNode): DzProperty;
    finishEdit(): void;
    getAlias(index: number): DzProperty;
    getAliasTarget(): DzProperty;
    getAssetType(): any;
    getAttributes(settings: DzPropertySettings): void;
    getAttributes(settings: DzPropertySettings): void;
    getAttributes(settings: DzPropertySettings): void;
    getAttributes(settings: DzPropertySettings): void;
    getController(idx: number): DzController;
    getControllerList(): QObject[];
    getFlags(): number;
    getGroup(): DzPropertyGroup;
    getGroupOnlyPath(): QString;
    getIndexOfSlaveControllers(cntrl: DzController): number;
    getKeyIndexRange(iv: DzTimeRange, start: number): number;
    getKeyRange(): DzTimeRange;
    getKeyTime(i: number): DzTime;
    getLabel(): QString;
    getNumAliases(): number;
    getNumControllers(): number;
    getNumKeys(range: DzTimeRange): number;
    getNumKeys(): number;
    getNumKeys(range: DzTimeRange): number;
    getNumKeys(): number;
    getNumSelectedKeys(): number;
    getNumSlaveControllers(): number;
    getOwner(): DzElement;
    getPath(): QString;
    getPresentation(): DzPresentation;
    getPropertyDefinition(): DzPropertyDefinition;
    getRegion(): DzGeometryRegion;
    getSelectedKeyRange(): DzTimeRange;
    getSlaveController(idx: number): DzController;
    getSlaveControllerList(): QObject[];
    getWidgetClass(styled: boolean): QString;
    groupChanged(newGroup: DzPropertyGroup): void;
    hasControllers(): boolean;
    hasKeys(): boolean;
    hasSlaveControllers(): boolean;
    hiddenChanged(hidden: boolean): void;
    insertController(controller: DzController, idx: number): void;
    isAlias(): boolean;
    isCombinable(prop: DzProperty): boolean;
    isEditing(): boolean;
    isFavorite(): boolean;
    isFavoriteChanged(onOff: boolean): void;
    isGlobalFavorite(): boolean;
    isGlobalFavoriteChanged(onOff: boolean): void;
    isHidden(): boolean;
    isKey(t: DzTime, index: number): boolean;
    isKeySelected(i: number): boolean;
    isLocked(): boolean;
    isManipulator(): boolean;
    isManipulatorChanged(isManip: boolean): void;
    isNew(): boolean;
    isNumeric(): boolean;
    isOverridingControllers(): boolean;
    isPrivateProperty(): boolean;
    isRigProperty(): boolean;
    isSelected(): boolean;
    isUserProperty(): boolean;
    isUserPropertyChanged(isUserProp: boolean): void;
    keySelectionChanged(range: DzTimeRange): void;
    labelChanged(newLabel: QString): void;
    lock(onOff: boolean): void;
    lockStateChanged(): void;
    moveControllerToIndex(ctrl: DzController, newIdx: number): boolean;
    moveControllerToIndex(curIdx: number, newIdx: number): boolean;
    moveControllerToIndex(ctrl: DzController, newIdx: number): boolean;
    moveControllerToIndex(curIdx: number, newIdx: number): boolean;
    newStateChanged(): void;
    overridingControllersChanged(overriding: boolean): void;
    presentationIconChanged(): void;
    propertyDeleted(thisProperty: DzProperty): void;
    propertyDuplicate(): DzProperty;
    regionChanged(): void;
    regroup(tree: DzPropertyGroupTree): void;
    removeAlias(prop: DzProperty, alias: DzProperty): void;
    removeAllControllers(): void;
    removeController(ctrl: DzController): void;
    removeController(idx: number): void;
    removeController(prop: DzProperty): void;
    removeController(ctrl: DzController): void;
    removeController(idx: number): void;
    removeController(prop: DzProperty): void;
    removeController(ctrl: DzController): void;
    removeController(idx: number): void;
    removeController(prop: DzProperty): void;
    removeSlaveController(control: DzController): void;
    removed(): void;
    selectAllKeys(onOff: boolean): number;
    selectKey(i: number, onOff: boolean): void;
    selectKeys(range: DzTimeRange, onOff: boolean): number;
    selectionStateChanged(): void;
    setAttributes(settings: DzPropertySettings): void;
    setAttributes(settings: DzPropertySettings): void;
    setAttributes(settings: DzPropertySettings): void;
    setAttributes(settings: DzPropertySettings): void;
    setCanAnimate(yesNo: boolean): void;
    setCanAutoFollow(onOff: boolean): void;
    setCurrentAttributesAsDefinition(): void;
    setFlags(int: number): void;
    setGroup(group: DzPropertyGroup): void;
    setHidden(yesNo: boolean): void;
    setIsFavorite(onOff: boolean): void;
    setIsGlobalFavorite(onOff: boolean): void;
    setIsManipulator(onOff: boolean): void;
    setIsPrivateProperty(yesNo: boolean): void;
    setIsRigProperty(yesNo: boolean): void;
    setIsUserProperty(yesNo: boolean): void;
    setLabel(label: QString): void;
    setNew(onOff: boolean): void;
    setOverrideControllers(onOff: boolean): void;
    setOwner(owner: DzElement): void;
    setPath(path: QString): void;
    setPresentation(pres: DzPresentation): void;
    setRegion(reg: DzGeometryRegion): void;
    setSelected(onOff: boolean): void;
    slaveControllerListIterator(): DzControllerListIterator;
    toQObject(): QObject;
    toQObject(): any;
    toQObject(): QObject;
    toQObject(): any;
    updateControllerState(): void;
    updateTime(): void;
    valueChanged(range: DzTimeRange): void;
    valueIsReplaced(): boolean;
    paste(prop: DzProperty): DzError;
    addChild(child: DzPropertyGroup): void;
    addProperty(prop: DzProperty): void;
    addSibling(sibling: DzPropertyGroup): void;
    addedChild(newChild: DzPropertyGroup): void;
    childListChanged(): void;
    collectAllPaths(paths: String[]): void;
    findChild(name: QString): DzPropertyGroup;
    findSibling(name: QString): DzPropertyGroup;
    getAllPaths(): String[];
    getCollapsed(): boolean;
    getFirstChild(): DzPropertyGroup;
    getNextSibling(): DzPropertyGroup;
    getNumProperties(): number;
    getParent(): DzPropertyGroup;
    getPath(): QString;
    getProperties(): DzPropertyListIterator;
    getProperty(i: number): DzProperty;
    getRegion(): DzGeometryRegion;
    getTree(): DzPropertyGroupTree;
    hasProperty(label: QString, exclude: DzProperty): boolean;
    indexOfProperty(prop: DzProperty): number;
    isRegion(): boolean;
    moveChildToIndex(childName: QString, newIndex: number): boolean;
    movePropertyToIndex(prop: DzProperty, newIndex: number): boolean;
    movePropertyToIndex(propName: QString, newIndex: number): boolean;
    movePropertyToIndex(curIndex: number, newIndex: number): boolean;
    movePropertyToIndex(prop: DzProperty, newIndex: number): boolean;
    movePropertyToIndex(propName: QString, newIndex: number): boolean;
    movePropertyToIndex(curIndex: number, newIndex: number): boolean;
    movePropertyToIndex(prop: DzProperty, newIndex: number): boolean;
    movePropertyToIndex(propName: QString, newIndex: number): boolean;
    movePropertyToIndex(curIndex: number, newIndex: number): boolean;
    parentChanged(newParent: DzPropertyGroup): void;
    removeChild(child: DzPropertyGroup): void;
    removeProperty(prop: DzProperty): void;
    removedChild(child: DzPropertyGroup): void;
    setCollapsed(onOff: boolean): void;
    setParent(parent: DzPropertyGroup): void;
    setTree(tree: DzPropertyGroupTree): void;
    setUniquePropertyLabel(prop: DzProperty): void;
    sort(): void;
    sortGroups(sortSibs: boolean): DzPropertyGroup;
    treeChanged(): void;
    decode(src: QMimeSource, propGroupList: DzPropertyGroup[]): boolean;
    decode(src: QMimeData, propGroupList: DzPropertyGroup[]): void;
    decode(src: QMimeSource, propGroupList: DzPropertyGroup[]): boolean;
    decode(src: QMimeData, propGroupList: DzPropertyGroup[]): void;
    encode(propGroupList: DzPropertyGroup[]): number[];
    addChild(child: DzPropertyGroup): void;
    childListChanged(): void;
    collectAllPaths(paths: String[]): void;
    findChild(name: QString): DzPropertyGroup;
    getAllPaths(): String[];
    getDefaultGroup(): DzPropertyGroup;
    getFirstChild(): DzPropertyGroup;
    getOwner(): DzElement;
    getPropertyGroup(path: QString): DzPropertyGroup;
    isPrivate(): boolean;
    moveChildToIndex(childName: QString, newIndex: number): boolean;
    removeChild(child: DzPropertyGroup): void;
    setIsPrivate(onoff: boolean): void;
    setOwner(owner: DzElement): void;
    sortGroups(): void;
    treeChanged(): void;
    findPropertyOnNode(propName: QString, node: DzNode): DzProperty;
    findPropertyOnNodeByInternalName(internalName: QString, node: DzNode): DzProperty;
    findPropertyOnNodeByLabel(label: QString, node: DzNode): DzProperty;
    getErcController(controlledProp: DzProperty, controllingProp: DzProperty): DzERCLink;
    getInternalName(prop: DzProperty): QString;
    getLabel(prop: DzProperty): QString;
    //getMax(prop: DzProperty, max: number): boolean;
    //getMin(prop: DzProperty, min: number): boolean;
    getNode(prop: DzProperty): DzNode;
    getNodeName(prop: DzProperty): QString;
    getNodeType(prop: DzProperty): QString;
    getPrivatePropertiesOnNode(prop: DzProperty, propList: DzProperty[]): void;
    getPrivatePropertiesOnNode(node: DzNode, propList: DzProperty[]): void;
    getPrivatePropertiesOnNode(prop: DzProperty, propList: DzProperty[]): void;
    getPrivatePropertiesOnNode(node: DzNode, propList: DzProperty[]): void;
    getPropertiesOnElement(elem: DzElement, propList: DzProperty[]): void;
    getPropertiesOnNode(prop: DzProperty, propList: DzProperty[], includeModifiers: boolean): void;
    getPropertiesOnNode(node: DzNode, propList: DzProperty[], includeModifiers: boolean): void;
    getPropertiesOnNode(prop: DzProperty, propList: DzProperty[], includeModifiers: boolean): void;
    getPropertiesOnNode(node: DzNode, propList: DzProperty[], includeModifiers: boolean): void;
    getRegionPropertiesOnNode(curNode: DzNode, propList: DzProperty[]): void;
    getRegionPropertiesRecurse(region: DzGeometryRegion, propList: DzProperty[]): void;
    isAtDefaultValue(prop: DzProperty): boolean;
    isDFormModProperty(prop: DzProperty): DzProperty;
    isLegacyJointProperty(prop: DzProperty): DzProperty;
    isLegacyProperty(prop: DzProperty): boolean;
    isModifierProperty(prop: DzProperty): DzProperty;
    isMorphProperty(prop: DzProperty): DzProperty;
    isNodeProperty(prop: DzProperty): DzProperty;
    isTransformProperty(prop: DzProperty): DzProperty;
    setInternalName(prop: DzProperty, name: QString): boolean;
    setMax(prop: DzProperty, max: number): void;
    setMin(prop: DzProperty, min: number): void;
    setMinMax(prop: DzProperty, min: number, max: number): void;
    setPropertyPath(prop: DzProperty, inPath: QString): void;
    decode(src: QMimeSource, propList: DzProperty[]): boolean;
    decode(src: QMimeData, propList: DzProperty[]): void;
    decode(src: QMimeSource, propList: DzProperty[]): boolean;
    decode(src: QMimeData, propList: DzProperty[]): void;
    encode(propList: DzProperty[]): number[];
    addProperty(prop: DzProperty): void;
    propertyValueChanged(): void;
    createEditor(parent: QWidget, option: QStyleOptionViewItem, index: QModelIndex): QWidget;
    getPropertyWgt(node: DzPropertyListNodePtr): DzPropertyWgt;
    isCardMode(): boolean;
    paint(painter: QPainter, option: QStyleOptionViewItem, index: QModelIndex): void;
    setCardMode(onOff: boolean): void;
    setEditorData(editor: QWidget, index: QModelIndex): void;
    sizeHint(option: QStyleOptionViewItem, index: QModelIndex): QSize;
    updateControlOnlySettings(): void;
    updateEditorGeometry(editor: QWidget, option: QStyleOptionViewItem, index: QModelIndex): void;
    addProperty(prop: DzProperty): void;
    clearProperties(): void;
    columnCount(parent: QModelIndex): number;
    data(index: QModelIndex, role: number): QVariant;
    event(eve: QEvent): boolean;
    flags(index: QModelIndex): number;
    getIndexForNode(propNode: DzPropertyListNode): QModelIndex;
    getPropertyNodeForIndex(index: QModelIndex): DzPropertyListNodePtr;
    index(row: number, column: number, parent: QModelIndex): QModelIndex;
    parent(index: QModelIndex): QModelIndex;
    processLabelUpdates(): void;
    processPropUpdates(): void;
    propertyChanged(): void;
    propertyHiddenStateChange(): void;
    propertyLabelChanged(lbl: QString): void;
    removeProp(prop: DzProperty): void;
    rowCount(parent: QModelIndex): number;
    addProperty(prop: DzProperty): void;
    getLabel(): QString;
    getNumProperties(): number;
    getProperties(): DzProperty[];
    isNew(): boolean;
    removeProperty(prop: DzProperty): boolean;
    setLabel(newLabel: QString): void;
    setNew(onOff: boolean): void;
    updateNew(): void;
    addProperty(prop: DzProperty): boolean;
    addPropertyGroup(group: DzPropertyGroup, showHidden: boolean): boolean;
    addPropertyGroupRecurse(root: DzPropertyGroup, showHidden: boolean): boolean;
    addPropertyToGroup(prop: DzProperty, widGroup: DzWidgetGroup): boolean;
    addPropertyTree(tree: DzPropertyGroupTree, showHidden: boolean): boolean;
    centralWidget(): QWidget;
    clear(): void;
    getGroup(name: QString): DzWidgetGroup;
    moveWidgetListGroupToEnd(widgetListGroup: DzWidgetGroup): boolean;
    resetLayout(): void;
    resizeEvent(e: QResizeEvent): void;
    setNewGroupsCollapsed(open: boolean): void;
    deleteProperty(temp: DzProperty): void;
    getArg(i: number): QString;
    getArgType(i: number): any;
    getDirection(): number;
    getNumArgs(): number;
    getNumProperties(): number;
    getNumTokensNeeded(): number;
    getProperty(i: number): DzProperty;
    getPropertyMapToken(i: number): number;
    getStringValue(i: number): QString;
    getType(): any;
    getTypeForToken(i: number): any;
    propertyDestoyed(): void;
    setDirection(i: number): void;
    setProperty(prop: DzProperty, arg: QString, mapArg: QString): void;
    setShouldWriteTokenInShader(onoff: boolean): void;
    setTokenInBuffer(): void;
    shouldWriteTokenInShader(i: number): boolean;
    clicked(): void;
    isDefault(): boolean;
    mousePressEvent(event: QMouseEvent): void;
    paintEvent(e: QPaintEvent): void;
    setIsDefault(onOff: boolean): void;
    aboutToShowOptionsDialog(): void;
    addProperty(prop: DzProperty): DzError;
    clearPropertyList(): void;
    doOptionsDialog(): boolean;
    fastUpdate(): void;
    getFirstProperty(): DzProperty;
    getNumProperties(): number;
    getNumTotalProperties(): number;
    getProperties(): DzPropertyListIterator;
    getPropertyHiddenState(): number;
    getViewItemStyleOptions(): number;
    isFastMode(): boolean;
    isSelected(): boolean;
    isShowingControlOnly(): boolean;
    mouseDoubleClickEvent(e: QMouseEvent): void;
    mousePressEvent(e: QMouseEvent): void;
    propertySelectionChanged(): void;
    removeAllProperties(): void;
    removeDeletedProperty(prop: DzProperty): void;
    resetProperties(allowUndo: boolean): void;
    selectionStateChanged(onOff: boolean): void;
    setFastMode(mode: boolean): void;
    setLevel(level: number): void;
    setPropertyList(list: DzProperty[]): void;
    setSelected(onOff: boolean): void;
    setViewItemStyleOptions(flags: number): void;
    showControlOnly(onOff: boolean): void;
    updateFromList(): void;
    updatePropertyHiddenState(): void;
}

declare class QGLWidget extends QWidget {

    /* Properties */

    /* Methods */
    constructor(context: QGLContext, parent: QWidget, name: string);
    constructor(parent: QWidget, name: string);
    constructor(format: QGLFormat, parent: QWidget, name: string);

    autoBufferSwap(): boolean;
    bindTexture(image: QImage, target: number): number;
    bindTexture(image: QImage, target: number, format: number): number;
    bindTexture(image: QImage, GL_TEXTURE_2D: QMacCompatGLenum): number;
    bindTexture(image: QImage, obj: QMacCompatGLenum, format: QMacCompatGLint): number;
    bindTexture(pixmap: QPixmap, target: number): number;
    bindTexture(pixmap: QPixmap, target: number, format: number): number;
    bindTexture(pixmap: QPixmap, GL_TEXTURE_2D: QMacCompatGLenum): number;
    bindTexture(pixmap: QPixmap, obj: QMacCompatGLenum, format: QMacCompatGLint): number;
    bindTexture(fileName: QString): number;
    bindTexture(image: QImage, target: number): number;
    bindTexture(image: QImage, target: number, format: number): number;
    bindTexture(image: QImage, GL_TEXTURE_2D: QMacCompatGLenum): number;
    bindTexture(image: QImage, obj: QMacCompatGLenum, format: QMacCompatGLint): number;
    bindTexture(pixmap: QPixmap, target: number): number;
    bindTexture(pixmap: QPixmap, target: number, format: number): number;
    bindTexture(pixmap: QPixmap, GL_TEXTURE_2D: QMacCompatGLenum): number;
    bindTexture(pixmap: QPixmap, obj: QMacCompatGLenum, format: QMacCompatGLint): number;
    bindTexture(fileName: QString): number;
    bindTexture(image: QImage, target: number): number;
    bindTexture(image: QImage, target: number, format: number): number;
    bindTexture(image: QImage, GL_TEXTURE_2D: QMacCompatGLenum): number;
    bindTexture(image: QImage, obj: QMacCompatGLenum, format: QMacCompatGLint): number;
    bindTexture(pixmap: QPixmap, target: number): number;
    bindTexture(pixmap: QPixmap, target: number, format: number): number;
    bindTexture(pixmap: QPixmap, GL_TEXTURE_2D: QMacCompatGLenum): number;
    bindTexture(pixmap: QPixmap, obj: QMacCompatGLenum, format: QMacCompatGLint): number;
    bindTexture(fileName: QString): number;
    bindTexture(image: QImage, target: number): number;
    bindTexture(image: QImage, target: number, format: number): number;
    bindTexture(image: QImage, GL_TEXTURE_2D: QMacCompatGLenum): number;
    bindTexture(image: QImage, obj: QMacCompatGLenum, format: QMacCompatGLint): number;
    bindTexture(pixmap: QPixmap, target: number): number;
    bindTexture(pixmap: QPixmap, target: number, format: number): number;
    bindTexture(pixmap: QPixmap, GL_TEXTURE_2D: QMacCompatGLenum): number;
    bindTexture(pixmap: QPixmap, obj: QMacCompatGLenum, format: QMacCompatGLint): number;
    bindTexture(fileName: QString): number;
    bindTexture(image: QImage, target: number): number;
    bindTexture(image: QImage, target: number, format: number): number;
    bindTexture(image: QImage, GL_TEXTURE_2D: QMacCompatGLenum): number;
    bindTexture(image: QImage, obj: QMacCompatGLenum, format: QMacCompatGLint): number;
    bindTexture(pixmap: QPixmap, target: number): number;
    bindTexture(pixmap: QPixmap, target: number, format: number): number;
    bindTexture(pixmap: QPixmap, GL_TEXTURE_2D: QMacCompatGLenum): number;
    bindTexture(pixmap: QPixmap, obj: QMacCompatGLenum, format: QMacCompatGLint): number;
    bindTexture(fileName: QString): number;
    bindTexture(image: QImage, target: number): number;
    bindTexture(image: QImage, target: number, format: number): number;
    bindTexture(image: QImage, GL_TEXTURE_2D: QMacCompatGLenum): number;
    bindTexture(image: QImage, obj: QMacCompatGLenum, format: QMacCompatGLint): number;
    bindTexture(pixmap: QPixmap, target: number): number;
    bindTexture(pixmap: QPixmap, target: number, format: number): number;
    bindTexture(pixmap: QPixmap, GL_TEXTURE_2D: QMacCompatGLenum): number;
    bindTexture(pixmap: QPixmap, obj: QMacCompatGLenum, format: QMacCompatGLint): number;
    bindTexture(fileName: QString): number;
    bindTexture(image: QImage, target: number): number;
    bindTexture(image: QImage, target: number, format: number): number;
    bindTexture(image: QImage, GL_TEXTURE_2D: QMacCompatGLenum): number;
    bindTexture(image: QImage, obj: QMacCompatGLenum, format: QMacCompatGLint): number;
    bindTexture(pixmap: QPixmap, target: number): number;
    bindTexture(pixmap: QPixmap, target: number, format: number): number;
    bindTexture(pixmap: QPixmap, GL_TEXTURE_2D: QMacCompatGLenum): number;
    bindTexture(pixmap: QPixmap, obj: QMacCompatGLenum, format: QMacCompatGLint): number;
    bindTexture(fileName: QString): number;
    bindTexture(image: QImage, target: number): number;
    bindTexture(image: QImage, target: number, format: number): number;
    bindTexture(image: QImage, GL_TEXTURE_2D: QMacCompatGLenum): number;
    bindTexture(image: QImage, obj: QMacCompatGLenum, format: QMacCompatGLint): number;
    bindTexture(pixmap: QPixmap, target: number): number;
    bindTexture(pixmap: QPixmap, target: number, format: number): number;
    bindTexture(pixmap: QPixmap, GL_TEXTURE_2D: QMacCompatGLenum): number;
    bindTexture(pixmap: QPixmap, obj: QMacCompatGLenum, format: QMacCompatGLint): number;
    bindTexture(fileName: QString): number;
    bindTexture(image: QImage, target: number): number;
    bindTexture(image: QImage, target: number, format: number): number;
    bindTexture(image: QImage, GL_TEXTURE_2D: QMacCompatGLenum): number;
    bindTexture(image: QImage, obj: QMacCompatGLenum, format: QMacCompatGLint): number;
    bindTexture(pixmap: QPixmap, target: number): number;
    bindTexture(pixmap: QPixmap, target: number, format: number): number;
    bindTexture(pixmap: QPixmap, GL_TEXTURE_2D: QMacCompatGLenum): number;
    bindTexture(pixmap: QPixmap, obj: QMacCompatGLenum, format: QMacCompatGLint): number;
    bindTexture(fileName: QString): number;
    colormap(): any;
    context(): any;
    convertToGLFormat(img: QImage): QImage;
    deleteTexture(tx_id: number): void;
    deleteTexture(tx_id: QMacCompatGLuint): void;
    deleteTexture(tx_id: number): void;
    deleteTexture(tx_id: QMacCompatGLuint): void;
    doneCurrent(): void;
    doubleBuffer(): boolean;
    drawTexture(point: QPointF, textureId: number, textureTarget: number): void;
    drawTexture(point: QPointF, textureId: QMacCompatGLuint, textureTarget: QMacCompatGLenum): void;
    drawTexture(target: QRectF, textureId: number, textureTarget: number): void;
    drawTexture(target: QRectF, textureId: QMacCompatGLuint, textureTarget: QMacCompatGLenum): void;
    drawTexture(point: QPointF, textureId: number, textureTarget: number): void;
    drawTexture(point: QPointF, textureId: QMacCompatGLuint, textureTarget: QMacCompatGLenum): void;
    drawTexture(target: QRectF, textureId: number, textureTarget: number): void;
    drawTexture(target: QRectF, textureId: QMacCompatGLuint, textureTarget: QMacCompatGLenum): void;
    drawTexture(point: QPointF, textureId: number, textureTarget: number): void;
    drawTexture(point: QPointF, textureId: QMacCompatGLuint, textureTarget: QMacCompatGLenum): void;
    drawTexture(target: QRectF, textureId: number, textureTarget: number): void;
    drawTexture(target: QRectF, textureId: QMacCompatGLuint, textureTarget: QMacCompatGLenum): void;
    drawTexture(point: QPointF, textureId: number, textureTarget: number): void;
    drawTexture(point: QPointF, textureId: QMacCompatGLuint, textureTarget: QMacCompatGLenum): void;
    drawTexture(target: QRectF, textureId: number, textureTarget: number): void;
    drawTexture(target: QRectF, textureId: QMacCompatGLuint, textureTarget: QMacCompatGLenum): void;
    event(obj: QEvent): boolean;
    //fontDisplayListBase(fnt: QFont, listBase: number, ###: \/\/): number;
    format(): QGLFormat;
    glDraw(): void;
    glInit(): void;
    grabFrameBuffer(withAlpha: boolean): QImage;
    initializeGL(): void;
    initializeOverlayGL(): void;
    isSharing(): boolean;
    isValid(): boolean;
    makeCurrent(): void;
    makeOverlayCurrent(): void;
    overlayContext(): any;
    paintEvent(obj: QPaintEvent): void;
    paintGL(): void;
    paintOverlayGL(): void;
    qglClearColor(c: QColor): void;
    qglColor(c: QColor): void;
    renderPixmap(w: number, h: number, useContext: boolean): QPixmap;
    renderText(x: number, y: number, z: number, str: QString): void;
    renderText(x: number, y: number, str: QString): void;
    renderText(x: number, y: number, z: number, str: QString): void;
    renderText(x: number, y: number, str: QString): void;
    resizeEvent(obj: QResizeEvent): void;
    resizeGL(w: number, h: number): void;
    resizeOverlayGL(w: number, h: number): void;
    setAutoBufferSwap(on: boolean): void;
    setColormap(map: QGLColormap): void;
    setContext(context: QGLContext, shareContext: QGLContext): void;
    setFormat(format: QGLFormat): void;
    setMouseTracking(enable: boolean): void;
    swapBuffers(): void;
    updateGL(): void;
    updateOverlayGL(): void;
}

declare class DzCamera extends DzNode {

    /* Properties */

    /* Methods */
    accFrustum(left: number, right: number, bottom: number): void;
    accPerspective(fovy: number, aspect: number): void;
    aimAt(pos: DzVec3): void;
    aspectRatioChanged(): void;
    calcLocalBoundingBox(): DzBox3;
    draw(style: DzDrawStyle): void;
    focalDistanceChanged(range: DzTimeRange): void;
    focalLengthChanged(range: DzTimeRange): void;
    frame(box: DzBox3, aspect: number): void;
    getAspectRatio(): number;
    getFarClippingPlane(): number;
    getFieldOfView(): number;
    getFocalDistance(): number;
    getFocalLength(): number;
    getFocalPoint(): DzVec3;
    getHeadlight(): DzLight;
    getIcon(): QIcon;
    getNearClippingPlane(): number;
    getPixmap(state: number): QPixmap;
    isViewCamera(): boolean;
    projectionChanged(): void;
    reset(): void;
    setAspectRatio(aspect: number): void;
    setFocalDistance(dist: number): void;
    setFocalLength(dist: number): void;
    setGL(width: number, height: number, view: QRect, pass: number, totalPasses: number): void;
    setProjection(settings: DzRenderSettings, width: number, height: number): void;
    setRenderGlobals(settings: DzRenderSettings): void;
}

declare class QCoreApplication extends QObject {

    /* Properties */

    /* Methods */
    aboutToQuit(): void;
    addLibraryPath(obj: QString): void;
    applicationDirPath(): QString;
    applicationFilePath(): QString;
    applicationName(): QString;
    applicationPid(): number;
    applicationVersion(): QString;
    //argc(): QT_DEPRECATED;
    arguments(): String[];
    //argv(): QT_DEPRECATED;
    closingDown(): boolean;
    compressEvent(event: QEvent, receiver: QObject, postEventList: QPostEvent[]): boolean;
    enter_loop(): any;
    event(obj: QEvent): boolean;
    exec(): number;
    exit(retcode: number): void;
    exit_loop(): any;
    filterEvent(message: void, result: number): boolean;
    flush(): void;
    hasPendingEvents(): boolean;
    init(): void;
    installTranslator(messageFile: QTranslator): void;
    libraryPaths(): String[];
    //loopLevel(): any;
    notify(obj: QObject, event: QEvent): boolean;
    notifyInternal(receiver: QObject, event: QEvent): boolean;
    organizationDomain(): QString;
    organizationName(): QString;
    postEvent(receiver: QObject, event: QEvent, priority?: number): void;
    processEvents(flags: number, maxtime?: number): void;
    qAppName(): any;
    qt_sendSpontaneousEvent(obj: QObject, event: QEvent): any;
    quit(): void;
    removeLibraryPath(obj: QString): void;
    removePostedEvents(receiver: QObject, eventType?: number): void;
    removeTranslator(messageFile: QTranslator): void;
    sendEvent(receiver: QObject, event: QEvent): boolean;
    sendPostedEvents(): void;
    sendPostedEvents(receiver: QObject, event_type: number): void;
    sendPostedEvents(): void;
    sendPostedEvents(receiver: QObject, event_type: number): void;
    sendSpontaneousEvent(receiver: QObject, event: QEvent): boolean;
    setApplicationName(application: QString): void;
    setApplicationVersion(version: QString): void;
    setAttribute(attribute: number, on: boolean): void;
    setEventFilter(filter: any): any;
    setLibraryPaths(obj: String[]): void;
    setOrganizationDomain(orgDomain: QString): void;
    setOrganizationName(orgName: QString): void;
    startingUp(): boolean;
    testAttribute(attribute: number): boolean;
    translate(context: string): QString;
    unixSignal(obj: number): void;
    watchUnixSignal(signal: number, watch: boolean): void;
    winEventFilter(message: any, result: number): boolean;
}

declare class Q3Frame extends QFrame {

    /* Properties */

    /* Methods */
    contentsRect(): QRect;
    drawContents(obj: QPainter): void;
    frameChanged(): void;
    resizeEvent(obj: QResizeEvent): void;
    setMargin(obj: number): void;
}

declare class Q3TextStream extends QObject {

    /* Properties */

    /* Methods */
    atEnd(): boolean;
    //codec(): QTextCodec;
    //device(): QIODevice;
    //eat_ws(): QChar;
    eof(): boolean;
    fill(obj: number): number;
    fill(): number;
    fill(obj: number): number;
    fill(): number;
    flags(f: number): number;
    flags(): number;
    flags(f: number): number;
    flags(): number;
    init(): void;
    input_bin(): number;
    input_dec(): number;
    input_double(): number;
    input_hex(): number;
    input_int(): number;
    input_oct(): number;
    //output_int(obj: number, obj: number, obj: boolean): Q3TextStream;
    precision(obj: number): number;
    precision(): number;
    precision(obj: number): number;
    precision(): number;
    read(): QString;
    readLine(): QString;
    readRawBytes(obj: string, len: number): Q3TextStream;
    reset(): void;
    //setCodec(obj: QTextCodec): void;
    //setDevice(obj: QIODevice): void;
    setEncoding(obj: any): void;
    setf(bits: number): number;
    setf(bits: number, mask: number): number;
    setf(bits: number): number;
    setf(bits: number, mask: number): number;
    skipWhiteSpace(): void;
    //ts_getbuf(obj: QChar, obj: number): number;
    //ts_getc(): QChar;
    //ts_getline(obj: QChar): number;
    //ts_isdigit(obj: QChar): boolean;
    //ts_isspace(obj: QChar): boolean;
    //ts_putc(obj: QChar): void;
    //ts_putc(obj: number): void;
    //ts_putc(obj: QChar): void;
    //ts_putc(obj: number): void;
    //ts_ungetc(obj: QChar): void;
    unsetDevice(): void;
    unsetf(bits: number): number;
    width(obj: number): number;
    width(): number;
    width(obj: number): number;
    width(): number;
    //writeBlock(p: QChar, len: number): Q3TextStream;
    //writeBlock(p: string, len: number): Q3TextStream;
    //writeBlock(p: QChar, len: number): Q3TextStream;
    //writeBlock(p: string, len: number): Q3TextStream;
    writeRawBytes(obj: string, len: number): Q3TextStream;
}

