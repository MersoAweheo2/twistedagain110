gdjs.MultiplayerPreviewCode = {};
gdjs.MultiplayerPreviewCode.GDportalVersusObjects1= [];
gdjs.MultiplayerPreviewCode.GDportalVersusObjects2= [];
gdjs.MultiplayerPreviewCode.GDPlayer1ScoreObjects1= [];
gdjs.MultiplayerPreviewCode.GDPlayer1ScoreObjects2= [];
gdjs.MultiplayerPreviewCode.GDPlayer2ScoreObjects1= [];
gdjs.MultiplayerPreviewCode.GDPlayer2ScoreObjects2= [];
gdjs.MultiplayerPreviewCode.GDbackgroundObjects1= [];
gdjs.MultiplayerPreviewCode.GDbackgroundObjects2= [];
gdjs.MultiplayerPreviewCode.GDresumeObjects1= [];
gdjs.MultiplayerPreviewCode.GDresumeObjects2= [];
gdjs.MultiplayerPreviewCode.GDlevelObjects1= [];
gdjs.MultiplayerPreviewCode.GDlevelObjects2= [];
gdjs.MultiplayerPreviewCode.GDPause1Objects1= [];
gdjs.MultiplayerPreviewCode.GDPause1Objects2= [];
gdjs.MultiplayerPreviewCode.GDPause2Objects1= [];
gdjs.MultiplayerPreviewCode.GDPause2Objects2= [];
gdjs.MultiplayerPreviewCode.GDCopyOfresumeObjects1= [];
gdjs.MultiplayerPreviewCode.GDCopyOfresumeObjects2= [];

gdjs.MultiplayerPreviewCode.conditionTrue_0 = {val:false};
gdjs.MultiplayerPreviewCode.condition0IsTrue_0 = {val:false};
gdjs.MultiplayerPreviewCode.condition1IsTrue_0 = {val:false};
gdjs.MultiplayerPreviewCode.condition2IsTrue_0 = {val:false};
gdjs.MultiplayerPreviewCode.conditionTrue_1 = {val:false};
gdjs.MultiplayerPreviewCode.condition0IsTrue_1 = {val:false};
gdjs.MultiplayerPreviewCode.condition1IsTrue_1 = {val:false};
gdjs.MultiplayerPreviewCode.condition2IsTrue_1 = {val:false};


gdjs.MultiplayerPreviewCode.mapOfGDgdjs_46MultiplayerPreviewCode_46GDresumeObjects1Objects = Hashtable.newFrom({"resume": gdjs.MultiplayerPreviewCode.GDresumeObjects1});gdjs.MultiplayerPreviewCode.eventsList0x876c6c = function(runtimeScene) {

{


gdjs.MultiplayerPreviewCode.condition0IsTrue_0.val = false;
{
{gdjs.MultiplayerPreviewCode.conditionTrue_1 = gdjs.MultiplayerPreviewCode.condition0IsTrue_0;
gdjs.MultiplayerPreviewCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8876084);
}
}if (gdjs.MultiplayerPreviewCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level1", false);
}}

}


}; //End of gdjs.MultiplayerPreviewCode.eventsList0x876c6c
gdjs.MultiplayerPreviewCode.eventsList0x87763c = function(runtimeScene) {

{


gdjs.MultiplayerPreviewCode.condition0IsTrue_0.val = false;
{
{gdjs.MultiplayerPreviewCode.conditionTrue_1 = gdjs.MultiplayerPreviewCode.condition0IsTrue_0;
gdjs.MultiplayerPreviewCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(8875212);
}
}if (gdjs.MultiplayerPreviewCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Delay Your Dreams.wav", 1, true, 100, 1);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(2);
}
{ //Subevents
gdjs.MultiplayerPreviewCode.eventsList0x876c6c(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.MultiplayerPreviewCode.eventsList0x87763c
gdjs.MultiplayerPreviewCode.mapOfGDgdjs_46MultiplayerPreviewCode_46GDCopyOfresumeObjects1Objects = Hashtable.newFrom({"CopyOfresume": gdjs.MultiplayerPreviewCode.GDCopyOfresumeObjects1});gdjs.MultiplayerPreviewCode.eventsList0xb7ce2c = function(runtimeScene) {

{


gdjs.MultiplayerPreviewCode.condition0IsTrue_0.val = false;
{
{gdjs.MultiplayerPreviewCode.conditionTrue_1 = gdjs.MultiplayerPreviewCode.condition0IsTrue_0;
gdjs.MultiplayerPreviewCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(12046836);
}
}if (gdjs.MultiplayerPreviewCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level1", false);
}}

}


}; //End of gdjs.MultiplayerPreviewCode.eventsList0xb7ce2c
gdjs.MultiplayerPreviewCode.eventsList0x8771ac = function(runtimeScene) {

{


gdjs.MultiplayerPreviewCode.condition0IsTrue_0.val = false;
{
{gdjs.MultiplayerPreviewCode.conditionTrue_1 = gdjs.MultiplayerPreviewCode.condition0IsTrue_0;
gdjs.MultiplayerPreviewCode.conditionTrue_1.val = runtimeScene.getOnceTriggers().triggerOnce(12045964);
}
}if (gdjs.MultiplayerPreviewCode.condition0IsTrue_0.val) {
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "Delay Your Dreams.wav", 1, true, 100, 1);
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(2);
}
{ //Subevents
gdjs.MultiplayerPreviewCode.eventsList0xb7ce2c(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.MultiplayerPreviewCode.eventsList0x8771ac
gdjs.MultiplayerPreviewCode.eventsList0xb4320 = function(runtimeScene) {

{



}


{


gdjs.MultiplayerPreviewCode.condition0IsTrue_0.val = false;
{
gdjs.MultiplayerPreviewCode.condition0IsTrue_0.val = gdjs.evtTools.common.logicalNegation(false);
}if (gdjs.MultiplayerPreviewCode.condition0IsTrue_0.val) {
{gdjs.evtTools.input.touchSimulateMouse(runtimeScene, true);
}}

}


{



}


{


gdjs.MultiplayerPreviewCode.condition0IsTrue_0.val = false;
{
gdjs.MultiplayerPreviewCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "F10");
}if (gdjs.MultiplayerPreviewCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, false, true);
}}

}


{


gdjs.MultiplayerPreviewCode.condition0IsTrue_0.val = false;
{
gdjs.MultiplayerPreviewCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "F11");
}if (gdjs.MultiplayerPreviewCode.condition0IsTrue_0.val) {
{gdjs.evtTools.window.setFullScreen(runtimeScene, true, true);
}}

}


{


gdjs.MultiplayerPreviewCode.condition0IsTrue_0.val = false;
{
gdjs.MultiplayerPreviewCode.condition0IsTrue_0.val = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "F12");
}if (gdjs.MultiplayerPreviewCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.stopGame(runtimeScene);
}}

}


{

gdjs.MultiplayerPreviewCode.GDresumeObjects1.createFrom(runtimeScene.getObjects("resume"));

gdjs.MultiplayerPreviewCode.condition0IsTrue_0.val = false;
gdjs.MultiplayerPreviewCode.condition1IsTrue_0.val = false;
{
gdjs.MultiplayerPreviewCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.MultiplayerPreviewCode.condition0IsTrue_0.val ) {
{
gdjs.MultiplayerPreviewCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MultiplayerPreviewCode.mapOfGDgdjs_46MultiplayerPreviewCode_46GDresumeObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.MultiplayerPreviewCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(2);
}{runtimeScene.getGame().getVariables().get("skipless").setNumber(0);
}{runtimeScene.getVariables().get("cred").setNumber(0);
}{runtimeScene.getGame().getVariables().get("player2Score").setNumber(0);
}{runtimeScene.getGame().getVariables().get("player1Score").setNumber(0);
}{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 1);
}
{ //Subevents
gdjs.MultiplayerPreviewCode.eventsList0x87763c(runtimeScene);} //End of subevents
}

}


{

gdjs.MultiplayerPreviewCode.GDCopyOfresumeObjects1.createFrom(runtimeScene.getObjects("CopyOfresume"));

gdjs.MultiplayerPreviewCode.condition0IsTrue_0.val = false;
gdjs.MultiplayerPreviewCode.condition1IsTrue_0.val = false;
{
gdjs.MultiplayerPreviewCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
}if ( gdjs.MultiplayerPreviewCode.condition0IsTrue_0.val ) {
{
gdjs.MultiplayerPreviewCode.condition1IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.MultiplayerPreviewCode.mapOfGDgdjs_46MultiplayerPreviewCode_46GDCopyOfresumeObjects1Objects, runtimeScene, true, false);
}}
if (gdjs.MultiplayerPreviewCode.condition1IsTrue_0.val) {
{runtimeScene.getGame().getVariables().getFromIndex(4).setNumber(0);
}{runtimeScene.getGame().getVariables().getFromIndex(7).setNumber(2);
}{runtimeScene.getGame().getVariables().get("skipless").setNumber(1);
}{runtimeScene.getVariables().get("cred").setNumber(0);
}{runtimeScene.getGame().getVariables().get("player2Score").setNumber(0);
}{runtimeScene.getGame().getVariables().get("player1Score").setNumber(0);
}{gdjs.evtTools.sound.stopSoundOnChannel(runtimeScene, 1);
}
{ //Subevents
gdjs.MultiplayerPreviewCode.eventsList0x8771ac(runtimeScene);} //End of subevents
}

}


}; //End of gdjs.MultiplayerPreviewCode.eventsList0xb4320


gdjs.MultiplayerPreviewCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.MultiplayerPreviewCode.GDportalVersusObjects1.length = 0;
gdjs.MultiplayerPreviewCode.GDportalVersusObjects2.length = 0;
gdjs.MultiplayerPreviewCode.GDPlayer1ScoreObjects1.length = 0;
gdjs.MultiplayerPreviewCode.GDPlayer1ScoreObjects2.length = 0;
gdjs.MultiplayerPreviewCode.GDPlayer2ScoreObjects1.length = 0;
gdjs.MultiplayerPreviewCode.GDPlayer2ScoreObjects2.length = 0;
gdjs.MultiplayerPreviewCode.GDbackgroundObjects1.length = 0;
gdjs.MultiplayerPreviewCode.GDbackgroundObjects2.length = 0;
gdjs.MultiplayerPreviewCode.GDresumeObjects1.length = 0;
gdjs.MultiplayerPreviewCode.GDresumeObjects2.length = 0;
gdjs.MultiplayerPreviewCode.GDlevelObjects1.length = 0;
gdjs.MultiplayerPreviewCode.GDlevelObjects2.length = 0;
gdjs.MultiplayerPreviewCode.GDPause1Objects1.length = 0;
gdjs.MultiplayerPreviewCode.GDPause1Objects2.length = 0;
gdjs.MultiplayerPreviewCode.GDPause2Objects1.length = 0;
gdjs.MultiplayerPreviewCode.GDPause2Objects2.length = 0;
gdjs.MultiplayerPreviewCode.GDCopyOfresumeObjects1.length = 0;
gdjs.MultiplayerPreviewCode.GDCopyOfresumeObjects2.length = 0;

gdjs.MultiplayerPreviewCode.eventsList0xb4320(runtimeScene);
return;

}
gdjs['MultiplayerPreviewCode'] = gdjs.MultiplayerPreviewCode;
