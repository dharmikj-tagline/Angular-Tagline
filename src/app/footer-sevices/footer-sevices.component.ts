import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-footer-sevices',
  templateUrl: './footer-sevices.component.html',
  styleUrls: ['./footer-sevices.component.scss'],
})
export class FooterSevicesComponent implements OnInit {
  constructor(private dataService: DataService) {}

  ngOnInit(): void {}
  @Input() Services: string[] = [];

  servicesHead: string = 'Services';
}
