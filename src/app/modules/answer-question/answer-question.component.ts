import { utf8Encode } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup } from '@angular/forms';
import { ItemsService } from '../../services/items.service'

@Component({
  selector: 'app-answer-question',
  templateUrl: './answer-question.component.html',
  styleUrls: ['./answer-question.component.css']
})
export class AnswerQuestionComponent implements OnInit {
  question: String
  answer: FormGroup;

  constructor(
    public fb: FormBuilder,
    private itemsService: ItemsService
  ) { 
    this.answer = this.fb.group({
      question_id   : [''],
      text : ['']
    })
  }

  ngOnInit(): void {
    const urlParams = window.location.href;
    let question = urlParams.split('/')[5];
    
    //Reemplazamos los %20 por espacios
    question = question.replace(/%20/g, " ")
    //Reemplazamos los %C3%B1 por ñ
    question = question.replace(/%C3%B1/g, "ñ")
    //Reemplazamos los %C3%A1 por á
    question = question.replace(/%C3%A1/g, "á")
    //Reemplazamos los %C3%A9 por é
    question = question.replace(/%C3%A9/g, "é")
    //Reemplazamos los %C3%AD por í
    question = question.replace(/%C3%AD/g, "í")
    //Reemplazamos los %C3%B3 por ó
    question = question.replace(/%C3%B3/g, "ó")
    //Reemplazamos los %C3%BA por ú
    question = question.replace(/%C3%BA/g, "ú")
    
    this.question = question
    
    
  }

  onSubmit() {
    const urlParams = window.location.href;
    const id = urlParams.split('/')[4];
    this.answer.value['question_id'] = id
    console.log('respuesta: ', this.answer.value)
    this.itemsService.answerQuestion(JSON.stringify(this.answer.value))
    .subscribe(
      (response) => console.log('Respuesta del server: ', response),
      (error) => console.log('Ha ocurrido un error al responder la pregunta del item: ', error)
    )
  }
}
