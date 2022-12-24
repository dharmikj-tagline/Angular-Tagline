import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-last',
  templateUrl: './footer-last.component.html',
  styleUrls: ['./footer-last.component.scss']
})
export class FooterLastComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  copyrightReserved: string = ' © 2022 All rights reserved by';
  companyName: string = 'Tagline Infotech LLP';

}
