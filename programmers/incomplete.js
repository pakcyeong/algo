function solution(p, c) {
    var answer = '';

    p.sort(); 
    c.sort(); 

    for(var i=0; i<= p.length; i++) 
        if(p[i]!=c[i]){
            answer = p[i];
            break;
        }  
        
    return answer;
}