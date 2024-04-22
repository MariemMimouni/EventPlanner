import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VenuesTabComponent } from './venues-tab.component';

describe('VenuesTabComponent', () => {
  let component: VenuesTabComponent;
  let fixture: ComponentFixture<VenuesTabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VenuesTabComponent]
    });
    fixture = TestBed.createComponent(VenuesTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
