// // function centuryFromYear(year) {
// //     return Math.ceil(year/100);
// //    }

// // console.log(centuryFromYear(1993));

// function checkPalindrome(s) {
// var checker = true;

//     for(var i = 0; i <= s.length/2 ; i++){
//         if(!(s[i] == s[s.length - 1 - i])){
//             console.log(s[i]);
//             checker = false;
//         }
//     }
//     return checker;
// }

// console.log(checkPalindrome('hlbeeykoqqqqokyeeblh'));

// function adjacentElementsProduct(arr) {
// var resultArray = [];
// for(var i = 0; i <= arr.length-1 ;i++){
//     resultArray.push(arr[i] * arr[i+1]);
// }
//     resultArray.splice(arr.length-1,1);
//     return Math.max(...resultArray);

// }
// console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));

// function shapeArea(n) {
//     var result = 0;
//     if(n <= 1){
//         return 1;
//     }    
//     return (n * 4) - 4 + shapeArea(n-1); 
// }

// console.log(shapeArea(2));

// function makeArrayConsecutive2(statues) {
// statues.sort((a,b) =>  a - b);
// var count = 0;
// for(var i = 0; i<= statues.length - 2  ; i++){
//     if(statues[i+1] - statues[i] > 1){
//         count += statues[i+1] - statues[i] -1;
//     }
// }
// return count;
// }

// console.log(makeArrayConsecutive2([6,2,3,8,13,15]));

function almostIncreasingSequence(sequence) {
    var tempCheck = false;
    var filteredArray = [];
    if(sequence.length == 2)
    return true;
        for(var i = 0; i <= sequence.length - 1; i++){
        filteredArray = sequence.filter( (e,ii,a) => i!== ii);
        var flag = 0;
        console.log(filteredArray);
        for(var j = 0; j <= filteredArray.length - 2; j++){
            flag = 1;
            if(filteredArray[j] >= filteredArray [j+1]){
                flag = 0;
                break;
            }
         
        }
        if(flag == 1)
        tempCheck = true;
    }
return tempCheck;
}
console.log(almostIncreasingSequence([1, 3, 2]));