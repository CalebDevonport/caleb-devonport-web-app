import { AppRoutes } from './../../../routes';
import { ActivatedRoute, Router } from '@angular/router';
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
  @Input() route: string;

  public isMobile: boolean;

  private mediaService = new MediaService('(max-width: 768px)');

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.mediaService.match$.subscribe(value => {
      this.isMobile = value;
    });
  }

  public navigate() {
    if(this.route) {
      this.router.navigate([this.route], {relativeTo: this.activatedRoute});
    }
  }

}
