import { Component, Input, OnInit } from '@angular/core';

interface AwardsImg{
    awardHead: string,
    award1: string,
    award2: string,
    award3: string,
    award4: string,
    award5: string,
}
@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.scss']
})
export class AwardsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

    awardHead: string =  'Awards & Recognitions';
    // award1: string =  '../assets/images/award-2.webp';
    // award2:  string = '../assets/images/award-3.webp';
    // award3: string =  '../assets/images/award-4.webp';
    // award4:  string = '../assets/images/award-5.webp';
    // award5:  string = '../assets/images/award-6.webp';
    awardImg : string[]=['../assets/images/award-2.webp','../assets/images/award-3.webp','../assets/images/award-4.webp','../assets/images/award-5.webp','../assets/images/award-6.webp'];
}
