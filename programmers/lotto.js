function solution(l, w) {
    
    let c = [0, 0];
    let grade = [6,6,5,4,3,2,1];
    let answer = [0,0];
    
    for(var i=0; i<l.length;i++){
        for(var j=0; j<w.length; j++){
            if(l[i]==w[j]) c[0]++;
        }
        if(l[i]==0) c[1]++;
    }
    
    answer[0]=grade[(c[0]+c[1])];
    answer[1]=grade[(c[0])];
    
    return answer;
}