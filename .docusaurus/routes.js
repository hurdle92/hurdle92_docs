import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', '5ff'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', '5ba'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', 'a2b'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', 'c3c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', '156'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '88c'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '000'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '179'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', '182'),
    exact: true
  },
  {
    path: '/blog/authors',
    component: ComponentCreator('/blog/authors', '0b7'),
    exact: true
  },
  {
    path: '/blog/authors/all-sebastien-lorber-articles',
    component: ComponentCreator('/blog/authors/all-sebastien-lorber-articles', '896'),
    exact: true
  },
  {
    path: '/blog/authors/yangshun',
    component: ComponentCreator('/blog/authors/yangshun', '7c6'),
    exact: true
  },
  {
    path: '/blog/mdx-blog-post',
    component: ComponentCreator('/blog/mdx-blog-post', '6a6'),
    exact: true
  },
  {
    path: '/blog/tags',
    component: ComponentCreator('/blog/tags', '287'),
    exact: true
  },
  {
    path: '/blog/tags/adot',
    component: ComponentCreator('/blog/tags/adot', '1a7'),
    exact: true
  },
  {
    path: '/blog/tags/blog',
    component: ComponentCreator('/blog/tags/blog', 'c53'),
    exact: true
  },
  {
    path: '/blog/tags/dev',
    component: ComponentCreator('/blog/tags/dev', 'fc7'),
    exact: true
  },
  {
    path: '/blog/tags/docusaurus',
    component: ComponentCreator('/blog/tags/docusaurus', 'd84'),
    exact: true
  },
  {
    path: '/blog/welcome',
    component: ComponentCreator('/blog/welcome', '803'),
    exact: true
  },
  {
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/about',
    component: ComponentCreator('/about', 'f75'),
    routes: [
      {
        path: '/about',
        component: ComponentCreator('/about', 'df7'),
        routes: [
          {
            path: '/about/tags',
            component: ComponentCreator('/about/tags', '438'),
            exact: true
          },
          {
            path: '/about/tags/adot',
            component: ComponentCreator('/about/tags/adot', '257'),
            exact: true
          },
          {
            path: '/about/tags/blog',
            component: ComponentCreator('/about/tags/blog', '643'),
            exact: true
          },
          {
            path: '/about/tags/dev',
            component: ComponentCreator('/about/tags/dev', '9c6'),
            exact: true
          },
          {
            path: '/about/tags/docusaurus',
            component: ComponentCreator('/about/tags/docusaurus', 'b07'),
            exact: true
          },
          {
            path: '/about',
            component: ComponentCreator('/about', '64c'),
            routes: [
              {
                path: '/about/2024-08-26-welcome/welcome',
                component: ComponentCreator('/about/2024-08-26-welcome/welcome', 'cc4'),
                exact: true,
                sidebar: "aboutSidebar"
              },
              {
                path: '/about/Introduction',
                component: ComponentCreator('/about/Introduction', '041'),
                exact: true,
                sidebar: "aboutSidebar"
              },
              {
                path: '/about/mdx-blog-post',
                component: ComponentCreator('/about/mdx-blog-post', 'fcb'),
                exact: true,
                sidebar: "aboutSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/about',
    component: ComponentCreator('/about', '779'),
    routes: [
      {
        path: '/about',
        component: ComponentCreator('/about', 'e33'),
        routes: [
          {
            path: '/about/tags',
            component: ComponentCreator('/about/tags', '29c'),
            exact: true
          },
          {
            path: '/about/tags/adot',
            component: ComponentCreator('/about/tags/adot', 'c3e'),
            exact: true
          },
          {
            path: '/about/tags/blog',
            component: ComponentCreator('/about/tags/blog', 'f1f'),
            exact: true
          },
          {
            path: '/about/tags/dev',
            component: ComponentCreator('/about/tags/dev', 'e66'),
            exact: true
          },
          {
            path: '/about/tags/docusaurus',
            component: ComponentCreator('/about/tags/docusaurus', '1b2'),
            exact: true
          },
          {
            path: '/about',
            component: ComponentCreator('/about', '64c'),
            routes: [
              {
                path: '/about/2024-08-26-welcome/welcome',
                component: ComponentCreator('/about/2024-08-26-welcome/welcome', 'cc4'),
                exact: true,
                sidebar: "aboutSidebar"
              },
              {
                path: '/about/Introduction',
                component: ComponentCreator('/about/Introduction', '041'),
                exact: true,
                sidebar: "aboutSidebar"
              },
              {
                path: '/about/mdx-blog-post',
                component: ComponentCreator('/about/mdx-blog-post', 'fcb'),
                exact: true,
                sidebar: "aboutSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/',
    component: ComponentCreator('/', 'e5f'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
