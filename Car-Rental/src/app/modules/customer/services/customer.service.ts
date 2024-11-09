import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from '../../../auth/services/storage/storage.service';

const url="http://localhost:8081";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http:HttpClient) { }

  getAllCars():Observable<any>{
    return this.http.get(`${url}/api/customer/car`,{
      headers:this.createAuthorizationHeader()
    });
  }

  getCarById(carId:number):Observable<any>{
    return this.http.get(`${url}/api/customer/car/${carId}`,{
      headers:this.createAuthorizationHeader()
    });
  }

  getAllBookingsById(userId:string):Observable<any>{
    return this.http.get(`${url}/api/customer/car/bookings/${userId}`,{
      headers:this.createAuthorizationHeader()
    });
  }

  bookACar(bookACar:any):Observable<any>{
    return this.http.post(`${url}/api/customer/car/book`,bookACar,{
      headers:this.createAuthorizationHeader()
    });
  }

  createAuthorizationHeader():HttpHeaders{
    let authHeader:HttpHeaders=new HttpHeaders();
    return authHeader.set(
      'Authorization',
      'Bearer '+StorageService.getToken()
    );
  }
}
