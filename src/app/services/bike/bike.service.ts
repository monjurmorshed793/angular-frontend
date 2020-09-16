import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class BikeService {

  constructor(private httpClient: HttpClient) { }


  // tslint:disable-next-line:typedef
  getBikes(){
    return this.httpClient.get('/server/api/v1/bikes');
  }

  getBike(id: number): any{
    return this.httpClient.get('/server/api/v1/bikes/' + id);
  }

  createBigRegistration(bike): any{
    const body = JSON.stringify(bike);
    return this.httpClient.post('/server/api/v1/bikes', body, httpOptions);
  }
}
