function avoidObstacles(a){
    var result = 0;
    var getResult = false;
    a.sort((a,b)=>a-b);
    var lastNum = a[a.length-1];
    var possiblePoints = [];
    var restEleCount = a[0]-1;
    while(restEleCount>1){
        possiblePoints.push(restEleCount);
        restEleCount--;
    }
    possiblePoints.sort((a,b)=>a-b);
    for(var i = 0; i <= a.length-2; i++){
        if(a[i]!=a[i+1]-1){
            var ele = a[i]+1;
            while(ele < a[i+1]){
                possiblePoints.push(ele);
                ele++;
            }
        }
    }
    forloop:for(var i = 0; i <= possiblePoints.length-1; i++){
        var increment = possiblePoints[i];
        whileloop:while(increment<a[a.length-1]){
            increment = increment + possiblePoints[i];
            for(var j = 0; j <= a.length-1; j++){
                if(increment==a[j]){
                continue forloop;
                }
            }
        }
        result = possiblePoints[i];
        break forloop;
    }

if(possiblePoints[0]==undefined)
return lastNum+1;
return result;
}

console.log(avoidObstacles([5, 3, 6, 7, 9]));