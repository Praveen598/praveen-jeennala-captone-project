import { Component, OnInit } from '@angular/core';
import { HomeComponentComponent } from "../../../../home-component/home-component.component";
import { FooterComponent } from "../footer/footer.component";
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AppointmentService } from '../../services/appointment.service';
import { MaterialModule } from '../../../../material.module';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-appointment',
  imports: [HomeComponentComponent, FooterComponent,ReactiveFormsModule,MaterialModule,DashboardComponent],
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.css'
})
export class AppointmentComponent implements OnInit{ 
  appointmentForm!: FormGroup;

  constructor(private fb: FormBuilder, private appointmentService: AppointmentService) {}

  ngOnInit(): void {
    this.appointmentForm = this.fb.group({
      description: ['', Validators.required],
      appointmentDateTime: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.appointmentForm.valid) {
      this.appointmentService.saveAppointment(this.appointmentForm.value).subscribe({
        next: (res: any) => {
          console.log('Appointment saved successfully:', res);
          alert('Appointment Request send successfully!');
          this.appointmentForm.reset();
        },
        error: (err: any) => {
          console.error('Error saving appointment:', err);
          alert('Failed to save appointment.');
        }
      });
    }
  }
}
