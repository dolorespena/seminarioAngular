import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtelierContactComponent } from './atelier-contact.component';

describe('AtelierContactComponent', () => {
  let component: AtelierContactComponent;
  let fixture: ComponentFixture<AtelierContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtelierContactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtelierContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
