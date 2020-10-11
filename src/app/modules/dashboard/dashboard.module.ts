import { NgModule } from '@angular/core';

import { HeaderComponent } from '../shared/components/header/header.component';
import { NavbarComponent } from '../shared/components/navbar/navbar.component';
import { SalesComponent } from '../shared/components/sales/sales.component';

@NgModule({
    declarations: [
        HeaderComponent,
        NavbarComponent,
        SalesComponent
    ],
    imports: [
        HeaderComponent,
        NavbarComponent,
        SalesComponent,
    ],
    exports: [
    ]
  })
  export class SharedModule { }