

function binarysearch(arr, start, end,key) {
    if (start > end) {
        return -1
    }

    let mid = start+parseInt((end - start) / 2)
  
    if (arr[mid] > key) {
        return binarysearch(arr,start,mid-1,key)
    } else if (arr[mid] < key) {
        return binarysearch(arr,mid+1,end,key)
    } else {
        return mid
    }

}


let arr = [10, 20, 30, 40, 50, 60, 70]

console.log(binarysearch(arr,0,arr.length,70));
