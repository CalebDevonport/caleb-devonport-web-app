import { MaterialModule } from './../material.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './content/home';
import { SidenavComponent } from './sidenav';
import { ToolbarComponent } from './toolbar';
import { SecondComponent } from './content/second';
import { ThirdComponent } from './content/third';
import { FourthComponent } from './content/fourth';
import { GameReviewsComponent } from './content/game-reviews';
import { FooterComponent } from './sidenav/footer';
import { HeaderComponent } from './sidenav/header';
import { NavComponent } from './sidenav/nav';
import { ImageViewerComponent } from './image-viewer/image-viewer.component';
import { ReviewBannerComponent } from './content/game-reviews/review-banner/review-banner.component';
import { SixthComponent } from './content/sixth/sixth.component';
import { LittleNightmaresTwoComponent } from './content/game-reviews/reviews/little-nightmares-two/little-nightmares-two.component';

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
    ReviewBannerComponent,
    SixthComponent,
    LittleNightmaresTwoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
