import { useEffect, useRef } from 'react';
export var useInterval = function (callback, delay) {
    var savedCallback = useRef();
    // Remember the latest callback.
    useEffect(function () {
        savedCallback.current = callback;
    }, [callback]);
    // Set up the interval.
    useEffect(function () {
        function tick() {
            if (savedCallback.current)
                savedCallback.current();
        }
        if (delay !== null) {
            var id_1 = setInterval(tick, delay);
            return function () { return clearInterval(id_1); };
        }
        return function () {
            // do nothing
        };
    }, [delay]);
};
//# sourceMappingURL=interval.js.map