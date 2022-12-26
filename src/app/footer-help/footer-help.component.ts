import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-help',
  templateUrl: './footer-help.component.html',
  styleUrls: ['./footer-help.component.scss'],
})
export class FooterHelpComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() helpMenu: string[] = [];
  
  helpHead: string = 'Help & Advice';
}
