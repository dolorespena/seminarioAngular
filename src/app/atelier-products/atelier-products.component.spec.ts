import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtelierProductsComponent } from './atelier-products.component';

describe('AtelierProductsComponent', () => {
  let component: AtelierProductsComponent;
  let fixture: ComponentFixture<AtelierProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtelierProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtelierProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
