import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {
  [x: string]: any;
  setToken(token: any) {
    throw new Error('Method not implemented.');
  }
  _url="http://localhost:3000/";

  // noAuthHeader ={header : new HttpHeaders({'noAuth':'True'})}
 
 
  constructor(private _http:HttpClient) { }

  SubmitUser (userInformation):Observable<any>{
    return this._http.post(this._url,userInformation)
  }

  LoginUser(userInformationLogin):Observable<any>{
    return this._http.post(this._url+'login',userInformationLogin)
  }
  
  
 
   getAllProduct(){
   let header = new HttpHeaders().set("Authorization",'Bearer '+localStorage.getItem('token'));
      return this._http.get(this._url+'all-user',{headers :header})
  }
  
  getToken(){
    return localStorage.getItem('token');
   }
}
