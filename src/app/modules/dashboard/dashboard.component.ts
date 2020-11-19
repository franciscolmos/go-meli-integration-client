import { Component, OnInit, OnDestroy, ViewChild  } from '@angular/core';
import { Subscription } from 'rxjs';
import { ItemsService } from '../../services/items.service'
import { NgxSpinnerService } from "ngx-spinner";
import { MatPaginator } from '@angular/material/paginator';
//import { MatTableDataSource } from '@angular/material/table'


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {

  //Columnas de las tres tablas que se muestran en el Dashboard
  displayedColumnsItems: string[] = ['Title', 'Quantity', 'Price', 'FirstPicture'];
  displayedColumnsSalesOrders: string[] = ['Sold_Items' , 'Sale_date', 'Total', 'Total_Delivery'];
  displayedColumnsUnansweredQuestions: string[] = ['Question_date', 'Title', 'Question_text',];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  //Array de subscripciones que utilizaremos para subscribirnos valga la redundancia.
  subscriptions: Subscription[] = [];

  //Objeto Dashboard que utilizaremos para guardar el response de nuestra API de Golang.
  dashboard: any
  
  constructor(
    private spinner: NgxSpinnerService,
    private itemsService: ItemsService
  ) { }

  ngOnInit(): void {
    
    //this.dataSource.paginator = this.paginator;
    //Obtenemos el code desde la url.
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get('code');

    //llamamos el servicio para intercambiar el code por un access token.
    this.itemsService.getAccessToken(code)

    //Nos subscribimos al servicio para poder acceder al response en caso exitoso, o mostrar el error de lo contrario.
    .subscribe(
      (token) => {
        console.log('Token Response: ', token)
      },
      (errorToken) => {
        console.error('Error al obtener el Token: ', errorToken)
      }
    )

    //llamamos el servicio para obtner el dashboard (compuesto de los items publicados por el vendedor, las ventas y las preguntas sin responder 
    //de cada item).
    this.itemsService.getDashboard()

    //Nos subscribimos al servicio para poder acceder al response en caso exitoso, o mostrar el error de lo contrario.
    .subscribe(
      (dashboard) => {
        console.log('Dashboard Respones: ', dashboard)
        //seteamos a nuesta variable dashboard el response del server.
        this.dashboard =  dashboard;
      },
      (errorDashboard) => {
        console.error('Error al obtener el Dashboard: ',errorDashboard);
          return;
      }
    )

    // Mostramos un spinner de Pacman mientras esperamos que la API de Golang consulte a la API de Meli y nos devuelva el Dashboard
    // Le damos unos 5 segundos de espera.
    this.spinner.show()
    setTimeout(() => {
      this.spinner.hide();
    }, 5000);
    
    }

  // Nos des subscribimos a todas las subscripciones de servicios que hallamos hecho, es parte del ciclo de vida del componente.
  ngOnDestroy() {
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    });
  }
}
