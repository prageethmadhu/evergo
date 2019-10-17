import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-main-carousal',
  templateUrl: './main-carousal.component.html',
  styleUrls: ['./main-carousal.component.css']
})
export class MainCarousalComponent implements OnInit {

  isMaldivs:any;

  constructor(private router: Router ) { }

  ngOnInit() {
    this.isMaldivs=this.router.url.includes('/tour-maldives/Maldives');
  }
  imagePath= environment.imgPath
}
