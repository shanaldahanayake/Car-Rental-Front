import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, Validators, ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [RouterLink, FormsModule, NgIf, HttpClientModule, ReactiveFormsModule], 
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {

  signUpData={
    email:null,
    password:null,
    name:null
  }

  constructor(private fb: FormBuilder,private http:HttpClient,private service:AuthService) {}


  signUp() {

    this.service.register(this.signUpData).subscribe({
      next:res=>{
        console.log(res);
      },
      error:err=>{
        console.log(err);      
      }
    })
  }
}
