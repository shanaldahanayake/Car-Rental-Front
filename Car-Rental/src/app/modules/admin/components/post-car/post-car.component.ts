import { formatDate, NgFor, NgIf } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { HttpClient,HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { StorageService } from '../../../../auth/services/storage/storage.service';

@Component({
  selector: 'app-post-car',
  standalone: true,
  imports: [ReactiveFormsModule,NgIf,NgFor,HttpClientModule],
  templateUrl: './post-car.component.html',
  styleUrl: './post-car.component.css'
})
export class PostCarComponent {
  
  postCarForm!: FormGroup;
  listOfBrands = ["BMW", "AUDI", "TOYOTA", "HONDA", "KIA", "VOLVO", "NISSAN"];
  lisOfTypes = ["Petrol", "Hybrid", "Diesel", "Electric"];
  listOfColor = ["White", "Blue", "Red", "Black", "Silver"];
  listOfTransmission = ["Manual", "Automatic"];

  constructor(
    private fb: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit() {
    this.postCarForm = this.fb.group({
      brand: [null, Validators.required],
      model: [null, Validators.required],
      typeFuel: [null, Validators.required],
      transmission: [null, Validators.required],
      color: [null, Validators.required],
      price: [null, Validators.required],
      description: [null, Validators.required],
    });
  }

  postCar() {
    if (this.postCarForm.invalid) {
      console.error('Form is invalid');
      return;
    }

    const formData = new FormData();
    formData.append('brand', this.postCarForm.get("brand")?.value);
    formData.append('model', this.postCarForm.get("model")?.value);
    formData.append('typeFuel', this.postCarForm.get("typeFuel")?.value);
    formData.append('transmission', this.postCarForm.get("transmission")?.value);
    formData.append('color', this.postCarForm.get("color")?.value);
    formData.append('price', this.postCarForm.get("price")?.value);
    formData.append('description', this.postCarForm.get("description")?.value);

    this.postCarMethod(formData);
  }

  postCarMethod(carDto: FormData) {
    const headers = this.createAuthorizationHeader();

    this.http.post<any>('http://localhost:8081/api/admin/car', carDto)
      .subscribe({
        next: (res) => {
          console.log('Response:', res);
          this.router.navigateByUrl("/admin/dashboard");
        },
        error: (err) => {
          console.error('Error:', err);
  
        }
      });
  }

  createAuthorizationHeader(): HttpHeaders {
    let authHeader = new HttpHeaders();
    const token = StorageService.getToken();
    if (token) {
      authHeader = authHeader.set('Authorization', `Bearer ${token}`);
    } else {
      console.error('No token found in StorageService');
    }
    return authHeader;
  }

}
