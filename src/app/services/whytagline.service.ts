import { Injectable } from '@angular/core';
import { WhyTaglineBox } from '../common';

@Injectable({
  providedIn: 'root'
})
export class WhytaglineService {

  constructor() { }

  whyTaglineBox:WhyTaglineBox[] = [
    {
      img: '../assets/images/choose-roadmap.png ',
      num: '01',
      head: ' Progressive Roadmap',
      content:
        'Our team of developers creates a progressive roadmap that includes a strategic plan to define a goal and major steps to reach that goal. We have a team of developers that uses progressive ',
    },
    {
      img: '../assets/images/choose-project.png ',
      num: '02',
      head: 'Efficient Project Management ',
      content:
        'We believe in efficient project management and our experienced developers use project management tools like Wrike and Zoho. Our developers use these project management tools efficiently ',
    },
    {
      img: '../assets/images/choose-flexible.svg ',
      num: '03 ',
      head: 'Flexible Engagement Model ',
      content:
        ' We provide flexible engagement models so that clients can hire developers for their projects. These engagement models are flexible so if you aren’t satisfied with any model you can switch to another.',
    },
    {
      img: '../assets/images/choose-cost.png ',
      num: ' 04',
      head: 'Cost-Effective ',
      content:
        'Our team of developers provides the best development services at affordable prices. We believe that high-quality solutions can be delivered at cost-effective prices and that’s why we provide different hiring ',
    },
    {
      img: '../assets/images/choose-delivery.png',
      num: '05 ',
      head: 'Consistent Delivery ',
      content:
        'Our developers follow an agile approach to deliver the project before the deadline. We are providing consistent delivery of fully-featured projects as per the client’s requirements. ',
    },
    {
      img: '../assets/images/choose-delivery.png',
      head: 'Empower Your Business with Dedicated Developers ',
      button: 'Talk to our Expert',
    },
  ];
}
