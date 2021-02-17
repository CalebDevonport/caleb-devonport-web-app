import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameReviewsRoutingComponent } from './game-reviews-routing.component';

describe('GameReviewsRoutingComponent', () => {
  let component: GameReviewsRoutingComponent;
  let fixture: ComponentFixture<GameReviewsRoutingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameReviewsRoutingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GameReviewsRoutingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
