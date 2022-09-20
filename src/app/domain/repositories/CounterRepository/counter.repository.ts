import { Injectable } from '@angular/core';
import { Count } from '../../models/resources/count.model';
import { Counter } from '../../models/resources/counter.model';
import { CounterId } from '../../models/resources/counterId.model';
import { PromiseResult } from '../../models/result/result.type';

/**
 * カウンターに関わる外部とのやりとりを行うクラス
 */
@Injectable({
    providedIn: 'root'
})
export abstract class CounterRepository {

    /**
     * コンストラクタ
     */
    constructor() { }

    /**
     * <pre>
     * カウンター一覧を取得する。
     * 0件の場合は空の配列を返す
     * </pre>
     * @returns カウンター一覧
     * 
     */
    abstract fetchCounterList(): PromiseResult<Counter[], Error>

    /**
     * <pre>
     * 引数の情報でカウンターを1つ登録する。
     * true: 登録成功
     * </pre>
     * @param counter カウンター情報 
     */
    abstract addCounter(counter: Counter): PromiseResult<boolean, Error>

    /**
     * <pre>
     * 引数のidに合致するカウンターを削除する。
     * true: 登録成功
     * </pre>
     * @param counter カウンター情報 
     */
    abstract deleteCounterById(id: CounterId): PromiseResult<boolean, Error>

    /**
     * <pre>
     * 引数のidに合致するカウンターのカウントを引数のcount分加算する。
     * true: 登録成功
     * </pre>
     * @param counter カウンター情報 
     */
    abstract countPlusById(id: CounterId, count: Count): PromiseResult<boolean, Error>
}
