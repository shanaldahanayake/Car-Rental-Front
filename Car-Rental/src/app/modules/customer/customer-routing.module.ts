import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerDashboardComponent } from './components/customer-dashboard/customer-dashboard.component';
import { BooACarComponent } from './components/boo-a-car/boo-a-car.component';
import { MyBookingsComponent } from './components/my-bookings/my-bookings.component';
import { SearchCarComponent } from '../admin/components/search-car/search-car.component';

const routes: Routes = [
  {
    path:"dashboard",
    component:CustomerDashboardComponent
  },
  {
    path:"book/:id",
    component:BooACarComponent
  },
  {
    path:"bookings",
    component:MyBookingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
