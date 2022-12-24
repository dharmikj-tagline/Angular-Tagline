import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-words',
  templateUrl: './client-words.component.html',
  styleUrls: ['./client-words.component.scss']
})
export class ClientWordsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  worldClientHead: string = 'Words From Our Clientele';
    worldClientPara1: string =
      "Good things come for those who work hard, and that's why our clientele appreciate our efforts. Tagline Infotech provides the best services to its clients, and it is reflected through our ratings and reviews on various platforms.";
    worldClientPara2: string =
      'We are a well-known IT services company on Clutch. Check out what our customers have to say about our services. Read their ratings, feedback, and stories about partnering with us before making your own decision.';

}
