import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacksFormComponent } from './packs-form.component';

describe('PacksFormComponent', () => {
  let component: PacksFormComponent;
  let fixture: ComponentFixture<PacksFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PacksFormComponent]
    });
    fixture = TestBed.createComponent(PacksFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
