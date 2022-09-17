import { Count } from "./count.model";
import { CounterId } from "./counterId.model";

/**
 * カウンターモデル
 */
export interface Counter {
    /** id */
    id: CounterId;

    /** カウンタータイトル */
    title: string,

    /** カウント */
    count: Count
}