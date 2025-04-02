import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RightSideBarComponent } from '../components/right-side-bar/right-side-bar.component';
import { ElementRef } from '@angular/core';
import { Configuration } from '../../utils/config';

describe('Right Side Bar Component', () => {
  let component: RightSideBarComponent;
  let fixture: ComponentFixture<RightSideBarComponent>;
  let mockConfiguration: jasmine.SpyObj<Configuration>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RightSideBarComponent], // Standalone component
      providers: [],
    }).compileComponents();

    fixture = TestBed.createComponent(RightSideBarComponent);
    component = fixture.componentInstance;

    // Mock the @ViewChild properties
    component.resume = new ElementRef(document.createElement('div'));
    component.emailAddress = new ElementRef(document.createElement('div'));

    fixture.detectChanges();
  });

  it('should create the right-side-bar component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize cdnUrl and email properties correctly', () => {
    expect(component.cdnUrl).toBe(import.meta.env.NG_APP_CLOUDFRONT_CDN + "/Eric+Saldivar+Resume+25.pdf");
    expect(component.email).toBe('esaldivar1214@gmail.com');
  });
});
