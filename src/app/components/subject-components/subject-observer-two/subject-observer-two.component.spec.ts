import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectObserverTwoComponent } from './subject-observer-two.component';

describe('SubjectObserverTwoComponent', () => {
  let component: SubjectObserverTwoComponent;
  let fixture: ComponentFixture<SubjectObserverTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectObserverTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectObserverTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
