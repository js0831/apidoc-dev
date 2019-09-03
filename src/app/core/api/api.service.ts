import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Project, Module, Endpoint } from './api.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(
    private http: HttpClient
  ) { }

  getProject(name: string): Observable<Project> {
    const url = this.getJSONPath('projects');
    return this.http.get(url).pipe(
      map(result => {
        return result[name] || of(null);
      })
    );
  }

  getProjectModules(projectId: string): Observable<Module[]> {
    const url = this.getJSONPath('modules');
    return this.http.get(url).pipe(
      map(result => {
        return result[projectId];
      })
    );
  }

  getModuleEnpointJSON(moduleId: string): Observable<string> {
    const url = this.getJSONPath('endpoints');
    return this.http.get(url).pipe(
      map(result => {
        return result[moduleId];
      })
    );
  }

  getModuleEnpoints(json: string): Observable<Endpoint[]> {
    const url = this.getJSONPath(json);
    return this.http.get(url).pipe(
      map((result: any) => {
        return result.data;
      })
    );
  }

  private getJSONPath(name: string) {
    return `assets/json/${name}.json`;
  }
}
