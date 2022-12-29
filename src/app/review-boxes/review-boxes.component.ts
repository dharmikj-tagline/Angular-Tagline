import { Component, Input, OnInit } from '@angular/core';
import { ReviewBoxes } from '../common';
import { ReviewService } from '../services/review.service';

@Component({
  selector: 'app-review-boxes',
  templateUrl: './review-boxes.component.html',
  styleUrls: ['./review-boxes.component.scss'],
})
export class ReviewBoxesComponent implements OnInit {

  constructor(private reviewService: ReviewService) {}

   reviewBoxesDetail: ReviewBoxes[] = [];

  ngOnInit(): void {
    this.reviewBoxesDetail=this.reviewService.reviewBoxes;
  }

  // @Input() reviewBoxesDetail: ReviewBox[] = [];
}
