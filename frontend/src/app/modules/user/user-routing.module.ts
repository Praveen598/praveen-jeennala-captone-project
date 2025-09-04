import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './componets/dashboard/dashboard.component';
import { FooterComponent } from './componets/footer/footer.component';
import { AppointmentComponent } from './componets/appointment/appointment.component';
import { BillingComponent } from './billing/billing.component';
import { PatientDetailsComponent } from './componets/patient-profile/patient-profile.component';
import { ActualAdminComponent } from './actual-admin/actual-admin.component';


const routes: Routes = [
  {path:"dashboard",component:DashboardComponent},
  {path:"footer",component:FooterComponent},
  {path:"appointment",component:AppointmentComponent},
  {path:"bills",component:BillingComponent},
   {path:"profile",component:PatientDetailsComponent},
   {path:"admindashboard",component:ActualAdminComponent},
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UserRoutingModule { }
