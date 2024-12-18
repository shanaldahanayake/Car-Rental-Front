import { Routes } from '@angular/router';
import { SignupComponent } from './auth/components/signup/signup.component';
import { LoginComponent } from './auth/components/login/login.component';

export const routes: Routes = [
    {
        path:"signup",
        component:SignupComponent
    },
    {
        path:"log",
        component:LoginComponent
    },
    {
        path:"admin",
        loadChildren:()=>import("./modules/admin/admin.module").then(m=>m.AdminModule)
    },
    {
        path:"customer",
        loadChildren:()=>import("./modules/customer/customer.module").then(m=>m.CustomerModule)
    },
    
];
