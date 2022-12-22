import { Component } from '@angular/core';

interface LabelHeader {
  taglineImg: string;
  labelCaseStudy: string;
  labelAboutUs: string;
  labelHireDeveloper: string;
  labelTechnology: string;
  labelIndustry: string;
  btnHeader: string;
  btnHeaderStyle: string;
  btnHeaderType: string;
}

interface HeaderContent {
  headerContentFirst: string;
  headerContentFirstNew: string;
  headerContentSecond: string;
  headerContentSecondSpan: string;
  headerContentParagraph: string;
  headeSchedualMeetBtnType: string;
  headeSchedualMeetBtnCount: string;
  headerDownImages: string;
}

// interface ServiceBoxes {
//   seviceHeader: string;
//   seviceBoxHead: string;
//   seviceBoxHeadBold: string;
//   serviceBox2: ServiceBox2;
//   serviceBox3: ServiceBox3;
//   serviceBox4: ServiceBox4;
//   serviceBox5: ServiceBox5;
//   serviceBox6: ServiceBox6;
//   serviceBox7: ServiceBox7;
// }

// interface ServiceBox2 {
//   serviceBox2HeadImg: string;
//   serviceBox2Head: string;
//   serviceBox2Content: string;
//   serviceBox2Anchor: string;
// }
// interface ServiceBox3 {
//   serviceBox3HeadImg: string;
//   serviceBox3Head: string;
//   serviceBox3Content: string;
//   serviceBox3Anchor: string;
// }
// interface ServiceBox4 {
//   serviceBox4HeadImg: string;
//   serviceBox4Head: string;
//   serviceBox4Content: string;
//   serviceBox4Anchor: string;
// }
// interface ServiceBox5 {
//   serviceBox5HeadImg: string;
//   serviceBox5Head: string;
//   serviceBox5Content: string;
//   serviceBox5Anchor: string;
// }

// interface ServiceBox6 {
//   serviceBox6HeadImg: string;
//   serviceBox6Head: string;
//   serviceBox6Content: string;
//   serviceBox6Anchor: string;
// }

// interface ServiceBox7 {
//   serviceBox7Head: string;
//   serviceBox7Span: string;
//   serviceBox7Btn: string;
// }

interface Experience {
  exprContent: ExprContent;
  exprProduct: ExprProduct;
}

interface ExprContent {
  exprContentHead: string;
  exprContentPara: string;
  exprContentBtn: string;
  exprUpperImg: string;
}

interface ExprProduct {
  exprProduct1Img: string;
  exprProduct1Head: string;
  exprProduct1Type: string;
  exprProduct2Img: string;
  exprProduct2Head: string;
  exprProduct2Type: string;
  exprProduct3Img: string;
  exprProduct3Head: string;
  exprProduct3Type: string;
  exprProduct4Img: string;
  exprProduct4Head: string;
  exprProduct4Type: string;
}

interface Technology {
  technologyHead: string;
  technologyMenuOption: TechnologyMenuOption;
  technologyLanguage: TechnologyLanguage;
}

interface TechnologyMenuOption {
  techMenuWeb: string;
  techMenuMobile: string;
  techMenuDesktop: string;
  techMenuPlateform: string;
  techMenuDatabase: string;
  techMenuBigData: string;
  techMenuMachineLern: string;
  techMenuDevOps: string;
  techMenuClouds: string;
}

interface TechnologyLanguage {
  techBackHead: string;
  techRoRImg: string;
  techRoRHead: string;
  techPythonImg: string;
  techPythonHead: string;
  techNodeImg: string;
  techNodeHead: string;
  techPhpImg: string;
  techPhpHead: string;
  techJavaImg: string;
  techJavaHead: string;
  techGoImg: string;
  techGoHead: string;

  techFrontHead: string;
  techReactImg: string;
  techReactHead: string;
  techAngularImg: string;
  techAngularHead: string;
  techTypeScriptImg: string;
  techTypeScriptHead: string;
  techVueImg: string;
  techVueHead: string;
  techMateorImg: string;
  techMateorHead: string;
  techJavaScriptImg: string;
  techJavaScriptHead: string;
  techHtmlImg: string;
  techHtmlHead: string;
}

interface WhyTagline {
  whyTaglineHead: string;
  whyTaglinePara: string;
  whyTagBox1: WhyTagBox1;
  whyTagBox2: WhyTagBox2;
  whyTagBox3: WhyTagBox3;
  whyTagBox4: WhyTagBox4;
  whyTagBox5: WhyTagBox5;
  whyTagBox6: WhyTagBox6;
}

interface WhyTagBox1 {
  progressiveImg: string;
  progressiveNum: string;
  progressiveHead: string;
  progressivePara: string;
}
interface WhyTagBox2 {
  efficientImg: string;
  efficientNum: string;
  efficientHead: string;
  efficientPara: string;
}
interface WhyTagBox3 {
  flexibleImg: string;
  flexibleNum: string;
  flexibleHead: string;
  flexiblePara: string;
}
interface WhyTagBox4 {
  costEffectiveImg: string;
  costEffectiveNum: string;
  costEffectiveHead: string;
  costEffectivePara: string;
}
interface WhyTagBox5 {
  consistentImg: string;
  consistentNum: string;
  consistentHead: string;
  consistentPara: string;
}
interface WhyTagBox6 {
  empowerHead: string;
  empowerSpan1: string;
  empowerSpan2: string;
  empowerBtn: string;
}

interface WorldClient {
  worldClientHead: string;
  worldClientPara1: string;
  worldClientPara2: string;
}

interface ReviewBox {
  reviewRate: string;
  reviewWord: string;
  reviewCompany: string;
  reviewVeried: string;
}

interface Awards {
  awardHead: string;
  award1: string;
  award2: string;
  award3: string;
  award4: string;
  award5: string;
}

interface Footer {
  footerTop: string;
  footerShare: string;
  footerSpan: string;
}

interface HRInquiry {
  hrHead: string;
  hrEmail: string;
  hrMobile: string;
}

interface SalesInquiry {
  salesHead: string;
  salesEmail: string;
  salesCompany: string;
}

interface Help {
  helpHead: string;
  helpCareer: string;
  helpAbout: string;
  helpContact: string;
  helpBlog: string;
  helpPrivacy: string;
  helpSitemap: string;
}

interface Services {
  servicesHead: string;
  servicesMobile: string;
  servicesWeb: string;
  servicesDesign: string;
  servicesUiUx: string;
  servicesDigital: string;
}

interface HireDeveloper {
  hireHead: string;
  hirePython: string;
  hireAngular: string;
  hireROR: string;
  hireFlutter: string;
  hireReact: string;
  HireReactNative: string;
}

// interface Blog1 {
//   blogImg: string;
//   blogLanguage: string;
//   blogDate: string;
//   blogTitle: string;
//   blogContent: string;
//   blogLink: string;
// }

// interface Blog2 {
//   blogImg: string;
//   blogLanguage: string;
//   blogDate: string;
//   blogTitle: string;
//   blogContent: string;
//   blogLink: string;
// }

// interface Blog3 {
//   blogImg: string;
//   blogLanguage: string;
//   blogDate: string;
//   blogTitle: string;
//   blogContent: string;
//   blogLink: string;
// }

interface ContactForm {
  contactHead: string;
  contactCountry1: string;
  contactPlace1: string;
  contactMobile1: string;
  contactCountry2: string;
  contactPlace2: string;
  contactMobile2: string;
  contactCountry3: string;
  contactPlace3: string;
  contactMobile3: string;
  contactEmail: string;
}

interface ContFormData {
  contFormDataHead: string;
  contFormDatabtn: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'tagline_angular';

  // labelHeader: LabelHeader = ['Case Study','About Us','Hire Developer','Technology','Industry'];
  labelHeader: LabelHeader = {
    taglineImg: '../assets/../assets/images/tagline.png',
    labelCaseStudy: 'Case Study',
    labelAboutUs: 'About Us',
    labelHireDeveloper: 'Hire Developer',
    labelTechnology: 'Technology',
    labelIndustry: 'Industry',
    btnHeader: 'GET QUOTE',
    btnHeaderStyle: 'display: flex; justify-content: end;',
    btnHeaderType: 'button',
  };

  headerContent: HeaderContent = {
    headerContentFirst: 'Software Development Company',
    headerContentFirstNew: '& IT Consultancy',
    headerContentSecond: 'Serving',
    headerContentSecondSpan: 'Start-UPs To Fortune 500',
    headerContentParagraph:
      'With the help of Innovation and Technology, We give you the power to <br> change the world with your ideas.',
    headeSchedualMeetBtnType: 'button',
    headeSchedualMeetBtnCount: 'Schedule a meeting',
    headerDownImages: '../assets/images/images.png',
  };

  // serviceBoxes: ServiceBoxes = {
  //   seviceHeader: 'Our Services',
  //   seviceBoxHead: 'Find the',
  //   seviceBoxHeadBold: 'right offers',

  //   serviceBox2: {
  //     serviceBox2HeadImg: '../assets/images/mobile.png',
  //     serviceBox2Head: 'Application Management and Modernisation',
  //     serviceBox2Content:
  //       'Here at Tagline, we provide the service of Application management and modernisation for the growth of your business. We update the old application with new approaches, including the latest languages, frameworks, and platforms.',
  //     serviceBox2Anchor: 'Learn More ->',
  //   },

  //   serviceBox3: {
  //     serviceBox3HeadImg: '../assets/images/web-design-icon.webp',
  //     serviceBox3Head: 'Software Product Engineering',
  //     serviceBox3Content:
  //       'We are dedicated to providing the best Software product engineering services for your business. Our team of developers provides the service of software product engineering and it includes designing, developing, testing, and deploying the software products.',
  //     serviceBox3Anchor: 'Learn More ->',
  //   },

  //   serviceBox4: {
  //     serviceBox4HeadImg: '../assets/images/testing-icon.webp',
  //     serviceBox4Head: 'Agile QA, Automation, and DevOps',
  //     serviceBox4Content:
  //       'At Tagline Infotech, we have a team of dedicated developers that provide the services like Agile QA, Automation, and DevOps. Our DevOps engineers constantly do the testing of software while Agile QA ensures the quality of the software.',
  //     serviceBox4Anchor: 'Learn More ->',
  //   },

  //   serviceBox5: {
  //     serviceBox5HeadImg: '../assets/images/uiux-design-icon.webp',
  //     serviceBox5Head: 'Digital Strategy & Design',
  //     serviceBox5Content:
  //       'Tagline Infotech helps clients to create a clear digital strategy and design for the growth of their businesses. Our developers and UI UX designers put the user first to create easy-to-navigate interfaces and smooth end-to-end experiences.',
  //     serviceBox5Anchor: 'Learn More ->',
  //   },

  //   serviceBox6: {
  //     serviceBox6HeadImg: '../assets/images/software-development-1.png',
  //     serviceBox6Head: 'Software outsourcing company',
  //     serviceBox6Content:
  //       'Tagline Infotech is an experienced software outsourcing company that provides services for various businesses. We have a reliable team of developers that provides high-quality outsourcing services to scale your business.',
  //     serviceBox6Anchor: 'Learn More ->',
  //   },
  //   serviceBox7: {
  //     serviceBox7Head: "Don't know what to choose?",
  //     serviceBox7Span: 'Drop us a line.',
  //     serviceBox7Btn: 'Contact Us',
  //   },
  // };

  experience: Experience = {
    exprContent: {
      exprContentHead: 'We have the experience',
      exprContentPara:
        'We have got the experience to make your dream come true, and these stats speak for themselves: we have 150+ clients worldwide in only three years, and we have worked on over 200 projects, all of which have been finished successfully and on schedule, with 100% client satisfaction. We also have 60K+ hours of freelancing experience',
      exprContentBtn: 'Contact Us',
      exprUpperImg: '../assets/images/woman.webp',
    },
    exprProduct: {
      exprProduct1Img: '../assets/images/contentlogo.webp',
      exprProduct1Head: '125+',
      exprProduct1Type: 'Professional',
      exprProduct2Img: '../assets/images/contentlogo2.webp',
      exprProduct2Head: '450+',
      exprProduct2Type: 'Completed Projects',
      exprProduct3Img: '../assets/images/contentlogo3.webp',
      exprProduct3Head: '150+',
      exprProduct3Type: 'Freelance Hours',
      exprProduct4Img: '../assets/images/contentlogo4.webp',
      exprProduct4Head: '5+',
      exprProduct4Type: 'Years of experience',
    },
  };

  technology: Technology = {
    technologyHead: 'Our Technologies',

    technologyMenuOption: {
      techMenuWeb: 'Web',
      techMenuMobile: 'Mobile',
      techMenuDesktop: 'Desktop',
      techMenuPlateform: 'Plateform',
      techMenuDatabase: 'Database / Data Storage',
      techMenuBigData: 'Big Data',
      techMenuMachineLern: 'Machine Learning',
      techMenuDevOps: 'DevOps',
      techMenuClouds: 'Clouds',
    },
    technologyLanguage: {
      techBackHead: 'Back End',
      techRoRImg: '../assets/images/ror.png',
      techRoRHead: 'Ruby on Rails',
      techPythonImg: '../assets/images/python.png',
      techPythonHead: 'Python',
      techNodeImg: '../assets/images/node_js.svg',
      techNodeHead: 'Node Js',
      techPhpImg: '../assets/images/php.png',
      techPhpHead: 'PHP',
      techJavaImg: '../assets/images/android-java.png',
      techJavaHead: 'Java',
      techGoImg: '../assets/images/go.png',
      techGoHead: 'Go Language',

      techFrontHead: 'Front End',
      techReactImg: '../assets/images/react-js.png',
      techReactHead: 'React',
      techAngularImg: '../assets/images/angular-icon.png',
      techAngularHead: 'Angular',
      techTypeScriptImg: '../assets/images/typescript-icon.png',
      techTypeScriptHead: 'Typescipt',
      techVueImg: '../assets/images/vue-js.png',
      techVueHead: 'Vue Js',
      techMateorImg: '../assets/images/meter-js.png',
      techMateorHead: 'Mateor',
      techJavaScriptImg: '../assets/images/javascript-icon.png',
      techJavaScriptHead: 'Javascript',
      techHtmlImg: '../assets/images/html5.png',
      techHtmlHead: 'Html',
    },
  };

  whyTagline: WhyTagline = {
    whyTaglineHead: 'Why Choose Tagline Infotech ?',
    whyTaglinePara:
      'We have a team of developers who use their expertise to provide complete web development, mobile app development, testing & assurance, SaaS development, and designing services. Tagline Infotech has a team of developers that you can hire by mentioning the requirements for your project. Save time and money by hiring our developers for your startup or large-scale company. Our team of developers has the experience to understand the business ideas of the clients to provide solutions that focus on the core values of the business. Here you will find some benefits of hiring developers from us.',
    whyTagBox1: {
      progressiveImg: '../assets/images/choose-roadmap.png ',
      progressiveNum: '01',
      progressiveHead: ' Progressive Roadmap',
      progressivePara:
        'Our team of developers creates a progressive roadmap that includes a strategic plan to define a goal and major steps to reach that goal. We have a team of developers that uses progressive ',
    },
    whyTagBox2: {
      efficientImg: '../assets/images/choose-project.png ',
      efficientNum: '02',
      efficientHead: 'Efficient Project Management ',
      efficientPara:
        'We believe in efficient project management and our experienced developers use project management tools like Wrike and Zoho. Our developers use these project management tools efficiently ',
    },
    whyTagBox3: {
      flexibleImg: '../assets/images/choose-flexible.svg ',
      flexibleNum: '03 ',
      flexibleHead: 'Flexible Engagement Model ',
      flexiblePara:
        ' We provide flexible engagement models so that clients can hire developers for their projects. These engagement models are flexible so if you aren’t satisfied with any model you can switch to another.',
    },
    whyTagBox4: {
      costEffectiveImg: '../assets/images/choose-cost.png ',
      costEffectiveNum: ' 04',
      costEffectiveHead: 'Cost-Effective ',
      costEffectivePara:
        'Our team of developers provides the best development services at affordable prices. We believe that high-quality solutions can be delivered at cost-effective prices and that’s why we provide different hiring ',
    },
    whyTagBox5: {
      consistentImg: '../assets/images/choose-delivery.png',
      consistentNum: '05 ',
      consistentHead: 'Consistent Delivery ',
      consistentPara:
        'Our developers follow an agile approach to deliver the project before the deadline. We are providing consistent delivery of fully-featured projects as per the client’s requirements. ',
    },
    whyTagBox6: {
      empowerHead: ' with Dedicated Developers',
      empowerSpan1: 'Empower ',
      empowerSpan2: 'Business ',
      empowerBtn: 'Talk to our Expert ',
    },
  };

  worldClient: WorldClient = {
    worldClientHead: 'Words From Our Clientele',
    worldClientPara1:
      "Good things come for those who work hard, and that's why our clientele appreciate our efforts. Tagline Infotech provides the best services to its clients, and it is reflected through our ratings and reviews on various platforms.",
    worldClientPara2:
      'We are a well-known IT services company on Clutch. Check out what our customers have to say about our services. Read their ratings, feedback, and stories about partnering with us before making your own decision.',
  };

  reviewBox: ReviewBox = {
    reviewRate: '5.0',
    reviewWord: '"Everything always turns out perfectly done."',
    reviewCompany: 'IT & Computer Scientist, Self-Employed',
    reviewVeried: 'Verified Review',
  };

  awards: Awards = {
    awardHead: 'Awards & Recognitions',
    award1: '../assets/images/award-2.webp',
    award2: '../assets/images/award-3.webp',
    award3: '../assets/images/award-4.webp',
    award4: '../assets/images/award-5.webp',
    award5: '../assets/images/award-6.webp',
  };

  footer: Footer = {
    footerTop: 'Get latest from Tagline Infotech',
    footerShare: 'Share your email so we can send you',
    footerSpan: 'guides and industry news.',
  };

  hrInquiry: HRInquiry = {
    hrHead: 'HR Inquiry',
    hrEmail: 'hr@taglineinfotech.com',
    hrMobile: '+91 6354362521',
  };

  salesInquiry: SalesInquiry = {
    salesHead: 'Sales Inquiry',
    salesEmail: 'solutions@taglineinfotech.com',
    salesCompany: 'Tagline infotech',
  };

  help: Help = {
    helpHead: 'Help & Advice',
    helpCareer: 'Career',
    helpAbout: 'About Us',
    helpContact: 'Contact Us',
    helpBlog: 'Blog',
    helpPrivacy: 'Privacy pilicy',
    helpSitemap: 'Sitemap',
  };

  services: Services = {
    servicesHead: 'Services',
    servicesMobile: 'Mobile',
    servicesWeb: 'web Development',
    servicesDesign: 'Web Design',
    servicesUiUx: 'UI / UX Design',
    servicesDigital: 'Digital Marketing',
  };

  hireDeveloper: HireDeveloper = {
    hireHead: 'Hire Developers',
    hirePython: 'Hire Python Developer',
    hireAngular: 'Hire Angular Developer',
    hireROR: 'Hire ROR Developer',
    hireFlutter: 'Hire Flutter Developer',
    hireReact: 'Hire React Js Developer',
    HireReactNative: 'Hire React Native Developer',
  };

  // blog1: Blog1 = {
  //   blogImg: '../assets/images/Python-vs-Java.png',
  //   blogLanguage: 'Python',
  //   blogDate: '15/06/2021',
  //   blogTitle: 'Python vs Java Comparison Of',
  //   blogContent:
  //     'Quick Summary The most difficult decision for an entrepreneur is deciding on a programming...',
  //   blogLink: 'Read More ->',
  // };

  // blog2: Blog2 = {
  //   blogImg: '../assets/images/Node.js-Application.png',
  //   blogLanguage: 'Node Js',
  //   blogDate: '9/12/22',
  //   blogTitle: 'Best Practices for Node.js Application Development:...',
  //   blogContent:
  //     'Quick Summary Want to know about node js architecture and node js architecture best',
  //   blogLink: 'Read More ->',
  // };

  // blog3: Blog3 = {
  //   blogImg: '../assets/images/Kotlin-vs-Java.png',
  //   blogLanguage: 'RoR',
  //   blogDate: '9/12/22',
  //   blogTitle: 'JavaScript vs Ruby On Rails: What...',
  //   blogContent:
  //     'Quick Summary: Ruby on Rails and JavaScript both languages are both widely popular among',
  //   blogLink: 'Read More ->',
  // };

  contactForm: ContactForm = {
    contactHead: 'Our Global Presence',
    contactCountry1: 'India (HQ)',
    contactPlace1:
      'Digital Valley, 423, Apple Square, beside Lajamni Chowk, Mota Varachha, Surat, Gujarat 394101',
    contactMobile1: '+91 9913 808 285',
    contactCountry2: 'U.S.A',
    contactPlace2: '2885 Old Zion, Cemetery Rd, Loganville, Ga 30052',
    contactMobile2: '+1 (404) 483-3388',
    contactCountry3: 'United Kingdom',
    contactPlace3: '65 Byron road North wembley Middlesex, london HA0 3PB',
    contactMobile3: '+44 78240 75400',
    contactEmail: 'solutions@taglineinfotech.com',
  };

  contFormData: ContFormData = {
    contFormDataHead: 'Get Your Free Quote Today',
    contFormDatabtn: 'Send Message',
  };

  ourServices = [
    {
      head: 'Find the right offers',
    },
    {
      img: '../assets/images/mobile.png',
      head: 'Application Management and Modernisation',
      content:
        'Here at Tagline, we provide the service of Application management and modernisation for the growth of your business. We update the old application with new approaches, including the latest languages, frameworks, and platforms.',
      link: 'Learn More ->',
    },

    {
      img: '../assets/images/web-design-icon.webp',
      head: 'Software Product Engineering',
      content:
        'We are dedicated to providing the best Software product engineering services for your business. Our team of developers provides the service of software product engineering and it includes designing, developing, testing, and deploying the software products.',
      link: 'Learn More ->',
    },

    {
      img: '../assets/images/testing-icon.webp',
      head: 'Agile QA, Automation, and DevOps',
      content:
        'At Tagline Infotech, we have a team of dedicated developers that provide the services like Agile QA, Automation, and DevOps. Our DevOps engineers constantly do the testing of software while Agile QA ensures the quality of the software.',
      link: 'Learn More ->',
    },

    {
      img: '../assets/images/uiux-design-icon.webp',
      head: 'Digital Strategy & Design',
      content:
        'Tagline Infotech helps clients to create a clear digital strategy and design for the growth of their businesses. Our developers and UI UX designers put the user first to create easy-to-navigate interfaces and smooth end-to-end experiences.',
      link: 'Learn More ->',
    },

    {
      img: '../assets/images/software-development-1.png',
      head: 'Software outsourcing company',
      content:
        'Tagline Infotech is an experienced software outsourcing company that provides services for various businesses. We have a reliable team of developers that provides high-quality outsourcing services to scale your business.',
      link: 'Learn More ->',
    },
    {
      head: "Don't know what to choose?",
      serviceBox7Span: 'Drop us a line.',
      button: 'Contact Us',
    },
  ];

  whyTaglineBox = [
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

  blogs = [
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

  servicesHead : string = 'Our Services';
  blogHeading: string = 'Our Blogs';
  footerEmailSend: string = ' ';
  footerSubscribeBtn: string = 'Subscribe';
  companyName: string = 'Tagline Infotech LLP';
  copyrightReserved: string = ' © 2022 All rights reserved by';
}
