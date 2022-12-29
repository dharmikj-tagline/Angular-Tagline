import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-experience-projects',
  templateUrl: './experience-projects.component.html',
  styleUrls: ['./experience-projects.component.scss']
})
export class ExperienceProjectsComponent implements OnInit {

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
  }
  @Input() experienceProjects : any;
}
