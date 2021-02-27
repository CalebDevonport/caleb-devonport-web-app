import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewSelectorComponent } from './review-selector.component';

describe('ReviewBannerComponent', () => {
  let component: ReviewSelectorComponent;
  let fixture: ComponentFixture<ReviewSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
