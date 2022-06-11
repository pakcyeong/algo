function solution(a,b) {
    var ans = 0;
    a.map(i=>b.shift()*i).forEach(elem => {
        ans += elem;
    });
    return ans;
}