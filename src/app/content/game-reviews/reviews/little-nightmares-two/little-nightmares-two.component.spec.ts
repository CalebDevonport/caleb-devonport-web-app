import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LittleNightmaresTwoComponent } from './little-nightmares-two.component';

describe('LittleNightmaresTwoComponent', () => {
  let component: LittleNightmaresTwoComponent;
  let fixture: ComponentFixture<LittleNightmaresTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LittleNightmaresTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LittleNightmaresTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
