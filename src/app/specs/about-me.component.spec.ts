import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AboutMeComponent } from '../components/about-me/about-me.component';
import { ElementRef } from '@angular/core';

describe('About Me Component', () => {
  let component: AboutMeComponent;
  let fixture: ComponentFixture<AboutMeComponent>;
  let mockElementRef: ElementRef;

  beforeEach(async () => {

    await TestBed.configureTestingModule({
      imports: [AboutMeComponent], // Standalone component
      providers: []
    }).compileComponents();

    fixture = TestBed.createComponent(AboutMeComponent);
    component = fixture.componentInstance;

    // Mock the @ViewChild property
    mockElementRef = new ElementRef(document.createElement('section'));
    component.about = mockElementRef;

    fixture.detectChanges();
  });

  it('should create the about me component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize cdnUrl correctly', () => {
    const expectedCdnUrl = import.meta.env.NG_APP_CLOUDFRONT_CDN + '/aboutme.webp';
    expect(component.cdnUrl).toBe(expectedCdnUrl);
  });

   it('should set @ViewChild about element', () => {
    expect(component.about).toBeDefined();
    expect(component.about.nativeElement).toBeInstanceOf(HTMLElement);
  });
});
