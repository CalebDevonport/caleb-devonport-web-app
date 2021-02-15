import { MediaService } from './../../../services/media-service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-review-banner',
  templateUrl: './review-banner.component.html',
  styleUrls: ['./review-banner.component.scss']
})
export class ReviewBannerComponent implements OnInit {

  @Input() imageURL: string;
  @Input() gameTitle: string;
  @Input() reviewScore: string;
  @Input() reviewDate: string;

  public isMobile: boolean;

  private mediaService = new MediaService('(max-width: 768px)');

  constructor() { }

  ngOnInit() {
    this.mediaService.match$.subscribe(value => {
      this.isMobile = value;
    });
  }

}
