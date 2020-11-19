import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup } from '@angular/forms';
import { ItemsService } from '../../services/items.service'

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  firstNameAutofilled: boolean;
  lastNameAutofilled: boolean;
  item: FormGroup;

  constructor(
    public fb: FormBuilder,
    private itemsService: ItemsService
  ) {

    //Estructura del item que enviaremos como body al back para setear en la estructura para enviar a Meli.
    this.item = this.fb.group({
      title : [''],
      quantity: [''],
      price: [''],
      image: [null]
    })
  }

  ngOnInit(): void {
  }

  uploadFile(event) {
    const file = (event.target as HTMLInputElement).files[0];
    this.item.patchValue({
      avatar: file
    });
    this.item.get('image').updateValueAndValidity()
  }

  //Funcion que se ejecuta cuando se aprieta el boton submit del formulario, y lo que hace es enviar por post el Item que se seteo
  //con los valores de los inputs del formulario.
  onSubmit() {
    this.itemsService.postItem(JSON.stringify(this.item.value))
    .subscribe(
      (response) => console.log('Respuesta del server: ', response),
      (error) => console.log('Ha ocurrido un error al publicar el nuevo item: ', error)
    )
  }

}
