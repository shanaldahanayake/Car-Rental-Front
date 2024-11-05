import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.scss'
})
export class AdminDashboardComponent {

  public cars:any=[];
  public setCarToUpdate={
    id:'',
    brand:'',
    model:'',
    color:'',
    price:'',
    transmission:'',
    fuelType:'',
    description:''
  };
  constructor(private adminService:AdminService){}

  ngOnInit(){
    this.getAllCars();
  }

  getAllCars(){
    this.adminService.getAllCars().subscribe(res=>{
      res.forEach((element: any) => {
        this.cars.push(element);
      });
    })
  }

  deleteCar(id:number){
    this.adminService.deleteCar(id).subscribe(res=>{
      console.log(res);
    })
  }

  sendDataToUpdateCar(car:any){
    this.setCarToUpdate.id=car.id;
    this.setCarToUpdate.brand=car.brand;
    this.setCarToUpdate.model=car.model;
    this.setCarToUpdate.color=car.color;
    this.setCarToUpdate.price=car.price;
    this.setCarToUpdate.transmission=car.transmission;
    this.setCarToUpdate.fuelType=car.fuelType;
    this.setCarToUpdate.description=car.description;
  }

  updateCar(car:any){
    const formData = new FormData();

    formData.append('id', car.id); 
    formData.append('brand', car.brand);
    formData.append('model', car.model);
    formData.append('color', car.color);
    formData.append('price', car.price.toString());
    formData.append('transmission', car.transmission);
    formData.append('typeFuel', car.typeFuel);
    formData.append('description', car.description);

    console.log(formData);

    this.adminService.updateCar(formData).subscribe(
        res => {
            this.getAllCars(); 
        },
        err => {
            console.error("Error updating car:", err); 
        }
    );
  }

}
