import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search-car',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './search-car.component.html',
  styleUrl: './search-car.component.css'
})
export class SearchCarComponent {

  constructor(private adminService:AdminService){}

  public cars:any=[];
  public sortingData={
    method:'',
    type:'',
  }

  listOfBrands = ["BMW", "AUDI", "TOYOTA", "HONDA", "KIA", "VOLVO", "NISSAN"];
  lisOfTypes = ["Petrol", "Hybrid", "Diesel", "Electric"];
  listOfColor = ["White", "Blue", "Red", "Black", "Silver"];
  listOfTransmission = ["Manual", "Automatic"];
  sortingTypes=["Brand","Fuel Type","Color","Transmission"];

  isBrand():boolean{
    if(this.sortingData.method==="Brand"){
      return true;
    }
    return false;
  }
  isType():boolean{
    if(this.sortingData.method==="Fuel Type"){
      return true;
    }
    return false;
  }
  isColor():boolean{
    if(this.sortingData.method==="Color"){
      return true;
    }
    return false;
  }
  isTransmission():boolean{
    if(this.sortingData.method==="Transmission"){
      return true;
    }
    return false;
  }

  
  searchCar(){
    this.cars.length=0;
    switch(this.sortingData.method){
      
      case "Brand":
        this.adminService.getAllCarsByBrand(this.sortingData).subscribe({
          next:res=>{
            res.forEach((element:any)=>{
              this.cars.push(element);
            })
          },
          error:err=>{
            console.log(err);
          }
          
        })
      break;

      case "Fuel Type":
        this.adminService.getAllCarsByType(this.sortingData).subscribe({
          next:res=>{
            console.log(res);
            
          },
          error:err=>{
            console.log(err);
            
          }
          
        })
      break;

      case "Color":
        this.adminService.getAllCarsByColor(this.sortingData).subscribe({
          next:res=>{
            console.log(res);
            
          },
          error:err=>{
            console.log(err);
            
          }
          
        })
      break;

      case "Transmission":
        this.adminService.getAllCarsByTransmission(this.sortingData).subscribe({
          next:res=>{
            console.log(res);
            
          },
          error:err=>{
            console.log(err);
            
          } 
        })
      break;
    }
  }


}
