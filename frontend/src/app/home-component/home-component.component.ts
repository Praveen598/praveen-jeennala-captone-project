import { Component } from '@angular/core';
import { MaterialModule } from '../material.module';
import { Router, RouterLink, NavigationEnd } from '@angular/router';
import { StorageService } from '../auth/services/storage.service';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../modules/user/componets/footer/footer.component";
import { HerosectionComponent } from "../auth/components/login/herosection/herosection.component";
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [RouterLink, MaterialModule, CommonModule, FooterComponent, HerosectionComponent],
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.css'
})
export class HomeComponentComponent {
  isAdminLoggedIn: boolean = StorageService.isAdminLoggedIn();
  isUserLoggedIn: boolean = StorageService.isUserLoggedIn();
  showHeroSection: boolean = true;

  constructor(private router: Router) {
    // Watch for route changes
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        this.isAdminLoggedIn = StorageService.isAdminLoggedIn();
        this.isUserLoggedIn = StorageService.isUserLoggedIn();

        const url = event.urlAfterRedirects;

        // Hide hero section on login/signup pages OR if logged in
        if (url.includes('/login') || url.includes('/signup')) {
          this.showHeroSection = false;
        } else {
          this.showHeroSection = !this.isUserLoggedIn && !this.isAdminLoggedIn;
        }
      });
  }

  logout() {
    StorageService.logout();
    this.router.navigateByUrl('/login');
    this.showHeroSection = false; // hide hero after logout
  }
}
