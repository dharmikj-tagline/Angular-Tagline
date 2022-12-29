import { Injectable } from '@angular/core';
import { ExperianseNumBoxs } from '../common';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

  constructor() { }

  experianseNumBoxs: ExperianseNumBoxs[] = [
      {
        img: '../assets/images/contentlogo.webp',
        projectnum: '125+',
        type: 'Professional',
      },
      {
        img: '../assets/images/contentlogo2.webp',
        projectnum: '450+',
        type: 'Completed Projects',
      },
      {
        img: '../assets/images/contentlogo3.webp',
        projectnum: '150+',
        type: 'Freelance Hours',
      },
      {
        img: '../assets/images/contentlogo4.webp',
        projectnum: '5+',
        type: 'Years of experience',
      },
    ];
}
