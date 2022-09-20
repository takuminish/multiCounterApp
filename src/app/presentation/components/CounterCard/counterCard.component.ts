import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Count } from 'src/app/domain/models/resources/count.model';
import { Counter } from 'src/app/domain/models/resources/counter.model';
import { CounterId } from 'src/app/domain/models/resources/counterId.model';

/**
 * カウンター
 */
@Component({
  selector: 'app-CounterCard',
  templateUrl: './counterCard.component.html',
  styleUrls: ['./counterCard.component.scss']
})
export class CounterCardComponent implements OnInit {

  /** カウンター */
  @Input() counter: Counter;

  /** タップ時イベント */
  @Output() countUpEvent: EventEmitter<CounterId> = new EventEmitter<CounterId>();

  /**
   * コンストラクタ
   */
  constructor() {
  }

  /**
   * コンポーネント生成時
   */
  ngOnInit() {
  }

  /**
   * カウンタータップ時
   * タップ時イベントを発火させる
   */
  onClickCounter() {
    this.countUpEvent.emit(this.counter.id);
  }

}
