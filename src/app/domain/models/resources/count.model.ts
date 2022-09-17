import { IllegalArgumentError } from "src/app/error/IllegalArgumentError.error";

/**
 * <pre>
 * カウント
 * 正の整数のみ
 * </pre>
 * 
 */
export class Count {

    /** カウント */
    count: number;

    /**
     * コンストラクタ
     * @param count 
     * @throws countが負数の場合
     */
    constructor(count: number) {
        if (count < 0) {
            throw new IllegalArgumentError<number>('カウントに負数は格納できません。', count);
        }
        this.count = count;
    }
}