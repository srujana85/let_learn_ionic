import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';
@Component({
  selector: 'app-tts',
  templateUrl: './tts.page.html',
  styleUrls: ['./tts.page.scss'],
})
export class TtsPage implements OnInit {
text=null;
  constructor(private tts: TextToSpeech) { }

  ngOnInit() {
    this.text="hello raa"
  }
  speak(){
    this.tts.speak(this.text)
    .then(() => console.log('Success'))
    .catch((reason: any) => console.log(reason));
  }
}
