import { Component, Input, OnInit } from '@angular/core';

interface ReviewBox {
  rate: string;
  reviewWord: string;
  company: string;
  veried: string;
}
@Component({
  selector: 'app-review-boxes',
  templateUrl: './review-boxes.component.html',
  styleUrls: ['./review-boxes.component.scss'],
})
export class ReviewBoxesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Input() reviewBoxesDetail: ReviewBox[] = [];
}
