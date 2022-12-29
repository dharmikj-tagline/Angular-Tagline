import { Component, Input, OnInit } from '@angular/core';
import { Services } from '../common';
import { OurService } from '../services/our.service';

@Component({
  selector: 'app-sevices',
  templateUrl: './sevices.component.html',
  styleUrls: ['./sevices.component.scss']
})
export class SevicesComponent implements OnInit {

  constructor(private ourService: OurService) {}

  serviceBoxes : Services[]=[];

  ngOnInit(): void {
    this.serviceBoxes=this.ourService.ourServices;
  }

  // @Input() serviceBoxes : Services[]=[];
  servicesHead : string ='Our Services';
  
}
