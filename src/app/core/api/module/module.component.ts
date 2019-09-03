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

  endpoints: Endpoint[];

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit() {
    this.init();
  }

  private async init() {
    this.endpoints = await this.apiService.getModuleEnpoints(this.module.id).toPromise();
  }
}
