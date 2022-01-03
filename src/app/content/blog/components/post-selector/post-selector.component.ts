import { ActivatedRoute, Router } from '@angular/router';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-selector',
  templateUrl: './post-selector.component.html',
  styleUrls: ['./post-selector.component.scss']
})
export class PostSelectorComponent {

  @Input() imageURL: string;
  @Input() postTitle: string;
  @Input() postDate: string;
  @Input() route: string;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  public navigate() {
    if (this.route) {
      this.router.navigate([this.route], {relativeTo: this.activatedRoute});
    }
  }

}
