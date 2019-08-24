gdjs.SplashscreenCode = {};
gdjs.SplashscreenCode.GDportalVersusObjects1= [];
gdjs.SplashscreenCode.GDportalVersusObjects2= [];
gdjs.SplashscreenCode.GDPlayer1ScoreObjects1= [];
gdjs.SplashscreenCode.GDPlayer1ScoreObjects2= [];
gdjs.SplashscreenCode.GDPlayer2ScoreObjects1= [];
gdjs.SplashscreenCode.GDPlayer2ScoreObjects2= [];
gdjs.SplashscreenCode.GDcontrolsObjects1= [];
gdjs.SplashscreenCode.GDcontrolsObjects2= [];
gdjs.SplashscreenCode.GDNewObjectObjects1= [];
gdjs.SplashscreenCode.GDNewObjectObjects2= [];
gdjs.SplashscreenCode.GDCopyOfcontrolsObjects1= [];
gdjs.SplashscreenCode.GDCopyOfcontrolsObjects2= [];
gdjs.SplashscreenCode.GDCopyOfCopyOfcontrolsObjects1= [];
gdjs.SplashscreenCode.GDCopyOfCopyOfcontrolsObjects2= [];

gdjs.SplashscreenCode.conditionTrue_0 = {val:false};
gdjs.SplashscreenCode.condition0IsTrue_0 = {val:false};
gdjs.SplashscreenCode.condition1IsTrue_0 = {val:false};
gdjs.SplashscreenCode.condition2IsTrue_0 = {val:false};
gdjs.SplashscreenCode.condition3IsTrue_0 = {val:false};
gdjs.SplashscreenCode.condition4IsTrue_0 = {val:false};
gdjs.SplashscreenCode.conditionTrue_1 = {val:false};
gdjs.SplashscreenCode.condition0IsTrue_1 = {val:false};
gdjs.SplashscreenCode.condition1IsTrue_1 = {val:false};
gdjs.SplashscreenCode.condition2IsTrue_1 = {val:false};
gdjs.SplashscreenCode.condition3IsTrue_1 = {val:false};
gdjs.SplashscreenCode.condition4IsTrue_1 = {val:false};


gdjs.SplashscreenCode.mapOfGDgdjs_46SplashscreenCode_46GDCopyOfcontrolsObjects1Objects = Hashtable.newFrom({"CopyOfcontrols": gdjs.SplashscreenCode.GDCopyOfcontrolsObjects1});gdjs.SplashscreenCode.eventsList0xb4320 = function(runtimeScene) {

{



}


{


gdjs.SplashscreenCode.condition0IsTrue_0.val = false;
{
gdjs.SplashscreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "F10");
}if (gdjs.SplashscreenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, false, true);
}}

}


{


gdjs.SplashscreenCode.condition0IsTrue_0.val = false;
{
gdjs.SplashscreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "F11");
}if (gdjs.SplashscreenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}}

}


{


gdjs.SplashscreenCode.condition0IsTrue_0.val = false;
{
gdjs.SplashscreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "F12");
}if (gdjs.SplashscreenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{


gdjs.SplashscreenCode.condition0IsTrue_0.val = false;
{
gdjs.SplashscreenCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.SplashscreenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.unpauseTimer(runtimeScene, "splashWait");
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "splashWait");
}}

}


{


gdjs.SplashscreenCode.condition0IsTrue_0.val = false;
{
gdjs.SplashscreenCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.timerElapsedTime(runtimeScene, 3, "splashWait");
}if (gdjs.SplashscreenCode.condition0IsTrue_0.val) {
gdjs.SplashscreenCode.GDNewObjectObjects1.createFrom(runtimeScene.getObjects("NewObject"));
{for(var i = 0, len = gdjs.SplashscreenCode.GDNewObjectObjects1.length ;i < len;++i) {
    gdjs.SplashscreenCode.GDNewObjectObjects1[i].setOpacity(gdjs.SplashscreenCode.GDNewObjectObjects1[i].getOpacity() - (10));
}
}}

}


{


gdjs.SplashscreenCode.condition0IsTrue_0.val = false;
gdjs.SplashscreenCode.condition1IsTrue_0.val = false;
gdjs.SplashscreenCode.condition2IsTrue_0.val = false;
{
gdjs.SplashscreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "z");
}if ( gdjs.SplashscreenCode.condition0IsTrue_0.val ) {
{
gdjs.SplashscreenCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) == 1;
}if ( gdjs.SplashscreenCode.condition1IsTrue_0.val ) {
{
{gdjs.SplashscreenCode.conditionTrue_1 = gdjs.SplashscreenCode.condition2IsTrue_0;
gdjs.SplashscreenCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8870932);
}
}}
}
if (gdjs.SplashscreenCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "TitleScreen", false);
}}

}


{


gdjs.SplashscreenCode.condition0IsTrue_0.val = false;
gdjs.SplashscreenCode.condition1IsTrue_0.val = false;
gdjs.SplashscreenCode.condition2IsTrue_0.val = false;
{
gdjs.SplashscreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "z");
}if ( gdjs.SplashscreenCode.condition0IsTrue_0.val ) {
{
gdjs.SplashscreenCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) == 3;
}if ( gdjs.SplashscreenCode.condition1IsTrue_0.val ) {
{
{gdjs.SplashscreenCode.conditionTrue_1 = gdjs.SplashscreenCode.condition2IsTrue_0;
gdjs.SplashscreenCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8871676);
}
}}
}
if (gdjs.SplashscreenCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "TitleScreen", false);
}}

}


{

gdjs.SplashscreenCode.GDCopyOfcontrolsObjects1.createFrom(runtimeScene.getObjects("CopyOfcontrols"));

gdjs.SplashscreenCode.condition0IsTrue_0.val = false;
gdjs.SplashscreenCode.condition1IsTrue_0.val = false;
gdjs.SplashscreenCode.condition2IsTrue_0.val = false;
gdjs.SplashscreenCode.condition3IsTrue_0.val = false;
{
gdjs.SplashscreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.SplashscreenCode.condition0IsTrue_0.val ) {
{
gdjs.SplashscreenCode.condition1IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) == 3;
}if ( gdjs.SplashscreenCode.condition1IsTrue_0.val ) {
{
gdjs.SplashscreenCode.condition2IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.SplashscreenCode.mapOfGDgdjs_46SplashscreenCode_46GDCopyOfcontrolsObjects1Objects, runtimeScene, true, false);
}if ( gdjs.SplashscreenCode.condition2IsTrue_0.val ) {
{
{gdjs.SplashscreenCode.conditionTrue_1 = gdjs.SplashscreenCode.condition3IsTrue_0;
gdjs.SplashscreenCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8872692);
}
}}
}
}
if (gdjs.SplashscreenCode.condition3IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "TitleScreen", false);
}{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(4);
}{runtimeScene.getGame().getVariables().get("gamePlatformChange").setNumber(1);
}}

}


{


gdjs.SplashscreenCode.condition0IsTrue_0.val = false;
gdjs.SplashscreenCode.condition1IsTrue_0.val = false;
gdjs.SplashscreenCode.condition2IsTrue_0.val = false;
{
gdjs.SplashscreenCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) == 4;
}if ( gdjs.SplashscreenCode.condition0IsTrue_0.val ) {
{
gdjs.SplashscreenCode.condition1IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.SplashscreenCode.condition1IsTrue_0.val ) {
{
{gdjs.SplashscreenCode.conditionTrue_1 = gdjs.SplashscreenCode.condition2IsTrue_0;
gdjs.SplashscreenCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8873804);
}
}}
}
if (gdjs.SplashscreenCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "TitleScreen", false);
}}

}


{


gdjs.SplashscreenCode.condition0IsTrue_0.val = false;
{
gdjs.SplashscreenCode.condition0IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}if (gdjs.SplashscreenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playMusic(runtimeScene, "thebrightworld.ogg", true, 100, 1);
}{gdjs.evtTools.sound.setGlobalVolume(runtimeScene, 100);
}}

}


{


gdjs.SplashscreenCode.condition0IsTrue_0.val = false;
{
gdjs.SplashscreenCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) == 1;
}if (gdjs.SplashscreenCode.condition0IsTrue_0.val) {
gdjs.SplashscreenCode.GDCopyOfCopyOfcontrolsObjects1.createFrom(runtimeScene.getObjects("CopyOfCopyOfcontrols"));
gdjs.SplashscreenCode.GDCopyOfcontrolsObjects1.createFrom(runtimeScene.getObjects("CopyOfcontrols"));
{for(var i = 0, len = gdjs.SplashscreenCode.GDCopyOfcontrolsObjects1.length ;i < len;++i) {
    gdjs.SplashscreenCode.GDCopyOfcontrolsObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.SplashscreenCode.GDCopyOfCopyOfcontrolsObjects1.length ;i < len;++i) {
    gdjs.SplashscreenCode.GDCopyOfCopyOfcontrolsObjects1[i].hide();
}
}}

}


{


gdjs.SplashscreenCode.condition0IsTrue_0.val = false;
{
gdjs.SplashscreenCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) == 3;
}if (gdjs.SplashscreenCode.condition0IsTrue_0.val) {
gdjs.SplashscreenCode.GDCopyOfCopyOfcontrolsObjects1.createFrom(runtimeScene.getObjects("CopyOfCopyOfcontrols"));
gdjs.SplashscreenCode.GDcontrolsObjects1.createFrom(runtimeScene.getObjects("controls"));
{for(var i = 0, len = gdjs.SplashscreenCode.GDCopyOfCopyOfcontrolsObjects1.length ;i < len;++i) {
    gdjs.SplashscreenCode.GDCopyOfCopyOfcontrolsObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.SplashscreenCode.GDcontrolsObjects1.length ;i < len;++i) {
    gdjs.SplashscreenCode.GDcontrolsObjects1[i].hide();
}
}}

}


{


gdjs.SplashscreenCode.condition0IsTrue_0.val = false;
{
gdjs.SplashscreenCode.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(6)) == 4;
}if (gdjs.SplashscreenCode.condition0IsTrue_0.val) {
gdjs.SplashscreenCode.GDCopyOfcontrolsObjects1.createFrom(runtimeScene.getObjects("CopyOfcontrols"));
gdjs.SplashscreenCode.GDcontrolsObjects1.createFrom(runtimeScene.getObjects("controls"));
{for(var i = 0, len = gdjs.SplashscreenCode.GDCopyOfcontrolsObjects1.length ;i < len;++i) {
    gdjs.SplashscreenCode.GDCopyOfcontrolsObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.SplashscreenCode.GDcontrolsObjects1.length ;i < len;++i) {
    gdjs.SplashscreenCode.GDcontrolsObjects1[i].hide();
}
}}

}


}; //End of gdjs.SplashscreenCode.eventsList0xb4320


gdjs.SplashscreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.SplashscreenCode.GDportalVersusObjects1.length = 0;
gdjs.SplashscreenCode.GDportalVersusObjects2.length = 0;
gdjs.SplashscreenCode.GDPlayer1ScoreObjects1.length = 0;
gdjs.SplashscreenCode.GDPlayer1ScoreObjects2.length = 0;
gdjs.SplashscreenCode.GDPlayer2ScoreObjects1.length = 0;
gdjs.SplashscreenCode.GDPlayer2ScoreObjects2.length = 0;
gdjs.SplashscreenCode.GDcontrolsObjects1.length = 0;
gdjs.SplashscreenCode.GDcontrolsObjects2.length = 0;
gdjs.SplashscreenCode.GDNewObjectObjects1.length = 0;
gdjs.SplashscreenCode.GDNewObjectObjects2.length = 0;
gdjs.SplashscreenCode.GDCopyOfcontrolsObjects1.length = 0;
gdjs.SplashscreenCode.GDCopyOfcontrolsObjects2.length = 0;
gdjs.SplashscreenCode.GDCopyOfCopyOfcontrolsObjects1.length = 0;
gdjs.SplashscreenCode.GDCopyOfCopyOfcontrolsObjects2.length = 0;

gdjs.SplashscreenCode.eventsList0xb4320(runtimeScene);
return;

}
gdjs['SplashscreenCode'] = gdjs.SplashscreenCode;
