import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactComponent } from '../components/contact/contact.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AppToastService } from '../services/toasts.service';
import { ContactService } from '../services/contact.service';
import { ElementRef, TemplateRef, isDevMode } from '@angular/core';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;
  let mockContactService: jasmine.SpyObj<ContactService>;
  let mockToastService: jasmine.SpyObj<AppToastService>;

  beforeEach(async () => {
    mockContactService = jasmine.createSpyObj('ContactService', ['sendEmail']);
    mockContactService.sendEmail.and.returnValue(Promise.resolve(true)); // Mock sendEmail to return true
    mockToastService = jasmine.createSpyObj('AppToastService', ['show']);

    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, ContactComponent], // Add ContactComponent to imports
      providers: [
        { provide: ContactService, useValue: mockContactService },
        { provide: AppToastService, useValue: mockToastService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;

    // Mock the @ViewChild property
    component.contact = new ElementRef(document.createElement('div'));

    fixture.detectChanges();
  });

  it('should create the contact component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize form controls with correct validators', () => {
    const nameControl = component.name;
    const emailControl = component.email;
    const messageControl = component.message;

    expect(nameControl.valid).toBeFalse();
    expect(emailControl.valid).toBeFalse();
    expect(messageControl.valid).toBeFalse();

    nameControl.setValue('John Doe');
    emailControl.setValue('john.doe@example.com');
    messageControl.setValue('This is a valid message.');

    expect(nameControl.valid).toBeTrue();
    expect(emailControl.valid).toBeTrue();
    expect(messageControl.valid).toBeTrue();
  });

  it('should set displayForm to true when showEmailForm is called', () => {
    component.showEmailForm(new Event('click'));
    expect(component.displayForm).toBeTrue();
  });

  it('should call ContactService.sendEmail when sendEmail is called with a valid form', async () => {
    const mockTemplateRef = {} as TemplateRef<any>;
    mockContactService.sendEmail.and.returnValue(Promise.resolve(true));

    // Set valid values for the form controls
    component.devMode = true;
    component.name.setValue('John Doe');
    component.email.setValue('john.doe@example.com');
    component.message.setValue('This is a valid message.');

    // Ensure the form is valid
    expect(component.emailForm.valid).toBeTrue();

    // Call the sendEmail method
    await component.sendEmail(new Event('submit'), mockTemplateRef);

    // Verify that sendEmail was called with the correct form value
    expect(component.thankYouMessage).toBeTrue();
    expect(mockToastService.show).toHaveBeenCalledWith({
      template: mockTemplateRef,
      classname: 'bg-success text-light',
      delay: 10000,
    });
  });

  it('should not call ContactService.sendEmail when the form is invalid', async () => {
    const mockTemplateRef = {} as TemplateRef<any>;

    component.name.setValue('');
    component.email.setValue('');
    component.message.setValue('');

    await component.sendEmail(new Event('submit'), mockTemplateRef);

    expect(mockContactService.sendEmail).not.toHaveBeenCalled();
    expect(component.thankYouMessage).toBeFalse();
    expect(mockToastService.show).not.toHaveBeenCalled();
  });

  it('should call AppToastService.show when showSuccess is called', () => {
    const mockTemplateRef = {} as TemplateRef<any>;

    component.showSuccess(mockTemplateRef);

    expect(mockToastService.show).toHaveBeenCalledWith({
      template: mockTemplateRef,
      classname: 'bg-success text-light',
      delay: 10000,
    });
  });
});
