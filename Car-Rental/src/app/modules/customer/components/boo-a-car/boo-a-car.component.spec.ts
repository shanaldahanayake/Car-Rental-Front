import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooACarComponent } from './boo-a-car.component';

describe('BooACarComponent', () => {
  let component: BooACarComponent;
  let fixture: ComponentFixture<BooACarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BooACarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BooACarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
