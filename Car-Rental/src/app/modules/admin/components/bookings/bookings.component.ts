import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bookings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bookings.component.html',
  styleUrl: './bookings.component.css'
})
export class BookingsComponent {

  public bookings:any=[];
  constructor(private adminService:AdminService){
    this.getBookings();
  }

  onOnInit(){
    
  }

  getBookings(){
    this.adminService.getAllBookings().subscribe({
      next:res=>{
        res.forEach((element:any)=>{
          this.bookings.push(element);
        })
      },
      error:err=>{
        console.log(err);
      }
    })
  }

  respondBooking(id:number,status:string){
    this.adminService.respondBooking(id,status).subscribe({
      next:res=>{
        res.forEach((element:any)=>{
          this.bookings.push(element);
        })
        
      },
      error:err=>{
        console.log(err);
      }
    })
  }
}
