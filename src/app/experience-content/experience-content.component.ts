import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-experience-content',
  templateUrl: './experience-content.component.html',
  styleUrls: ['./experience-content.component.scss'],
})
export class ExperienceContentComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  exprContentHead: string = 'We have the experience';
  exprContentPara: string =
    'We have got the experience to make your dream come true, and these stats speak for themselves: we have 150+ clients worldwide in only three years, and we have worked on over 200 projects, all of which have been finished successfully and on schedule, with 100% client satisfaction. We also have 60K+ hours of freelancing experience';
  exprContentBtn: string = 'Contact Us';
  exprUpperImg: string = '../assets/images/woman.webp';
}
