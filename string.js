let string = 'hi i am mohammed zamil'


function reverse(arr) {
    let reveStr=[]
    for (let i = arr.length; i >= 0; i--){
        reveStr.push(arr[i])
    }
    return reveStr
}


console.log(reverse(string.split(' ')).join(' '))
