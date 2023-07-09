

function merge(left,right) {
    let sortedArr = []
    
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            sortedArr.push(left.shift())
        } else {
            sortedArr.push(right.shift())
        }
    }


    return [...sortedArr,...left,...right]
   
}


function mergesort(arr) {
    
    if (arr.length <= 1) {
        return arr
    }


    let mid = parseInt((arr.length) / 2)
    
    let left= mergesort(arr.slice(0,mid))

    let right=mergesort(arr.slice(mid))


    return merge(left,right)

}


let arr = [20, 12, 5, 25, 27, 14]

console.log(mergesort(arr));
