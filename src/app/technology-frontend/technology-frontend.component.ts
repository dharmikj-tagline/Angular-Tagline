import { Component, Input, OnInit } from '@angular/core';

interface Frontend{
  img : string,
  language: string,
}
@Component({
  selector: 'app-technology-frontend',
  templateUrl: './technology-frontend.component.html',
  styleUrls: ['./technology-frontend.component.scss']
})
export class TechnologyFrontendComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() frontendLanuages : Frontend[]=[];

  techFrontHead : string='Front End';
}
