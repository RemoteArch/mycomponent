import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TexfieldComponent } from './texfield.component';

describe('TexfieldComponent', () => {
  let component: TexfieldComponent;
  let fixture: ComponentFixture<TexfieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TexfieldComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TexfieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
