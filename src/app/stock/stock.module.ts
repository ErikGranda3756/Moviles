import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockRoutingModule } from './stock-routing.module';
import { PageListComponent } from './pages/page-list/page-list.component';


@NgModule({
  declarations: [
    PageListComponent
  ],
  imports: [
    CommonModule,
    StockRoutingModule
  ]
})
export class StockModule { }
