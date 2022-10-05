/*
 * Complete the 'truckTour' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY petrolpumps as parameter.
 */
// 计算从哪个油桶开始可以走完所有
function truckTour(petrolpumps) {
    // Write your code here
    let currentPetrol = 0;
    let j = 0, i = 0;
    while (j < petrolpumps.length) {
        currentPetrol = 0;
        for (i = j; i < petrolpumps.length + j; i++) {
            const index = i % petrolpumps.length;
            const stationMount = petrolpumps[index];
            currentPetrol += stationMount[0];
            if (currentPetrol <= stationMount[1]) {
                j++;
                break;
            } else {
                currentPetrol -= stationMount[1];
            }
        }
        if (i == petrolpumps.length + j) {
            break;
        }
    }
    return j;
}

function main() {
    const n = 10;;

    let petrolpumps = [[1, 5], [3, 4], [10, 3]];

    const result = truckTour(petrolpumps);
    console.log(result);
}
main();