import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CreateAdvertisementComponent} from './create-advertisement/create-advertisement.component';
import { MessagesComponent } from './messages/messages.component';
import {HomePageComponent} from './home-page/home-page.component';
import { RatingComponent } from './rating/rating.component';
import { PricelistComponent } from './pricelist/pricelist.component';
import {RatingComponent} from './rating/rating.component';
import {RentACarComponent} from './rent-a-car/rent-a-car.component';


const routes: Routes = [
  {path: 'createAdvertisement', component: CreateAdvertisementComponent},
  {path: 'rating', component: RatingComponent},
  {path: 'messages', component: MessagesComponent},
  {path: 'homePage', component: HomePageComponent},
  {path: 'rentACar', component: RentACarComponent}
  {path: 'pricelist', component: PricelistComponent},
  {path: 'homePage', component: HomePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
