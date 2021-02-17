import { AppRoutes } from './routes';
import {
  HomeComponent,
  SecondComponent,
  ThirdComponent,
  FourthComponent,
  GameReviewsComponent,
  GameReviewsRoutingComponent,
  LittleNightmaresTwoComponent,
  SixthComponent,
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
    component: GameReviewsRoutingComponent,
    children: [
      {
        path: '',
        component: GameReviewsComponent
      },
      {
        path: AppRoutes.LittleNightmares2,
        component: LittleNightmaresTwoComponent
      }
    ]
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
