import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'

//Componentes de AngularMaterial y ngx Bootstrap
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgxSpinnerModule } from "ngx-spinner";
import { ReactiveFormsModule } from '@angular/forms';

//Componente propios
import { DashboardComponent } from './modules/dashboard/dashboard.component'
import { HeaderComponent } from './modules/shared/components/header/header.component'
import { HomeComponent } from './modules/home/home.component'
import { FooterComponent } from './modules/shared/components/footer/footer.component'
import { FormComponent } from './modules/form/form.component'
import { routing } from './app.routing';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    HomeComponent,
    FormComponent,
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
    routing,
  ],
  providers: [],
  bootstrap: [ AppComponent ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {
}
