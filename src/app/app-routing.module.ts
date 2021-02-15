import { SixthComponent } from './content/sixth/sixth.component';
import { GameReviewsComponent } from './content/game-reviews/game-reviews.component';
import { FourthComponent } from './content/fourth/fourth.component';
import { ThirdComponent } from './content/third/third.component';
import { SecondComponent } from './content/second';
import { HomeComponent } from './content/home';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'second',
    component: SecondComponent
  },
  {
    path: 'third',
    component: ThirdComponent
  },
  {
    path: 'fourth',
    component: FourthComponent
  },
  {
    path: 'game-reviews',
    component: GameReviewsComponent
  },
  {
    path: 'sixth',
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
