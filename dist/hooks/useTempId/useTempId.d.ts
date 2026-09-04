export declare const useTempId: () => {
    getIdGenerator: (preexistingIds: number[]) => {
        next: () => number;
    };
};
export default useTempId;
