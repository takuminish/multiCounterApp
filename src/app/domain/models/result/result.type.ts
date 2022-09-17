
/**
 * 正常系、異常系を表す型
 */
export type Result<T, E extends Error> = Success<T> | Failure<E>;

/**
 * 正常系、異常系を表す型(Promise)
 */
export type PromiseResult<T, E extends Error> = Promise<Result<T, E>>;

/**
 * 正常系を表す
 */
export class Success<T> {
    /** 正常系の場合の戻り値 */
    readonly value: T;

    /**
     * コンストラクタ
     * @param value 
     */
    constructor(value: T) {
        this.value = value;
    }

    /** 正常系であるため必ず true */
    isSuccess(): this is Success<T> {
        return true;
    }

    /** 正常系であるため必ず false */
    isFailure(): this is Failure<Error> {
        return false;
    }
}

/**
 * 異常系を表す
 */
export class Failure<E extends Error> {
    /** 異常系のエラー */
    readonly error: E;

    /**
     * コンストラクタ
     * @param error 
     */
    constructor(error: E) {
        this.error = error;
    }

    /** 異常系であるため必ず false*/
    isSuccess(): this is Success<unknown> {
        return false;
    }

    /** 異常系であるため必ず true */
    isFailure(): this is Failure<E> {
        return true;
    }
}