export declare const arrayOfObjectsToDictionary: <T extends {
    [x: string]: T[keyof T];
    [x: number]: T[keyof T];
}>(arrayToMap: T[], keys: (keyof T)[], keyToMap: keyof T) => { [key in keyof T]?: Pick<T, keyof T> | undefined; };
