function solution(arr, cmd) {
    var ans = Array(cmd.length).fill(0);
    return ans.map((data, idx) => 
        arr.slice((cmd[idx][0]-1), cmd[idx][1])
            .sort(function(a,b){ return a-b; })[(cmd[idx][2]-1)])
}