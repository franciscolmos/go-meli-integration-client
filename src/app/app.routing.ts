import { RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { FormComponent } from './modules/form/form.component'  

const appRoutes = [
    { path: 'home', component: HomeComponent,  pathMatch: 'full'},
    { path: 'dashboard', component: DashboardComponent,  pathMatch: 'full'},
    { path: 'form', component: FormComponent,  pathMatch: 'full'},
  ];

export const routing = RouterModule.forRoot(appRoutes);