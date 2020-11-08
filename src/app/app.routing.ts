import { RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component' 

const appRoutes = [
    { path: 'home', component: HomeComponent,  pathMatch: 'full'},
    { path: 'dashboard', component: DashboardComponent,  pathMatch: 'full'},
  ];

  export const routing = RouterModule.forRoot(appRoutes);