import { Component, Input, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }
  @Input() backendLanuages : Backend[] =[] ;

  techBackHead: string ='Back End'
  
}
