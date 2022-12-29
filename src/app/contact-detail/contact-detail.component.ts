import { Component, Input, OnInit } from '@angular/core';
import { ContactFormDetail } from '../common';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent implements OnInit {

  constructor(private dataService: DataService) {}

  contactForm:ContactFormDetail[]=[];
  ngOnInit(): void {
  }
  // @Input() contactForm:any;

}
