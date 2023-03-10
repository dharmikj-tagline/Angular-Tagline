import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { FooterService } from '../services/footer.service';

@Component({
  selector: 'app-footer-help',
  templateUrl: './footer-help.component.html',
  styleUrls: ['./footer-help.component.scss'],
})
export class FooterHelpComponent implements OnInit {
  constructor(private footerService: FooterService) {}

  helpMenu: string[] = [];

  ngOnInit(): void {
    this.helpMenu=this.footerService.footerHelpMenu;
  }

  // @Input() helpMenu: string[] = [];
  
  helpHead: string = 'Help & Advice';
}
