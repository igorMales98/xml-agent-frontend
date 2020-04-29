import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CreateAdvertisementComponent} from './create-advertisement/create-advertisement.component';
import {AppComponent} from './app.component';
import {HomePageComponent} from './home-page/home-page.component';


const routes: Routes = [
  {path: 'homePage', component: HomePageComponent},
  {path: 'createAdvertisement', component: CreateAdvertisementComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
