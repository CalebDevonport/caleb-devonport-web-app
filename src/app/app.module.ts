import { MaterialModule } from './../material.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './content/home/home.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SecondComponent } from './content/second/second.component';
import { ThirdComponent } from './content/third/third.component';
import { FourthComponent } from './content/fourth/fourth.component';
import { FifthComponent } from './content/fifth/fifth.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidenavComponent,
    ToolbarComponent,
    SecondComponent,
    ThirdComponent,
    FourthComponent,
    FifthComponent
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
