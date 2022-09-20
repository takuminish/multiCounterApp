import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { IonMenuToggle } from '@ionic/angular';
import { Counter } from 'src/app/domain/models/resources/counter.model';
import { CounterId } from 'src/app/domain/models/resources/counterId.model';

/** isChecked: true チェック中 */
interface CoutnerChecked {
  counter: Counter,
  isChecked: boolean

}

/**
 * カウンター削除モーダル
 */
@Component({
  selector: 'app-conterDeleteModal',
  templateUrl: './conterDeleteModal.component.html',
  styleUrls: ['./conterDeleteModal.component.scss']
})
export class ConterDeleteModalComponent implements OnInit, OnChanges {
  /** true: 削除モーダル表示, false: 削除モーダル非表示 */
  @Input() isDeleteModalOpen: boolean = false;

  /** カウンタ一覧 */
  @Input() counterList: Counter[] = [];

  /** カウンターチェック一覧 */
  counterCheckedList: CoutnerChecked[] = [];

  /** 削除ボタン押下時イベント　削除対象のカウンターIDを返却する */
  @Output() deleteCounterEvent: EventEmitter<CounterId[]> = new EventEmitter<CounterId[]>();

  /** キャンセルボタン押下時イベント */
  @Output() cancelEvent: EventEmitter<void> = new EventEmitter<void>();

  /**
   * コンストラクタ
   */
  constructor() { }

  /**
   * コンポーネント生成時のイベント
   */
  ngOnInit() {

  }

  ngOnChanges() {
    //外部から受け取ったカウンター一覧から、カウンターチェック一覧を作成する
    //初期値はfalse(未チェック)
    this.counterCheckedList = this.counterList.map(c => {
      return {
        counter: c,
        isChecked: false
      }
    }
    )
  }

  /**
   * キャンセルボタン押下時
   */
  onClickCancelButton() {
    this.cancelEvent.emit();
  }

  /**
   * 削除ボタン押下時
   * 削除対象のカウンターIDを返すイベントを発火させる
   */
  onClickDeleteButton() {
    const deleteCounterIdList: CounterId[] = this.counterCheckedList.filter(c => c.isChecked).map(c => c.counter.id)

    this.deleteCounterEvent.emit(deleteCounterIdList);
  }

  /**
   * true: 一つでもチェックをつけている
   */
  isCounterChecked(): boolean {
    return this.counterCheckedList.some(c => c.isChecked);

  }
}
