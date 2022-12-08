import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {DataComponent} from './data/data.component';
import { AboutComponent } from './about/about.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { AboutCompanyComponent } from './about-company/about-company.component';

const routes: Routes = [
  {path:"home", component:HomeComponent},
  {path:'data',component:DataComponent},
  {path:"about", component: AboutComponent},
  {path:"about/aboutme", component: AboutMeComponent},
  {path:"about/aboutcompany", component: AboutCompanyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
