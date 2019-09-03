import { Component, OnInit, Input } from '@angular/core';
import { Endpoint } from '../api.interfaces';

@Component({
  selector: 'app-endpoint',
  templateUrl: './endpoint.component.html',
  styleUrls: ['./endpoint.component.scss']
})
export class EndpointComponent implements OnInit {

  @Input() endpoint: Endpoint;
  @Input() expand = false;
  isRequestBody = true;

  data = {
    name: 'Jener'
  };

  constructor() {
  }

  ngOnInit() {
    this.isRequestBody = (typeof this.endpoint.json.request) === 'object';
  }

}
