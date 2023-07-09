class Trie{
    constructor() {
        this.item={}
    }

    insertion(word) {
        let currentroot = this.item
        
        for (let i = 0; i < word.length; i++){
            
            let char = word[i]
            
            if (!currentroot[char]) {
                currentroot[char]={}
            }
            
            currentroot=currentroot[char]
        }

        currentroot.isEndoftheword=true
    }


    search(word) {
        
        let current = this.item
        
        for (let i = 0; i < word.length; i++){
            let char = word[i]
            
            if (!current[char]) {
                return -1
            }

            current=current[char]
        }

        return current.isEndoftheword===true
    }


    deletionUtil(word) {
        this.deletion(this.item,word,0)
    }

    deletion(currentroot, word, index) {
        
        if (word.length === index) {
            delete currentroot.isEndoftheword
            return
        }

        let char=word[index]

        if (!currentroot[char]) {
            return
        }

        this.deletion(currentroot[char], word, index + 1)
        

        if (Object.keys(currentroot[char]).length === 0 && !currentroot.isEndoftheword) {
            delete currentroot[char]
            return
        }

        
    }
}


let T = new Trie()
T.insertion('apple')
T.insertion('pinapple')
T.insertion('orange')
T.insertion('appleeee')
T.deletionUtil('apple')
console.log(T.search('apple'));
