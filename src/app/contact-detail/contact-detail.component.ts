import { Component, Input, OnInit } from '@angular/core';
import { ContactFormDetail } from '../common';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.scss']
})
export class ContactDetailComponent implements OnInit {

  constructor(private contactService: ContactService) {}

  contactForm:ContactFormDetail[]=[];
  ngOnInit(): void {
    this.contactForm=this.contactService.contactFormDetail;
  }
  // @Input() contactForm:any;

  contactdetailHead: string ='Our Global Presence';

}
