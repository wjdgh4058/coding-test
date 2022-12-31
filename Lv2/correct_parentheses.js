/* 
괄호가 바르게 짝지어졌다는 것은 '(' 문자로 열렸으면 반드시 짝지어서 ')' 문자로 닫혀야 한다는 뜻입니다. 예를 들어

"()()" 또는 "(())()" 는 올바른 괄호입니다.
")()(" 또는 "(()(" 는 올바르지 않은 괄호입니다.
'(' 또는 ')' 로만 이루어진 문자열 s가 주어졌을 때, 문자열 s가 올바른 괄호이면 true를 return 하고, 올바르지 않은 괄호이면 false를 return 하는 solution 함수를 완성해 주세요.
*/

function solution(s) {
  if (s[0] === ")") return false;
  /*if (s[0]===')') {
      return false
  }
  var a = s;
  for(var i =0 ; i<a.length/2; i++){
      s= s.replace('()', '');
  }
  return s.length ==0 ? true:false;*/

  var count = 0;
  for (var str of s) {
    if (str === "(") count += 1;
    if (str === ")") count -= 1;
    if (count < 0) return false;
  }
  return count === 0;
}
