import { Component, OnInit } from '@angular/core';
import { FooterService } from '../services/footer.service';

@Component({
  selector: 'app-footer-last',
  templateUrl: './footer-last.component.html',
  styleUrls: ['./footer-last.component.scss']
})
export class FooterLastComponent implements OnInit {

  constructor(private footerService: FooterService) {}

  ngOnInit(): void {
  }
  copyrightReserved: string = ' © 2022 All rights reserved by';
  companyName: string = 'Tagline Infotech LLP';

}
