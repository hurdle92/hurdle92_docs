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
    component: ComponentCreator('/about', '37d'),
    routes: [
      {
        path: '/about',
        component: ComponentCreator('/about', '4b4'),
        routes: [
          {
            path: '/about',
            component: ComponentCreator('/about', '4fd'),
            routes: [
              {
                path: '/about/Deploy',
                component: ComponentCreator('/about/Deploy', '702'),
                exact: true,
                sidebar: "aboutSidebar"
              },
              {
                path: '/about/design_system',
                component: ComponentCreator('/about/design_system', 'c21'),
                exact: true,
                sidebar: "aboutSidebar"
              },
              {
                path: '/about/folder_structure',
                component: ComponentCreator('/about/folder_structure', '447'),
                exact: true,
                sidebar: "aboutSidebar"
              },
              {
                path: '/about/Introduction',
                component: ComponentCreator('/about/Introduction', '041'),
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
    component: ComponentCreator('/docs', '5b3'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '087'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '2dc'),
            routes: [
              {
                path: '/docs/category/tech-stacks',
                component: ComponentCreator('/docs/category/tech-stacks', 'ca4'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/Deploy',
                component: ComponentCreator('/docs/Deploy', 'b1c'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/design_system',
                component: ComponentCreator('/docs/design_system', 'bdd'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/folder_structure',
                component: ComponentCreator('/docs/folder_structure', '4ac'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/Introduction',
                component: ComponentCreator('/docs/Introduction', 'c6b'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/tech_stacks/Nextjs',
                component: ComponentCreator('/docs/tech_stacks/Nextjs', '206'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/tech_stacks/React',
                component: ComponentCreator('/docs/tech_stacks/React', '2bc'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/tech_stacks/react_hook_form',
                component: ComponentCreator('/docs/tech_stacks/react_hook_form', 'f02'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/tech_stacks/react_query',
                component: ComponentCreator('/docs/tech_stacks/react_query', '266'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/tech_stacks/Turborepo',
                component: ComponentCreator('/docs/tech_stacks/Turborepo', '84b'),
                exact: true,
                sidebar: "defaultSidebar"
              },
              {
                path: '/docs/tech_stacks/zustand',
                component: ComponentCreator('/docs/tech_stacks/zustand', 'eb5'),
                exact: true,
                sidebar: "defaultSidebar"
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
