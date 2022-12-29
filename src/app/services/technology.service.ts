import { Injectable } from '@angular/core';
import { Techlanguage } from '../common';

@Injectable({
  providedIn: 'root'
})
export class TechnologyService {

  constructor() { }

  techMenu : string[] = [
    'Web',
    'Mobile',
    'Desktop',
    'Plateform',
    'Database / Data Storage',
    'Big Data',
    'Machine Learning',
    'DevOps',
    'Clouds',
  ];

  backEnds :Techlanguage[]= [
    {
      img: '../assets/images/ror.png',
      language: 'Ruby on Rails',
    },
    {
      img: '../assets/images/python.png',
      language: 'Python',
    },
    {
      img: '../assets/images/node_js.svg',
      language: 'Node Js',
    },
    {
      img: '../assets/images/php.png',
      language: 'PHP',
    },
    {
      img: '../assets/images/android-java.png',
      language: 'Java',
    },
    {
      img: '../assets/images/go.png',
      language: 'Go Language',
    },
  ];

  frontEnds :Techlanguage[]= [
    {
      img: '../assets/images/react-js.png',
      language: 'React',
    },
    {
      img: '../assets/images/angular-icon.png',
      language: 'Angular',
    },
    {
      img: '../assets/images/typescript-icon.png',
      language: 'Typescipt',
    },
    {
      img: '../assets/images/vue-js.png',
      language: 'Vue Js',
    },
    {
      img: '../assets/images/meter-js.png',
      language: 'Mateor',
    },
    {
      img: '../assets/images/javascript-icon.png',
      language: 'Javascript',
    },
    {
      img: '../assets/images/html5.png',
      language: 'Html',
    },
  ];
}
