import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss'],
})
export class ContactFormComponent implements OnInit {
  constructor(private dataService: DataService) {}

  ngOnInit(): void {}
  contFormDataHead: string = 'Get Your Free Quote Today';
  contFormDatabtn: string = 'Send Message';
}
