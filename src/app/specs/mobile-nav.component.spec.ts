import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MobileNavComponent } from '../components/mobile-nav/mobile-nav.component';
import { NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { JobDetails, Configuration } from '../../utils/config';
import { JobComponent } from '../components/work-experience/job/job.component';

describe('Mobile Nav Component', () => {
  let component: MobileNavComponent;
  let fixture: ComponentFixture<MobileNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MobileNavComponent, NgbNavModule, JobComponent, CommonModule], // Standalone component
    }).compileComponents();

    fixture = TestBed.createComponent(MobileNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the mobile-nav component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize active property to 0', () => {
    expect(component.active).toBe(0);
  });

  it('should initialize workExperience with values from Configuration', () => {
    expect(component.workExperience).toEqual(Configuration.workExperience);
  });
});
