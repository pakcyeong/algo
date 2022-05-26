const pad = [[1,4,7,'*'],[2,5,8,0],[3,6,9,'#']];
function solution(numbers, hand) {
    var locatL = [0,0];
    var locatR = [2,3];
    var answer = '';
    for(var i = 0; i < numbers.length; i++){
        if(pad[0].includes(numbers[i])){
            locatL = [0,pad[0].indexOf(numbers[i])];
            answer = answer.concat('L');
        }
        else if(pad[2].includes(numbers[i])){
            locatR = [2,pad[2].indexOf(numbers[i])];
            answer = answer.concat('R');
        }
        else{
            var lsumL = Math.abs(locatL[0]-1) + Math.abs(locatL[1]-pad[1].indexOf(numbers[i]));
            var lsumR = Math.abs(locatR[0]-1) + Math.abs(locatR[1]-pad[1].indexOf(numbers[i]));
            if(lsumL < lsumR){
                locatL = [1,pad[1].indexOf(numbers[i])];
                answer = answer.concat('L');
            }else if(lsumL == lsumR){
                if(hand == 'right') {
                    locatR = [1,pad[1].indexOf(numbers[i])]; 
                    answer = answer.concat('R');
                }else{
                    locatL = [1,pad[1].indexOf(numbers[i])];
                    answer = answer.concat('L');
                } 
            }else{
                locatR = [1,pad[1].indexOf(numbers[i])];
                answer = answer.concat('R');
            }
        }
    }
    return answer;
}