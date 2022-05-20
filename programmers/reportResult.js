function solution(id_list, report, k) {
    var logs = [...new Set(report)].map(l=>l.split(" "));
    
    let reported, answer;
    (reported=[]).length = (answer=[]).length = id_list.length;

    reported.fill(0);
    answer.fill(0);
    
    logs.forEach(l => reported[id_list.indexOf(l[1])]++)
    
    for(var i=0; i<reported.length; i++)
       if(reported[i] >= k)
            logs.filter(l => l[1] == id_list[i])
               .forEach(l => answer[id_list.indexOf(l[0])]++);
    
    return answer;
}