import { Injectable } from '@angular/core';
import { Count } from 'src/app/domain/models/resources/count.model';
import { Counter } from 'src/app/domain/models/resources/counter.model';
import { Failure, PromiseResult, Success } from 'src/app/domain/models/result/result.type';
import { CounterRepository } from 'src/app/domain/repositories/CounterRepository/counter.repository';
import { mockCounterList } from 'src/assets/mock/counter.mock';

/**
 * カウンターに関わる外部とのやりとりを行うクラス(モック)
 */
@Injectable({
    providedIn: 'root'
})
export class MockCounterRepository extends CounterRepository {

    private mockCounterList = mockCounterList;

    /**
     * コンストラクタ
     */
    constructor() {
        super();
    }

    /**
     * {@inheritdoc}
     */
    async fetchCounterList(): PromiseResult<Counter[], Error> {
        return new Success(this.mockCounterList);

        // return new Failure(new Error('エラーです。'));
    }

    /**
     * 
     * {@inheritdoc}
     */
    async addCounter(counter: Counter): PromiseResult<boolean, Error> {
        this.mockCounterList = [...this.mockCounterList, counter];
        return new Success(true);
        // return new Failure(new Error('登録エラー'));
    }

}
