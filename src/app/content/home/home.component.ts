import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { AppRoutes } from 'src/app/routes';
import { MediaService } from 'src/app/services';
import { ContentWidthService } from 'src/app/services/content-width.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public AppRoutes = AppRoutes;

  public isMobile: boolean;
  private mediaService = new MediaService('(max-width: 768px)');

  public openMenuSubject: Subject<void> = new Subject<void>();

  constructor(private borderSizeService: ContentWidthService) {}

  ngOnInit() {
    this.mediaService.match$.subscribe(isMobile => {
      this.isMobile = isMobile;
    });
    this.borderSizeService.changeSize(800);
  }

  public onSwipeUp() {
    if (this.isMobile) {
      this.openMenuSubject.next();
    }
  }

}
