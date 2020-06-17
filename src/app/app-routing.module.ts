import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CreateAdvertisementComponent} from './create-advertisement/create-advertisement.component';
import {MessagesComponent} from './messages/messages.component';
import {CreateReportComponent} from './create-report/create-report.component';
import {HomePageComponent} from './home-page/home-page.component';
import {PricelistComponent} from './pricelist/pricelist.component';
import {RentACarComponent} from './rent-a-car/rent-a-car.component';
import {StatisticsComponent} from './statistics/statistics.component';


const routes: Routes = [
  {path: 'createAdvertisement', component: CreateAdvertisementComponent},
  {path: 'createReport', component: CreateReportComponent},
  {path: 'messages', component: MessagesComponent},
  {path: 'homePage', component: HomePageComponent},
  {path: 'rentACar', component: RentACarComponent},
  {path: 'pricelist', component: PricelistComponent},
  {path: 'homePage', component: HomePageComponent},
  {path: 'statistics', component: StatisticsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
