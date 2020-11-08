import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

import { environment } from '../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  readonly API_URL = environment.apiUrl;

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'text/html',
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods': 'GET, PUT, POST, DELETE, HEAD, OPTIONS'
    })
  }
  constructor(
    private httpClient: HttpClient
  ) { }

  getAccessToken( code ) {
    return this.httpClient.get(`${this.API_URL}/auth/code?code=${code}`);
  }

  getDashboard( ) {
    return this.httpClient.get(`${this.API_URL}/dashboard`);
  }
}
