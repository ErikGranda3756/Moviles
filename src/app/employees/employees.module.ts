import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { PageListComponent } from './pages/page-list/page-list.component';


@NgModule({
  declarations: [
    PageListComponent
  ],
  imports: [
    CommonModule,
    EmployeesRoutingModule
  ]
})
export class EmployeesModule { }
