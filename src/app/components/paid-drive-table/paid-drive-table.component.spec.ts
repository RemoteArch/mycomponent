import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaidDriveTableComponent } from './paid-drive-table.component';

describe('PaidDriveTableComponent', () => {
  let component: PaidDriveTableComponent;
  let fixture: ComponentFixture<PaidDriveTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaidDriveTableComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PaidDriveTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
