import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-main-content',
  templateUrl: './header-main-content.component.html',
  styleUrls: ['./header-main-content.component.scss'],
})
export class HeaderMainContentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  headerContentFirst: string = 'Software Development Company';
  headerContentFirstNew: string = '& IT Consultancy';
  headerContentSecond: string = 'Serving';
  headerContentSecondSpan: string = 'Start-UPs To Fortune 500';
  headerContentParagraph: string =
    'With the help of Innovation and Technology, We give you the power to <br> change the world with your ideas.';
  headeSchedualMeetBtnType: string = 'button';
  headeSchedualMeetBtnCount: string = 'Schedule a meeting';
  headerDownImages: string = '../assets/images/images.png';
}
