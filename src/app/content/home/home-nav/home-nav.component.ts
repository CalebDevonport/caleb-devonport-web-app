import { Component, OnInit } from '@angular/core';
import { AppRoutes } from 'src/app/routes';

@Component({
  selector: 'app-home-nav',
  templateUrl: './home-nav.component.html',
  styleUrls: ['./home-nav.component.scss']
})
export class HomeNavComponent implements OnInit {

  public AppRoutes = AppRoutes;

  constructor() { }

  ngOnInit(): void {
  }

  public open: boolean;

  toggleMenu() {
    this.open = !this.open;
  }
}
