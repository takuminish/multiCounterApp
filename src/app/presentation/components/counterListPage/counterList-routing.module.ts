import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CounterListPageComponent } from './counterList.page.component';

const routes: Routes = [
  {
    path: 'counter',
    component: CounterListPageComponent,
  },
  {
    path: '',
    redirectTo: 'counter',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class CounterListPageModuleRoutingModule { }
