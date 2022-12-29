import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-why-tagline',
  templateUrl: './why-tagline.component.html',
  styleUrls: ['./why-tagline.component.scss']
})
export class WhyTaglineComponent implements OnInit {

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
  }

  whyTaglineHead:string= 'Why Choose Tagline Infotech ?';
    whyTaglinePara: string =
      'We have a team of developers who use their expertise to provide complete web development, mobile app development, testing & assurance, SaaS development, and designing services. Tagline Infotech has a team of developers that you can hire by mentioning the requirements for your project. Save time and money by hiring our developers for your startup or large-scale company. Our team of developers has the experience to understand the business ideas of the clients to provide solutions that focus on the core values of the business. Here you will find some benefits of hiring developers from us.';


}
