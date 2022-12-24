import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience-projects',
  templateUrl: './experience-projects.component.html',
  styleUrls: ['./experience-projects.component.scss']
})
export class ExperienceProjectsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() experienceProjects : any;
}
