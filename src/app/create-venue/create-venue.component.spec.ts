import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateVenueComponent } from './create-venue.component';

describe('CreateVenueComponent', () => {
  let component: CreateVenueComponent;
  let fixture: ComponentFixture<CreateVenueComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateVenueComponent]
    });
    fixture = TestBed.createComponent(CreateVenueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
