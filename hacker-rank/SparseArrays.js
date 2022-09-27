/*
There is a collection of input strings and a collection of query strings.
For each query string, determine how many times it occurs in the list of input strings. 
Return an array of the results.
*/
function matchingStrings(strings, queries) {
    // Write your code here
    return queries.map((target)=>{
        let count = strings.filter((v)=>target==v);
        return count.length;
    });
}

function main() {

    let strings = ['ab','ab','abc'];
    let queries = ['ab','abc','bc'];
    const res = matchingStrings(strings, queries);
    console.log(res);
}
main();