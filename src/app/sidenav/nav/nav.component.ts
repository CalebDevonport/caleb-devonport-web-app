import { AppRoutes } from './../../routes';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  public AppRoutes = AppRoutes;

  public blogSubListOpen = false;
  public reviewSubListOpen = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public toggleBlogSubList() {
    this.blogSubListOpen = !this.blogSubListOpen;
  }

  public toggleReviewSubList() {
    this.reviewSubListOpen = !this.reviewSubListOpen;
  }

  public navigate(route: string) {
    this.router.navigate(['/', route]);
  }

}
