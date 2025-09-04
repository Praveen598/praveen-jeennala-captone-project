import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { Routes } from '@angular/router';
import { AdmindashboardComponent } from './components/admindashboard/admindashboard.component';
import { FooterComponent } from '../user/componets/footer/footer.component';
import { AppointmentComponent } from '../user/componets/appointment/appointment.component';
import { BillingComponent } from '../user/billing/billing.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
