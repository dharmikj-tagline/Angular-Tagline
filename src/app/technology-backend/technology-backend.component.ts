import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

interface Backend{
  img: string,
  language : string
}

@Component({
  selector: 'app-technology-backend',
  templateUrl: './technology-backend.component.html',
  styleUrls: ['./technology-backend.component.scss']
})
export class TechnologyBackendComponent implements OnInit {

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
  }
  @Input() backendLanuages : Backend[] =[] ;

  techBackHead: string ='Back End'
  
}
