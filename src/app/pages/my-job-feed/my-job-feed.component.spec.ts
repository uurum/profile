import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyJobFeedComponent } from './my-job-feed.component';

describe('MyJobFeedComponent', () => {
  let component: MyJobFeedComponent;
  let fixture: ComponentFixture<MyJobFeedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyJobFeedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyJobFeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
