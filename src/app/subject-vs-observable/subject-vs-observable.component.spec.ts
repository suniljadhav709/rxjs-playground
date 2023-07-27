import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectVsObservableComponent } from './subject-vs-observable.component';

describe('SubjectVsObservableComponent', () => {
  let component: SubjectVsObservableComponent;
  let fixture: ComponentFixture<SubjectVsObservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectVsObservableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubjectVsObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
