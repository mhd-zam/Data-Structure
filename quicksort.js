

function Quicksort(arr) {
    
    if (arr.length === 0) {
        return arr
    }


    let left = []
    let right = []
    
    let pivot = arr[0]
    
    for (let i = 1; i<arr.length; i++){
        
        if (arr[i] > pivot) {
            right.push(arr[i])
        } else {
            left.push(arr[i])
        }

    }


    return [...Quicksort(left),pivot,...Quicksort(right)]

}



let arr = [45,12,13,14,16,18]

console.log(Quicksort(arr));
