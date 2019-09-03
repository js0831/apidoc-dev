import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { Project, Module } from './api.interfaces';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.scss']
})
export class ApiComponent implements OnInit {

  project: Project;
  projectModules: Module[];
  selectedProjectModule: Module;

  private projectId: string;

  constructor(
    private route: ActivatedRoute,
    private apiService: ApiService
  ) {
    this.projectId = this.route.snapshot.paramMap.get('project');
  }

  ngOnInit() {
    this.init();
  }

  private async init() {
    this.project = await this.apiService.getProject(this.projectId).toPromise();
    this.projectModules = await this.apiService.getProjectModules(this.project.id).toPromise();
  }

  selectModule(m: Module) {
    this.selectedProjectModule = m;
  }
}
