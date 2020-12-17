export var safeTrim = function (value) {
    if (typeof value === 'string') {
        return value.trim();
    }
    return value;
};
export var hexToRgba = function (hex, opacity) {
    if (opacity === void 0) { opacity = 1; }
    var bigint = parseInt(hex.replace(/[^0-9A-F]/gi, ''), 16);
    var r = (bigint >> 16) & 255;
    var g = (bigint >> 8) & 255;
    var b = bigint & 255;
    return "rgba(" + r + "," + g + "," + b + "," + opacity + ")";
};
var onlyRuLetters = /[^(а-яА-я|ёЁ|\-) ]/g;
export var shapeInputValue = function (v, options) {
    var _a = options.maxLength, maxLength = _a === void 0 ? 35 : _a, _b = options.onlyLetters, onlyLetters = _b === void 0 ? onlyRuLetters : _b;
    v = v.replace(onlyLetters, '');
    if (v.length > maxLength) {
        return v.slice(0, maxLength - 1);
    }
    return v;
};
//# sourceMappingURL=text-fromat.js.map