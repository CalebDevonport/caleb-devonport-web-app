import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MediaService } from '../services';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  public isMobile: boolean;
  private mediaService = new MediaService('(max-width: 768px)');

  @Output() toggleMenuEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
    this.mediaService.match$.subscribe(isMobile => {
      this.isMobile = isMobile;
    });
  }

  toggleMenu(): void {
    this.toggleMenuEvent.emit();
  }
}
