import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Count } from 'src/app/domain/models/resources/count.model';
import { Counter } from 'src/app/domain/models/resources/counter.model';
import { Result } from 'src/app/domain/models/result/result.type';
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
  constructor(private alertController: AlertController, private counterService: CounterService) { }

  /**
   * コンポーネント生成時
   * カウンター一覧を取得する
   */
  async ngOnInit() {
    this.counterList = await this.fetchCounterList();
  }

  /**
   * カウンター追加用FABボタン押下時
   * カウンターを1つ追加し、最新データを取得する
   */
  async onClickAddCounterFabButton() {
    this.addCounter('test');

    this.counterList = await this.fetchCounterList();
  }



  /**
   * カウンター一覧を取得する
   * @returns カウンター一覧
   */
  async fetchCounterList(): Promise<Counter[]> {
    const fetchCounterListResult: Result<Counter[], Error> = await this.counterService.fetchCounterList();

    // trueの場合、異常系のためエラーハンドリング
    // falseの場合、正常系の処理を行う
    if (fetchCounterListResult.isFailure()) {
      // エラーをコンソール出力し、ダイアログの表示
      console.error(fetchCounterListResult.error.stack);
      this.displayErrorAlert(fetchCounterListResult.error.message);

    } else {
      // カウンター一覧を返す
      return fetchCounterListResult.value;
    }
  }

  /**
   * カウンターを1つ追加する
   * カウントの初期値は0
   * @param title カウンター名
   * @returns true 処理成功
   */
  async addCounter(title: string): Promise<Boolean> {

    // 登録するカウンター情報
    const counter: Counter = {
      title: title,
      count: new Count(0)
    }

    const addCounterResult: Result<Boolean, Error> = await this.counterService.addCounter(counter);

    // trueの場合、異常系のためエラーハンドリング
    // falseの場合、正常系の処理を行う
    if (addCounterResult.isFailure()) {
      // エラーをコンソール出力し、ダイアログの表示
      console.error(addCounterResult.error.stack);
      this.displayErrorAlert(addCounterResult.error.message);
    } else {
      // 成功時は必ずtrue
      return addCounterResult.value;
    }
  }



  /**
   * エラーダイアログの表示
   * @param errorMessage エラーメッセージ
   */
  private async displayErrorAlert(errorMessage: string) {

    const alert = await this.alertController.create({
      header: 'エラー',
      message: `${errorMessage}`,
      buttons: ['OK'],
    });

    await alert.present();
  }

}
