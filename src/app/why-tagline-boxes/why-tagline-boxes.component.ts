import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
interface WhyTaglineBoxs{
  img : string,
  num ?: string,
  head : string,
  content ?: string,
  button ?: string,
}
@Component({
  selector: 'app-why-tagline-boxes',
  templateUrl: './why-tagline-boxes.component.html',
  styleUrls: ['./why-tagline-boxes.component.scss']
})
export class WhyTaglineBoxesComponent implements OnInit {

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
  }
@Input() whyTaglineBoxs : WhyTaglineBoxs[]=[];
}
