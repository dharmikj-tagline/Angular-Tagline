import { Injectable } from '@angular/core';
import { Blogs } from '../common';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor() { }

   blogs :Blogs[] = [
    {
      img: '../assets/images/Python-vs-Java.png',
      language: 'Python',
      date: '15/06/2021',
      title: 'Python vs Java Comparison Of',
      content:
        'Quick Summary The most difficult decision for an entrepreneur is deciding on a programming...',
      link: 'Read More ->',
    },

    {
      img: '../assets/images/Node.js-Application.png',
      language: 'Node Js',
      date: '9/12/22',
      title: 'Best Practices for Node.js Application Development:...',
      content:
        'Quick Summary Want to know about node js architecture and node js architecture best',
      link: 'Read More ->',
    },

    {
      img: '../assets/images/Kotlin-vs-Java.png',
      language: 'RoR',
      date: '9/12/22',
      title: 'JavaScript vs Ruby On Rails: What...',
      content:
        'Quick Summary: Ruby on Rails and JavaScript both languages are both widely popular among',
      link: 'Read More ->',
    },
  ];
}
