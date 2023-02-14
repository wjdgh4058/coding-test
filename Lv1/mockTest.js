/* 
수포자는 수학을 포기한 사람의 준말입니다. 수포자 삼인방은 모의고사에 수학 문제를 전부 찍으려 합니다. 수포자는 1번 문제부터 마지막 문제까지 다음과 같이 찍습니다.

1번 수포자가 찍는 방식: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...
2번 수포자가 찍는 방식: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...
3번 수포자가 찍는 방식: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...

1번 문제부터 마지막 문제까지의 정답이 순서대로 들은 배열 answers가 주어졌을 때, 가장 많은 문제를 맞힌 사람이 누구인지 배열에 담아 return 하도록 solution 함수를 작성해주세요.
*/

function solution(answers) {
  var answer = [];
  var count1 = 0;
  var count2 = 0;
  var count3 = 0;
  var one = [..."12345".repeat(Math.ceil(answers.length / 5))];
  var two = [
    ..." 1 3 4 5"
      .split(" ")
      .join(2)
      .repeat(Math.ceil(answers.length / 8)),
  ];
  var three = [..."3311224455".repeat(Math.ceil(answers.length / 10))];
  var result = [];
  for (var i = 0; i < answers.length; i++) {
    if (answers[i] == one[i]) {
      count1 += 1;
    }
    if (answers[i] == two[i]) {
      count2 += 1;
    }
    if (answers[i] == three[i]) {
      count3 += 1;
    }
  }
  //console.log(count1, count2, count3)
  var maxscore = Math.max(count1, count2, count3);
  answer.push(count1);
  answer.push(count2);
  answer.push(count3);
  for (var x = 0; x < 3; x++) {
    if (maxscore == answer[x]) result.push(x + 1);
  }

  return result;
}
