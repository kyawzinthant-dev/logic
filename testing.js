function reverseParentheses(s) {

  var newS = s.split('').reverse();
  newS.shift();
  newS.pop();
  return newS;

  }
  console.log(reverseParentheses("(fight)"));