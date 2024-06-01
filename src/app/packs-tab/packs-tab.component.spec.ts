import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacksTabComponent } from './packs-tab.component';

describe('PacksTabComponent', () => {
  let component: PacksTabComponent;
  let fixture: ComponentFixture<PacksTabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PacksTabComponent]
    });
    fixture = TestBed.createComponent(PacksTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
