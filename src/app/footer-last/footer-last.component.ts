import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-footer-last',
  templateUrl: './footer-last.component.html',
  styleUrls: ['./footer-last.component.scss']
})
export class FooterLastComponent implements OnInit {

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
  }
  copyrightReserved: string = ' © 2022 All rights reserved by';
  companyName: string = 'Tagline Infotech LLP';

}
