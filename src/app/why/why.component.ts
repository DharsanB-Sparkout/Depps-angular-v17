import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterLink } from '@angular/router';
import { MissionComponent } from '../mission/mission.component';

@Component({
  selector: 'app-why',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,RouterLink,MissionComponent],
  templateUrl: './why.component.html',
  styleUrl: './why.component.css'
})
export class WhyComponent {

}
