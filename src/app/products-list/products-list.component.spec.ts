import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductssListComponent } from './products-list.component';

describe('ProductssListComponent', () => {
  let component: ProductssListComponent;
  let fixture: ComponentFixture<ProductssListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductssListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductssListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
