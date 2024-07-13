import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiModulesHomeComponent } from './sui-modules-home.component';

describe('SuiModulesHomeComponent', () => {
  let component: SuiModulesHomeComponent;
  let fixture: ComponentFixture<SuiModulesHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SuiModulesHomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SuiModulesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
