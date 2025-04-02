import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PodcastComponent } from '../components/podcast/podcast.component';
import { ElementRef } from '@angular/core';
import { Configuration } from '../../utils/config';

describe('Podcast Component', () => {
  let component: PodcastComponent;
  let fixture: ComponentFixture<PodcastComponent>;
  let mockConfiguration: jasmine.SpyObj<Configuration>;

  beforeEach(async () => {
    // Mock Configuration
    mockConfiguration = jasmine.createSpyObj('Configuration', ['sr']);

    await TestBed.configureTestingModule({
      imports: [PodcastComponent], // Standalone component
      providers: [{ provide: Configuration, useValue: mockConfiguration }],
    }).compileComponents();

    fixture = TestBed.createComponent(PodcastComponent);
    component = fixture.componentInstance;

    // Mock the @ViewChild property
    component.podcast = new ElementRef(document.createElement('div'));

    fixture.detectChanges();
  });

  it('should create the podcast component', () => {
    expect(component).toBeTruthy();
  });

  it('should set spotifyIframeApiReady and assign it to window.onSpotifyIframeApiReady in ngOnInit', () => {
    component.ngOnInit();

    expect(typeof component.spotifyIframeApiReady).toBe('function');
    expect((window as any).onSpotifyIframeApiReady).toBe(component.spotifyIframeApiReady);
  });

  it('should delete window.onSpotifyIframeApiReady in ngOnDestroy', () => {
    component.ngOnDestroy();

    expect((window as any).onSpotifyIframeApiReady).toBeUndefined();
  });
});
