import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { User } from '../model/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  httpOptions = {
    Headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  };

  constructor(
    private http: HttpClient
  ) { }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.api}/users`);
  }

  getUserById(id: number): Observable<User[]> {
    return this.http.get<User[]>(`${environment.api}/users/${id}`);
  }

}
