import { CommonModule } from '@angular/common';
import { Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { MaterialModule } from '../../../material.module';
import { HomeComponentComponent } from "../../../home-component/home-component.component";
import { AuthService } from '../../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { StorageService } from '../../services/storage.service';
import { FooterComponent } from "../../../modules/user/componets/footer/footer.component";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule, MaterialModule, HomeComponentComponent, FooterComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent  {
  loginForm!: FormGroup;
  hidePassword = true; // This controls password visibility
  
  
  
  
  constructor (private fb: FormBuilder,
    private authService: AuthService,
      private snackbar: MatSnackBar,
      private router: Router
  ) { 
    this.loginForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]]
    })
  }
  
  
  
    
    togglePasswordVisibility()
    {
      this.hidePassword = !this.hidePassword;
    }
  
  
    onSubmit()
    {
      console.log(this.loginForm.value);
      this.authService.login(this.loginForm.value).subscribe({
        next: (res) => {
          if (res.userId != null) {
            const user = {
              id: res.userId,
              role: res.userRole
            };
            StorageService.saveUser(user);
            StorageService.saveToken(res.jwt);
    
            if (StorageService.isAdminLoggedIn()) {
              this.router.navigateByUrl('admin/doctordashboard');
            } 
            else if (StorageService.isUserLoggedIn()) {
              this.router.navigateByUrl('user/dashboard');
            }
            this.snackbar.open('Login Successful', 'Close', { duration: 5000 });
           
          } else {
            this.snackbar.open('login failed. Invalid credentials', 'close', { duration: 5000, panelClass: 'error-snackbar' });
          }
        },

      });
    }
  

  }