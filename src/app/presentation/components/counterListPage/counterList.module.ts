import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CounterListPageModuleRoutingModule } from './counterList-routing.module';
import { CounterListPageComponent } from './counterList.page.component';
import { CounterCardModule } from '../CounterCard/counterCard.module';
import { CounterDeleteModalModule } from '../conterDeleteModal/counterDeleteModal.module';
import { CounterAddModalModule } from '../conterAddModal/counterAddModal.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    CounterCardModule,
    CounterListPageModuleRoutingModule,
    CounterDeleteModalModule,
    CounterAddModalModule

  ],
  declarations: [CounterListPageComponent]
})
export class CounterListPageModule { }
