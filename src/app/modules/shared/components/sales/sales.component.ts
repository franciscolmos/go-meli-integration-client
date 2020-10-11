import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
  symbol: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Tele', weight: '$20.000', symbol: 1},
  {position: 2, name: 'Monitor', weight: '$15.000', symbol: 3},
  {position: 3, name: 'Teclado', weight: '$9.000', symbol: 5},
  {position: 4, name: 'Mouse', weight: '$2.500', symbol: 10},
  {position: 5, name: 'Celular', weight: '$12.000', symbol: 8},
  {position: 6, name: 'Gabinete', weight: '$10.000', symbol: 9},
  {position: 7, name: 'Memoria RAM', weight: '$8.000', symbol: 2},
  {position: 8, name: 'Micro procesador', weight: '$25.000', symbol: 9},
  {position: 9, name: 'Cooler', weight:"$7.000", symbol: 22},
  {position: 10, name: 'Calculadora', weight: '$2.500', symbol: 15},
];

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.css']
})
export class SalesComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
