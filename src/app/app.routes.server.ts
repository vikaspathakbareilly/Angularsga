import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoutes: ServerRoute[] = [

  {
    path: 'blogs/:slug',

    renderMode: RenderMode.Prerender,

    async getPrerenderParams() {

      return [
        { slug: 'angular-21' },
        { slug: 'nodejs' },
        { slug: 'react' }
      ];

    }

  },

  {
    path: '**',
    renderMode: RenderMode.Prerender
  }

];