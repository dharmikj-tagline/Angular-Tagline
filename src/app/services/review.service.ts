import { Injectable } from '@angular/core';
import { ReviewBoxes } from '../common';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor() { }

  reviewBoxes:ReviewBoxes[] = [
    {
      rate: '5.0',
      reviewWord: '"Everything always turns out perfectly done."',
      company: 'IT & Computer Scientist, Self-Employed',
      veried: 'Verified Review',
    },
    {
      rate: '5.0',
      reviewWord:
        '"They understand complex technical requirements, and they have a team that quickly gets up to speed."',
      company: 'Founder, Cimpro.io',
      veried: 'Verified Review',
    },
    {
      rate: '5.0',
      reviewWord:
        '"…they’re able to tackle pretty much everything you throw at them."',
      company: 'CEO, Promoprep',
      veried: 'Verified Review',
    },
    {
      rate: '5.0',
      reviewWord:
        '“When things go wrong, they were good at adapting and problem solving on the fly.”',
      company: 'IT & Computer Scientist, Self-Employed',
      veried: 'Verified Review',
    },
    {
      rate: '5.0',
      reviewWord:
        '"The team takes up new challenges and finishes the project on time."',
      company: 'IT & Computer Scientist, Self-Employed',
      veried: 'Verified Review',
    },
    {
      rate: '5.0',
      reviewWord:
        '"We are getting close to launch now and it\'s been a tremendous help to have their developers on my team."',
      company: 'IT & Computer Scientist, Self-Employed',
      veried: 'Verified Review',
    },
  ];
}
