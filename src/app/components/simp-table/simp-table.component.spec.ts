import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpTableComponent } from './simp-table.component';

describe('SimpTableComponent', () => {
  let component: SimpTableComponent;
  let fixture: ComponentFixture<SimpTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SimpTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
