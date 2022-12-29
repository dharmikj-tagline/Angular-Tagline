import { Component, Input, OnInit } from '@angular/core';
import { WhytaglineService } from '../services/whytagline.service';
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

  constructor(private whytaglineService: WhytaglineService) {}

 whyTaglineBoxs : WhyTaglineBoxs[]=[];

  ngOnInit(): void {
    this.whyTaglineBoxs=this.whytaglineService.whyTaglineBox;
  }
// @Input() whyTaglineBoxs : WhyTaglineBoxs[]=[];
}
