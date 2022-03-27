import { AppRoutes } from './routes';
import {
  HomeComponent,
  CVComponent,
  PortfolioComponent,
  BlogComponent,
  GameReviewsComponent,
  GameReviewsRoutingComponent,
  LittleNightmaresTwoComponent,
  ContactComponent,
 } from './content';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogRoutingComponent } from './content/blog/routing/blog-routing.component';
import { ReadingListTwentyOneComponent } from './content/blog/posts/reading-list-2021/reading-list-twenty-one.component';
import { DestinyWitchQueenComponent } from './content/game-reviews/reviews/destiny-witch-queen';

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
    path: AppRoutes.CV,
    component: CVComponent
  },
  {
    path: AppRoutes.Portfolio,
    component: PortfolioComponent
  },
  {
    path: AppRoutes.Blog,
    component: BlogRoutingComponent,
    children: [
      {
        path: '',
        component: BlogComponent
      },
      {
        path: AppRoutes.ReadingList2021,
        component: ReadingListTwentyOneComponent
      }
    ]
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
      },
      {
        path: AppRoutes.DestinyWitchQueen,
        component: DestinyWitchQueenComponent
      }
    ]
  },
  {
    path: AppRoutes.Contact,
    component: ContactComponent
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
