import { Component } from '@angular/core';
import { from } from 'rxjs';
import {ApiHttpService} from './api-http-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'contact-app';
  
}
