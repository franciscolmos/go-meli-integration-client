import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'

//Componentes de AngularMaterial y ngx Bootstrap
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgxSpinnerModule } from "ngx-spinner";
import { ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';

//Componente propios
import { DashboardComponent } from './modules/dashboard/dashboard.component'
import { HeaderComponent } from './modules/shared/components/header/header.component'
import { HomeComponent } from './modules/home/home.component'
import { FooterComponent } from './modules/shared/components/footer/footer.component'
import { FormComponent } from './modules/form/form.component'
import { AnswerQuestionComponent } from './modules/answer-question/answer-question.component'
import { routing } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    HomeComponent,
    FormComponent,
    AnswerQuestionComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    BrowserModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    NgxSpinnerModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatMenuModule,
    MatButtonModule,
    MatExpansionModule,
    routing,
  ],
  providers: [],
  bootstrap: [ AppComponent ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {
}
