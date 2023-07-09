class Maxheap{
    constructor() {
        this.heap=[]
    }

    insertion(value) {
        this.heap.push(value)

        let index = this.heap.length-1
        while (index > 0) {
            let parent = parseInt((index-1)/2)
            if (this.heap[index] > this.heap[parent]) {
                [this.heap[index], this.heap[parent]] = [this.heap[parent], this.heap[index]]
                index=parent
            } else {
                break
            }
        }
    }

    deletion() {
        this.heap[0] = this.heap.pop()
        let length = this.heap.length
        let index=0
        
        while (index < length) {
            let leftchild = 2 * index + 1
            let rightchild = 2 * index + 2
            
            if (leftchild < length && this.heap[leftchild] > this.heap[index] && this.heap[leftchild] > this.heap[rightchild]) {
                [this.heap[leftchild], this.heap[index]] = [this.heap[index], this.heap[leftchild]]
                index=leftchild
            } else if (rightchild < length && this.heap[rightchild] > this.heap[index] && this.heap[rightchild] > this.heap[leftchild]) {
                [this.heap[rightchild], this.heap[index]] = [this.heap[index], this.heap[rightchild]]
                index=rightchild
            } else {
                break
            }
        }
        
    }
    

    arraytoheap(arr, length) {
        let parent = parseInt((length - 1) / 2)
        
        for (let i = parent; i >= 0; i--){
            this.heapify(arr,length,i)
        }
    }

    heapify(arr,length,i) {
        
        let largest = i
        
        let leftchild = 2 * i + 1
        let rightchild = 2 * i + 2
        
        if (leftchild < length && arr[leftchild] > arr[largest]) {
            largest=leftchild
        }

        if (rightchild < length && arr[rightchild] > arr[largest]) {
            largest=rightchild
        }


        if (largest != i) {
            [arr[i], arr[largest]] = [arr[largest], arr[i]]
            this.heapify(arr,length,largest)
        }
    }


    heapsort(arr, length) {
        
        for (let i = length - 1; i >= 0; i--){
            [arr[i], arr[0]] = [arr[0], arr[i]]
            this.heapify(arr,i,0)
        }

    }

    display() {
        console.log(this.heap);
        
    }
}

let heap = new Maxheap()
// heap.insertion(30)
// heap.insertion(10)
// heap.insertion(50)
// heap.insertion(70)
// heap.insertion(35)
// heap.insertion(15)
// heap.deletion()
// heap.display()
let arr=[20,10,15,45,80,65]
heap.arraytoheap(arr, arr.length)
heap.heapsort(arr, arr.length)
console.log(arr);
