import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MaterialModule } from '../../../../material.module';
import { PatientService } from '../../services/profile-service.service';

@Component({
  selector: 'app-complete-profile-from',
  imports: [ReactiveFormsModule,MaterialModule],
  templateUrl: './complete-profile-from.component.html',
  styleUrl: './complete-profile-from.component.css'
})
export class CompleteProfileFromComponent {
   submitted = false;
  profileForm: FormGroup;

  constructor(private fb: FormBuilder, private  profileService: PatientService) {
    // ✅ Assign form inside constructor
    this.profileForm = this.fb.group({
      name: ['', Validators.required],
      address: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', Validators.required],
      dob: ['', Validators.required],
      weight: ['', [Validators.required, Validators.min(1)]],
      height: ['', [Validators.required, Validators.min(1)]]
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.profileForm.invalid) {
      return;
    }

    // ✅ Call service
    // ✅ Call service
this.profileService.saveProfile(this.profileForm.value).subscribe({
  next: (res: any) => {
    console.log('Profile saved successfully');

    // ✅ Save patient id in localStorage
    if (res && res.id) {
      localStorage.setItem('patientId', res.id.toString());
      console.log('Patient ID saved in localStorage:', res.id);
    }

    // disable form after submit
    this.profileForm.disable();
  },
  error: (err: any) => {
    console.error('Error saving profile', err);
  }
});

  }
}
