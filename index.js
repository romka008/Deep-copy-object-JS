const obj = {
    a: 1,
    b: 'dasfsadfhj',
    c: function name(params) {
        return 'string'
    },
    d: { key: true },
    e: ['hola'],
}

const newObject = {}

function deepCopy(currentObject, newObject) {
    for (key in currentObject) {
        if (typeof currentObject[key] !== 'object') {
            newObject[key] = currentObject[key]
        } else {
            newObject[key] = {}
            deepCopy(currentObject[key], newObject[key])
        }
    }
}

deepCopy(obj, newObject)

newObject.e[0] = 'Bye'

console.log(newObject)
console.log(obj === newObject)

console.log(obj.e[0], newObject.e[0])
console.log(newObject.e[0] === obj.e[0])