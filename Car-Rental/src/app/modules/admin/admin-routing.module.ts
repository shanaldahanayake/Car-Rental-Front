import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { PostCarComponent } from './components/post-car/post-car.component';
import { BookingsComponent } from './components/bookings/bookings.component';
import { SearchCarComponent } from './components/search-car/search-car.component';

const routes: Routes = [
  {
    path:"dashboard",
    component:AdminDashboardComponent
  },
  {
    path:"car",
    component:PostCarComponent
  },
  {
    path:"bookings",
    component:BookingsComponent
  },
  {
    path:"search",
    component:SearchCarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
