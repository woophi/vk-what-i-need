export declare const useViewChange: <T = {}>(viewEnum: T, defaultKeyView: keyof T, withSwipe?: boolean) => {
    goBack: () => void;
    goForward: (activePanel: T[keyof T]) => void;
    activeView: T[keyof T];
    history: T[keyof T][];
};
