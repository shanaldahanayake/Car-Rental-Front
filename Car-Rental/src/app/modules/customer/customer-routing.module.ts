import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerDashboardComponent } from './components/customer-dashboard/customer-dashboard.component';
import { BooACarComponent } from './components/boo-a-car/boo-a-car.component';

const routes: Routes = [
  {
    path:"dashboard",
    component:CustomerDashboardComponent
  },
  {
    path:"book/:id",
    component:BooACarComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
