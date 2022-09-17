import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterRepository } from './domain/repositories/CounterRepository/counter.repository';
import { MockCounterRepository } from './infra/repositories/CounterRepository/counter.mock.repository';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, { provide: CounterRepository, useClass: MockCounterRepository }],
  bootstrap: [AppComponent],
})
export class AppModule { }
