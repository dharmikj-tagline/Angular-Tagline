import { Component, Input, OnInit } from '@angular/core';
import { FooterService } from '../services/footer.service';

@Component({
  selector: 'app-footer-hr-sales',
  templateUrl: './footer-hr-sales.component.html',
  styleUrls: ['./footer-hr-sales.component.scss'],
})
export class FooterHrSalesComponent implements OnInit {
  constructor(private footerService: FooterService) {}

   hrMenu: string[] = [];
   salesMenu: string[] = [];

  ngOnInit(): void {
    this.hrMenu=this.footerService.footerHrMenu;
    this.salesMenu=this.footerService.footerSalesMenu;
  }

  // @Input() hrMenu: string[] = [];
  // @Input() salesMenu: string[] = [];

  hrHead: string = 'HR Inquiry';
  salesHead: string = 'Sales Inquiry';
}
