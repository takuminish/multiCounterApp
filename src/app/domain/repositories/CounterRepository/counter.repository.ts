import { Injectable } from '@angular/core';
import { Counter } from '../../models/resources/counter.model';
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

}
