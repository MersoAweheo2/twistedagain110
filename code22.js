gdjs.Level16Code = {};
gdjs.Level16Code.GDportalVersusObjects1= [];
gdjs.Level16Code.GDportalVersusObjects2= [];
gdjs.Level16Code.GDPlayer1ScoreObjects1= [];
gdjs.Level16Code.GDPlayer1ScoreObjects2= [];
gdjs.Level16Code.GDPlayer2ScoreObjects1= [];
gdjs.Level16Code.GDPlayer2ScoreObjects2= [];
gdjs.Level16Code.GDbackObjects1= [];
gdjs.Level16Code.GDbackObjects2= [];

gdjs.Level16Code.conditionTrue_0 = {val:false};
gdjs.Level16Code.condition0IsTrue_0 = {val:false};
gdjs.Level16Code.condition1IsTrue_0 = {val:false};
gdjs.Level16Code.condition2IsTrue_0 = {val:false};


gdjs.Level16Code.eventsList0xb4320 = function(runtimeScene) {

{


gdjs.Level16Code.condition0IsTrue_0.val = false;
gdjs.Level16Code.condition1IsTrue_0.val = false;
{
gdjs.Level16Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 1;
}if ( gdjs.Level16Code.condition0IsTrue_0.val ) {
{
gdjs.Level16Code.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}}
if (gdjs.Level16Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Intermission1", false);
}}

}


{


gdjs.Level16Code.condition0IsTrue_0.val = false;
gdjs.Level16Code.condition1IsTrue_0.val = false;
{
gdjs.Level16Code.condition0IsTrue_0.val = gdjs.evtTools.common.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(7)) == 2;
}if ( gdjs.Level16Code.condition0IsTrue_0.val ) {
{
gdjs.Level16Code.condition1IsTrue_0.val = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
}}
if (gdjs.Level16Code.condition1IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "EndMultiplayer", false);
}}

}


}; //End of gdjs.Level16Code.eventsList0xb4320


gdjs.Level16Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level16Code.GDportalVersusObjects1.length = 0;
gdjs.Level16Code.GDportalVersusObjects2.length = 0;
gdjs.Level16Code.GDPlayer1ScoreObjects1.length = 0;
gdjs.Level16Code.GDPlayer1ScoreObjects2.length = 0;
gdjs.Level16Code.GDPlayer2ScoreObjects1.length = 0;
gdjs.Level16Code.GDPlayer2ScoreObjects2.length = 0;
gdjs.Level16Code.GDbackObjects1.length = 0;
gdjs.Level16Code.GDbackObjects2.length = 0;

gdjs.Level16Code.eventsList0xb4320(runtimeScene);
return;

}
gdjs['Level16Code'] = gdjs.Level16Code;
