import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api'
@Injectable({
  providedIn: 'root'
})
export class DataStoreService implements InMemoryDbService{

  constructor() { }


  createDb(){
    let contacts =[
      {id:1, name:'Thapelo', surname:'Motene',relationship:'Me', phone:'0762906973'},
      {id:2, name:'Mogwera', surname:'Motene',relationship:'Me', phone:'0762906974'},
      {id:3, name:'Thaps', surname:'Motene',relationship:'Me', phone:'0762906975'},
      {id:4, name:'Joe', surname:'Soap',relationship:'Me', phone:'0762906976'},
      {id:5, name:'John', surname:'Smith',relationship:'Me', phone:'0762906977'}
    ];

    return {contacts};
  }
}
