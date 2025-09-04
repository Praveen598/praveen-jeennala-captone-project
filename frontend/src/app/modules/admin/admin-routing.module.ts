import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { DashboardComponent } from '../user/componets/dashboard/dashboard.component';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
import { UploadMedicalRecordComponent } from './components/upload-medical-record/upload-medical-record.component';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {path:"doctordashboard",component:AdmindashboardComponent}
 
];

@NgModule({
  
  imports: [RouterModule.forChild(routes),UploadMedicalRecordComponent,CommonModule ],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
