function solution(fees, records) {
    var answer = [];
    var arr =[];
    records = records.map(a=> a.split(' ')).sort((a,b)=>(+a[1])-(+b[1]));
    console.log(records);
    while(records.length!==0){
        var in = records.shift();
        arr.push(in);
        if()
    }
    return answer;
}