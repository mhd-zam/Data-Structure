// selection sort


let arr = [2,3,4,5,6,7,8,9,10,11,12]


function selectionsort(arr) {
    
    for (let i = 0; i < arr.length-1; i++){
        for (let j = i + 1; j < arr.length; j++){
            if (arr[i] > arr[j]) {
                [arr[i],arr[j]]=[arr[j],arr[i]]
            }
        }
    }
}

// selectionsort(arr)

// bubble sort


function bubblesort(arr) {
    
    for (let i = 0; i < arr.length; i++){
        for (j = 0; j < arr.length-1-i; j++){
            if (arr[j] > arr[j + 1]) {
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
            }
        }
    }
}

// bubblesort(arr)



function insertionsort(arr) {
    
    for (let i = 0; i < arr.length; i++){
        
        let key = arr[i]
        
        let j = i - 1
        
        while (j >= 0 && arr[j] > key) {
            arr[j+1] = arr[j]
            j--
        }

        arr[j+1]=key
    }
}


// insertionsort(arr)



// find largest and smallest in the array

function findLargestAndSmallest(arr) {
    
    let largest = 0
    let smallest = Number.MAX_VALUE
    
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > largest) {
            largest=arr[i]
        }

        if (arr[i] < smallest) {
            smallest=arr[i]
        }
    }


    console.log(largest);
    console.log(smallest);

}

function reverseArray(arr) {

    let revArr = []
    
    for (let i = arr.length - 1; i >= 0; i--){
        revArr.push(arr[i])
    }

    return revArr
}


function findOccurance(arr, value) {
    
    let count=0

    for (i = 0; i < arr.length; i++){
        if (arr[i] === value) {
            count++
        }
    }

    return count
}

// findLargestAndSmallest(arr)


// console.log(reverseArray(arr));

// console.log(findOccurance(arr,3));


function findduplicateElement(arr) {
    
    let visited = new Set()
    let duplicate = []
    

    for (let i = 0; i < arr.length; i++){
        if (!visited.has(arr[i])) {
            visited.add(arr[i])
        } else {
            duplicate.push(arr[i])
            visited.delete(arr[i])
        }

    }

    console.log(duplicate);
    
}

console.log(findduplicateElement(arr));



function findprimeornot(arr) {
    let primeNumber=[]

    for (let i = 0; i < arr.length; i++){

        let prime = true
       
        for (let j = 2; j < arr[i]; j++){
            
            if (arr[i] % j == 0) {
                prime = false
              break
            }
        }

        if (prime == true) {
            primeNumber.push(arr[i])
        }
    }

    return primeNumber

}


console.log(findprimeornot(arr))





// console.log(arr);
