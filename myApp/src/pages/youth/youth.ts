import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DomSanitizer } from '@angular/platform-browser';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player';
import { MenuController } from 'ionic-angular';

import { EnglishYouthPage } from '../english_youth/english_youth';

@Component({
  selector: 'page-youth',
  templateUrl: 'youth.html'
})
export class YouthPage {
  video_id1: any; 
  video_id2: any;
  video_id3: any;
  video_id4: any;
  video_id5: any;
  video_id6: any;

  constructor(public navCtrl: NavController, public sanitizer: DomSanitizer, public youtube: YoutubeVideoPlayer, public menuCtrl: MenuController){
      this.video_id1 = 'QF8aU6KD5SA'; //Lilian
      this.video_id2 = 'YBcttiFNO3Y'; //Fareth
      this.video_id3 = 'ANhfNvLxoo8'; //Brandon
      this.video_id4 = 'Y0qOrYzDrSA'; //Angela
      this.video_id5 = 'RnwPw1N_gkM'; //Claudio
      this.video_id6 = 'Cagl7i3RuqQ'; //Ismael
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

  navToEnglishYouth(){
    this.navCtrl.setRoot(EnglishYouthPage);
  }

  activateEnglishMenu(){
    this.menuCtrl.enable(true, 'englishMenu');
    this.menuCtrl.enable(false, 'spanishMenu');
  }

}
