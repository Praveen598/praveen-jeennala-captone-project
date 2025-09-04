import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  saveProfile(value: any) {
    throw new Error('Method not implemented.');
  }
  private baseUrl = 'http://localhost:8080/api/patients';

  constructor(private http: HttpClient) {}

  getPatientById(id: number) {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  getMedicalRecords(patientId: number) {
    return this.http.get<any[]>(`${this.baseUrl}/${patientId}/records`);
  }

  addMedicalRecord(record: any) {
    return this.http.post(`${this.baseUrl}/${record.patientId}/records`, record);
  }
}

