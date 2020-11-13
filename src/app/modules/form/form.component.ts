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

  onSubmit() {
    this.itemsService.postItem(JSON.stringify(this.item.value))
    .subscribe(
      (response) => console.log(response),
      (error) => console.log(error)
    )
  }

}
