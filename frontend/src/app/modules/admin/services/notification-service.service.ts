import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Notification {
  id?: number;
  patientName: string;
  email: string;
  dateTime: string;
  description: string;
  status: string; // Pending / Accepted / Rejected
  appointmentId?: number;
}

@Injectable({
  providedIn: 'root'
})
export class NotificationServiceService {

  private baseUrl = 'http://localhost:8084/api/notifications';

  constructor(private http: HttpClient) { }

  // Get all notifications
  getNotifications(): Observable<Notification[]> {
    return this.http.get<Notification[]>(this.baseUrl);
  }

  // Create a new notification (send email)
  createNotification(notification: Notification): Observable<Notification> {
    return this.http.post<Notification>(this.baseUrl, notification);
  }

  // Doctor accepts an appointment
  acceptAppointment(id: number): Observable<Notification> {
    return this.http.patch<Notification>(`${this.baseUrl}/${id}/accept`, {});
  }

  // Doctor rejects an appointment
  rejectAppointment(id: number): Observable<Notification> {
    return this.http.patch<Notification>(`${this.baseUrl}/${id}/reject`, {});
  }
}

