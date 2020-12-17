export declare const safeTrim: (value: string) => string;
export declare const hexToRgba: (hex: string, opacity?: number) => string;
declare type Options = {
    onlyLetters?: RegExp;
    maxLength?: number;
};
export declare const shapeInputValue: (v: string, options: Options) => string;
export {};
