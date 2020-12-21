import { Component, OnInit, OnDestroy, ViewChild  } from '@angular/core';
import { Subscription } from 'rxjs';
import { ItemsService } from '../../services/items.service'
import { NgxSpinnerService } from "ngx-spinner";
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table'
import * as moment from 'moment';

//Interfaz donde guardaremos los items del endpoint api/dashboard
interface Items {
  Id: string,
  Title: string,
  Quantity: number,
  Price: number,
  FirstPicture: string
}

//Interfaz donde guardaremos las ventas del endpoint api/dashboard
interface Sales_Orders {
  Sold_Items: {
    Title: string,
    Sold_Quantity: number,
    Unit_Price: number,
    Subtotal: number
  },
  Sale_date: string,
  Total: number,
  Total_Delivey: number
}

//Interfaz donde guardaremos los preguntas de los items del endpoint api/dashboard
interface Unanswered_Questions {
  Id: string,
  Question_date: string,
  Title: string,
  Question_text: string
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  panelOpenState = false;
  //Columnas de las tres tablas que se muestran en el Dashboard
  displayedColumnsItems: string[] = ['Title', 'Quantity', 'Price', 'FirstPicture', 'ViewItem'];
  displayedColumnsSalesOrders: string[] = ['Sold_Items' , 'Sale_date', 'Total', 'Total_Delivery'];
  displayedColumnsUnansweredQuestions: string[] = ['Question_date', 'Title', 'Question_text','Id'];

  // necesarios para paginar
  items: Items[] = [];
  dataItems = null;

  salesOrders: Sales_Orders[] = [];
  dataSalesOrders = null;

  unansweredQuestions: Unanswered_Questions[] = [];
  dataUnansweredQuestions = null;

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
        //llamamos el servicio para obtner el dashboard (compuesto de los items publicados por el vendedor, las ventas y las preguntas sin responder 
        //de cada item).
        this.itemsService.getDashboard()
        //Nos subscribimos al servicio para poder acceder al response en caso exitoso, o mostrar el error de lo contrario.
        .subscribe(
          (dashboard) => {
            //Formateamos el id para agregarle un - entre MLA y el numero
            for(let i = 0; i < dashboard['Items'].length; i++){
              let site = dashboard['Items'][i]['Id'].split("A")[0]
              let id = dashboard['Items'][i]['Id'].split("A")[1]
              id = site + "A-" + id
              dashboard['Items'][i]['Id'] = id
              //llenamos de items el array de datos de tipo itemsz
              this.items.push(dashboard['Items'][i])
            }
            //llenamos de ventas el array de datos de tipo Sales_Orders
            for(let i = 0; i < dashboard['Sales_Orders'].length; i++){
              //formateamos la fecha con la libreria moment.js
              //podemos utilizar este formato: format('Do MMMM YYYY) tambien;
              let publishDate =  moment(dashboard['Sales_Orders'][i]['Sale_date']).format('Do MMMM YYYY');
              let subtotal = dashboard['Sales_Orders'][i]['Sold_Items'][0]['Unit_Price'] * dashboard['Sales_Orders'][i]['Sold_Items'][0]['Sold_Quantity']
              dashboard['Sales_Orders'][i]['Sold_Items'][0]['Subtotal'] = subtotal
              dashboard['Sales_Orders'][i]['Sale_date'] = publishDate;
              this.salesOrders.push(dashboard['Sales_Orders'][i])
            }
            //llenamos de ventas el array de datos de tipo Sales_Orders
            for(let i = 0; i < dashboard['Unanswered_Questions'].length; i++){
              //formateamos la fecha con la libreria moment.js
              //podemos utilizar este formato: format('Do MMMM YYYY);
              let questionDate = moment(dashboard['Unanswered_Questions'][i]['Question_date']).format('Do MMMM YYYY');
              dashboard['Unanswered_Questions'][i]['Question_date'] = questionDate;
              this.unansweredQuestions.push(dashboard['Unanswered_Questions'][i])
            }
            console.log('Dashboard Respones: ', dashboard)

            //seteamos a nuesta variable dashboard el response del server.
            this.dashboard =  dashboard;

            //seteamos la informacion a paginar y a mostrar en tabla
            this.dataItems = new MatTableDataSource< Items >(this.items);
            this.dataSalesOrders = new MatTableDataSource< Sales_Orders >(this.salesOrders);
            this.dataUnansweredQuestions = new MatTableDataSource< Unanswered_Questions >(this.unansweredQuestions);

            //paginamos
            this.dataItems.paginator = this.paginator;
          },
          (errorDashboard) => {
            console.error('Error al obtener el Dashboard: ',errorDashboard);
              return;
          }
        )
      },
      (errorToken) => {
        console.error('Error al obtener el Token: ', errorToken)
      }
    )

    // Mostramos un spinner de Pacman mientras esperamos que la API de Golang consulte a la API de Meli y nos devuelva el Dashboard
    // Le damos unos 5 segundos de espera.
    this.spinner.show()
    setTimeout(() => {
      this.spinner.hide();
    }, 6000);    
  }

  // Nos des subscribimos a todas las subscripciones de servicios que hallamos hecho, es parte del ciclo de vida del componente.
  ngOnDestroy() {
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    });
  }
}
