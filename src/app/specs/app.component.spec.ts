import { TestBed } from '@angular/core/testing';
import { AppComponent } from '../components/app.component';
import { NgbOffcanvas, NgbOffcanvasRef } from '@ng-bootstrap/ng-bootstrap';
import { of, Subject } from 'rxjs';

describe('App Component', () => {
  let component: AppComponent;
  let fixture: any;
  let mockOffcanvasService: jasmine.SpyObj<NgbOffcanvas>;
  let activeInstanceSubject: Subject<NgbOffcanvasRef>;

  beforeEach(async () => {
    // Mock NgbOffcanvas service
    activeInstanceSubject = new Subject<NgbOffcanvasRef>();
    mockOffcanvasService = jasmine.createSpyObj('NgbOffcanvas', ['activeInstance']);
    Object.defineProperty(mockOffcanvasService, 'activeInstance', {
      get: () => activeInstanceSubject.asObservable(),
    });

    await TestBed.configureTestingModule({
      imports: [AppComponent], // Standalone component
      providers: [
        { provide: NgbOffcanvas, useValue: mockOffcanvasService },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should have default title as "PortfolioSite"', () => {
    expect(component.title).toBe('PortfolioSite');
  });

  it('should have default blur as false', () => {
    expect(component.blur).toBeFalse();
  });

  it('should update blur property when handlemobileAsideBlur is called', () => {
    component.handlemobileAsideBlur(true);
    expect(component.blur).toBeTrue();

    component.handlemobileAsideBlur(false);
    expect(component.blur).toBeFalse();
  });

  it('should subscribe to NgbOffcanvas activeInstance and handle dismissed event', () => {
    const mockDismissedSubject = new Subject<void>();
    const mockOffcanvasRef = {
      dismissed: mockDismissedSubject.asObservable(),
    } as NgbOffcanvasRef;

    // Emit a value for activeInstance
    activeInstanceSubject.next(mockOffcanvasRef);

    // Emit a dismissed event
    mockDismissedSubject.next();

    expect(component.blur).toBeFalse();
  });
});