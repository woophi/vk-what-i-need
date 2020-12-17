import { pick } from './pick';
export var arrayOfObjectsToDictionary = function (arrayToMap, keys, keyToMap) {
    return arrayToMap.reduce(function (hash, obj) {
        var objectKey = obj[keyToMap];
        if (typeof objectKey === 'string' ||
            typeof objectKey === 'number' ||
            typeof objectKey === 'symbol') {
            hash[objectKey] = pick(keys, obj);
            return hash;
        }
        else {
            throw new Error("Can only index over string or number or symbol values. You tried to index over a value of type " + typeof objectKey);
        }
    }, {});
};
//# sourceMappingURL=arrayOfObjectsToDictionary.js.map