import { Component, Input, OnInit } from '@angular/core';
import { BlogService } from '../services/blog.service';

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

  constructor(private blogService: BlogService) {}

  blogsBox : Blogs[]=[];
  ngOnInit(): void {
    this.blogsBox=this.blogService.blogs;
  }

// @Input() blogsBox : Blogs[]=[];
blogHeading: string = 'Our Blogs';
}
