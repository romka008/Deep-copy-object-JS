const obj = {
    a: 1,
    b: 'dasfsadfhj',
    c: function name(params) {
        return 'string'
    },
    d: { key: true },
    e: ['hola'],
}

function deepCopy(obj) {
    if (typeof obj !== 'object') {
        return obj
    }
    let copy = Array.isArray(obj) ? [] : {}
    for (key in obj) {
        const value = obj[key]
        copy[key] = deepCopy(value)
    }
    return copy
}

const newObject = deepCopy(obj)

newObject.e[0] = 'Bye'

console.log(newObject)
console.log(obj === newObject)

console.log(obj.e[0], newObject.e[0])
console.log(newObject.e[0] === obj.e[0])
