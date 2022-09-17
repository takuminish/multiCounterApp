import { IllegalArgumentError } from "src/app/error/IllegalArgumentError.error";

/**
 * <pre>
 * カウントID
 * 正の整数のみ
 * </pre>
 * 
 */
export class CounterId {

    /** カウント */
    id: number;

    /**
     * コンストラクタ
     * @param count 
     * @throws countが負数の場合
     */
    constructor(id: number) {
        if (id <= 0) {
            throw new IllegalArgumentError<number>('カウンターIDに0以下の値は格納できません。', id);
        }
        this.id = id;
    }
}