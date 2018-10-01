// function almostIncreasingSequence(s) {
//   var canBe = 1;
//   var count = 0;
//   for(var i = 1; i <= s.length-1; i++){
//     if(s[i]<=s[i-1]){
//       if(i == s.length -1){
//       count++;
//       continue;
//       }
//       if(s[i-1] < s[i+1]){
//       count++;
//       continue;
//       }
//       else{
//         if(i-1 == 0)
//         {count++;
//         continue;
//         }
//         if(s[i-2] < s[i])
//         {count++;
//         continue;
//         }
//         else
//         canBe = 0;
//       }
//     }
//   }
//   if(count>=2)
//   canBe = 0;
//   return true ? canBe ==1 : canBe ==0;
// }

// console.log(almostIncreasingSequence([1, 3, 2, 1]));

// function matrixElementsSum(matrix) {

//  if(Array.isArray(matrix)){
 
//  var sum = 0;
//  for(var i = 0; i <= matrix.length-1; i++){
 
//   for(var j = 0; j <= matrix[i].length -1; j++){
//     if(matrix[i][j] == 0){
//       if(i != matrix.length-1)
//       matrix[i+1][j] = 0;
//     }
//     sum += parseInt(matrix[i][j]);
//   }
// }


//  return sum;

// }
// else{
//   return 0;
// }
// }

// console.log(matrixElementsSum([[0]]
// ))

// function allLongestStrings(inputArray) {
//   var newArray = inputArray.sort((a,b)=>{
//     return b.length-a.length;
//   })
//   return newArray.filter((e,i,a)=> a[0].length == a[i].length);
// }

// console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));

// function commonCharacterCount(s1, s2) {
// var count = 0;
// var s1Arr = s1.split('');
// var s2Arr = s2.split('');
// for(var i = 0 ; i <= s1Arr.length-1; i++){
//   for(var j = 0; j <= s2Arr.length-1; j++){
//     if(s1Arr[i]==s2Arr[j]){
//       s2Arr.splice(j,1);
//       count++;
//       break;
//     }
//   }

// }

// return count;
// }

// console.log(commonCharacterCount("aabbcc","abcbe"));

// function isLucky(n) {
//   var a = String(n).split('');
//   var left = a.splice(0,a.length/2);
//   var right = a;
//   var leftsum = left.reduce((sum,cur)=> parseInt(sum)+parseInt(cur));
//   var rightsum = right.reduce((sum,cur)=> parseInt(sum)+parseInt(cur));
//   if(leftsum == rightsum)
//   return true;
//   return false;
// }

// console.log(isLucky(1230));

// function sortByHeight(a) {
//   var treeArray = [];
//   var treeCount = 0;
//   for(var i = 0; i <= a.length-1; i++){
//     if(a[i] == -1){
//     treeCount++;
//     treeArray.push(i);
//     }
//   }
//   console.log(treeArray);
//   a.sort((a,b)=>a-b);
//   a.splice(0,treeCount);
//   for(var i = 0; i <= treeArray.length; i++){
//     a.splice(treeArray[i],0,-1);
//   }
//   a.shift();
//   return a;
// }

// console.log(sortByHeight([-1,-1,98,21,42,-1,31,23,-1,-1,-1,224,32,12,-1]))

function reverseParentheses(s) {

  for(var i = 0; i <= strArray.length-1; i++){

  }
  
  return indexOfClose;
}
console.log(reverseParentheses("co(de(fight)s)"));

// s.split("").reverse().join("")