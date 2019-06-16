import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TourDetailService } from '../tour-detail.service';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-selected-tour',
  templateUrl: './selected-tour.component.html',
  styleUrls: ['./selected-tour.component.css']
})
export class SelectedTourComponent implements OnInit {
  selectedType: {};
  constructor(private route: ActivatedRoute, private tourDetail: TourDetailService) { }

  ngOnInit() {
    this.selectedType = this.tourDetail.getTourDetail(this.route.snapshot.paramMap.get('id'));
  }
  imagePath= environment.imgPath;

}
