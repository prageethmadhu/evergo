import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
@Component({
  selector: 'app-maldives-travel',
  templateUrl: './maldives-travel.component.html',
  styleUrls: ['./maldives-travel.component.css']
})
export class MaldivesTravelComponent implements OnInit {

  constructor() { }
  imagePath= environment.imgPath
  ngOnInit() {
  }

}
