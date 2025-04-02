import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RightSideBarComponent } from '../components/right-side-bar/right-side-bar.component';

describe('Right Side Bar Component', () => {
  let component: RightSideBarComponent;
  let fixture: ComponentFixture<RightSideBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RightSideBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RightSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
