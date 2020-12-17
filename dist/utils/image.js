export var getImage = function (src) {
    return new Promise(function (res, rej) {
        var image = new Image();
        image.onload = function () { return res(image); };
        image.crossOrigin = 'anonymous';
        image.onstalled = function (e) {
            console.error('Failed to fetch data, but trying.', e);
            rej(e);
        };
        image.onerror = function (e) {
            console.error('Failed to fetch data, error.', e);
            rej(e);
        };
        image.src = src;
    });
};
//# sourceMappingURL=image.js.map