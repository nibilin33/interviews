function printStart2(number) {
    for(let i=1;i<=number;i++) {
        let str="";
        for(let j=number;j>=i;j--) {
            str+='*';
        }
        str+="\n";
        console.log(str);
    }
}
function printStart(number) {
    let str="";
    for(let i=1;i<=number;i++) {
        for(let j=number;j>=i;j--) {
            str+=' ';
        }
        if(i===number) {
            str+='* '.repeat(number-1);
        }else{
            str+="*";
        }
        for(let k=1;k<i;k++) {
            if(i!=number) {
                str+=' ';
            }
            if(k==i-1) {
                str+='*';
            }else if(i!==number) {
                    str+=' ';
            }
        }
        str+="\n";
    }
    console.log(str);
}
printStart(4);
printStart(5);