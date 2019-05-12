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
    TourTestimonialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
