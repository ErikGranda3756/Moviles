import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SupportRoutingModule } from './support-routing.module';
import { PageListComponent } from './pages/page-list/page-list.component';


@NgModule({
  declarations: [
    PageListComponent
  ],
  imports: [
    CommonModule,
    SupportRoutingModule
  ]
})
export class SupportModule { }
