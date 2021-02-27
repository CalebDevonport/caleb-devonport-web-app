import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScorePieComponent } from './score-pie.component';

describe('ScorePieComponent', () => {
  let component: ScorePieComponent;
  let fixture: ComponentFixture<ScorePieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScorePieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScorePieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
