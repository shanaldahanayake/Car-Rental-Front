import { Component } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { StorageService } from '../../../../auth/services/storage/storage.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-bookings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-bookings.component.html',
  styleUrl: './my-bookings.component.css'
})
export class MyBookingsComponent {
  bookings:any=[];
color: { [klass: string]: any; }|null|undefined;
  constructor(private service:CustomerService){
    this.getAllBookings();
  }

  getAllBookings(){
    this.service.getAllBookingsById(StorageService.getUserId()).subscribe({
      next:res=>{
        res.forEach((element:any) => {
          this.bookings.push(element);
        });
      },
      error:err=>{
        console.log(err);
      }
    })
  }
}
