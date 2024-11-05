import { Component } from '@angular/core';
import { RouterLink, RouterOutlet,Router } from '@angular/router';
import { StorageService } from './auth/services/storage/storage.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Car-Rental';

  isCustomerLoggedIn:boolean = StorageService.isCustomerLogged();
  isAdminLoggedIn:boolean=StorageService.isAdminLogged();

  constructor(private router:Router){}

  ngOnInit(){
    this.router.events.subscribe(event=>{
      if(event.constructor.name==="NavigationEnd"){
        this.isAdminLoggedIn=StorageService.isAdminLogged();
        this.isCustomerLoggedIn=StorageService.isCustomerLogged();
      }
    })
  }
  logOut(){
    StorageService.logOut();
    this.router.navigateByUrl("/log");
  }
}
