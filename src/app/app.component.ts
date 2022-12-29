import { Component } from '@angular/core';
import { Blogs, ContactFormDetail, ExperianseNumBoxs, OurServices, ReviewBoxes, Techlanguage, WhyTaglineBox } from './common';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'tagline_angular';

  // labelHeader: string[] = [
  //   'Case Study',
  //   'About Us',
  //   'Hire Developer',
  //   'Technology',
  //   'Industry',
  // ];

  // ourServices :OurServices[] = [
  //   {
  //     head: 'Find the right offers',
  //   },
  //   {
  //     img: '../assets/images/mobile.png',
  //     head: 'Application Management and Modernisation',
  //     content:
  //       'Here at Tagline, we provide the service of Application management and modernisation for the growth of your business. We update the old application with new approaches, including the latest languages, frameworks, and platforms.',
  //     link: 'Learn More ->',
  //   },

  //   {
  //     img: '../assets/images/web-design-icon.webp',
  //     head: 'Software Product Engineering',
  //     content:
  //       'We are dedicated to providing the best Software product engineering services for your business. Our team of developers provides the service of software product engineering and it includes designing, developing, testing, and deploying the software products.',
  //     link: 'Learn More ->',
  //   },

  //   {
  //     img: '../assets/images/testing-icon.webp',
  //     head: 'Agile QA, Automation, and DevOps',
  //     content:
  //       'At Tagline Infotech, we have a team of dedicated developers that provide the services like Agile QA, Automation, and DevOps. Our DevOps engineers constantly do the testing of software while Agile QA ensures the quality of the software.',
  //     link: 'Learn More ->',
  //   },

  //   {
  //     img: '../assets/images/uiux-design-icon.webp',
  //     head: 'Digital Strategy & Design',
  //     content:
  //       'Tagline Infotech helps clients to create a clear digital strategy and design for the growth of their businesses. Our developers and UI UX designers put the user first to create easy-to-navigate interfaces and smooth end-to-end experiences.',
  //     link: 'Learn More ->',
  //   },

  //   {
  //     img: '../assets/images/software-development-1.png',
  //     head: 'Software outsourcing company',
  //     content:
  //       'Tagline Infotech is an experienced software outsourcing company that provides services for various businesses. We have a reliable team of developers that provides high-quality outsourcing services to scale your business.',
  //     link: 'Learn More ->',
  //   },
  //   {
  //     head: "Don't know what to choose?",
  //     serviceBox7Span: 'Drop us a line.',
  //     button: 'Contact Us',
  //   },
  // ];

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

  // blogs :Blogs[] = [
  //   {
  //     img: '../assets/images/Python-vs-Java.png',
  //     language: 'Python',
  //     date: '15/06/2021',
  //     title: 'Python vs Java Comparison Of',
  //     content:
  //       'Quick Summary The most difficult decision for an entrepreneur is deciding on a programming...',
  //     link: 'Read More ->',
  //   },

  //   {
  //     img: '../assets/images/Node.js-Application.png',
  //     language: 'Node Js',
  //     date: '9/12/22',
  //     title: 'Best Practices for Node.js Application Development:...',
  //     content:
  //       'Quick Summary Want to know about node js architecture and node js architecture best',
  //     link: 'Read More ->',
  //   },

  //   {
  //     img: '../assets/images/Kotlin-vs-Java.png',
  //     language: 'RoR',
  //     date: '9/12/22',
  //     title: 'JavaScript vs Ruby On Rails: What...',
  //     content:
  //       'Quick Summary: Ruby on Rails and JavaScript both languages are both widely popular among',
  //     link: 'Read More ->',
  //   },
  // ];

  contactFormDetail:ContactFormDetail[]= [
    {
      country: 'India (HQ)',
      place:
        'Digital Valley, 423, Apple Square, beside Lajamni Chowk, Mota Varachha, Surat, Gujarat 394101',
      mobile: '+91 9913 808 285',
    },
    {
      country: 'U.S.A',
      place: '2885 Old Zion, Cemetery Rd, Loganville, Ga 30052',
      mobile: '+1 (404) 483-3388',
    },
    {
      country: 'United Kingdom',
      place: '65 Byron road North wembley Middlesex, london HA0 3PB',
      mobile: '+44 78240 75400',
    },
  ];

  footerHelpMenu: string[] = [
    'Help & Advice',
    'Career',
    'About Us',
    'Contact Us',
    'Blog',
    'Privacy pilicy',
    'Sitemap',
  ];
  footerHireDevlopMenu: string[] = [
    'Hire Python Developer',
    'Hire Angular Developer',
    'Hire ROR Developer',
    'Hire Flutter Developer',
    'Hire React Js Developer',
    'Hire React Native Developer',
  ];
  footerHrMenu: string[] = ['hr@taglineinfotech.com', '+91 6354362521'];
  footerSalesMenu: string[] = [
    'solutions@taglineinfotech.com',
    'Tagline infotech',
  ];
  footerServicesMenu: string[] = [
    'Mobile',
    'web Development',
    'Web Design',
    'UI / UX Design',
    'Digital Marketing',
  ];

  technologyHead: string = 'Our Technologies';
  exprUpperImg: string = '../assets/images/woman.webp';

}
