import { Component, Input, OnInit } from '@angular/core';
import { FooterService } from '../services/footer.service';

@Component({
  selector: 'app-footer-sevices',
  templateUrl: './footer-sevices.component.html',
  styleUrls: ['./footer-sevices.component.scss'],
})
export class FooterSevicesComponent implements OnInit {
  constructor(private footerService: FooterService) {}

   Services: string[] = [];

  ngOnInit(): void {
    this.Services=this.footerService.footerServicesMenu;
  }
  // @Input() Services: string[] = [];

  servicesHead: string = 'Services';
}
