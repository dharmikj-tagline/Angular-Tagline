import { Component, Input, OnInit } from '@angular/core';
import { TechnologyService } from '../services/technology.service';

export interface Backend{
  img: string,
  language : string
}

@Component({
  selector: 'app-technology-backend',
  templateUrl: './technology-backend.component.html',
  styleUrls: ['./technology-backend.component.scss']
})
export class TechnologyBackendComponent implements OnInit {

  constructor(private technologyService: TechnologyService) {}

  backendLanuages : Backend[] =[] ;

  ngOnInit(): void {
    this.backendLanuages=this.technologyService.backEnds;
  }
  // @Input() backendLanuages : Backend[] =[] ;

  techBackHead: string ='Back End'
  
}
