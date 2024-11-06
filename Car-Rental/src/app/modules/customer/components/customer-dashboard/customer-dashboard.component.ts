import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { StorageService } from '../../../../auth/services/storage/storage.service';
import { CustomerService } from '../../services/customer.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-customer-dashboard',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './customer-dashboard.component.html',
  styleUrl: './customer-dashboard.component.scss'
})
export class CustomerDashboardComponent {

  public cars:any=[];

  constructor(private customerService:CustomerService) { }

  ngOnInit(){
    this.loadCars();
  }

  loadCars(){
    this.customerService.getAllCars().subscribe({
      next:res=>{
        res.forEach((element:any)=>{
          this.cars.push(element);
        })
      },
      error:error=>{

      }
    })
  }
  
}
