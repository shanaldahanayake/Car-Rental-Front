import { CommonModule, formatDate, NgFor, NgIf } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { HttpClient,HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { StorageService } from '../../../../auth/services/storage/storage.service';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-post-car',
  standalone: true,
  imports: [ReactiveFormsModule,NgIf,NgFor,HttpClientModule,CommonModule,FormsModule],
  templateUrl: './post-car.component.html',
  styleUrl: './post-car.component.css'
})
export class PostCarComponent {
  
  postCarForm!: FormGroup;
  listOfBrands = ["BMW", "AUDI", "TOYOTA", "HONDA", "KIA", "VOLVO", "NISSAN"];
  lisOfTypes = ["Petrol", "Hybrid", "Diesel", "Electric"];
  listOfColor = ["White", "Blue", "Red", "Black", "Silver"];
  listOfTransmission = ["Manual", "Automatic"];

  public car={
    brand: "",
    model: "",
    typeFuel: "",
    transmission: "",
    color: "",
    price: "",
    description: ""
  }

  constructor(private service:AdminService) {}


  postCarMethod() {
    this.service.postCar(this.car).subscribe({
      next:res=>{
        console.log(res);
        
      },
      error:err=>{
        console.log(err);
        
      }
    })
  }
}
