var leftValue=document.getElementById("left-value");
var leftUnit=document.getElementById("left-unit");
var rightValue=document.getElementById("right-value");
var rightUnit=document.getElementById("right-unit");
var noteTarget=document.getElementById("note");

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
    Left=String(leftUnit.value).toLowerCase();
    Right=String(rightUnit.value).toLowerCase();
    myUnit=areSameUnit(Left,Right);
    if (myUnit==="temperature"){
        if (leftValue.value!=""){
            rightValue.value=(((leftValue.value-unitArray[myUnit][Left]["b"])/unitArray[myUnit][Left]["a"])*unitArray[myUnit][Right]["a"]+unitArray[myUnit][Right]["b"]).toFixed(4);
        }else{
            leftValue.value=(((rightValue.value-unitArray[myUnit][Right]["b"])/unitArray[myUnit][Right]["a"])*unitArray[myUnit][Left]["a"]+unitArray[myUnit][Left]["b"]).toFixed(4);
        };
        noteTarget.innerHTML=myUnit;
    }else if (myUnit){
        if (leftValue.value!=""){
            rightValue.value=(leftValue.value*unitArray[myUnit][Left]/unitArray[myUnit][Right]).toFixed(4);
        }else{
            leftValue.value=(rightValue.value*unitArray[myUnit][Right]/unitArray[myUnit][Left]).toFixed(4);
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
    noteTarget.innerHTML="<br>";
});