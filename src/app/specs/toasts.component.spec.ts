import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToastsComponent } from '../components/toasts/toasts.component';
import { AppToastService } from '../services/toasts.service';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { NgTemplateOutlet } from '@angular/common';

describe('Toasts Component', () => {
  let component: ToastsComponent;
  let fixture: ComponentFixture<ToastsComponent>;
  let mockToastService: jasmine.SpyObj<AppToastService>;

  beforeEach(async () => {
    // Mock AppToastService
    mockToastService = jasmine.createSpyObj('AppToastService', ['remove']);


    await TestBed.configureTestingModule({
      imports: [ToastsComponent, NgbToastModule, NgTemplateOutlet], // Standalone component
      providers: [{ provide: AppToastService, useValue: mockToastService }],
    }).compileComponents();

    fixture = TestBed.createComponent(ToastsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the toasts component', () => {
    expect(component).toBeTruthy();
  });

  it('should inject the AppToastService', () => {
    expect(component.toastService).toBe(mockToastService);
  });

});
