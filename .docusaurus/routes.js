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
    path: '/docs',
    component: ComponentCreator('/docs', '27e'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '5fa'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', '2e4'),
            routes: [
              {
                path: '/docs/category/tech-stacks',
                component: ComponentCreator('/docs/category/tech-stacks', '27d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Deploy',
                component: ComponentCreator('/docs/Deploy', '4a4'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/design_system',
                component: ComponentCreator('/docs/design_system', '9b2'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/folder_structure',
                component: ComponentCreator('/docs/folder_structure', '091'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/Introduction',
                component: ComponentCreator('/docs/Introduction', '7bf'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tech_stacks/Nextjs',
                component: ComponentCreator('/docs/tech_stacks/Nextjs', 'dbd'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tech_stacks/React',
                component: ComponentCreator('/docs/tech_stacks/React', '60f'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tech_stacks/react_hook_form',
                component: ComponentCreator('/docs/tech_stacks/react_hook_form', '725'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tech_stacks/react_query',
                component: ComponentCreator('/docs/tech_stacks/react_query', '8b8'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tech_stacks/Turborepo',
                component: ComponentCreator('/docs/tech_stacks/Turborepo', 'e43'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/docs/tech_stacks/zustand',
                component: ComponentCreator('/docs/tech_stacks/zustand', 'df8'),
                exact: true,
                sidebar: "tutorialSidebar"
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
