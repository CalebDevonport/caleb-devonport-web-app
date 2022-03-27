import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DestinyWitchQueenComponent } from './destiny-witch-queen.component';

describe('DestinyWitchQueenComponent', () => {
  let component: DestinyWitchQueenComponent;
  let fixture: ComponentFixture<DestinyWitchQueenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DestinyWitchQueenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DestinyWitchQueenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
