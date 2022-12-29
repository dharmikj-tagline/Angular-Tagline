import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

interface Blogs {
    img: string;
    language: string;
    date: string;
    title: string;
    content: string;
    link: string;
  }
@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {

  constructor(private dataService: DataService) {}

  blogsBox : Blogs[]=[];
  ngOnInit(): void {
  }

// @Input() blogsBox : Blogs[]=[];
blogHeading: string = 'Our Blogs';
}
