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
    path: '/markdown-page',
    component: ComponentCreator('/markdown-page', '3d7'),
    exact: true
  },
  {
    path: '/about',
    component: ComponentCreator('/about', '9e5'),
    routes: [
      {
        path: '/about',
        component: ComponentCreator('/about', 'fc8'),
        routes: [
          {
            path: '/about',
            component: ComponentCreator('/about', '401'),
            routes: [
              {
                path: '/about/category/포트폴리오',
                component: ComponentCreator('/about/category/포트폴리오', 'cc0'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/about/category/포트폴리오-1',
                component: ComponentCreator('/about/category/포트폴리오-1', '16e'),
                exact: true,
                sidebar: "sideprojectSidebar"
              },
              {
                path: '/about/Deploy',
                component: ComponentCreator('/about/Deploy', 'b4f'),
                exact: true,
                sidebar: "sideprojectSidebar"
              },
              {
                path: '/about/design_system',
                component: ComponentCreator('/about/design_system', 'ddc'),
                exact: true,
                sidebar: "sideprojectSidebar"
              },
              {
                path: '/about/folder_structure',
                component: ComponentCreator('/about/folder_structure', 'fc9'),
                exact: true,
                sidebar: "sideprojectSidebar"
              },
              {
                path: '/about/Introduction',
                component: ComponentCreator('/about/Introduction', '7bc'),
                exact: true,
                sidebar: "sideprojectSidebar"
              },
              {
                path: '/about/tech_stacks/Nextjs',
                component: ComponentCreator('/about/tech_stacks/Nextjs', 'd42'),
                exact: true,
                sidebar: "sideprojectSidebar"
              },
              {
                path: '/about/tech_stacks/React',
                component: ComponentCreator('/about/tech_stacks/React', '5fd'),
                exact: true,
                sidebar: "sideprojectSidebar"
              },
              {
                path: '/about/tech_stacks/react_hook_form',
                component: ComponentCreator('/about/tech_stacks/react_hook_form', 'a67'),
                exact: true,
                sidebar: "sideprojectSidebar"
              },
              {
                path: '/about/tech_stacks/react_query',
                component: ComponentCreator('/about/tech_stacks/react_query', 'fe8'),
                exact: true,
                sidebar: "sideprojectSidebar"
              },
              {
                path: '/about/tech_stacks/Turborepo',
                component: ComponentCreator('/about/tech_stacks/Turborepo', '8c0'),
                exact: true,
                sidebar: "sideprojectSidebar"
              },
              {
                path: '/about/tech_stacks/zustand',
                component: ComponentCreator('/about/tech_stacks/zustand', '830'),
                exact: true,
                sidebar: "sideprojectSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/docs',
    component: ComponentCreator('/docs', 'e8e'),
    routes: [
      {
        path: '/docs',
        component: ComponentCreator('/docs', '1ed'),
        routes: [
          {
            path: '/docs',
            component: ComponentCreator('/docs', 'f6b'),
            routes: [
              {
                path: '/docs/Deploy',
                component: ComponentCreator('/docs/Deploy', 'b1c'),
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
    path: '/sideproject',
    component: ComponentCreator('/sideproject', '187'),
    routes: [
      {
        path: '/sideproject',
        component: ComponentCreator('/sideproject', '6a4'),
        routes: [
          {
            path: '/sideproject',
            component: ComponentCreator('/sideproject', '76a'),
            routes: [
              {
                path: '/sideproject/category/개발하며-고민한-부분',
                component: ComponentCreator('/sideproject/category/개발하며-고민한-부분', '609'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/sideproject/category/개발하며-고민한-부분-1',
                component: ComponentCreator('/sideproject/category/개발하며-고민한-부분-1', '3c8'),
                exact: true,
                sidebar: "sideprojectSidebar"
              },
              {
                path: '/sideproject/category/업데이트-내역',
                component: ComponentCreator('/sideproject/category/업데이트-내역', 'de7'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/sideproject/category/업데이트-내역-1',
                component: ComponentCreator('/sideproject/category/업데이트-내역-1', 'ed6'),
                exact: true,
                sidebar: "sideprojectSidebar"
              },
              {
                path: '/sideproject/features',
                component: ComponentCreator('/sideproject/features', '172'),
                exact: true,
                sidebar: "sideprojectSidebar"
              },
              {
                path: '/sideproject/feedback',
                component: ComponentCreator('/sideproject/feedback', 'f9e'),
                exact: true,
                sidebar: "sideprojectSidebar"
              },
              {
                path: '/sideproject/insights/React',
                component: ComponentCreator('/sideproject/insights/React', '282'),
                exact: true,
                sidebar: "sideprojectSidebar"
              },
              {
                path: '/sideproject/introduction',
                component: ComponentCreator('/sideproject/introduction', '340'),
                exact: true,
                sidebar: "sideprojectSidebar"
              },
              {
                path: '/sideproject/updates_list/Nextjs',
                component: ComponentCreator('/sideproject/updates_list/Nextjs', 'de4'),
                exact: true,
                sidebar: "sideprojectSidebar"
              },
              {
                path: '/sideproject/updates_list/React',
                component: ComponentCreator('/sideproject/updates_list/React', '55d'),
                exact: true,
                sidebar: "sideprojectSidebar"
              },
              {
                path: '/sideproject/updates_list/react_hook_form',
                component: ComponentCreator('/sideproject/updates_list/react_hook_form', '8c9'),
                exact: true,
                sidebar: "sideprojectSidebar"
              },
              {
                path: '/sideproject/updates_list/react_query',
                component: ComponentCreator('/sideproject/updates_list/react_query', 'c54'),
                exact: true,
                sidebar: "sideprojectSidebar"
              },
              {
                path: '/sideproject/updates_list/Turborepo',
                component: ComponentCreator('/sideproject/updates_list/Turborepo', '95f'),
                exact: true,
                sidebar: "sideprojectSidebar"
              },
              {
                path: '/sideproject/updates_list/zustand',
                component: ComponentCreator('/sideproject/updates_list/zustand', '78e'),
                exact: true,
                sidebar: "sideprojectSidebar"
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
