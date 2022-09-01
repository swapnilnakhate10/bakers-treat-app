import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})

export class HttpService {

  httpOptions : any;

  constructor(private http: HttpClient) {
    let token = 'Bearer '+ StorageService.get(StorageService.AUTH_TOKEN);
    this.httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': token,
          'Access-Control-Allow-Origin' : '*'
        })
      };
  }

  get(url : string) {
     return this.http.get(url, this.httpOptions);
  }

  post(url : string, requestBody : any) {
     return this.http.post(url, requestBody, this.httpOptions);
  }

  put(url : string, requestBody : any) {
     return this.http.put(url, requestBody, this.httpOptions);
  }

  delete(url : string) {
     return this.http.delete(url, this.httpOptions);
  }

}
