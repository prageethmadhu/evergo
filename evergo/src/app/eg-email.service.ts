import { Injectable } from '@angular/core';
import { MailMessage } from '../app/Models/MailMessage'
import { HttpClient ,HttpHeaders,} from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})



export class EgEmailService {

  constructor(private http: HttpClient) { }

  sendMessage(message : MailMessage):Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.http.post<MailMessage>("http://api.evergotravels.com/api/email",message,httpOptions);


  }

}
