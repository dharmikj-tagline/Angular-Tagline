import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-footer-hiredeveloper',
  templateUrl: './footer-hiredeveloper.component.html',
  styleUrls: ['./footer-hiredeveloper.component.scss']
})
export class FooterHiredeveloperComponent implements OnInit {

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
  }

  @Input() hireDevelopMenu :string[]=[];

  hireHead: string ='Hire Developers';
}
