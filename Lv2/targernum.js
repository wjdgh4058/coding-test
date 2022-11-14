//깊이너비 우선 탐색
// (DFS/BFS)
function solution(numbers, target) {
    let answer = 0;
    const le = numbers.length; 
    const dfs = (count , sum)=> {
        if(count === le){
            if(sum === target){
                answer++;
            }
            return;
        }
        
        dfs(count+1, sum+numbers[count]);
        dfs(count+1, sum-numbers[count]);
    }
    dfs(0,0)
    return answer;
}