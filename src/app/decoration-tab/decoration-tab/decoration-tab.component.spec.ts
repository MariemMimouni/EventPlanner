import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecorationTabComponent } from './decoration-tab.component';

describe('DecorationTabComponent', () => {
  let component: DecorationTabComponent;
  let fixture: ComponentFixture<DecorationTabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DecorationTabComponent]
    });
    fixture = TestBed.createComponent(DecorationTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
