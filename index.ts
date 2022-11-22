interface SStorage<T> {
    [key:string]: T
}

class LocalStaorage<T> {
    private storage: SStorage<T> = {}
    set(key:string, value:T) {
        this.storage[key] = value
    }
    remove(key:string) {
        delete this.storage[key]
    }
    get(key:string):T {
        return this.storage[key]
    }
    clear(){
        this.storage = {}
    }
}

const stringsStorage = new LocalStaorage<string>()

stringsStorage.get("hey")

const booleansStorage = new LocalStaorage<boolean>()

booleansStorage.set("hat", true)