import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home';
import { SecondComponent } from './second';
import { ThirdComponent } from './third';
import { FourthComponent } from './fourth';
import { GameReviewsComponent, ReviewBannerComponent, LittleNightmaresTwoComponent } from './game-reviews';
import { SixthComponent } from './sixth/sixth.component';

@NgModule({
  declarations: [
    HomeComponent,
    SecondComponent,
    ThirdComponent,
    FourthComponent,
    GameReviewsComponent,
    ReviewBannerComponent,
    SixthComponent,
    LittleNightmaresTwoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
