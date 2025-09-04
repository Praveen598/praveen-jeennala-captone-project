
import { Routes } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { SignupComponent } from './auth/components/signup/signup.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { DashboardComponent } from './modules/user/componets/dashboard/dashboard.component';
import { AdmindashboardComponent } from './modules/admin/components/admindashboard/admindashboard.component';
import { BillingComponent } from './modules/user/billing/billing.component';
import { AppointmentComponent } from './modules/user/componets/appointment/appointment.component';
import { HerosectionComponent } from './auth/components/login/herosection/herosection.component';
import { homedir } from 'node:os';



export const routes: Routes = [

    {
        path:'',component:HomeComponentComponent
    },
    {
        path:"login",component:LoginComponent
    },
    {
        path:"signup",component:SignupComponent
    }
    ,
    
    {
        path:"admin",loadChildren: () => import("./modules/admin/admin.module").then(m => m.AdminModule)
    },
    {
        path:"user",loadChildren: () => import("./modules/user/user.module").then(m => m.UserModule)
    }
]
