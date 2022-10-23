import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScornComponent } from './scorn.component';

describe('ScornComponent', () => {
  let component: ScornComponent;
  let fixture: ComponentFixture<ScornComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScornComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScornComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
