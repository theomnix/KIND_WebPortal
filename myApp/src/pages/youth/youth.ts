import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';

@Component({
  selector: 'page-youth',
  templateUrl: 'youth.html'
})
export class YouthPage {
  video_id: any; 
  constructor(public navCtrl: NavController, public sanitizer: DomSanitizer, public youtube: YoutubeVideoPlayer){
      this.video_id = 'EKyirtVHsK0'
  }

  updateVideoUrl(id: string) {
    // Appending an ID to a YouTube URL is safe.
    // Always make sure to construct SafeValue objects as
    // close as possible to the input data, so
    // that it's easier to check if the value is safe.
    let dangerousVideoUrl = 'https://www.youtube.com/embed/' + id + '?rel=0&showinfo=0';
    return this.sanitizer.bypassSecurityTrustResourceUrl(dangerousVideoUrl);
}

  ionViewDidLoad() {
      console.log('ionViewDidLoad VideoSinglePage');
  }

  watch_on_youtube( video_id ) {
      this.youtube.openVideo(video_id);
  }

}
