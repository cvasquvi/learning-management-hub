import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface HelloResponse {
  message: string;
}

const API_URL = 'http://localhost:3000/api/hello';

@Injectable({ providedIn: 'root' })
export class HelloService {
  constructor(private readonly http: HttpClient) {}

  getHello(): Observable<HelloResponse> {
    return this.http.get<HelloResponse>(API_URL);
  }
}
