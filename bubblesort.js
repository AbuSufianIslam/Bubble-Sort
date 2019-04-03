function bubbleSort(arr) {
    let length = arr.length
    for(let i = 0; i < length - 1; i++){
        for(let j = 0; j < length - 1; j++){
            if (arr[j] > arr[j + 1]){
                [arr[j], arr[j + 1]] = swap(arr[j], arr[j + 1])
            }
        }
    }
    return arr
}

function swap (a, b) {
    let temp = a
    a = b
    b = temp
    return [a, b]
}
