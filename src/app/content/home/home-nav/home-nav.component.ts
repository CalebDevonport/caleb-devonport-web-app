import { Component, OnInit } from '@angular/core';
import { AppRoutes } from 'src/app/routes';

@Component({
  selector: 'app-home-nav',
  templateUrl: './home-nav.component.html',
  styleUrls: ['./home-nav.component.scss']
})
export class HomeNavComponent implements OnInit {

  public AppRoutes = AppRoutes;

  public open: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu() {
    this.open = !this.open;
  }
}
