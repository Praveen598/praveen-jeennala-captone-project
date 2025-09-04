import { Component } from '@angular/core';
import { HomeComponentComponent } from "../../../../home-component/home-component.component";
import { FooterComponent } from "../../../../modules/user/componets/footer/footer.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-herosection',
   standalone: true,
  imports: [HomeComponentComponent, FooterComponent,CommonModule],
  templateUrl: './herosection.component.html',
  styleUrl: './herosection.component.css'
})
export class HerosectionComponent {

}
