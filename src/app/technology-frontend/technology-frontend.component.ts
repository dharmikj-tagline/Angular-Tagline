import { Component, Input, OnInit } from '@angular/core';
import { Techlanguage } from '../common';
import { TechnologyService } from '../services/technology.service';


@Component({
  selector: 'app-technology-frontend',
  templateUrl: './technology-frontend.component.html',
  styleUrls: ['./technology-frontend.component.scss']
})
export class TechnologyFrontendComponent implements OnInit {

  constructor(private technologyService: TechnologyService) {}

  frontendLanuages : Techlanguage[]=[];

  ngOnInit(): void {
    this.frontendLanuages=this.technologyService.frontEnds
  }
  // @Input() frontendLanuages : Frontend[]=[];

  techFrontHead : string='Front End';
}
