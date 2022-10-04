/*
 * Complete the 'isValid' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.\
 * return string: either YES or NO
 */
// all characters or removing one character so that the rest  have same frequency -> YES else NO
function isValid(s) {
    // Write your code here
    let frequencyMap = {};
    let highfrequncy = {};
    let removeCount = 0;
    for (let i = 0; i < s.length; i++) {
        if (typeof frequencyMap[s[i]] === 'undefined') {
            frequencyMap[s[i]] = 0;
        }
        frequencyMap[s[i]]++;
    }
    const result = Object.keys(frequencyMap).sort((a, b) => frequencyMap[a] - frequencyMap[b]).map((key) => frequencyMap[key]
    );
    const mid = result[parseInt(result.length/2)];
    while (result.length > 0) {
        let tail = result.pop();
        const distance = Math.abs(tail-mid);
        
        if (distance> 1 && tail > 1) {
            return 'NO';
        }
        // when frequncy = 1,this character can be remove
        if (distance == 1 || tail === 1) {
            removeCount++;
        }
        if (removeCount > 1) {
            return 'NO';
        }
    }
    return 'YES';

}

function main() {
    const s = 'ibfdgaeadiaefgbhbdghhhbgdfgeiccbiehhfcggchgghadhdhagfbahhddgghbdehidbibaeaagaeeigffcebfbaieggabcfbiiedcabfihchdfabifahcbhagccbdfifhghcadfiadeeaheeddddiecaicbgigccageicehfdhdgafaddhffadigfhhcaedcedecafeacbdacgfgfeeibgaiffdehigebhhehiaahfidibccdcdagifgaihacihadecgifihbebffebdfbchbgigeccahgihbcbcaggebaaafgfedbfgagfediddghdgbgehhhifhgcedechahidcbchebheihaadbbbiaiccededchdagfhccfdefigfibifabeiaccghcegfbcghaefifbachebaacbhbfgfddeceababbacgffbagidebeadfihaefefegbghgddbbgddeehgfbhafbccidebgehifafgbghafacgfdccgifdcbbbidfifhdaibgigebigaedeaaiadegfefbhacgddhchgcbgcaeaieiegiffchbgbebgbehbbfcebciiagacaiechdigbgbghefcahgbhfibhedaeeiffebdiabcifgccdefabccdghehfibfiifdaicfedagahhdcbhbicdgibgcedieihcichadgchgbdcdagaihebbabhibcihicadgadfcihdheefbhffiageddhgahaidfdhhdbgciiaciegchiiebfbcbhaeagccfhbfhaddagnfieihghfbaggiffbbfbecgaiiidccdceadbbdfgigibgcgchafccdchgifdeieicbaididhfcfdedbhaadedfageigfdehgcdaecaebebebfcieaecfagfdieaefdiedbcadchabhebgehiidfcgahcdhcdhgchhiiheffiifeegcfdgbdeffhgeghdfhbfbifgidcafbfcd';

    const result = isValid(s); // YES

    console.log(result);
}
main();