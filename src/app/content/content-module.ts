import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home';
import { SecondComponent } from './second';
import { ThirdComponent } from './third';
import { BlogComponent, ReadingListTwentyOneComponent } from './blog';
import { GameReviewsComponent, ReviewBannerComponent, ReviewSelectorComponent, LittleNightmaresTwoComponent } from './game-reviews';
import { SixthComponent } from './sixth/sixth.component';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { ContentWidthService } from '../services/content-width.service';
import { CommonModule } from '@angular/common';
import { AppModule } from '../app.module';

@NgModule({
  declarations: [
    HomeComponent,
    SecondComponent,
    ThirdComponent,
    BlogComponent,
    ReadingListTwentyOneComponent,
    GameReviewsComponent,
    LittleNightmaresTwoComponent,
    ReviewBannerComponent,
    ReviewSelectorComponent,
    SixthComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppModule,
    AppRoutingModule,
    RouterModule,
    ContentWidthService,
    CommonModule
  ],
  providers: [],
  bootstrap: []
})
export class ContentModule { }
