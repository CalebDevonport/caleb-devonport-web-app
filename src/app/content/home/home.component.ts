import { Component, OnInit } from '@angular/core';
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

  constructor(private borderSizeService: ContentWidthService) {}

  ngOnInit() {
    this.mediaService.match$.subscribe(isMobile => {
      this.isMobile = isMobile;
    });
    this.borderSizeService.changeSize(800);
  }

}
