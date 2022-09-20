import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ConterDeleteModalComponent } from './conterDeleteModal.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
  ],
  declarations: [ConterDeleteModalComponent],
  exports: [ConterDeleteModalComponent]
})
export class CounterDeleteModalModule { }
