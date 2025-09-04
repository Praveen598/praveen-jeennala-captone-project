import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
export interface AppointmentRequest {
  description: string;
  appointmentDateTime: string; // ISO string: "2025-09-02T10:30"
}
@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private apiUrl = 'http://localhost:8082/appointments';

  constructor(private http: HttpClient) {}

  saveAppointment(appointmentData: any): Observable<any> {
    // ✅ Get patientId from localStorage
    const patientId = localStorage.getItem('patientId');
    if (!patientId) {
      throw new Error('Patient ID not found in localStorage');
    }

    // ✅ Send appointment data to backend with patientId in URL
    return this.http.post(`${this.apiUrl}/createAppointments/${patientId}`, appointmentData);
  }
  getAllAppointments(): Observable<any> {
  // Call backend to get all appointments
  return this.http.get(`${this.apiUrl}/getAllAppointments`);
}

}
