import { Component, inject } from '@angular/core';
import { BlogService } from '../../services/blog';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-blogs',
  imports: [RouterLink],
  templateUrl: './blogs.html',
  styleUrl: './blogs.scss',
})
export class Blogs {

  blogService = inject(BlogService);

  blogs = this.blogService.getBlogs();
}
