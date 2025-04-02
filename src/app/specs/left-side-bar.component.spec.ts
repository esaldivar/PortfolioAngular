import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LeftSideBarComponent } from '../components/left-side-bar/left-side-bar.component';
import { ElementRef } from '@angular/core';
import { Configuration } from '../../utils/config';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { AvatarComponent } from '../components/avatar/avatar.component';

describe('Left Side Bar Component', () => {
  let component: LeftSideBarComponent;
  let fixture: ComponentFixture<LeftSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LeftSideBarComponent, AvatarComponent, NgbTooltipModule], // Standalone component
      providers: [],
    }).compileComponents();

    fixture = TestBed.createComponent(LeftSideBarComponent);
    component = fixture.componentInstance;

    // Mock the @ViewChild property
    component.links = new ElementRef(document.createElement('div'));

    fixture.detectChanges();
  });

  it('should create the left-side-bar component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize socialLinks with values from Configuration', () => {
    expect(component.socialLinks).toEqual(Configuration.socials);
  });

});
