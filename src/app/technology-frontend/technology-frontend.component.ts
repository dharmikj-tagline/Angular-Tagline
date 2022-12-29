import { Component, Input, OnInit } from '@angular/core';
import { TechnologyService } from '../services/technology.service';

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

  constructor(private technologyService: TechnologyService) {}

  frontendLanuages : Frontend[]=[];

  ngOnInit(): void {
    this.frontendLanuages=this.technologyService.frontEnds
  }
  // @Input() frontendLanuages : Frontend[]=[];

  techFrontHead : string='Front End';
}
