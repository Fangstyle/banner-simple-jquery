/**
 * Created by Administrator on 2017/3/19.
 */
/*为春春写的一个在一个字符串中删除某个字符*/
function ignorePoint(str,targetPonit) {
    let tempArr = str.split('');
    let finalArr  = [];
    for(let i=0;i<tempArr.length;i++){
        if(tempArr[i]!=targetPonit){
            finalArr.push(tempArr[i]);
        }
    }
    return finalArr.join('');
}
var text = ignorePoint('abc..d','.');
console.log(text);