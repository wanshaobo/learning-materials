
let arr1 = [1,5];
let arr2 = [2,5,6,8];


function mergeOrder(arr1, arr2) {
    const len = [...arr1, ...arr2].length
    let arr1Index = 0
    let arr2Index = 0
    let result = []

    for (let i = 0; i < len; i++) {
        if (arr1[arr1Index] === undefined) {
            result.push(...arr2.splice(arr2Index))
            break
        }

        if (arr2[arr2Index] === undefined) {
            result.push(...arr1.splice(arr1Index))
            break
        }

        if (arr1[arr1Index] < arr2[arr2Index]) {
            result.push(arr1[arr1Index++])
        } else if (arr1[arr1Index] > arr2[arr2Index]) {
            result.push(arr2[arr2Index++])
        } else {
            result.push(arr1[arr1Index++], arr2[arr2Index++])
        }
    }

    return result
}

console.log(mergeOrder(arr1, arr2));