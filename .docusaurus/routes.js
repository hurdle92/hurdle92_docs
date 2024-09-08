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
    component: ComponentCreator('/about', 'f4a'),
    routes: [
      {
        path: '/about',
        component: ComponentCreator('/about', '62e'),
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
            component: ComponentCreator('/about', '331'),
            routes: [
              {
                path: '/about/2024-08-26-welcome/welcome',
                component: ComponentCreator('/about/2024-08-26-welcome/welcome', 'cc4'),
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
    path: '/docs',
    component: ComponentCreator('/docs', '502'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', 'f0d'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'e52'),
            routes: [
              {
                path: '/docs/category/tech-stacks',
                component: ComponentCreator('/docs/category/tech-stacks', '27d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/category/tech-stacks-1',
                component: ComponentCreator('/docs/category/tech-stacks-1', '4d7'),
                exact: true,
                sidebar: "aboutSidebar"
              },
              {
                path: '/docs/Deploy',
                component: ComponentCreator('/docs/Deploy', '269'),
                exact: true,
                sidebar: "aboutSidebar"
              },
              {
                path: '/docs/design_system',
                component: ComponentCreator('/docs/design_system', '307'),
                exact: true,
                sidebar: "aboutSidebar"
              },
              {
                path: '/docs/folder_structure',
                component: ComponentCreator('/docs/folder_structure', '15d'),
                exact: true,
                sidebar: "aboutSidebar"
              },
              {
                path: '/docs/Introduction',
                component: ComponentCreator('/docs/Introduction', '303'),
                exact: true,
                sidebar: "aboutSidebar"
              },
              {
                path: '/docs/tech_stacks/Nextjs',
                component: ComponentCreator('/docs/tech_stacks/Nextjs', '625'),
                exact: true,
                sidebar: "aboutSidebar"
              },
              {
                path: '/docs/tech_stacks/React',
                component: ComponentCreator('/docs/tech_stacks/React', '26f'),
                exact: true,
                sidebar: "aboutSidebar"
              },
              {
                path: '/docs/tech_stacks/react_hook_form',
                component: ComponentCreator('/docs/tech_stacks/react_hook_form', 'ca4'),
                exact: true,
                sidebar: "aboutSidebar"
              },
              {
                path: '/docs/tech_stacks/react_query',
                component: ComponentCreator('/docs/tech_stacks/react_query', '913'),
                exact: true,
                sidebar: "aboutSidebar"
              },
              {
                path: '/docs/tech_stacks/Turborepo',
                component: ComponentCreator('/docs/tech_stacks/Turborepo', '280'),
                exact: true,
                sidebar: "aboutSidebar"
              },
              {
                path: '/docs/tech_stacks/zustand',
                component: ComponentCreator('/docs/tech_stacks/zustand', 'ab5'),
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
