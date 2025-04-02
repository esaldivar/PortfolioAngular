import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AvatarComponent } from '../components/avatar/avatar.component';
import { ElementRef } from '@angular/core';
import { Configuration } from '../../utils/config';

describe('AvatarComponent', () => {
  let component: AvatarComponent;
  let fixture: ComponentFixture<AvatarComponent>;
  let mockConfiguration: jasmine.SpyObj<Configuration>;

  beforeEach(async () => {
    // Create a mock for the Configuration class
    mockConfiguration = jasmine.createSpyObj('Configuration', ['sr', 'srConfig']);
    mockConfiguration.srConfig.and.returnValue({
      origin: 'top',
      distance: '20px',
      duration: 500,
      delay: 1000,
      rotate: { x: 0, y: 0, z: 0 },
      opacity: 0,
      scale: 1,
      easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
      mobile: false,
      reset: false,
      useDelay: 'always',
      viewFactor: 0.25,
      viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
    });

    await TestBed.configureTestingModule({
      imports: [AvatarComponent], // Standalone component
      providers: [
        { provide: Configuration, useValue: mockConfiguration }, // Provide the mock Configuration
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AvatarComponent);
    component = fixture.componentInstance;

    // Mock the @ViewChild property
    component.logo = new ElementRef(document.createElement('div'));

    // Inject the mock Configuration into the component
    component.config = mockConfiguration;

    fixture.detectChanges();
  });

  it('should create the avatar component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize cdnUrl correctly', () => {
    const expectedCdnUrl = import.meta.env.NG_APP_CLOUDFRONT_CDN + '/logo.webp';
    expect(component.cdnUrl).toBe(expectedCdnUrl);
  });

  it('should call srConfig and sr in ngAfterViewInit', () => {
    // Explicitly call ngAfterViewInit
    component.ngAfterViewInit();

    // Ensure srConfig is called
    expect(mockConfiguration.srConfig).toHaveBeenCalled();

    // Ensure sr is called with correct arguments
    expect(mockConfiguration.sr).toHaveBeenCalledWith(
      component.logo,
      jasmine.objectContaining({
        origin: 'top',
        delay: 1000,
      })
    );
  });

  it('should set @ViewChild logo element', () => {
    expect(component.logo).toBeDefined();
    expect(component.logo.nativeElement).toBeInstanceOf(HTMLElement);
  });
});