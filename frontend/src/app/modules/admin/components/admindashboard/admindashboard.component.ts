import { BillingService } from './../../../user/services/billing-service.service';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../material.module';
import { AppointmentService } from '../../../user/services/appointment.service';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NotificationServiceService } from '../../services/notification-service.service';
import {  UploadMedicalRecordComponent } from "../upload-medical-record/upload-medical-record.component";
import { HomeComponentComponent } from "../../../../home-component/home-component.component";
import { FooterComponent } from "../../../user/componets/footer/footer.component";

export interface Notification {
  patientName: string;
  email: string;
  description: string;
  dateTime: string;
  status: string;
}

@Component({
 selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrls: ['./admindashboard.component.css'],
  standalone: true,
  imports: [MaterialModule, CommonModule, FormsModule, UploadMedicalRecordComponent, HomeComponentComponent, FooterComponent] 
})
export class AdmindashboardComponent implements OnInit {

appointments: any[] = [];

  constructor(private appointmentService: AppointmentService,
    private notificationService: NotificationServiceService,
    private BillingService:BillingService
  ) {}

  ngOnInit(): void {
    this.loadAppointments();
  }

  loadAppointments(): void {
    this.appointmentService.getAllAppointments().subscribe({
      next: (data: any[]) => this.appointments = data,
      error: (err: any) => console.error('Error fetching appointments', err)
    });
  }

 updateStatus(appointment: any, newStatus: string): void {
  appointment.status = newStatus;

  // Optionally log updated appointments
  console.log('Updated appointment:', appointment);
  console.table(this.appointments);

  // Send email notification with the appointment details
  const notificationPayload: Notification = {
    patientName: appointment.patientName,
    email: appointment.email,
    description: appointment.description,
    dateTime: appointment.appointmentDateTime, // map appointmentDateTime -> dateTime
    status: newStatus
  };

  this.notificationService.createNotification(notificationPayload).subscribe({
    next: (res: any) => console.log('Notification sent', res),
    error: (err: any) => console.error('Error sending notification', err)
  });

  // Optionally, send updates to backend
  // this.appointmentService.updateAppointment(appointment.id, appointment).subscribe();
}


  }

