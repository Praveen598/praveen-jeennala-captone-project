import { Component } from '@angular/core';
import { HomeComponentComponent } from '../../../../home-component/home-component.component';
import { FooterComponent } from "../footer/footer.component";
import { MatCard } from "@angular/material/card";
import { MaterialModule } from "../../../../material.module";
import { CompleteProfileFromComponent } from '../complete-profile-from/complete-profile-from.component';


@Component({
  selector: 'app-dashboard',
  imports: [HomeComponentComponent, FooterComponent, MatCard, MaterialModule, CompleteProfileFromComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
   services = [
    { title: 'Service 1', image: 'assets/service1.jpg' },
    { title: 'Service 2', image: 'assets/service2.jpg' },
    { title: 'Service 3', image: 'assets/service3.jpg' }
  ];

  doctors = [
    { name: 'Dr. Arjun Mehta', specialty: 'Cardiologist', image: 'assets/doctor1.png' },
    { name: 'Dr. Priya Sharma', specialty: 'Neurologist', image: 'assets/doctor2.png' },
    { name: 'Dr. Ravi Kumar', specialty: 'Orthopedic', image: 'assets/doctor3.png' },
    { name: 'Dr. Sneha Reddy', specialty: 'Pediatrician', image: 'assets/doctor4.png' },
    { name: 'Dr. Kiran Joshi', specialty: 'Dermatologist', image: 'assets/doctor5.png' },
    { name: 'Dr. Ananya Gupta', specialty: 'Gynecologist', image: 'assets/doctor6.png' },
    { name: 'Dr. Manish Singh', specialty: 'ENT Specialist', image: 'assets/doctor7.png' },
    { name: 'Dr. Nisha Verma', specialty: 'Oncologist', image: 'assets/doctor8.png' },
    { name: 'Dr. Rohit Bansal', specialty: 'Urologist', image: 'assets/doctor9.png' },
    { name: 'Dr. Aisha Khan', specialty: 'General Surgeon', image: 'assets/doctor10.png' },
    { name: 'Dr. Vikas Patil', specialty: 'Physician', image: 'assets/doctor11.png' },
    { name: 'Dr. Meera Iyer', specialty: 'Endocrinologist', image: 'assets/doctor12.png' }
  ];

}
