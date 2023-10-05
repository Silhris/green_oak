import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomBannerComponent } from './bottom-banner.component';

describe('BottomBannerComponent', () => {
  let component: BottomBannerComponent;
  let fixture: ComponentFixture<BottomBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BottomBannerComponent]
    });
    fixture = TestBed.createComponent(BottomBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
