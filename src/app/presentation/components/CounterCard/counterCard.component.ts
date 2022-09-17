import { Component, Input, OnInit } from '@angular/core';
import { Count } from 'src/app/domain/models/resources/count.model';

@Component({
  selector: 'app-CounterCard',
  templateUrl: './counterCard.component.html',
  styleUrls: ['./counterCard.component.scss']
})
export class CounterCardComponent implements OnInit {

  /** カウンターのタイトル */
  @Input() title: string = '';

  /** カウンター */
  @Input() counter: Count = new Count(0);

  constructor() { }

  ngOnInit() {
  }

}
