import { Component, OnInit } from '@angular/core';

interface Services {
  servicesHead: string;
  servicesMobile: string;
  servicesWeb: string;
  servicesDesign: string;
  servicesUiUx: string;
  servicesDigital: string;
}

@Component({
  selector: 'app-footer-sevices',
  templateUrl: './footer-sevices.component.html',
  styleUrls: ['./footer-sevices.component.scss']
})
export class FooterSevicesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  services: Services = {
    servicesHead: 'Services',
    servicesMobile: 'Mobile',
    servicesWeb: 'web Development',
    servicesDesign: 'Web Design',
    servicesUiUx: 'UI / UX Design',
    servicesDigital: 'Digital Marketing',
  };

}
