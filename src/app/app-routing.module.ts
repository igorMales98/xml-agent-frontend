import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CreateAdvertisementComponent} from './create-advertisement/create-advertisement.component';
import { RatingComponent } from './rating/rating.component';


const routes: Routes = [
  {path: 'createAdvertisement', component: CreateAdvertisementComponent},
  {path: 'rating', component: RatingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
