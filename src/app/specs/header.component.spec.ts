import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from '../components/header/header.component';
import { NgbOffcanvas } from '@ng-bootstrap/ng-bootstrap';
import { ElementRef, TemplateRef } from '@angular/core';
import { Configuration } from '../../utils/config';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let mockOffcanvasService: jasmine.SpyObj<NgbOffcanvas>;
  let mockConfiguration: jasmine.SpyObj<Configuration>;

  beforeEach(async () => {
    mockOffcanvasService = jasmine.createSpyObj('NgbOffcanvas', ['open', 'dismiss']);
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
      imports: [HeaderComponent], // Standalone component
      providers: [
        { provide: NgbOffcanvas, useValue: mockOffcanvasService },
        { provide: Configuration, useValue: mockConfiguration },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;

    // Mock the @ViewChild properties
    component.about = new ElementRef(document.createElement('div'));
    component.experience = new ElementRef(document.createElement('div'));
    component.projects = new ElementRef(document.createElement('div'));
    component.podcast = new ElementRef(document.createElement('div'));
    component.contact = new ElementRef(document.createElement('div'));

    fixture.detectChanges();
  });

  it('should create the header component', () => {
    expect(component).toBeTruthy();
  });

  it('should call NgbOffcanvas.open and emit blurBackground(true) in openRight', () => {
    const mockTemplateRef = {} as TemplateRef<any>;
    spyOn(component.blurBackground, 'emit');

    component.openRight(mockTemplateRef);

    expect(mockOffcanvasService.open).toHaveBeenCalledWith(mockTemplateRef, { position: 'end' });
    expect(component.blurBackground.emit).toHaveBeenCalledWith(true);
  });

  it('should call NgbOffcanvas.dismiss and emit blurBackground(false) in closeRight', () => {
    spyOn(component.blurBackground, 'emit');

    component.closeRight();

    expect(mockOffcanvasService.dismiss).toHaveBeenCalledWith('Cross click');
    expect(component.blurBackground.emit).toHaveBeenCalledWith(false);
  });
});
