import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.scss']
})
export class ImageViewerComponent {

  @Input() imageURL: string;
  @Input() isCircular = false;

  public open: boolean;

  toggleFullscreen() {
    this.open = !this.open;
  }
}
