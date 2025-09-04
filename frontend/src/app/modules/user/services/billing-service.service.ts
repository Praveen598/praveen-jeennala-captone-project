import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Bill {
  price: any;
  id: number;
  patientName: string;
  amount: number;
  status: string;
  dueDate: string;
}

@Injectable({
  providedIn: 'root'
})
export class BillingService {

  private apiUrl = 'http://localhost:8086/billing';

  constructor(private http: HttpClient) {}

  // ✅ Get all bills
  getAllBills(): Observable<Bill[]> {
    return this.http.get<Bill[]>(this.apiUrl);
  }

  // ✅ Get a bill by ID
  getBillById(id: number): Observable<Bill> {
    return this.http.get<Bill>(`${this.apiUrl}/${id}`);
  }

  // ✅ Create a new bill
  createBill(bill: Bill): Observable<Bill> {
    return this.http.post<Bill>(this.apiUrl, bill);
  }

  // ✅ Update a bill
  updateBill(id: number, bill: Bill): Observable<Bill> {
    return this.http.put<Bill>(`${this.apiUrl}/${id}`, bill);
  }

  // ✅ Delete a bill
  deleteBill(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  // ✅ Pay a bill (mark as paid)
  payBill(id: number): Observable<Bill> {
    return this.http.put<Bill>(`${this.apiUrl}/${id}`, { status: 'paid' });
  }
}

