import { Component, Input, OnInit } from '@angular/core';
import { FooterService } from '../services/footer.service';

@Component({
  selector: 'app-footer-hiredeveloper',
  templateUrl: './footer-hiredeveloper.component.html',
  styleUrls: ['./footer-hiredeveloper.component.scss']
})
export class FooterHiredeveloperComponent implements OnInit {

  constructor(private footerService: FooterService) {}

  hireDevelopMenu :string[]=[];

  ngOnInit(): void {
    this.hireDevelopMenu=this.footerService.footerHireDevlopMenu;
  }

  // @Input() hireDevelopMenu :string[]=[];

  hireHead: string ='Hire Developers';
}
