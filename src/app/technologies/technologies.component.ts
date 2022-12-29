import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss']
})
export class TechnologiesComponent implements OnInit {

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
  }
   
  @Input() technologyMenus : string[]=[];
}
