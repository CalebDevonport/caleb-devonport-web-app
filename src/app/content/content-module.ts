import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home';
import { SecondComponent } from './second';
import { ThirdComponent } from './third';
import { FourthComponent } from './fourth';
import { GameReviewsComponent, ReviewBannerComponent, ReviewSelectorComponent, LittleNightmaresTwoComponent } from './game-reviews';
import { SixthComponent } from './sixth/sixth.component';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { ContentWidthService } from '../services/content-width.service';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    HomeComponent,
    SecondComponent,
    ThirdComponent,
    FourthComponent,
    GameReviewsComponent,
    ReviewBannerComponent,
    ReviewSelectorComponent,
    SixthComponent,
    LittleNightmaresTwoComponent
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
export class AppModule { }
