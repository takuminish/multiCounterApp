import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
/**
 * カウンター追加モーダル
 */
@Component({
  selector: 'app-conterAddModal',
  templateUrl: './conterAddModal.component.html',
  styleUrls: ['./conterAddModal.component.scss']
})
export class ConterAddModalComponent implements OnInit {
  /** true: 追加モーダル表示, false: 追加モーダル非表示 */
  @Input() isAddModalOpen: boolean = false;

  /** 追加ボタン押下時イベント　追加対象のカウンタータイトルを返却する */
  @Output() addCounterEvent: EventEmitter<string> = new EventEmitter<string>();

  /** キャンセルボタン押下時イベント */
  @Output() cancelEvent: EventEmitter<void> = new EventEmitter<void>();

  /** カウンター追加フォーム */
  public addCounterForm = this.formBuilder.group({
    title: ['' as string]
  })
  /**
   * コンストラクタ
   */
  constructor(private formBuilder: FormBuilder) { }

  /**
   * コンポーネント生成時のイベント
   */
  ngOnInit() {

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
  onClickAddButton() {
    this.addCounterEvent.emit(this.addCounterForm.controls.title.value);
    this.addCounterForm.controls.title.setValue('');
  }
}
