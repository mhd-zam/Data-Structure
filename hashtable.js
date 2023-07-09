class Hashtable{
    constructor() {
        this.table={}
    }

    Hash(key) {
        let index = 0
        
        for (let i = 0; i < key.length; i++){
            index+=key.charCodeAt(i)
        }

        return index
    }

    insertion(key, value) {
        let index = this.Hash(key)
        
        if (!this.table[index]) {
            this.table[index]={}
        }

        this.table[index][key]=value
    }

    deletion(key) {
        let index = this.Hash(key)

        if (this.table[index]) {
            delete this.table[index][key]
        }
    }

    search(key) {
        let index = this.Hash(key)

        if (!this.table[index]) {
            return -1
        }
        
        return this.table[index][key]?true:-1
    }
}

let table = new Hashtable()

table.insertion('apple', 1)

table.insertion('orange',12)

table.insertion('pinapple',5)

table.insertion('watermelon',12)

table.deletion('pinapple')

console.log(table.search('pinapple'));
