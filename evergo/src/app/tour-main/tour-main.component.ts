import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tour-main',
  templateUrl: './tour-main.component.html',
  styleUrls: ['./tour-main.component.css']
})
export class TourMainComponent implements OnInit {

  constructor(private modalService: NgbModal) { }
  imagePath= environment.imgPath
  ngOnInit() {
  }

}
