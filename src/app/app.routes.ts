import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WhyComponent } from './why/why.component';
import { HowComponent } from './how/how.component';
import { WhereComponent } from './where/where.component';
import { JoinTheMovementComponent } from './join-the-movement/join-the-movement.component';
import { MissionComponent } from './mission/mission.component';


export const routes: Routes = [
    { path: '', component: HomeComponent },
    {path: 'mission', component: MissionComponent},
    { path: 'why', component : WhyComponent},
    {path: 'how',component: HowComponent },
    {path: 'where',component: WhereComponent},
    {path: 'join-the-movement',component: JoinTheMovementComponent}
];
