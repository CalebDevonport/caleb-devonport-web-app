import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HomeComponent } from './home';
import { CVComponent } from './cv';
import { PortfolioComponent } from './portfolio';
import { BlogComponent, ReadingListTwentyOneComponent } from './blog';
import { GameReviewsComponent, ReviewBannerComponent, LittleNightmaresTwoComponent } from './game-reviews';
import { ContactComponent } from './contact/contact.component';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { ContentWidthService } from '../services/content-width.service';
import { CommonModule } from '@angular/common';
import { AppModule } from '../app.module';

@NgModule({
  declarations: [
    HomeComponent,
    CVComponent,
    PortfolioComponent,
    BlogComponent,
    ReadingListTwentyOneComponent,
    GameReviewsComponent,
    LittleNightmaresTwoComponent,
    ReviewBannerComponent,
    ContactComponent,
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
