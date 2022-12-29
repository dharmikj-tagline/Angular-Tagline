import { Component, Input, OnInit } from '@angular/core';
import { WhyTaglineBox } from '../common';
import { WhytaglineService } from '../services/whytagline.service';

@Component({
  selector: 'app-why-tagline-boxes',
  templateUrl: './why-tagline-boxes.component.html',
  styleUrls: ['./why-tagline-boxes.component.scss']
})
export class WhyTaglineBoxesComponent implements OnInit {

  constructor(private whytaglineService: WhytaglineService) {}

 whyTaglineBoxs : WhyTaglineBox[]=[];

  ngOnInit(): void {
    this.whyTaglineBoxs=this.whytaglineService.whyTaglineBox;
  }
// @Input() whyTaglineBoxs : WhyTaglineBoxs[]=[];
}
