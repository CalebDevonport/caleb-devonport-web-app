import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TheCallistoProtocolComponent } from './the-callisto-protocol.component';

describe('TheCallistoProtocol', () => {
  let component: TheCallistoProtocolComponent;
  let fixture: ComponentFixture<TheCallistoProtocolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TheCallistoProtocolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TheCallistoProtocolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
