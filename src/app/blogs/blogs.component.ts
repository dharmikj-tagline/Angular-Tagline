import { Component, Input, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

@Input() blogsBox : Blogs[]=[];
blogHeading: string = 'Our Blogs';
}
