import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CreateAdvertisementComponent} from './create-advertisement/create-advertisement.component';
import {AppComponent} from './app.component';
import {CreateReportComponent} from './create-report/create-report.component';
import {HomePageComponent} from './home-page/home-page.component';
import {RatingComponent} from './rating/rating.component';
import {RentACarComponent} from './rent-a-car/rent-a-car.component';


const routes: Routes = [
  {path: 'createAdvertisement', component: CreateAdvertisementComponent},
  {path: 'createReport', component: CreateReportComponent},
  {path: 'createAdvertisement', component: CreateAdvertisementComponent},
  {path: 'rating', component: RatingComponent},
  {path: 'homePage', component: HomePageComponent},
  {path: 'rentACar', component: RentACarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
