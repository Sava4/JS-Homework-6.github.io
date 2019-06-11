// How forEach loop works? By applying a callback function to each element of the original array one by one

let array = ['1', 2, '3', null, 20, undefined, NaN, 9, null, 42, 'string', null, '4', 5];

// const filterBy = (arr, dType) => {
//     return (arr.filter(el => typeof el !== dType))
// }

const checkType = (arg) => {
    switch (typeof (arg)) {
        case 'number':
            return 'number';
            break;
        case 'boolean':
            return 'boolean';
            break;
        case 'undefined':
            return 'undefined';
            break;
        case 'bigint':
            return 'bigint';
            break;
        case 'string':
            return 'string';
            break;
        case 'symbol':
            return 'symbol';
            break
        case 'function':
            return 'function';
            break;
            //Object vs Null check
        case 'object':
            if (arg === null) {
                return 'null';
            } else return 'object';
    }
} 

const filterBy = (arr, dType) => {
    let resultarr = []
    arr.forEach(el => { 
        if (checkType(el) !== dType) {
            resultarr.push(el);         
            }
        })
    return resultarr
}

console.log('This is a Boolean filter: ', filterBy(array, "boolean"));
console.log('This is a Null filter: ', filterBy(array, "null"));
console.log('This is an Object filter:', filterBy(array, "object"));
console.log('This is an Undefined filter: ', filterBy(array, "undefined"));
console.log('This is a Number filter: ', filterBy(array, "number"));
console.log('This is a BigInt filter: ', filterBy(array, "bigint"));
console.log('This is a String filter: ', filterBy(array, "string"));
console.log('This is a Symbol filter: ', filterBy(array, "symbol"));