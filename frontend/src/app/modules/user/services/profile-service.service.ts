import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface MedicalRecord {
  id?: number;
  description: string;
  doctorName: string;
  visitedDate: string;   // ISO string for LocalDate
  medicines: string;
}

export interface Patient {
  id?: number;
  name: string;
  address: string;
  email: string;
  gender: string;
  dob: string;   // ISO string
  weight: number;
  height: number;
  medicalRecord?: MedicalRecord[];
}

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private apiUrl = 'http://localhost:8080/patient';

  constructor(private http: HttpClient) {}

  // ✅ Add patient
  saveProfile(patient: Patient): Observable<Patient> {
    return this.http.post<Patient>(`${this.apiUrl}/addPatient`, patient);
  }

  // ✅ Add medical record
  addMedicalRecord(record: MedicalRecord): Observable<MedicalRecord> {
    return this.http.post<MedicalRecord>(`${this.apiUrl}/addMedicalRecord`, record);
  }

  // ✅ Get all patients
  getAllPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(`${this.apiUrl}/getAllPatients`);
  }

  // ✅ Get patient by ID
  getPatientById(id: number): Observable<Patient> {
    return this.http.get<Patient>(`${this.apiUrl}/getById/${id}`);
  }

  // ✅ Get all medical records
  getAllMedicalRecords(): Observable<MedicalRecord[]> {
    return this.http.get<MedicalRecord[]>(`${this.apiUrl}/medicalrecords`);
  }

  // ✅ Update medical record
  updateMedicalRecord(id: number, record: MedicalRecord): Observable<Patient> {
    return this.http.put<Patient>(`${this.apiUrl}/update/${id}`, record);
  }

  // ✅ Delete patient
  deletePatient(id: number): Observable<string> {
    return this.http.delete(`${this.apiUrl}/delete/${id}`, { responseType: 'text' });
  }
}
