import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StorageService } from '../storage/storage.service';
import { Observable } from 'rxjs';

const BASE_URL="http://localhost:8081";

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http:HttpClient) { }

  register(signUpRequest:any){
    return this.http.post(`${BASE_URL}/api/auth/signup`,signUpRequest);
  }

  login(logInRequest:any):Observable<any>{
    return this.http.post(`${BASE_URL}/api/auth/log`,logInRequest);
  }

  createAuthorizationHeader():HttpHeaders{
    let authHeader:HttpHeaders=new HttpHeaders();
    return authHeader.set(
      'Authorization',
      'Bearer '+StorageService.getToken()
    );
  }
}
