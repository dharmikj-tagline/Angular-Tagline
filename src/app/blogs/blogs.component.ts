import { Component, Input, OnInit } from '@angular/core';
import { Blogs } from '../common';
import { BlogService } from '../services/blog.service';


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
