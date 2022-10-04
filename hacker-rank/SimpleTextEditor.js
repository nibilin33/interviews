const fs = require('fs');
let testcase = fs.readFileSync('./SimpleTextEditor.txt').toString();
let final = '';
function processData(input) {
    //Enter your code here
    let arr = input.split('\n');
    let t = arr.shift();
    let opera = [];
    let S = '';
    function operation(type,data) {
        let history = null;
        if(type == '1') {
            history = data;
            S+=data;
        }
        if(type == '2'){
            history = S.substring(S.length-data,S.length);
            S=S.slice(0,S.length-data);
        }
        if(type == '3') {
            console.log(S[data-1]);
        }
         opera.push({
            type,
            data: history
        });
        if(type == '4') {
            let undo = opera.pop();
            while(undo) {
                if(undo.type =='1'||undo.type=='2') {
                    break;
                }
                undo = opera.pop();
            }
            if(undo.type == 1) {
                S = S.slice(0,S.length-undo.data.length);
            }
            if(undo.type == 2) {
                S=S+undo.data;
            }
        }
        
    }
    for(let i=0;i<arr.length;i++) {
        let item = arr[i].split(' ');
        operation(...item);
    }
} 
processData(testcase);