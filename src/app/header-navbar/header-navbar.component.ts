import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-header-navbar',
  templateUrl: './header-navbar.component.html',
  styleUrls: ['./header-navbar.component.scss']
})
export class HeaderNavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() headerNavContent : string[]=[]; 

  taglineImg: string = '../assets/../assets/images/tagline.png';
  btnHeader: string = 'GET QUOTE';
  btnHeaderStyle: string = 'display: flex; justify-content: end;';
  btnHeaderType:  string ='button';

}
