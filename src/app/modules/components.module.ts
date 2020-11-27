import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../modules/shared/shared.module';
import { FormComponent } from './form/form.component';
import { AnswerQuestionComponent } from './answer-question/answer-question.component'

@NgModule({
    declarations: [
        SharedModule,
        FormComponent,
        AnswerQuestionComponent
    ],
    imports: [
        CommonModule
    ]
    })
export class ComponentsModule {
    
 }