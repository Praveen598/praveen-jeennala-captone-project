import { Component } from '@angular/core';
import { StorageService } from '../../../../auth/services/storage.service';
import { Router, RouterLink } from '@angular/router';
import { MaterialModule } from '../../../../material.module';
import { CommonModule } from '@angular/common';
import { AdmindashboardComponent } from '../admindashboard/admindashboard.component';

@Component({
  selector: 'app-admin-nav',
  imports: [MaterialModule,CommonModule,RouterLink,AdmindashboardComponent],
  templateUrl: './admin-nav.component.html',
  styleUrl: './admin-nav.component.css'
})
export class AdminNavComponent {
 

}


