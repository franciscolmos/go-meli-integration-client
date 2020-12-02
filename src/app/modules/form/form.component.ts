import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup } from '@angular/forms';
import { ItemsService } from '../../services/items.service';
import { Router } from "@angular/router"

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  firstNameAutofilled: boolean;
  lastNameAutofilled: boolean;
  item: FormGroup;

  constructor(
    public fb: FormBuilder,
    private itemsService: ItemsService,
    private router: Router
  ) {

    //Estructura del item que enviaremos como body al back para setear en la estructura para enviar a Meli.
    this.item = this.fb.group({
      title : [''],
      quantity: [''],
      price: ['']
    })
  }

  ngOnInit(): void {
  }

  //Funcion que se ejecuta cuando se aprieta el boton submit del formulario, y lo que hace es enviar por post el Item que se seteo
  //con los valores de los inputs del formulario.
  onSubmit() {
    this.itemsService.postItem(JSON.stringify(this.item.value))
    .subscribe(
      (response) => {
        console.log('Respuesta del server: ', response);
        this.router.navigate(['dashboard']);
      },
      (error) => console.log('Ha ocurrido un error al publicar el nuevo item: ', error)
    )
  }

}
