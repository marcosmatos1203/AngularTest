import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponsePageable } from '../model/responsePageable.model';

@Injectable({
  providedIn: 'root'
})
export class ProdutorService {
  apiUrl = 'ec2-54-145-224-156.compute-1.amazonaws.com:5432';
  httpOptions = {
    Headers: new HttpHeaders({
      'Content-type':'application/json'
    })
  };

  constructor(
    private httpClient: HttpClient
    ) {}

  public getProdutorWithFlag(flag:string):Observable<ResponsePageable>{
   
    return this.httpClient.get<ResponsePageable>(this.apiUrl+'?flag=' + flag);
  }
}
