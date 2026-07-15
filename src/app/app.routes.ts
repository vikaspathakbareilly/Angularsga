import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Blogs } from './pages/blogs/blogs';
import { BlogDetails } from './pages/blog-details/blog-details';
export const routes: Routes = [



    {
        path: '',
        component: Home
    },

    {
        path: 'about',
        component: About
    },

    {
        path: 'blogs',
        component: Blogs
    },

    {
        path: 'blogs/:slug',
        component: BlogDetails
    }


];
