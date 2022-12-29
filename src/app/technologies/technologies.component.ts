import { Component, Input, OnInit } from '@angular/core';
import { TechnologyService } from '../services/technology.service';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss']
})
export class TechnologiesComponent implements OnInit {

  constructor(private technologyService: TechnologyService) {}

   technologyMenus : string[]=[];

  ngOnInit(): void {
    this.technologyMenus=this.technologyService.techMenu;
  }
   
  // @Input() technologyMenus : string[]=[];
}
