import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer-hiredeveloper',
  templateUrl: './footer-hiredeveloper.component.html',
  styleUrls: ['./footer-hiredeveloper.component.scss']
})
export class FooterHiredeveloperComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() hireDevelopMenu :string[]=[];

  hireHead: string ='Hire Developers';
}
