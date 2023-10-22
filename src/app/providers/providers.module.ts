import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProvidersRoutingModule } from './providers-routing.module';
import { PageListComponent } from './pages/page-list/page-list.component';


@NgModule({
  declarations: [
    PageListComponent
  ],
  imports: [
    CommonModule,
    ProvidersRoutingModule
  ]
})
export class ProvidersModule { }
