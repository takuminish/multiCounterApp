import { Injectable } from '@angular/core';
import { Counter } from '../../models/resources/counter.model';
import { CounterId } from '../../models/resources/counterId.model';
import { PromiseResult } from '../../models/result/result.type';
import { CounterRepository } from '../../repositories/CounterRepository/counter.repository';

/**
 * カウンターの業務ロジックを記載したサービスクラス
 */
@Injectable({
  providedIn: 'root'
})
export class CounterService {

  /**
   * コンストラクタ
   * @param counterRepository 
   */
  constructor(private counterRepository: CounterRepository) { }

  /**
   * カウンター一覧を取得する
   */
  async fetchCounterList(): PromiseResult<Counter[], Error> {
    return this.counterRepository.fetchCounterList();

  }

  /**
   * カウンターを追加する
   * @param counter 
   * @returns 
   */
  async addCounter(counter: Counter): PromiseResult<Boolean, Error> {
    return this.counterRepository.addCounter(counter);
  }

  /**
 * idに合致するカウンターを削除する
 * @param id 
 * @returns 
 */
  async deleteCounterById(id: CounterId): PromiseResult<Boolean, Error> {
    return this.counterRepository.deleteCounterById(id);
  }
}
