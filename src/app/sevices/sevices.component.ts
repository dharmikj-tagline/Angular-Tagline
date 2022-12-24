import { Component, Input, OnInit } from '@angular/core';

interface Services{
  img?: string ,
  head?: string ,
  content?: string ,
  link?: string ,
  serviceBox7Span?: string ,
  button?: string ,
}

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
