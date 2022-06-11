function solution(n) {
    var s = 0;
    for(var i=0; i<10; i++){
        if(!n.includes(i)) s+=i;
    }
    return s;
}