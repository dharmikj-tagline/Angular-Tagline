import { Component, Input, OnInit } from '@angular/core';
import { Services } from '../common';

@Component({
  selector: 'app-sevices',
  templateUrl: './sevices.component.html',
  styleUrls: ['./sevices.component.scss']
})
export class SevicesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() serviceBoxes : Services[]=[];
  servicesHead : string ='Our Services';
  
}
