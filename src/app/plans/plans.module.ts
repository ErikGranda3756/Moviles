import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlansRoutingModule } from './plans-routing.module';
import { PageListComponent } from './pages/page-list/page-list.component';


@NgModule({
  declarations: [
    PageListComponent
  ],
  imports: [
    CommonModule,
    PlansRoutingModule
  ]
})
export class PlansModule { }
