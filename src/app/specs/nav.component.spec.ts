import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NgbdNavVertical } from '../components/nav/nav.component';

describe('NavComponent', () => {
  let component: NgbdNavVertical;
  let fixture: ComponentFixture<NgbdNavVertical>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgbdNavVertical]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NgbdNavVertical);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
