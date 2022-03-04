import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputradioComponent } from './inputradio.component';

describe('InputradioComponent', () => {
  let component: InputradioComponent;
  let fixture: ComponentFixture<InputradioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputradioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputradioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
