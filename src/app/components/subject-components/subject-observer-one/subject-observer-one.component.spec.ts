import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectObserverOneComponent } from './subject-observer-one.component';

describe('SubjectObserverOneComponent', () => {
  let component: SubjectObserverOneComponent;
  let fixture: ComponentFixture<SubjectObserverOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectObserverOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectObserverOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
