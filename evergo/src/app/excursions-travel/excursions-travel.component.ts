import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-excursions-travel',
  templateUrl: './excursions-travel.component.html',
  styleUrls: ['./excursions-travel.component.css']
})
export class ExcursionsTravelComponent implements OnInit {

  constructor() { }
  imagePath= environment.imgPath
  ngOnInit() {
  }

}
