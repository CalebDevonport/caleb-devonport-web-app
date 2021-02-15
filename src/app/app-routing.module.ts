import { AppRoutes } from './routes';
import {
  LittleNightmaresTwoComponent,
  SixthComponent,
  GameReviewsComponent,
  FourthComponent,
  ThirdComponent,
  SecondComponent,
  HomeComponent
 } from './content';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: AppRoutes.Home,
    component: HomeComponent
  },
  {
    path: AppRoutes.Second,
    component: SecondComponent
  },
  {
    path: AppRoutes.Third,
    component: ThirdComponent
  },
  {
    path: AppRoutes.Fourth,
    component: FourthComponent
  },
  {
    path: AppRoutes.GameReviews,
    component: GameReviewsComponent
  },
  {
    path: AppRoutes.LittleNightmares2,
    component: LittleNightmaresTwoComponent
  },
  {
    path: AppRoutes.Sixth,
    component: SixthComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
