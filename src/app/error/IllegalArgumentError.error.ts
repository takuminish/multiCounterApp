/**
 * 不正な引数が格納された状態でメソッドが実行されたことを示すError
 */
export class IllegalArgumentError<T> extends Error {
    /**
     * コンストラクタ
     * @param message 
     */
    constructor(message?: string, errorData?: T) {
        super(`${message}: ${errorData}`);
        this.name = 'IllegalArgumentError';
    }
}
