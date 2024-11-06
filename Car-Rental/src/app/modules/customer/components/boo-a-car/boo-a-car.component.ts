import { Component } from '@angular/core';
import { CustomerService } from '../../services/customer.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-boo-a-car',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './boo-a-car.component.html',
  styleUrl: './boo-a-car.component.css'
})
export class BooACarComponent {

  
  carId:number=this.route.snapshot.params["id"];
  public car:any;

  constructor(private service:CustomerService,
    private route:ActivatedRoute
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
}
