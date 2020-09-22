import { Component, OnInit } from '@angular/core';
import {ApiHttpService} from '../../api-http-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

contacts: any;

  constructor(private _api: ApiHttpService){
    this.contacts = this._api.getContacts().subscribe(result =>{
        this.contacts = result;
    });

  }

  ngOnInit(): void {
  }

}
