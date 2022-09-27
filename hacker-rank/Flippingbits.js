/*
给你一个32-bits位无符号整数的列表，要求你输出你把它们中每个数二进制表示中的每位翻转之后的结果得到的新列表（即0变成1，1变成0）。
*/

function flippingBits(n) {
    // Write your code here
    n = n.toString(2);
    const inverse = n.split('').map((num)=>{
        if(num == 0) {
            return 1;
        }else{
            return 0;
        }
    }).join('');
    const binary = inverse.padStart(32,'1')
    return parseInt(binary,2);
}

function main() {
    const n = 802743475; // 3492223820
    const result = flippingBits(n);
    console.log(result);
}
main();