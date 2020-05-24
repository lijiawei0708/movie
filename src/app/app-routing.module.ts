import { DetailPageComponent } from './views/detail-page/detail-page.component';
import { HomePageComponent } from './views/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: "", component: HomePageComponent},
  {path: "detail/:mid", component: DetailPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
