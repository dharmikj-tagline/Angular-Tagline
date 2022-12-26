import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-sevices',
  templateUrl: './footer-sevices.component.html',
  styleUrls: ['./footer-sevices.component.scss'],
})
export class FooterSevicesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  @Input() Services: string[] = [];

  servicesHead: string = 'Services';
}
