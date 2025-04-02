import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonComponent } from '../components/button/button.component';

describe('Button Component', () => {
  let component: ButtonComponent;
  let fixture: ComponentFixture<ButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonComponent], // Standalone component
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonComponent);
    component = fixture.componentInstance;
  });

  it('should create the button component', () => {
    expect(component).toBeTruthy();
  });

  it('should render a link if "link" input is provided', () => {
    component.text = 'Go to Google';
    component.link = 'https://www.google.com';
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const anchor = compiled.querySelector('a');
    expect(anchor).toBeTruthy();
    expect(anchor?.getAttribute('href')).toBe('https://www.google.com');
    expect(anchor?.textContent?.trim()).toBe('Go to Google'); // Use `.trim()` to remove extra whitespace
  });

  it('should render a button if "link" input is not provided', () => {
    component.text = 'Submit';
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    const button = compiled.querySelector('button');
    expect(button).toBeTruthy();
    expect(button?.textContent?.trim()).toBe('Submit'); // Use `.trim()` to remove extra whitespace
  });
});
