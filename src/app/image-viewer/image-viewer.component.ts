import { ChangeDetectorRef } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.scss']
})
export class ImageViewerComponent implements OnInit {

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  @Input() public imageURLs: string[];
  @Input() aspectRatio = 16/9;

  public selectedImageURL: string;
  public selectedLargeImageURL: string;
  public open: boolean;
  public isSingleImage: boolean;

  public shouldShow = true;
  public currentIndex = 0;

  public ngOnInit(): void {
    this.imageURLs = this.imageURLs.map(img => {
      return `assets/images/${img}`;
    });
    this.selectedImageURL = this.imageURLs[this.currentIndex];
    this.selectedLargeImageURL = this.getLargeImage(this.selectedImageURL);
    this.isSingleImage = this.imageURLs.length == 1;
  }

  toggleFullscreen() {
    this.open = !this.open;
  }

  getLargeImage(imageUrl: string) {
    const imageUrlSplit = imageUrl.split('.');
    return `${imageUrlSplit[0]}-large.${imageUrlSplit[1]}`
  }

  cycleLeft() {
    if (this.currentIndex != 0) {
      this.cycle(this.currentIndex - 1);
    }
  }

  cycleRight() {
    if (this.currentIndex != this.imageURLs.length - 1) {
      this.cycle(this.currentIndex + 1);
    }
  }

  cycle(index: number) {
    this.shouldShow = false;
    this.changeDetectorRef.detectChanges();
    this.currentIndex = index;
    this.selectedImageURL = this.imageURLs[this.currentIndex];
    this.selectedLargeImageURL = this.getLargeImage(this.selectedImageURL);
    this.shouldShow = true;
    this.changeDetectorRef.detectChanges();
  }
}
