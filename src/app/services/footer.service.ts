import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FooterService {

  constructor() { }

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
}
