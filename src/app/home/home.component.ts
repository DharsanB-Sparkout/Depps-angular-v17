import { Component } from '@angular/core';
import { WhyComponent } from "../why/why.component";
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { BannerComponent } from "../banner/banner.component";
import { MissionComponent } from '../mission/mission.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HomeComponent, WhyComponent, HeaderComponent, FooterComponent, BannerComponent,MissionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
