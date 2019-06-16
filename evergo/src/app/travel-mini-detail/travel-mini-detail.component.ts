import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TourMiniDetailService } from '../tour-mini-detail.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-travel-mini-detail',
  templateUrl: './travel-mini-detail.component.html',
  styleUrls: ['./travel-mini-detail.component.css']
})
export class TravelMiniDetailComponent implements OnInit {
  travels: {};
  constructor(private route: ActivatedRoute, private tourDetails: TourMiniDetailService) { }
  imagePath = environment.imgPath;
  ngOnInit() {
    this.travels = this.tourDetails.getAllTravelMiniDetail(this.route.snapshot.paramMap.get('id'));

  }

}
