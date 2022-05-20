const a = ["mislav", "stanko", "mislav", "ana"];
const _a = ["stanko", "ana", "mislav"];

// function s(p,c){
//     var a = '';

//     p.find(p=>)

//     return a;
// }


var s=(_,$)=>_.find(_=>!$[_]--,$.map(_=>$[_]=($[_]|0)+1));

console.log(s(a,_a));