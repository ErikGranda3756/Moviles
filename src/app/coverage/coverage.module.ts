import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoverageRoutingModule } from './coverage-routing.module';
import { PageListComponent } from './pages/page-list/page-list.component';


@NgModule({
  declarations: [
    PageListComponent
  ],
  imports: [
    CommonModule,
    CoverageRoutingModule
  ]
})
export class CoverageModule { }
