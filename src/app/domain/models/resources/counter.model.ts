import { Count } from "./count.model";

/**
 * カウンターモデル
 */
export interface Counter {

    /** カウンタータイトル */
    title: string,

    /** カウント */
    count: Count
}