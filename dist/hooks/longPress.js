import { useCallback, useEffect, useRef } from 'react';
export var useLongPress = function (onLongPress, _a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.shouldPreventDefault, shouldPreventDefault = _c === void 0 ? false : _c, _d = _b.delay, delay = _d === void 0 ? 500 : _d, _e = _b.stop, stop = _e === void 0 ? false : _e;
    var timeout = useRef();
    var target = useRef();
    useEffect(function () {
        if (stop) {
            clearTimeout(timeout.current);
        }
    }, [stop]);
    var start = useCallback(function (e) {
        if (shouldPreventDefault && e.target) {
            e.target.addEventListener('touchend', preventDefault, {
                passive: false
            });
            target.current = e.target;
        }
        timeout.current = setTimeout(function () {
            onLongPress(e);
        }, delay);
    }, [onLongPress, delay, shouldPreventDefault, stop]);
    var clear = useCallback(function () {
        timeout.current && clearTimeout(timeout.current);
        if (shouldPreventDefault && target.current) {
            target.current.removeEventListener('touchend', preventDefault);
        }
    }, [shouldPreventDefault]);
    return {
        onMouseDown: function (e) { return start(e); },
        onTouchStart: function (e) { return start(e); },
        onMouseUp: function () { return clear(); },
        onMouseLeave: function () { return clear(); },
        onTouchEnd: function () { return clear(); }
    };
};
var isTouchEvent = function (e) {
    return 'touches' in e;
};
var preventDefault = function (e) {
    if (!isTouchEvent(e))
        return;
    if (e.preventDefault) {
        e.preventDefault();
    }
};
//# sourceMappingURL=longPress.js.map