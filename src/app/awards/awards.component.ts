import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

interface AwardsImg {
  awardHead: string;
  award1: string;
  award2: string;
  award3: string;
  award4: string;
  award5: string;
}
@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.scss'],
})
export class AwardsComponent implements OnInit {
  constructor(private dataService: DataService) {}

  awardImg: string[] = [];

  ngOnInit(): void {
    this.awardImg = this.dataService.awardsImg;
  }

  awardHead: string = 'Awards & Recognitions';
}
