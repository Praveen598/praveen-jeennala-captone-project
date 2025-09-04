import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { StorageService } from '../../../auth/services/storage.service';

const BASIC_URL = "http://localhost:8765/"; // or your backend base URL

@Injectable({
  providedIn: 'root'
})
export class AdminService {


 constructor(private http: HttpClient) { }


addQuestion(question: any): Observable<any> {
  return this.http.post(BASIC_URL + "api/v1/question/add", question, {
    headers: this.createAuthorizationHeader()
  });
}


  private createAuthorizationHeader(): HttpHeaders {
    return new HttpHeaders().set(
      'Authorization',
      'Bearer ' + StorageService.getToken()
    );
  }



}
