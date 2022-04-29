import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewedComponentComponent } from './viewed-component.component';

describe('ViewedComponentComponent', () => {
  let component: ViewedComponentComponent;
  let fixture: ComponentFixture<ViewedComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewedComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewedComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
