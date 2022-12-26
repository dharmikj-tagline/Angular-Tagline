import { Component, OnInit } from '@angular/core';

interface Footer {
  footerTop: string;
  footerShare: string;
  footerSpan: string;
}
@Component({
  selector: 'app-footer-top',
  templateUrl: './footer-top.component.html',
  styleUrls: ['./footer-top.component.scss']
})
export class FooterTopComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  footer: Footer = {
    footerTop: 'Get latest from Tagline Infotech',
    footerShare: 'Share your email so we can send you',
    footerSpan: 'guides and industry news.',
  };

  footerEmailSend: string = ' ';
  footerSubscribeBtn: string = 'Subscribe';

}