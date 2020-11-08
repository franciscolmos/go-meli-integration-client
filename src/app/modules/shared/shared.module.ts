import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FooterComponent  } from '../shared/components/footer/footer.component';
import { HeaderComponent  } from '../shared/components/header/header.component';
import { NavbarComponent  } from '../shared/components/navbar/navbar.component';
import { QuestionsComponent } from '../shared/components/questions/questions.component';
import { SalesComponent } from '../shared/components/sales/sales.component';

@NgModule({
    declarations: [
        FooterComponent,
        HeaderComponent,
        NavbarComponent,
        QuestionsComponent,
        SalesComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        FooterComponent,
        HeaderComponent,
        NavbarComponent,
        QuestionsComponent,
        SalesComponent
    ]
    })
export class SharedModule { }
