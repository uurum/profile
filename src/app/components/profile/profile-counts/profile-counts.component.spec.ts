import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileCountsComponent } from './profile-counts.component';

describe('ProfileCountsComponent', () => {
  let component: ProfileCountsComponent;
  let fixture: ComponentFixture<ProfileCountsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileCountsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileCountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
