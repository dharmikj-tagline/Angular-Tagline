import { Component, OnInit } from '@angular/core';

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

@Component({
  selector: 'app-footer-hr-sales',
  templateUrl: './footer-hr-sales.component.html',
  styleUrls: ['./footer-hr-sales.component.scss']
})
export class FooterHrSalesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

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

}
