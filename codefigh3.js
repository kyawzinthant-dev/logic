function reverseParentheses(s) {
    var rex = /\(.*\)/;
    function solvePrantheses(str){
        var normal = 0;
        var revValue = 0;
        var startPran = [];
        var endPran = [];
        var strArray = str.split('');
        for(var i = 0 ; i <= str.length-1; i++){
            if(str[i] == "("){
            startPran.push(i);
            }
            else if(str[i]==")"){
                endPran.push(i);
            }
        }
            var startIndex = startPran[startPran.length-1] + 1;
            var range = endPran[0] - startPran[startPran.length-1] - 1;
            normalValue = strArray.splice(startIndex,range);
            normalValue = normalValue.join("");
            revValue = normalValue.split("").reverse().join("");
            str = str.replace("("+normalValue+")",revValue);
        
            return str;
    }

    var b = rex.exec(s)[0];
    return b;
    }

    console.log(reverseParentheses("asdfdsf(sdf)sd(fsd)fa"));