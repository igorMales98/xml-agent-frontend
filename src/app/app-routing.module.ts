import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {CreateAdvertisementComponent} from './create-advertisement/create-advertisement.component';
import {AppComponent} from './app.component';


const routes: Routes = [
  {path: 'createAdvertisement', component: CreateAdvertisementComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
