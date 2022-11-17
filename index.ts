function superPrint<V>(a: V[]) {
    return a[0]
}

const a = superPrint<number>([1, 2, 3, 4])
const b = superPrint([true, false, true])
const c = superPrint(["a", "b", "c"])
const d = superPrint([1, 2, true, false, "hello"])

type Player<E> = {
    name: string;
    extraInfo: E;
}

type CarlExtra = {
    favFood:string
}

type CarlPlayer = Player<CarlExtra>

const carl: CarlPlayer = {
    name:"carl",
    extraInfo: {
        favFood:"chicken"
    }
}

const lynn: Player<null> = {
    name: "lynn",
    extraInfo:null
}

type A = Array<number>

let f:A = [1, 2, 3, 4]

function printAllNumbers(arr: Array<number>){
    
}