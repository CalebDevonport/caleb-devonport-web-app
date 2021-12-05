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
import { SecondComponent } from './content/second';
import { ThirdComponent } from './content/third';
import { FourthComponent } from './content/fourth';
import {
  GameReviewsComponent,
  GameReviewsRoutingComponent,
  ReviewSelectorComponent,
  ReviewCardComponent,
  ReviewBannerComponent,
  ScorePieComponent,
  LittleNightmaresTwoComponent
} from './content/game-reviews';
import { FooterComponent } from './sidenav/footer';
import { HeaderComponent } from './sidenav/header';
import { NavComponent } from './sidenav/nav';
import { ImageViewerComponent } from './image-viewer/image-viewer.component';
import { SixthComponent } from './content/sixth/sixth.component';
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
    SecondComponent,
    ThirdComponent,
    FourthComponent,
    GameReviewsComponent,
    FooterComponent,
    HeaderComponent,
    NavComponent,
    ImageViewerComponent,
    ReviewSelectorComponent,
    SixthComponent,
    LittleNightmaresTwoComponent,
    GameReviewsRoutingComponent,
    ReviewBannerComponent,
    ReviewCardComponent,
    ScorePieComponent,
    HomeNavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    CommonModule,
    HammerModule
  ],
  providers: [ContentWidthService,
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: MyHammerConfig,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
