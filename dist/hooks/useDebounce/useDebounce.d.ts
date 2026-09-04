export declare const useDebounce: <T, U>(delay: number, action: (value?: T) => U | Promise<U>) => {
    debounce: (value?: T) => Promise<U>;
};
export default useDebounce;
