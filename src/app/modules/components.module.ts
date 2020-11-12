import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../modules/shared/shared.module';
import { FormComponent } from './form/form.component'

@NgModule({
    declarations: [
        SharedModule,
        FormComponent
    ],
    imports: [
        CommonModule
    ]
    })
export class ComponentsModule {
    
 }