import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from '../../../auth/services/storage/storage.service';

const url="http://localhost:8081"

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http:HttpClient) { }

  postCar(carDto:any):Observable<any>{
    return this.http.post(`${url}/api/admin/car`,carDto,{
      headers:this.createAuthorizationHeader()
    });
  }

  getAllCars():Observable<any>{
    return this.http.get(`${url}/api/admin/car`,{
      headers:this.createAuthorizationHeader()
    });
  }
  getAllCarsByBrand(brand:any):Observable<any>{
    return this.http.get(`${url}/api/admin/car/search`,{
      params: brand ,
      headers:this.createAuthorizationHeader()
    });
  }
  getAllCarsByType(type:any):Observable<any>{
    return this.http.get(`${url}/api/admin/car/search`,{
      params: type,
      headers:this.createAuthorizationHeader()
    });
  }
  getAllCarsByTransmission(transmission:any):Observable<any>{
    return this.http.get(`${url}/api/admin/car/search`,{
      params:transmission ,
      headers:this.createAuthorizationHeader()
    });
  }
  getAllCarsByColor(color:any):Observable<any>{
    return this.http.get(`${url}/api/admin/car/search`,{
      params:  color ,
      headers:this.createAuthorizationHeader()
    });
  }

  deleteCar(id:number):Observable<any>{
    return this.http.delete(`${url}/api/admin/car/${id}`,{
      headers:this.createAuthorizationHeader()
    });
  }

  updateCar(data:any):Observable<any>{
    return this.http.put(`${url}/api/admin/car`,data,{
      headers:this.createAuthorizationHeader()
    });
  }

  getAllBookings():Observable<any>{
    return this.http.get(`${url}/api/admin/bookings`,{
      headers:this.createAuthorizationHeader()
    });
  }

  respondBooking(id:number,status:string):Observable<any>{
    return this.http.post(`${url}/api/admin/bookings/${id}/${status}`,{
      headers:this.createAuthorizationHeader()
    })
  }

  createAuthorizationHeader():HttpHeaders{
    let authHeader:HttpHeaders=new HttpHeaders();
    return authHeader.set(
      'Authorization',
      'Bearer '+StorageService.getToken()
    );
  }
}
