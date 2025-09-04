import { Component, OnInit } from '@angular/core';
import { Patient, MedicalRecord, PatientService } from '../../services/profile-service.service';
import { HomeComponentComponent } from "../../../../home-component/home-component.component";
import { FooterComponent } from "../footer/footer.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-patient-profile',
  imports: [HomeComponentComponent, FooterComponent, CommonModule],
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.css']
})
export class PatientDetailsComponent implements OnInit {

  patient?: Patient;
  medicalRecord: MedicalRecord[] = [];  // Array to hold patient's medical records
  loading: boolean = false;
  error: string = '';

  constructor(
    private patientService: PatientService
  ) {}

  ngOnInit(): void {
    // ✅ Get patient ID from localStorage
    const idFromStorage = localStorage.getItem('patientId');
    const id = idFromStorage ? +idFromStorage : null;

    if (id) {
      this.fetchPatient(id);
      this.fetchMedicalRecords(id);
    } else {
      this.error = 'No patient ID found in localStorage';
    }
  }

  // Fetch patient details
  fetchPatient(id: number): void {
    this.loading = true;
    this.patientService.getPatientById(id).subscribe({
      next: (data) => {
        this.patient = data;
        this.loading = false;
      },
      error: () => {
        this.error = 'Failed to fetch patient details';
        this.loading = false;
      }
    });
  }

  // Fetch medical records separately
  fetchMedicalRecords(patientId: number): void {
    this.patientService.getAllMedicalRecords().subscribe({
      next: (records) => {
        // Filter records by patient ID
        this.medicalRecord = records.filter(r => (r as any).patientId === patientId);
      },
      error: () => {
        this.error = 'Failed to fetch medical records';
      }
    });
  }
}
