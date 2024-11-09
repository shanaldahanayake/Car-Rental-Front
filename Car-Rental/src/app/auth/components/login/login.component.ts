import { NgIf } from '@angular/common';
import { HttpClient,HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { StorageService } from '../../services/storage/storage.service';
import { CustomerService } from '../../../modules/customer/services/customer.service';
import { AuthService } from '../../services/auth/auth.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,RouterLink,NgIf,HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  login={
    email:null,
    password:null
  }

  constructor(private http:HttpClient,private router:Router,private service:AuthService){}

  loginAccess(){

    this.service.login(this.login).subscribe({
      next:res=>{
        if(res.userId!=null){
          const user={
            id:res.userId,
            role:res.userRole
          }
          StorageService.saveUser(user);
          StorageService.saveToken(res.jwt);
          if(StorageService.isAdminLogged()){
            console.log(StorageService.getUser);
            this.router.navigateByUrl("/admin/dashboard")
          }else{
            this.router.navigateByUrl("/customer/dashboard")
          }
        }  
      },
      error:err=>{
        console.log(err); 
      }
    })
  }
}
