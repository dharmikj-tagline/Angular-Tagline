import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-footer-help',
  templateUrl: './footer-help.component.html',
  styleUrls: ['./footer-help.component.scss'],
})
export class FooterHelpComponent implements OnInit {
  constructor(private dataService: DataService) {}

  ngOnInit(): void {}

  @Input() helpMenu: string[] = [];
  
  helpHead: string = 'Help & Advice';
}
