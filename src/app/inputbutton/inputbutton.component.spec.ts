import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputbuttonComponent } from './inputbutton.component';

describe('InputbuttonComponent', () => {
  let component: InputbuttonComponent;
  let fixture: ComponentFixture<InputbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputbuttonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
