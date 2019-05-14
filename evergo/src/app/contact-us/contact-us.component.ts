import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient ,HttpHeaders,} from '@angular/common/http';
import { EmailMessage } from '../emailMessage';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  emailMessage: EmailMessage = {
    From : '1',
    Message: ''
  };
  clickMessage = '';
  emailAdress='';

  constructor( private http: HttpClient) { 

  }

  ngOnInit() {
  }
  imagePath= environment.imgPath
  onClickMe() {
    debugger;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    //this.http.get<any>("http://api.evergotravels.com/api/values").subscribe(data=>console.log(data));
    this.http.post<EmailMessage>("http://api.evergotravels.com/api/email",this.emailMessage,httpOptions).subscribe(data=>console.log(data));
    this.emailMessage.Message="";

    this.clickMessage =this.emailAdress;
  }
}
