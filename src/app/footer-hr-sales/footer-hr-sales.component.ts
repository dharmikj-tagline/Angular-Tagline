import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-footer-hr-sales',
  templateUrl: './footer-hr-sales.component.html',
  styleUrls: ['./footer-hr-sales.component.scss'],
})
export class FooterHrSalesComponent implements OnInit {
  constructor(private dataService: DataService) {}

  ngOnInit(): void {}

  @Input() hrMenu: string[] = [];
  @Input() salesMenu: string[] = [];

  hrHead: string = 'HR Inquiry';
  salesHead: string = 'Sales Inquiry';
}
