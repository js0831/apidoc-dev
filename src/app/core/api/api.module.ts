import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { ApiRoutingModule } from './api.routing-module';
import { ApiComponent } from './api.component';
import { ModuleComponent } from './module/module.component';
import { EndpointComponent } from './endpoint/endpoint.component';

@NgModule({
  declarations: [
    ApiComponent,
    ModuleComponent,
    EndpointComponent
  ],
  imports: [
    CommonModule,
    ApiRoutingModule
  ],
  exports: [
  ]
})
export class ApiModule { }
