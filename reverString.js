function reverseThis(strTest){

    
    function reverse(s){
        return s.split("").reverse().join("");
    }
    function check(str){
        var checker = [];
        var addTrigger = 0;
        var checkpranCount = 0;
        var result;
    for(var i = 0; i <= str.length-1; i++){
        if(str[i]=="("){
        addTrigger = 1;
        checkpranCount++;
        }
        if(str[i]==")"){
        addTrigger = 0;
        break;
        }
        if(checkpranCount > 1){
            checker =[];
            checkpranCount--;
        }
        if(addTrigger==1){
            checker.push(str[i+1]);
        }
    }
    checker.pop();
    checker = checker.join("");
    result = reverse(checker);
    str = str.replace("("+checker+")",result);
    return str;
}
var theResult = strTest;
var pranCount = 0;
for(var i = 0; i <= strTest.length-1; i++){
    if(strTest[i]=="("){
    pranCount++;
    }
}
while(pranCount>=1){
    theResult = check(theResult);
    pranCount--;
}
return theResult;
}


console.log(reverseThis("The ((quick) brown fox) blah blach"));