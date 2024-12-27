import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnavalaibleComponent } from './unavalaible.component';

describe('UnavalaibleComponent', () => {
  let component: UnavalaibleComponent;
  let fixture: ComponentFixture<UnavalaibleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UnavalaibleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UnavalaibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
