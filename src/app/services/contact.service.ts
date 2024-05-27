import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { contactinterface,contactinterfaceFedBack } from '../Models/contact-form-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
api:string='https://testapisaeed.free.beeceptor.com/todos';
  constructor(private http:HttpClient) { }

  sendcontactForm(data:contactinterface):Observable<contactinterfaceFedBack>{
   return this.http.post(this.api,data) as Observable<contactinterfaceFedBack>;
   
  }
}
