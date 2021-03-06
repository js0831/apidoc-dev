import { Component, OnInit, Input } from '@angular/core';
import { Module, Endpoint } from '../api.interfaces';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.scss']
})
export class ModuleComponent implements OnInit {

  @Input() module: Module;
  @Input() expand = false;

  endpointJSON: string;
  endpoints: Endpoint[];

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.init();
  }

  private async init() {
    this.endpointJSON = await this.apiService.getModuleEnpointJSON(this.module.id).toPromise();
    this.endpoints = await this.apiService.getModuleEnpoints(this.endpointJSON).toPromise();
    console.log(this.endpoints);
  }
}
