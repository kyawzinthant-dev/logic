// function alternatingSums(a) {
//     var result = [];
//     var firstAns = 0;
//     var secAns = 0;

//         for(var i = 0; i <= a.length-1; i++){
//             if(i%2!=0)
//             secAns+=a[i];
//             else
//             firstAns+=a[i];
//         }
        
//     result.push(firstAns);
//     result.push(secAns);
//     return result;
// }

// console.log(alternatingSums([50, 60, 60, 45, 70]));

// function addBorder(picture) {
//     var topBorder = botBorder = "*".repeat(picture[0].length+2);
//     picture.forEach((e,i,a)=>{
//         a[i] = String(a[i]).concat("*");
//         a[i] = a[i].split('').reverse().join('');
//         a[i] = String(a[i]).concat("*");
//         a[i] = a[i].split('').reverse().join('');
//         console.log(e);
//     });
//     picture.splice(0,0,topBorder);
//     picture.push(botBorder);
//     return picture;
// }

// console.log(addBorder(["a"]));

// function areSimilar(a, b) {
//     if(JSON.stringify(a)==JSON.stringify(b))
//     return true;

// var result = false;
// var canBe = 1;
// var count = 0;
// var toSwapIndex = [];
// var toSwapEle = [];

// if(a.length == b.length){
//     for(var i = 0; i <= a.length-1; i++ ){
//         if(a[i] != b[i]){
//         count++;
//         toSwapIndex.push(i);
//         toSwapEle.push(a[i]);
//         }
//     }
//     if(count!=2)
//     canBe = 0;
//     else{
           
//                 a.splice(toSwapIndex[0],1,toSwapEle[1]);
//                 a.splice(toSwapIndex[1],1,toSwapEle[0]);
//     }   
//     if(JSON.stringify(a)!=JSON.stringify(b))
//     canBe=0;

//     if(canBe==1)
//     result = true;

//     return result;
// }
// else
// return false;
// }

// console.log(areSimilar([832, 998, 148, 570, 533, 561, 894, 147, 455, 279],[832, 998, 148, 570, 533, 561, 455, 147, 894, 279]))

// function arrayChange(a) {
//     var count = 0;
// for(var i = 0; i <= a.length-2; i++){
//     if(a[i+1]<=a[i]){

//         count+= (a[i])-(a[i+1]);
//         a.splice(i+1,1,a[i]+1);
//         count++;
//     }
// }
// return count;
// }

// console.log(arrayChange([2, 3, 3, 5, 5, 5, 4, 12, 12, 10, 15]))

// function palindromeRearranging(str) {
//  var result = false;
//  var strArr = str.split('').sort();
//  var checker =[];
//  var count = 0;
//  var lcount = 0;
//  var canBe = 1;

//  for (var i = 0 ; i <= strArr.length-1; i++){
//      if(strArr[i+1]==strArr[i]){
//      count++;
//      continue;
//      }

//      if(count == 0){
//          lcount++;
//          continue;
//      }
//      if(strArr.length%2==0){
//         if(count%2==0)
//         canBe = 0;
//         else
//         count = 0;
//      }
//      else{
//         if(count%2!=0)
//         count = 0;
//         else
//         lcount++;
//      }

//  }
//  if(lcount > 1)
//  canBe = 0;
//  if(canBe==1)
//  result = true;
 
//  return result;
// }
// console.log(palindromeRearranging("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbcccc"));

// function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {

//     if(yourLeft+yourRight!=friendsLeft+friendsRight)
//     return false;
//     else
//     return (yourRight==friendsLeft||yourRight==friendsRight&&yourLeft==friendsLeft||yourLeft==friendsRight);


// }

// console.log(areEquallyStrong(15,10,15,9));

// function arrayMaximalAdjacentDifference(a) {
// var maxi = [];

// for(var i = 0; i <= a.length -2; i++){
//     maxi.push(a[i+1]-a[i]);
// }
// maxi = maxi.map((e)=> {if(e<0) return e*-1; else return e});
// maxi.sort();
// return maxi[maxi.length-1];
// }

// console.log(arrayMaximalAdjacentDifference([2, 4, 1, 0]));

// function isIPv4Address(ip) {
// var ipArr = ip.split('.');
// var canBe = true;
// ipArr.forEach((e,i,a)=>{
//     if(e>255||e==''||isNaN(e)||a.length!=4)
//     canBe = false;
// });
// return canBe;
// }
// console.log(isIPv4Address("1.23.256.."));

function avoidObstacles(a) {
a.sort((a,b)=>a-b);
var theNum = 0;
function checkTheNum(num,index){
    var canBe = 0;
    var handle = 0;
    for(var i = index-1 ; i <= a.length-1; i++){
        handle = handle + num;
        
    }
    
    
    }

for(var i = a[0]; i <= a[a.length-1]; i++){
        for(var j = 0 ; j <= a.length-1; j++){
            if(i!=a[j]){
                if(!checkTheNum(i,j))
                continue;
                else
                return i;
            }

        }
}
}


console.log(avoidObstacles([5, 3, 6, 7, 9]));