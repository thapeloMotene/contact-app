import { Component, OnInit } from '@angular/core';
import {ApiHttpService} from '../../api-http-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

contacts: any;
filteredContacts:any;
searchKey:string;

  constructor(private _api: ApiHttpService){
    this.contacts = this._api.getContacts().subscribe(result =>{
        this.contacts = result;
        this.filteredContacts= result;
    });

  }


  onKeyUp(e){
    console.log("[keyup]:",e.target.value);
    this.searchKey = e.target.value;

    this.filteredContacts = this.contacts.filter(contact => {return contact['name'].includes(this.searchKey)  || contact['surname'].includes(this.searchKey)})

  }

  ngOnInit(): void {
  }

}
