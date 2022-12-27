import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review-rate-star',
  templateUrl: './review-rate-star.component.html',
  styleUrls: ['./review-rate-star.component.scss']
})
export class ReviewRateStarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
    // switch(true){
    //   case this.rateStar=="5.0":
    //     ((document.getElementById("icon") as unknown as HTMLInputElement).innerHTML=`<i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>`)
    //     break;
    //   case this.rateStar=="4.0":
    //     ((document.getElementById("icon") as unknown as HTMLInputElement).innerHTML=`<i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>`)
    //      break;
    //   case this.rateStar=="3.0":
    //     ((document.getElementById("icon") as unknown as HTMLInputElement).innerHTML=`<i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>`)
    //       break;
    //   case this.rateStar=="2.0":
    //     ((document.getElementById("icon") as unknown as HTMLInputElement).innerHTML=`<i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>`)
    //     break;
    //   case this.rateStar=="1.0":
    //     ((document.getElementById("icon") as unknown as HTMLInputElement).innerHTML=`<i class="bi bi-star-fill"></i>`)
    //     break;
    // }
  }

  // rateStar: string = "3.0";

  rateStar:number=5;
}

