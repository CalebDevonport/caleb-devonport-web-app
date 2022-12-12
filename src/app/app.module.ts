import { MaterialModule } from './../material.module';
import { BrowserModule, HammerGestureConfig, HammerModule, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Injectable, NgModule } from '@angular/core';
import * as Hammer from 'hammerjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './content/home';
import { SidenavComponent } from './sidenav';
import { ToolbarComponent } from './toolbar';
import { CVComponent } from './content/cv';
import { PortfolioComponent } from './content/portfolio';
import { PostSelectorComponent } from './common';
import {
  BlogComponent,
  ReadingListTwentyOneComponent,
  BlogRoutingComponent
} from './content/blog';
import {
  GameReviewsComponent,
  GameReviewsRoutingComponent,
  ReviewCardComponent,
  ReviewBannerComponent,
  ScorePieComponent,
  LittleNightmaresTwoComponent,
  DestinyWitchQueenComponent,
  ScornComponent,
  TheCallistoProtocolComponent
} from './content/game-reviews';
import { FooterComponent } from './sidenav/footer';
import { HeaderComponent } from './sidenav/header';
import { NavComponent } from './sidenav/nav';
import { ImageViewerComponent } from './image-viewer/image-viewer.component';
import { ContactComponent } from './content/contact/contact.component';
import { HomeNavComponent } from './content/home/home-nav/home-nav.component';
import { ContentWidthService } from './services/content-width.service';
import { CommonModule } from '@angular/common';

@Injectable()
export class MyHammerConfig extends HammerGestureConfig {
  overrides = <any> {
    swipe: { direction: Hammer.DIRECTION_ALL }
  };
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidenavComponent,
    ToolbarComponent,
    CVComponent,
    PortfolioComponent,
    BlogComponent,
    GameReviewsComponent,
    FooterComponent,
    HeaderComponent,
    NavComponent,
    ImageViewerComponent,
    ContactComponent,
    LittleNightmaresTwoComponent,
    DestinyWitchQueenComponent,
    ScornComponent,
    TheCallistoProtocolComponent,
    BlogRoutingComponent,
    GameReviewsRoutingComponent,
    ReviewBannerComponent,
    ReviewCardComponent,
    ScorePieComponent,
    HomeNavComponent,
    PostSelectorComponent,
    ReadingListTwentyOneComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    CommonModule,
    HammerModule
  ],
  providers: [
    ContentWidthService,
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
