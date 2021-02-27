import { AfterViewChecked, ChangeDetectionStrategy, Component, ElementRef, HostListener, Input, OnInit, ViewChild } from '@angular/core';
import { MediaService } from 'src/app/services';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-review-banner',
  templateUrl: './review-banner.component.html',
  styleUrls: ['./review-banner.component.scss']
})
export class ReviewBannerComponent implements OnInit, AfterViewChecked {

  private isMobile: boolean;
  private mediaService = new MediaService('(max-width: 768px)');

  public heightValue: string;
  public headerAdjust: string;

  @Input() imageURL: string;

  @ViewChild('bannerImage') bannerImage: ElementRef;
  @ViewChild('spacer') spacer: ElementRef;

  constructor() {
  }

  ngOnInit() {
    this.mediaService.match$.subscribe(isMobile => {
      this.isMobile = isMobile;
    });
  }

  ngAfterViewChecked() {
    this.adjustHeight();
  }

  @HostListener('window:resize')
  adjustHeight() {
    var imageHeight = this.bannerImage.nativeElement.height;
    this.heightValue = `${imageHeight}px`;
    this.spacer.nativeElement.style.height = this.heightValue;
    this.headerAdjust = `${this.isMobile ? 64 : 0}px`;
  }
}
