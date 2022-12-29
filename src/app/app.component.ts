import { Component } from '@angular/core';
import { Blogs, ContactFormDetail, ExperianseNumBoxs, OurServices, ReviewBoxes, Techlanguage, WhyTaglineBox } from './common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'tagline_angular';

  

  technologyHead: string = 'Our Technologies';
  exprUpperImg: string = '../assets/images/woman.webp';

}
