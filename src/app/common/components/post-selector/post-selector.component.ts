import { ActivatedRoute, Router } from '@angular/router';
import { MediaService } from '../../../services/media-service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-selector',
  templateUrl: './post-selector.component.html',
  styleUrls: ['./post-selector.component.scss']
})
export class PostSelectorComponent implements OnInit {

  @Input() imageURL: string;
  @Input() title: string;
  @Input() score: string;
  @Input() date: string;
  @Input() route: string;
  @Input() dateText: string;

  public isMobile: boolean;

  private mediaService = new MediaService('(max-width: 768px)');

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.mediaService.match$.subscribe(value => {
      this.isMobile = value;
    });
  }

  public navigate() {
    if (this.route) {
      this.router.navigate([this.route], {relativeTo: this.activatedRoute});
    }
  }
}
