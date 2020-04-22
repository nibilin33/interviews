// 求两个整数的最大公约数，尽量优化算法性能  

// (1)辗转相除法
// 有两整数a和b：
// ① a%b得余数c
// ② 若c=0，则b即为两数的最大公约数
// ③ 若c≠0，则a=b，b=c，再回去执行①
// ⑵ 相减法
// 有两整数a和b：
// ① 若a>b，则a=a-b
// ② 若a<b，则b=b-a
// ③ 若a=b，则a（或b）即为两数的最大公约数
// ④ 若a≠b，则再回去执行① 
// (3)更相减损+移位
// 1. 当两个都是偶数 等于2*gcd(a/2,b/2)
// 2. 当其中一个为奇数 等于 gcd(偶数/2,奇数)
// 3. 都是奇数的时候 等于 gcd(b,a-b)
function gcd(a,b) {
    if(a==b) {
        return a;
    }
    if((a&1)==0 && (b&1)==0) {
        return gcd(a>>1,b>>1)<<1;
    }
    if((a&1)==0 && (b&1)!=0) {
        return gcd(a>>1,b);
    }
    if((a&1)!=0 && (b&1)==0) {
        return gcd(a,b>>1);
    }
    if((a&1)!=0&&(b&1)!=0) {
        let big = a>b?a:b;
        let small = a<b?a:b;
        return gcd(big-small,small);
    }
}

console.log(gcd(25,5));
console.log(gcd(100,80));
console.log(gcd(27,14));
console.log(gcd(200,300));