import { Injectable } from '@angular/core';
import { Count } from 'src/app/domain/models/resources/count.model';
import { Counter } from 'src/app/domain/models/resources/counter.model';
import { CounterRepository } from 'src/app/domain/repositories/CounterRepository/counter.repository';

/**
 * カウンターに関わる外部とのやりとりを行うクラス(モック)
 */
@Injectable({
    providedIn: 'root'
})
export class MockCounterRepository extends CounterRepository {

    /**
     * コンストラクタ
     */
    constructor() {
        super();
    }

    /**
     * {@inheritdoc}
     */
    async fetchCounterList(): Promise<Counter[]> {
        return [
            { title: 'test1', count: new Count(0) }, { title: 'test2', count: new Count(1) }, { title: 'test3', count: new Count(2) }
        ];

    }

}
