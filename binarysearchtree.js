class Binarysearchtree{
    constructor(data) {
        this.left = null
        this.data = data
        this.right=null
    }
}

let root=null

function insertionutil(value) {
    root=insertion(root,value)
}


function insertion(root,value) {
    
    if (root === null) {
        let newNode = new Binarysearchtree(value)
        return newNode
    }


    if (value > root.data) {
        root.right=insertion(root.right,value)
    } else {
        root.left=insertion(root.left,value)
    }

    return root

}


function deletionUtil(value) {
    root=deletion(root,value)
}

function minValue(root) {
    
    let min = root.data
    
    while (root.left != null) {
        root = root.left
        min=root.data
    }

    return min
}

function deletion(root, value) {

    

    if (value > root.data) {
        root.right=deletion(root.right,value)
    } else if (value < root.data) {
        root.left=deletion(root.data,value)
    } else {
        if (root.left === null) {
            return root.right
        }

        if (root.right === null) {
            return root.left
        }

        root.data = minValue(root.right)
        
        root.right=deletion(root.right,root.data)
    }

    return root
    
}


function contianUtil(value) {
    return contain(root,value)
}

function contain(root, value) {
    
    if (root == null) {
        return -1
    }

    if (value > root.data) {
        return contain(root.right,value)
    } else if (value < root.data) {
        return contain(root.left,value)
    } else {
        return true
    }
    
}


function inorder(root) {
   
    if (root === null) {
        return
    }

    inorder(root?.left)
    console.log(root.data);
    inorder(root?.right)

   
}


function preorder(root) {
    if (root === null) {
        return
    }

    console.log(root.data)
    preorder(root.left)
    preorder(root.right)
}


function postorder(root) {
    if (root === null) {
        return
    }

    preorder(root.left)
    preorder(root.right)
    console.log(root.data);
}


insertionutil(30)
insertionutil(20)
insertionutil(50)
insertionutil(55)
insertionutil(25)
deletionUtil(50)
// inorder(root)
preorder(root)
