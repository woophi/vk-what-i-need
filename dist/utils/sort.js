export var sortByCreated = function (f, n) {
    return new Date(n.created).getTime() - new Date(f.created).getTime();
};
//# sourceMappingURL=sort.js.map