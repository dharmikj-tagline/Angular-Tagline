import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

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

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
  }
  @Input() frontendLanuages : Frontend[]=[];

  techFrontHead : string='Front End';
}
