/* 
2차원 행렬 arr1과 arr2를 입력받아, arr1에 arr2를 곱한 결과를 반환하는 함수, solution을 완성해주세요.

제한 조건
행렬 arr1, arr2의 행과 열의 길이는 2 이상 100 이하입니다.
행렬 arr1, arr2의 원소는 -10 이상 20 이하인 자연수입니다.
곱할 수 있는 배열만 주어집니다.
*/

function solution(arr1, arr2) {
  var answer = [];
  var sumarr = [];
  var sum = 0;
  for (var i = 0; i < arr1.length; i++) {
    for (var j = 0; j < arr2[0].length; j++) {
      for (var x = 0; x < arr2.length; x++) {
        sum += arr1[i][x] * arr2[x][j];
      }
      sumarr.push(sum);
      sum = 0;
    }
    answer.push(sumarr);
    sumarr = [];
  }
  return answer;
}
