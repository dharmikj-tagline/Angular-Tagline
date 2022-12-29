import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-footer-top',
  templateUrl: './footer-top.component.html',
  styleUrls: ['./footer-top.component.scss']
})
export class FooterTopComponent implements OnInit {

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
  }

  footer = {
    footerTop: 'Get latest from Tagline Infotech',
    footerShare: 'Share your email so we can send you',
    footerSpan: 'guides and industry news.',
  };

  footerEmailSend: string = ' ';
  footerSubscribeBtn: string = 'Subscribe';

}
