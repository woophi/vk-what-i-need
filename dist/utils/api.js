export var buildQueryString = function (items) {
    var joined = items
        .map(function (it) {
        var key = Object.keys(it)[0];
        return key + "=" + (typeof it[key] === 'object' ? JSON.stringify(it[key]) : encodeURI(it[key]));
    })
        .join('&');
    return joined.length > 0 ? '?' + joined : '';
};
//# sourceMappingURL=api.js.map