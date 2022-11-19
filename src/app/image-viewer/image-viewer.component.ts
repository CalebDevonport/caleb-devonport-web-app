import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.scss']
})
export class ImageViewerComponent implements OnInit {

  @Input() public imageURLs: string[];
  @Input() isCircular = false;

  public selectedImageURL: string;
  public open: boolean;
  public isSingleImage: boolean;

  public currentIndex = 0;

  public ngOnInit(): void {
    this.imageURLs = this.imageURLs.map(img => {
      return `assets/images/${img}`;
    });
    this.selectedImageURL = this.imageURLs[this.currentIndex];
    this.isSingleImage = this.imageURLs.length == 1;
  }

  toggleFullscreen() {
    this.open = !this.open;
  }

  cycleLeft() {
    if (this.currentIndex != 0) {
      this.currentIndex = this.currentIndex - 1;
      this.selectedImageURL = this.imageURLs[this.currentIndex];
    }
  }

  cycleRight() {
    if (this.currentIndex != this.imageURLs.length - 1) {
      this.currentIndex = this.currentIndex + 1;
      this.selectedImageURL = this.imageURLs[this.currentIndex];
    }
  }
}
