var unitArray ={
    length:{mm:0.001,m:1,km:1000,yard:0.9144,yd:0.9144,ft:0.3048,in:0.0254},
    weight:{mg:0.001,g:1,kg:1000,t:1000000,lb:453.6}
};

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
            rightValue.value=leftValue.value*unitArray[myUnit][leftUnit.value]/unitArray[myUnit][rightUnit.value];
        }else{
            leftValue.value=rightValue.value*unitArray[myUnit][rightUnit.value]/unitArray[myUnit][leftUnit.value];
        };
        noteTarget.innerHTML=myUnit;
    }else{
        noteTarget.innerHTML="Units are different or blank."
    }});