import { Component, OnInit } from '@angular/core';
import { Count } from 'src/app/domain/models/resources/count.model';
import { Counter } from 'src/app/domain/models/resources/counter.model';
import { CounterService } from 'src/app/domain/services/CounterService/counter.service';

/**
 * カウンター一覧表示画面
 */
@Component({
  selector: 'app-counterListPage',
  templateUrl: './counterList.page.component.html',
  styleUrls: ['./counterList.page.component.scss']
})
export class CounterListPageComponent implements OnInit {

  /** カウンター一覧 */
  public counterList: Counter[] = [];

  /**
   * コンストラクタ
   * @param counterService 
   */
  constructor(private counterService: CounterService) { }

  /**
   * コンポーネント生成時
   * カウンター一覧を取得する
   */
  async ngOnInit() {
    this.counterList = await this.fetchCounterList();

  }

  /**
   * カウンター一覧を取得する
   * @returns カウンター一覧
   */
  async fetchCounterList(): Promise<Counter[]> {
    return this.counterService.fetchCounterList();
  }

}
