import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectsServicesComponent } from './projects-services.component';

describe('ProjectsServicesComponent', () => {
  let component: ProjectsServicesComponent;
  let fixture: ComponentFixture<ProjectsServicesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectsServicesComponent]
    });
    fixture = TestBed.createComponent(ProjectsServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
