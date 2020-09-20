import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
@Injectable({
  providedIn: 'root'
})
export class ApiHttpServiceService {
  public static readonly BASE_URL = 'api';


  constructor(private _http: HttpClient) { }

  private buildRequestUrl(path: string): string {
    return ApiHttpServiceService.BASE_URL+'/' + path;
    }

  public getContacts(){
      return this._http.get(this.buildRequestUrl('contacts'));
  }


  public createContact(contact:any){
        return this._http.post(this.buildRequestUrl('contacts'), contact);
  }

  public getContact(id){
    return this._http.get(this.buildRequestUrl(`contacts/${id}`));
  }

  public updateContact(contact:any){
    return this._http.put(this.buildRequestUrl(`contacts/${contact.id}`), contact);
}
  
}
