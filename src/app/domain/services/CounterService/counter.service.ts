import { Injectable } from '@angular/core';
import { Counter } from '../../models/resources/counter.model';
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
  async fetchCounterList(): Promise<Counter[]> {
    return this.counterRepository.fetchCounterList();

  }
}
