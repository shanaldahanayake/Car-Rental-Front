import { Component } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StorageService } from '../../../../auth/services/storage/storage.service';

@Component({
  selector: 'app-boo-a-car',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './boo-a-car.component.html',
  styleUrl: './boo-a-car.component.css'
})
export class BooACarComponent {

  carId:number=this.route.snapshot.params["id"];
  public car:any;
  public duration={
    from:'',
    to:''
  }


  constructor(private service:CustomerService,
    private route:ActivatedRoute,
    private router: Router
  ){}

  ngOnInit(){
    this.getCarById();
  }
  getCarById(){
    this.service.getCarById(this.carId)
    .subscribe({
      next:res=>{
        this.car=res; 
      },
      error:err=>{
        console.log(err);
        
      }
    })
   }

   getFormattedDate(inputDate: string): string {
    const date = new Date(inputDate); 
    const day = String(date.getDate()).padStart(2, '0'); 
    const month = String(date.getMonth() + 1).padStart(2, '0'); 
    const year = date.getFullYear(); 
    return `${day}-${month}-${year}`; 
}

   getDate(){
    let bookCar={
      fromDate:this.duration.from,
      toDate:this.duration.to,
      userId:StorageService.getUserId(),
      carId:this.carId
    }
    console.log(bookCar);
    
    this.service.bookACar(bookCar).subscribe({
      next:res=>{
        console.log(res);
        this.router.navigateByUrl("/customer/dashboard");
      },
      error:err=>{
        console.log(err);
      }
    })
  
  
  }
}
