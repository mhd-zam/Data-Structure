class Linkedlist{
    constructor(data) {
        this.next = null
        this.data=data
    }
}

let head = null
let tail = null

function insertion(value) { 
    let newNode =new Linkedlist(value)
    if (head === null) {
        head = tail = newNode
        return
    }

    tail.next = newNode
    tail=newNode
}

function deletion(value) {
    
    if (head === null) {
        return
    }


    let temp = head
    let prev=null
    
    while (temp != null && temp.data != value) {
        prev = temp
        temp=temp.next
    }

    if (temp === head) {
        head = head.next
        return
    }


    if (temp === tail) {
        prev.next = null
        tail = prev
        return
    }

    prev.next=temp.next

}


function display() {
    let temp = head
    
    while (temp != null) {
        console.log(temp.data);
        temp=temp.next
    }
}



insertion(40)
insertion(56)
insertion(24)
insertion(4)
insertion(15)
insertion(25)
deletion(4)
deletion(25)
display()