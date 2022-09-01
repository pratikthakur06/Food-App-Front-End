import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFoodOrderComponent } from './edit-food-order.component';

describe('EditFoodOrderComponent', () => {
  let component: EditFoodOrderComponent;
  let fixture: ComponentFixture<EditFoodOrderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditFoodOrderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFoodOrderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
