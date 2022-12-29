import { Component, Input, OnInit } from '@angular/core';
import { ExperianseNumBoxs } from '../common';
import { ExperienceService } from '../services/experience.service';

@Component({
  selector: 'app-experience-projects',
  templateUrl: './experience-projects.component.html',
  styleUrls: ['./experience-projects.component.scss']
})
export class ExperienceProjectsComponent implements OnInit {

  constructor(private experienceService: ExperienceService) {}

   experienceProjects : ExperianseNumBoxs[]=[];

  ngOnInit(): void {
    this.experienceProjects=this.experienceService.experianseNumBoxs;
  }
  // @Input() experienceProjects : any;
}
