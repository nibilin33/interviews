/*
Given a time in -hour AM/PM format, convert it to military (24-hour) time.
Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.
*/
function timeConversion(s) {
    // Write your code here
    const reg = /(\d+)\:(\d+)\:(\d+)(AM|PM)/;
    const matches = s.match(reg);
    matches.shift();// remove matches all
    const unit = matches.pop();
    if(unit === 'PM'){
        let newHours = 12+Number(matches[0]);
        if(newHours == 24) {
            newHours = 12;
        }
        matches[0] = newHours;
        console.log(matches.join(':'));
    }
    if(unit === 'AM') {
        let newHours = Number(matches[0]);
        if(newHours == 12) {
            newHours = '00';
        }else if(newHours<10) {
            newHours = '0'+newHours;
        }
        matches[0] = newHours;
        console.log(matches.join(':'));
    }
}

function main() {
    const s = '6:59:59AM';
    const result = timeConversion(s);
    console.log(result);
}
main();
