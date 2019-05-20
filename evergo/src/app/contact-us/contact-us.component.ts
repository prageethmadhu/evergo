import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient ,HttpHeaders,} from '@angular/common/http';
import { EmailMessage } from '../emailMessage';
import { EgEmailService} from '../eg-email.service';

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

  constructor( private http: HttpClient,private emailService :EgEmailService) { 

  }

  ngOnInit() {
  }
  
  imagePath= environment.imgPath

  onClickMe() {
    this.emailService.sendMessage(this.emailMessage).subscribe(data=>console.log(data));
    this.emailMessage.Message="";
    this.clickMessage =this.emailAdress;
  }
}
