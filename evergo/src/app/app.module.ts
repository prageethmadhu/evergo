import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { AppRoutingModule } from './/app-routing.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FreequentlyAskQuestionsComponent } from './freequently-ask-questions/freequently-ask-questions.component';
import { MainCarousalComponent } from './main-carousal/main-carousal.component';
import { SubCarouselComponent } from './sub-carousel/sub-carousel.component';
import { NewsEventComponent } from './news-event/news-event.component';
import { TourDetailComponent } from './tour-detail/tour-detail.component';
import { TourTestimonialComponent } from './tour-testimonial/tour-testimonial.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ContactAddressComponent } from './contact-address/contact-address.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ContactMainComponent } from './contact-main/contact-main.component';
import { TourMainComponent } from './tour-main/tour-main.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { SelectedTourComponent } from './selected-tour/selected-tour.component';
import { TravelMiniDetailComponent } from './travel-mini-detail/travel-mini-detail.component';
import { MaldivesTravelComponent } from './maldives-travel/maldives-travel.component';

@NgModule({
  declarations: [
 
    AppComponent,
    TopNavigationComponent,
    AboutUsComponent,
    ContactUsComponent,
    FreequentlyAskQuestionsComponent,
    MainCarousalComponent,
    SubCarouselComponent,
    NewsEventComponent,
    TourDetailComponent,
    TourTestimonialComponent,
    ContactAddressComponent,
    ContactFormComponent,
    ContactMainComponent,
    TourMainComponent,
    SelectedTourComponent,
    TravelMiniDetailComponent,
    MaldivesTravelComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
