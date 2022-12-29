import { Component, Input, OnInit } from '@angular/core';
import { ReviewService } from '../services/review.service';

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

  constructor(private reviewService: ReviewService) {}

   reviewBoxesDetail: ReviewBox[] = [];

  ngOnInit(): void {
    this.reviewBoxesDetail=this.reviewService.reviewBoxes;
  }

  // @Input() reviewBoxesDetail: ReviewBox[] = [];
}
