import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-tour-main',
  templateUrl: './tour-main.component.html',
  styleUrls: ['./tour-main.component.css']
})
export class TourMainComponent implements OnInit {

  constructor() { }
  imagePath= environment.imgPath
  ngOnInit() {
  }

}
