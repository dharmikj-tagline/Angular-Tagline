import { Component, OnInit } from '@angular/core';

interface Help {
  helpHead: string;
  helpCareer: string;
  helpAbout: string;
  helpContact: string;
  helpBlog: string;
  helpPrivacy: string;
  helpSitemap: string;
}
@Component({
  selector: 'app-footer-help',
  templateUrl: './footer-help.component.html',
  styleUrls: ['./footer-help.component.scss']
})
export class FooterHelpComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  help: Help = {
    helpHead: 'Help & Advice',
    helpCareer: 'Career',
    helpAbout: 'About Us',
    helpContact: 'Contact Us',
    helpBlog: 'Blog',
    helpPrivacy: 'Privacy pilicy',
    helpSitemap: 'Sitemap',
  };

}
