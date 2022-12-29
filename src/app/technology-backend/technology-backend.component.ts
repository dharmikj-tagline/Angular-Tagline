import { Component, Input, OnInit } from '@angular/core';
import { Techlanguage } from '../common';
import { TechnologyService } from '../services/technology.service';



@Component({
  selector: 'app-technology-backend',
  templateUrl: './technology-backend.component.html',
  styleUrls: ['./technology-backend.component.scss']
})
export class TechnologyBackendComponent implements OnInit {

  constructor(private technologyService: TechnologyService) {}

  backendLanuages : Techlanguage[] =[] ;

  ngOnInit(): void {
    this.backendLanuages=this.technologyService.backEnds;
  }
  // @Input() backendLanuages : Backend[] =[] ;

  techBackHead: string ='Back End'
  
}
