var leftValue=document.getElementById("left-value");
var leftUnit=document.getElementById("left-unit");
var rightValue=document.getElementById("right-value");
var rightUnit=document.getElementById("right-unit");

var areSameUnit=function(unit1,unit2){
    for (key in unitArray){
        if (unitArray[key][unit1]!=undefined){
            break;
        };
    }
    if (unitArray[key][unit2]!=undefined){
        return key;
    }else{
        return false;
    }
}

document.getElementById("calc").addEventListener("click",function(){
    myUnit=areSameUnit(leftUnit.value,rightUnit.value)
    noteTarget=document.getElementById("note")
    if (myUnit){
        if (leftValue.value!=""){
            rightValue.value=(leftValue.value*unitArray[myUnit][leftUnit.value]/unitArray[myUnit][rightUnit.value]).toFixed(4);
        }else{
            leftValue.value=(rightValue.value*unitArray[myUnit][rightUnit.value]/unitArray[myUnit][leftUnit.value]).toFixed(4);
        };
        noteTarget.innerHTML=myUnit;
    }else{
        noteTarget.innerHTML="Units are different,undefined,or blank."
    }});

document.getElementById("reset").addEventListener("click",function(){
    leftUnit.value="";
    leftValue.value="";
    rightUnit.value="";
    rightValue.value="";
});