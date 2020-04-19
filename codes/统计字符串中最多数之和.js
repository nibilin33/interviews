// 写段代码，定义一个字符串常量，
//字符串中只有大小写字母和整数，输出字符串中的出现最多的数字的和.
//例如 "9fil3dj11P0jAsf11j9os9"
//中出现最多的是11两次，输出22
const count = (string) => {
    const REG = /(\d+)/g;
    const result = string.match(REG);
    let max = {};
    let count = {};
    let countMax = 0;
    for(let i=0;i<result.length;i++) {
        max[result[i]] = max[result[i]]? max[result[i]]+1:1;
        count[max[result[i]]] = result[i];
        countMax = countMax > max[result[i]]? countMax:max[result[i]];
    }
    return count[countMax]*countMax;
}
count('9fil3dj11P0jAsf11j9os9wwww11sss11');