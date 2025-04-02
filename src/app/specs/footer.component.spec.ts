import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterComponent } from '../components/footer/footer.component';
import { Configuration, SocialLink } from '../../utils/config';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterComponent], // Standalone component
    }).compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the footer component', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize socialLinks with values from Configuration', () => {
    expect(component.socialLinks).toEqual(Configuration.socials);
  });

  it('should render social links in the template', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const socialLinks = Configuration.socials;
    socialLinks.forEach((link: SocialLink) => {
      const anchor = compiled.querySelector(`a[href="${link.url}"]`);
      expect(anchor).toBeTruthy();
    });
  });
});
