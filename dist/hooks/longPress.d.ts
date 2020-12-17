/// <reference types="react" />
export declare const useLongPress: <T = Element>(onLongPress: (e?: import("react").MouseEvent<T, MouseEvent> | import("react").TouchEvent<T> | undefined) => void, { shouldPreventDefault, delay, stop }?: {
    shouldPreventDefault?: boolean | undefined;
    delay?: number | undefined;
    stop?: boolean | undefined;
}) => {
    onMouseDown: (e: import("react").MouseEvent<T, MouseEvent>) => void;
    onTouchStart: (e: import("react").TouchEvent<T>) => void;
    onMouseUp: () => void;
    onMouseLeave: () => void;
    onTouchEnd: () => void;
};
