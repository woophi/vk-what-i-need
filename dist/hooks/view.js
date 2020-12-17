import { __spreadArrays } from "tslib";
import { vkBridge } from 'core/vk-bridge/instance';
import { useState, useMemo } from 'react';
export var useViewChange = function (viewEnum, defaultKeyView, withSwipe) {
    if (withSwipe === void 0) { withSwipe = false; }
    var defaultView = useMemo(function () { return viewEnum[defaultKeyView]; }, [viewEnum, defaultKeyView]);
    var _a = useState({
        activePanel: defaultView,
        h: [defaultView]
    }), viewState = _a[0], setView = _a[1];
    var goBack = function () {
        if (viewState.h.length === 1) {
            return;
        }
        var localH = __spreadArrays(viewState.h);
        localH.pop();
        var activePanel = localH[localH.length - 1];
        if (activePanel === defaultView && withSwipe) {
            vkBridge.send('VKWebAppDisableSwipeBack');
        }
        setView({ h: localH, activePanel: activePanel });
    };
    var goForward = function (activePanel) {
        var localH = __spreadArrays(viewState.h);
        localH.push(activePanel);
        if (viewState.activePanel === defaultView && withSwipe) {
            vkBridge.send('VKWebAppEnableSwipeBack');
        }
        setView({ h: localH, activePanel: activePanel });
    };
    return {
        goBack: goBack,
        goForward: goForward,
        activeView: viewState.activePanel,
        history: viewState.h
    };
};
//# sourceMappingURL=view.js.map