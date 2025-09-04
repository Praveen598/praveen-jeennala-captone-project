import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { MaterialModule } from "../../../material.module";
import { FormsModule } from "@angular/forms";
import { FooterComponent } from "../componets/footer/footer.component";
import { HomeComponentComponent } from "../../../home-component/home-component.component";
import { BillingService } from "../services/billing-service.service";
import { MatDialog, MatDialogContent } from "@angular/material/dialog";


interface Bill {
  id: number;
  patientName: string;
  amount: number;
  status: string; // paid/unpaid
  dueDate: string;
}

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css'],
  standalone: true,
  imports: [CommonModule, MaterialModule, FormsModule, FooterComponent, HomeComponentComponent],
})
export class BillingComponent implements OnInit {

  bills: Bill[] = [];

  constructor(private billingService: BillingService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.loadBills();
  }

  loadBills(): void {
    this.billingService.getAllBills().subscribe({
      next: (data: Bill[]) => this.bills = data,
      error: (err: any) => console.error('Error fetching bills', err)
    });
  }

  payBill(bill: Bill): void {
    // Here you can call backend API to mark bill as paid
    bill.status = 'paid';

    // Open success popup
    this.dialog.open(PaymentSuccessDialog);
  }
}

// Simple success dialog
@Component({
  selector: 'payment-success-dialog',
  template: `
    <h2 mat-dialog-title>Payment Successful</h2>
    <mat-dialog-content>
      <p>Your payment has been successfully processed.</p>
    </mat-dialog-content>
    <mat-dialog-actions align="end">
      <button mat-button mat-dialog-close>OK</button>
    </mat-dialog-actions>
  `,
  imports: [MatDialogContent, MaterialModule]
})
export class PaymentSuccessDialog {}

