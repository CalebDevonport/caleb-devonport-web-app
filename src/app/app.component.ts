import { MediaService } from './services';
import { Component, ViewChild, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild('sidenav') public sidenav: MatSidenav;

  public opened: boolean;

  public mode: string;

  public isMobile: boolean;

  private mediaService = new MediaService('(max-width: 768px)');

  constructor(private router: Router) {
    router.events.subscribe(evt => {
      if (this.mode == 'over') {
        this.sidenav.close();
      }
      if (evt instanceof NavigationEnd) {
        document.querySelector('.mat-sidenav-content').scrollTo(0, 0);
      }
    });
  }

  ngOnInit() {
    this.mediaService.match$.subscribe(value => {
      this.setView(value);
    });
  }

  public toggleMenu():void {
    this.sidenav.toggle();
  }

  private setView(value: boolean) {
    this.isMobile = value;
    this.opened = !value;
    this.mode = value ? 'over' : 'side';
  }
}
