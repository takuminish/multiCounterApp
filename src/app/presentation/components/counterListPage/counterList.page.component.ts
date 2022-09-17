import { Component, OnInit } from '@angular/core';
import { Count } from 'src/app/domain/models/resources/count.model';

@Component({
  selector: 'app-counterListPage',
  templateUrl: './counterList.page.component.html',
  styleUrls: ['./counterList.page.component.scss']
})
export class CounterListPageComponent implements OnInit {

  public counterList: { title: string, count: Count }[]
    = [
      { title: 'test1', count: new Count(0) }, { title: 'test2', count: new Count(1) }, { title: 'test3', count: new Count(2) }
    ];

  constructor() { }

  ngOnInit() {

  }

}
