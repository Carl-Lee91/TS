type Words = {
    [key:string]: string
}

class Dict {
    private words: Words
    constructor(){
        this.words = {}
    }
    add(word:Word){
        if(this.words[word.term] === undefined){
            this.words[word.term] = word.def
        }
    }
    get(term:string){
        return this.words[term]
    }
    delete(word:Word){
        delete this.words[word.term]
    }
    update(word:Word){
        if(this.words[word.term] !== undefined){
            this.words[word.term] = word.def
        }
    }
    showAll(word:Word){
        console.log(Object.keys(this.words))
    }
    count(term:string){
        const dictcount = Object.keys(this.words).length
        return dictcount
    }
}

class Word {
    constructor(
        public term:string,
        public def:string
    ){}
}