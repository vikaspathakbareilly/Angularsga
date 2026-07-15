import { Component, inject } from '@angular/core';
import { BlogService } from '../../services/blog';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-blog-details',
  imports: [],
  templateUrl: './blog-details.html',
  styleUrl: './blog-details.scss',
})
export class BlogDetails {

  route = inject(ActivatedRoute);

  blogService = inject(BlogService);

  slug = this.route.snapshot.params['slug'];

  blog: any = this.blogService.getBlog(this.slug);

}
