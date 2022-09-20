import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConterAddModalComponent } from './conterAddModal.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [ConterAddModalComponent],
  exports: [ConterAddModalComponent]
})
export class CounterAddModalModule { }
