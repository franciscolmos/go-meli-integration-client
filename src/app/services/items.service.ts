import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  constructor(
    private httpClient: HttpClient
  ) { }

  //Servicios que utilizamos para pegarles a los endpoints de nuestra API en golang

  getAccessToken( code: any ): Observable< any > {
    return this.httpClient.get< any >(`/api/auth/code?code=${code}`);
  }

  getDashboard( ): Observable< any > {
    return this.httpClient.get<any>(`/api/dashboard`);
  }

  postItem(body: any): Observable< any >{
    return this.httpClient.post<any>(`/api/post/item`, body)
  }
}
