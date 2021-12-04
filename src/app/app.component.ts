import { MediaService } from './services';
import { Component, ViewChild, OnInit, ChangeDetectorRef } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { AppRoutes } from './routes';
import { BorderSizeService } from './services/border-size.service';
import { FixedTileStyler } from '@angular/material/grid-list/tile-styler';

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

  public isHome: boolean = true;

  private mediaService = new MediaService('(max-width: 768px)');
  public size: string = '600px';

  constructor(private router: Router, private borderSizeService: BorderSizeService, private changeDetector: ChangeDetectorRef) {
    router.events.subscribe(evt => {
      if (this.mode == 'over' && !!this.sidenav) {
        this.sidenav.close();
      }
      if (evt instanceof NavigationEnd) {
        this.borderSizeService.changeSize(600);
        if (router.url.includes(AppRoutes.Home)) {
          this.isHome = true;
        }
        else {
          this.isHome = false;
        }
        if (!this.isHome) {
          document.querySelector('.mat-sidenav-content').scrollTo(0, 0);
        }
      }
    });
  }

  ngOnInit() {
    this.mediaService.match$.subscribe(value => {
      this.setView(value);
    });

    this.borderSizeService.size$.subscribe(size => {
      this.size = `${Math.min(window.innerWidth * 0.9, size)}px`;
      this.changeDetector.detectChanges();
    });
  }

  public toggleMenu():void {
    this.sidenav.toggle();
    document.querySelector('.mat-drawer-inner-container').scrollTo(0, 0);
  }

  private setView(value: boolean) {
    this.isMobile = value;
    this.opened = !value;
    this.mode = value ? 'over' : 'side';
  }
}
