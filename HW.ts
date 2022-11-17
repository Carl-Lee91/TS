type Last = <T>(arr: T[]) => T
type Prepend = <T,V>(arr:(T|V)[], item: V) => (T|V)[]

const last: Last = (arr) => {
    return arr[arr.length-1]
}

const prepend: Prepend = (arr,item) => {
    arr.unshift(item)
    return arr
}