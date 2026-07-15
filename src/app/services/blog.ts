import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class BlogService {

    blogs = [

        {
            id: 1,
            slug: 'angular-21',
            title: 'Angular 21 Features',
            description: 'Angular 21 introduces...'
        },

        {
            id: 2,
            slug: 'nodejs',
            title: 'NodeJS Tutorial',
            description: 'Learn NodeJS'
        },

        {
            id: 3,
            slug: 'react',
            title: 'React Guide',
            description: 'Complete React Guide'
        }

    ];

    getBlogs() {
        return this.blogs;
    }

    getBlog(slug: string) {
        return this.blogs.find(x => x.slug === slug);
    }

}