var number = ["zero","one","two","three","four","five","six","seven","eight","nine"];
function solution(s) {
    var answer = '';
    for(var i = 0; i < s.length; i++){
        for(var j = 0; j < 10; j++){
            if(s.startsWith(number[j])){
                s = s.slice(number[j].length);
                answer = answer.concat(number.indexOf(number[j]));
            }else if(Number.isInteger(s.slice(0,1)*1)){
                answer = answer.concat(s.slice(0,1));
                s = s.slice(1);
            }
        }
    }
    return answer*1;
}