function solution(s) {
  var answer = [];
  var count = 0;
  var zero = 0;
  while (s != 1) {
    var zeroarr = [...s].filter((a) => a == 0);
    zero += zeroarr.length;
    var nozero = [...s].filter((a) => a == 1);
    s = nozero.length.toString(2);
    count++;
  }
  return [count, zero];
}
