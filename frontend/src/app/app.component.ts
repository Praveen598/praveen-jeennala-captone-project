import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { HerosectionComponent } from './auth/components/login/herosection/herosection.component';






@Component({
  selector: 'app-root',
  imports: [RouterOutlet,HomeComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HOSPITAL-MANAGEMENT-UI';
}
