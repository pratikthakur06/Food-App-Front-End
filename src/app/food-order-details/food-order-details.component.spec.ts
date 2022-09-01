import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodOrderDetailsComponent } from './food-order-details.component';

describe('FoodOrderDetailsComponent', () => {
  let component: FoodOrderDetailsComponent;
  let fixture: ComponentFixture<FoodOrderDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodOrderDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodOrderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
