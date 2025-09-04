import { Component, OnInit } from '@angular/core';
import { ChartConfiguration, Chart, PieController, ArcElement, Tooltip, Legend, LineController, LineElement, PointElement, LinearScale, CategoryScale } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';

import { Patient, PatientService } from '../services/profile-service.service';
import { AppointmentService } from '../services/appointment.service';
import { MaterialModule } from '../../../material.module';

// ✅ Register required chart types globally
Chart.register(
  PieController, ArcElement, Tooltip, Legend,   // for Pie Chart
  LineController, LineElement, PointElement, LinearScale, CategoryScale // for Line Chart
);

@Component({
  selector: 'app-actual-admin',
  standalone: true,
  imports: [CommonModule, BaseChartDirective, MatCardModule, MatTableModule,MaterialModule],
  templateUrl: './actual-admin.component.html',
  styleUrls: ['./actual-admin.component.css']
})
export class ActualAdminComponent implements OnInit {
  totalPatients = 0;
  totalAppointments = 0;

  // ✅ Chart Data
  patientTrend!: ChartConfiguration<'pie'>['data'];
  appointmentTrend!: ChartConfiguration<'line'>['data'];

  // ✅ Table Data
  patients: Patient[] = [];
  patientColumns: string[] = ['id', 'name', 'age', 'gender', 'contact'];

  appointments: any[] = [];
  appointmentColumns: string[] = ['id', 'patientName', 'appointmentDateTime', 'status'];
  today: any;

  constructor(
    private patientService: PatientService,
    private appointmentService: AppointmentService
  ) {}

  ngOnInit(): void {
    this.loadDashboardData();
  }

  loadDashboardData() {
    // ✅ Fetch patients
    this.patientService.getAllPatients().subscribe((patients: Patient[]) => {
      this.totalPatients = patients.length;
      this.patients = patients;

      const maleCount = patients.filter(p => p.gender.toLowerCase() === 'male').length;
      const femaleCount = patients.filter(p => p.gender.toLowerCase() === 'female').length;

      this.patientTrend = {
        labels: ['Male', 'Female'],
        datasets: [
          {
            label: 'Patients by Gender',
            data: [maleCount, femaleCount],
            backgroundColor: ['#42A5F5', '#EC407A']
          }
        ]
      };
    });

    // ✅ Fetch appointments
    this.appointmentService.getAllAppointments().subscribe((appointments: any[]) => {
      this.totalAppointments = appointments.length;
      this.appointments = appointments;

      const grouped: { [key: string]: number } = {};
      appointments.forEach(app => {
        const date = new Date(app.appointmentDateTime).toLocaleDateString();
        grouped[date] = (grouped[date] || 0) + 1;
      });

      this.appointmentTrend = {
        labels: Object.keys(grouped),
        datasets: [
          {
            label: 'Appointments Per Day',
            data: Object.values(grouped),
            borderColor: '#66BB6A',
            backgroundColor: '#A5D6A7',
            fill: false,
            tension: 0.3
          }
        ]
      };
    });
  }
}
