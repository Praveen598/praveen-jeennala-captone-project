import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PatientService } from '../../services/patientdetails.service';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../../../material.module';
import { AdminNavComponent } from '../admin-nav/admin-nav.component';


@Component({
  selector: 'app-upload-medical-record',
  imports: [CommonModule,ReactiveFormsModule,MaterialModule,AdminNavComponent],
  templateUrl: './upload-medical-record.component.html',
  styleUrl: './upload-medical-record.component.css'
})
export class UploadMedicalRecordComponent implements OnInit {
  patient: any;
  medicalRecords: any[] = [];
  recordForm!: FormGroup;
  displayedColumns: string[] = ['id', 'description', 'doctorName', 'visitedDate', 'medicines'];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private patientService: PatientService
  ) {}

  ngOnInit(): void {
    const patientId = this.route.snapshot.params['id'];

    // Load patient details
    this.patientService.getPatientById(patientId).subscribe(data => {
      this.patient = data;
    });

    // Load medical records
    this.loadMedicalRecords(patientId);

    // Init form
    this.recordForm = this.fb.group({
      description: [''],
      doctorName: [''],
      visitedDate: [''],
      medicines: ['']
    });
  }

  loadMedicalRecords(patientId: number) {
    this.patientService.getMedicalRecords(patientId).subscribe(records => {
      this.medicalRecords = records;
    });
  }

  onSubmit() {
    if (this.recordForm.valid) {
      const record = this.recordForm.value;
      record.patientId = this.patient.id;

      this.patientService.addMedicalRecord(record).subscribe(() => {
        this.loadMedicalRecords(this.patient.id);
        this.recordForm.reset();
      });
    }
  }
}

