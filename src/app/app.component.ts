import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  public get isMobile(): boolean {
    const query = '(max-width: 768px)';
    const mediaQueryList = window.matchMedia(query);

    return mediaQueryList.matches ? true : false;
  }

  public get mode(): string {
    return this.isMobile ? 'over' : 'side';
  } 
}
