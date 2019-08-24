gdjs.CreditScreenCode = {};
gdjs.CreditScreenCode.GDportalVersusObjects1= [];
gdjs.CreditScreenCode.GDportalVersusObjects2= [];
gdjs.CreditScreenCode.GDPlayer1ScoreObjects1= [];
gdjs.CreditScreenCode.GDPlayer1ScoreObjects2= [];
gdjs.CreditScreenCode.GDPlayer2ScoreObjects1= [];
gdjs.CreditScreenCode.GDPlayer2ScoreObjects2= [];
gdjs.CreditScreenCode.GDbackgroundObjects1= [];
gdjs.CreditScreenCode.GDbackgroundObjects2= [];
gdjs.CreditScreenCode.GDresumeObjects1= [];
gdjs.CreditScreenCode.GDresumeObjects2= [];
gdjs.CreditScreenCode.GDlevelObjects1= [];
gdjs.CreditScreenCode.GDlevelObjects2= [];
gdjs.CreditScreenCode.GDPause1Objects1= [];
gdjs.CreditScreenCode.GDPause1Objects2= [];
gdjs.CreditScreenCode.GDPause2Objects1= [];
gdjs.CreditScreenCode.GDPause2Objects2= [];

gdjs.CreditScreenCode.conditionTrue_0 = {val:false};
gdjs.CreditScreenCode.condition0IsTrue_0 = {val:false};
gdjs.CreditScreenCode.condition1IsTrue_0 = {val:false};
gdjs.CreditScreenCode.condition2IsTrue_0 = {val:false};
gdjs.CreditScreenCode.condition3IsTrue_0 = {val:false};
gdjs.CreditScreenCode.conditionTrue_1 = {val:false};
gdjs.CreditScreenCode.condition0IsTrue_1 = {val:false};
gdjs.CreditScreenCode.condition1IsTrue_1 = {val:false};
gdjs.CreditScreenCode.condition2IsTrue_1 = {val:false};
gdjs.CreditScreenCode.condition3IsTrue_1 = {val:false};


gdjs.CreditScreenCode.mapOfGDgdjs_46CreditScreenCode_46GDresumeObjects1Objects = Hashtable.newFrom({"resume": gdjs.CreditScreenCode.GDresumeObjects1});gdjs.CreditScreenCode.eventsList0xb4320 = function(runtimeScene) {

{



}


{


gdjs.CreditScreenCode.condition0IsTrue_0.val = false;
{
gdjs.CreditScreenCode.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if (gdjs.CreditScreenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.input.touchSimulateMouse(runtimeScene, true);
}}

}


{



}


{


gdjs.CreditScreenCode.condition0IsTrue_0.val = false;
{
gdjs.CreditScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "F10");
}if (gdjs.CreditScreenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, false, true);
}}

}


{


gdjs.CreditScreenCode.condition0IsTrue_0.val = false;
{
gdjs.CreditScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "F11");
}if (gdjs.CreditScreenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}}

}


{


gdjs.CreditScreenCode.condition0IsTrue_0.val = false;
{
gdjs.CreditScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "F12");
}if (gdjs.CreditScreenCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{

gdjs.CreditScreenCode.GDresumeObjects1.createFrom(runtimeScene.getObjects("resume"));

gdjs.CreditScreenCode.condition0IsTrue_0.val = false;
gdjs.CreditScreenCode.condition1IsTrue_0.val = false;
gdjs.CreditScreenCode.condition2IsTrue_0.val = false;
{
gdjs.CreditScreenCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.CreditScreenCode.condition0IsTrue_0.val ) {
{
gdjs.CreditScreenCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.CreditScreenCode.mapOfGDgdjs_46CreditScreenCode_46GDresumeObjects1Objects, runtimeScene, true, false);
}if ( gdjs.CreditScreenCode.condition1IsTrue_0.val ) {
{
{gdjs.CreditScreenCode.conditionTrue_1 = gdjs.CreditScreenCode.condition2IsTrue_0;
gdjs.CreditScreenCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8213156);
}
}}
}
if (gdjs.CreditScreenCode.condition2IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "TitleScreen", false);
}}

}


}; //End of gdjs.CreditScreenCode.eventsList0xb4320


gdjs.CreditScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.CreditScreenCode.GDportalVersusObjects1.length = 0;
gdjs.CreditScreenCode.GDportalVersusObjects2.length = 0;
gdjs.CreditScreenCode.GDPlayer1ScoreObjects1.length = 0;
gdjs.CreditScreenCode.GDPlayer1ScoreObjects2.length = 0;
gdjs.CreditScreenCode.GDPlayer2ScoreObjects1.length = 0;
gdjs.CreditScreenCode.GDPlayer2ScoreObjects2.length = 0;
gdjs.CreditScreenCode.GDbackgroundObjects1.length = 0;
gdjs.CreditScreenCode.GDbackgroundObjects2.length = 0;
gdjs.CreditScreenCode.GDresumeObjects1.length = 0;
gdjs.CreditScreenCode.GDresumeObjects2.length = 0;
gdjs.CreditScreenCode.GDlevelObjects1.length = 0;
gdjs.CreditScreenCode.GDlevelObjects2.length = 0;
gdjs.CreditScreenCode.GDPause1Objects1.length = 0;
gdjs.CreditScreenCode.GDPause1Objects2.length = 0;
gdjs.CreditScreenCode.GDPause2Objects1.length = 0;
gdjs.CreditScreenCode.GDPause2Objects2.length = 0;

gdjs.CreditScreenCode.eventsList0xb4320(runtimeScene);
return;

}
gdjs['CreditScreenCode'] = gdjs.CreditScreenCode;
