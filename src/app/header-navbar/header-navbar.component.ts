import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { HeaderService } from '../services/header.service';
@Component({
  selector: 'app-header-navbar',
  templateUrl: './header-navbar.component.html',
  styleUrls: ['./header-navbar.component.scss']
})
export class HeaderNavbarComponent implements OnInit {

  constructor(private headerService: HeaderService) {}

  headerNavContent : string[]=[]; 

  ngOnInit(): void {
    this.headerNavContent=this.headerService.labelHeader;
  }

  // @Input() headerNavContent : string[]=[]; 
   


  taglineImg: string = '../assets/../assets/images/tagline.png';
  btnHeader: string = 'GET QUOTE';
  btnHeaderStyle: string = 'display: flex; justify-content: end;';
  btnHeaderType:  string ='button';

}
