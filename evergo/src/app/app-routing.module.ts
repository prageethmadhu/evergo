import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { TourDetailComponent } from './tour-detail/tour-detail.component';
import { FreequentlyAskQuestionsComponent } from './freequently-ask-questions/freequently-ask-questions.component';
import { TourTestimonialComponent } from './tour-testimonial/tour-testimonial.component';
import { NewsEventComponent } from './news-event/news-event.component';
import { ContactMainComponent } from './contact-main/contact-main.component';
import { TourMainComponent } from './tour-main/tour-main.component';
import { SelectedTourComponent } from './selected-tour/selected-tour.component';
import { MaldivesTravelComponent } from './maldives-travel/maldives-travel.component';
import { ExcursionsTravelComponent } from './excursions-travel/excursions-travel.component';


const routes: Routes = [
  {
    path: 'contact',
    component: ContactMainComponent
  },
  {
    path: 'faq',
    component: FreequentlyAskQuestionsComponent
  },
  {
    path: 'news-events/:id',
    component: TourMainComponent
  },
  {
    path: 'news-events',
    component: TourMainComponent
  },
  {
    path: 'about',
    component: AboutUsComponent
  },
  {
    path: 'testimonials',
    component: TourTestimonialComponent
  },
  {
    path: 'tour',
    component: TourDetailComponent
  },
  {
    path: 'selected-tour/:id',
    component: SelectedTourComponent
  },
   {
    path: 'tour-maldives/:id',
    component: MaldivesTravelComponent
  },
  {
    path: 'selected-tour/details/:id',
    component: ExcursionsTravelComponent
  },
  {
    path: '',
    redirectTo: '/tour',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
