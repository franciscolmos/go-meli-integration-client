import { RouterModule } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { FormComponent } from './modules/form/form.component'
import { AnswerQuestionComponent } from './modules/answer-question/answer-question.component'

//  Rutas de nuestra apliaciones encargadas de renderizar sus respectivos componentes

const appRoutes = [
    { path: 'home', component: HomeComponent,  pathMatch: 'full'},
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent,  pathMatch: 'full'},
    { path: 'form', component: FormComponent,  pathMatch: 'full'},
    { path: 'answer/:id/:question', component: AnswerQuestionComponent, pathMatch: 'full'}
  ];

export const routing = RouterModule.forRoot(appRoutes);