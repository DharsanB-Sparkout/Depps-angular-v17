import { Component } from '@angular/core';
import { WhyComponent } from "../why/why.component";
import { RouterLink, RouterModule } from '@angular/router';
import { HowComponent } from '../how/how.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [WhyComponent,HowComponent,RouterLink,RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
