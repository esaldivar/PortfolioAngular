import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Configuration } from '../../../utils/config';

@Component({
  selector: 'app-podcast',
  imports: [],
  templateUrl: './podcast.component.html',
  styleUrl: './podcast.component.scss'
})
export class PodcastComponent implements AfterViewInit, OnInit, OnDestroy {
  @ViewChild('podcast') podcast!: ElementRef;
  config = new Configuration();
  private spotifyIframeApiReady: any;
  cdnUrl = import.meta.env.NG_APP_CLOUDFRONT_CDN + "/aboutme.webp";

  ngOnInit(): void {
    this.spotifyIframeApiReady = (IFrameAPI:any) => {
      const element = document.getElementById('embed-iframe');
      const options = {
          uri: 'spotify:episode:74Xdf0cE4g8EyRJquvmE7q',
        };
      const callback = (EmbedController: any) => {
        document.querySelectorAll('.episode').forEach(
          (episode:any) => {
            episode.addEventListener('click', () => {
              EmbedController.loadUri(episode.dataset.spotifyId)
            });
          })
      };
      IFrameAPI.createController(element, options, callback);
    };
    (window as any).onSpotifyIframeApiReady = this.spotifyIframeApiReady;
  }

  ngAfterViewInit () {
    this.config.sr(this.podcast);
  }

  ngOnDestroy() {
    delete (window as any).onSpotifyIframeApiReady;
  }
}
