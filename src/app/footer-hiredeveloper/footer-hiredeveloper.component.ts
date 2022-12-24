import { Component, OnInit } from '@angular/core';

interface HireDeveloper {
  hireHead: string;
  hirePython: string;
  hireAngular: string;
  hireROR: string;
  hireFlutter: string;
  hireReact: string;
  HireReactNative: string;
}

@Component({
  selector: 'app-footer-hiredeveloper',
  templateUrl: './footer-hiredeveloper.component.html',
  styleUrls: ['./footer-hiredeveloper.component.scss']
})
export class FooterHiredeveloperComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  hireDeveloper: HireDeveloper = {
    hireHead: 'Hire Developers',
    hirePython: 'Hire Python Developer',
    hireAngular: 'Hire Angular Developer',
    hireROR: 'Hire ROR Developer',
    hireFlutter: 'Hire Flutter Developer',
    hireReact: 'Hire React Js Developer',
    HireReactNative: 'Hire React Native Developer',
  };
}
