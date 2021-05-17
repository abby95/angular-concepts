import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectEmitterComponent } from './subject-emitter.component';

describe('SubjectEmitterComponent', () => {
  let component: SubjectEmitterComponent;
  let fixture: ComponentFixture<SubjectEmitterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectEmitterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectEmitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
