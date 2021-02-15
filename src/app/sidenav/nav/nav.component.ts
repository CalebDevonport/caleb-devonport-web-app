import { AppRoutes } from './../../routes';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  public AppRoutes = AppRoutes;

  public subListOpen = false;

  constructor() { }

  ngOnInit(): void {
  }

  public toggleSubList() {
    this.subListOpen = !this.subListOpen;
  }

}
