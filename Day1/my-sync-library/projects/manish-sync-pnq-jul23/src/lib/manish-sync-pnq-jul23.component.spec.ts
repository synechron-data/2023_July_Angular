import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManishSyncPnqJul23Component } from './manish-sync-pnq-jul23.component';

describe('ManishSyncPnqJul23Component', () => {
  let component: ManishSyncPnqJul23Component;
  let fixture: ComponentFixture<ManishSyncPnqJul23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManishSyncPnqJul23Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManishSyncPnqJul23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
