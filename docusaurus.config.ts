import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import tailwindPlugin from "./plugins/tailwind-config.cjs";

const config: Config = {
  title: "Sihyung.log",

  favicon: "favicon.ico",
  onBrokenLinks: "ignore",
  // Set the production url of your site here
  url: "https://teveloper-docs.vercel.app/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      },
    ],
  ],
  themeConfig: {
    metadata: [
      { name: "description", content: "Sihyung의 블로그 입니다." },
      {
        name: "og:image",
        content:
          "https://brjcooqgruubkkihztqm.supabase.co/storage/v1/object/public/images/og_image.jpg",
      },
    ],
    image:
      "https://brjcooqgruubkkihztqm.supabase.co/storage/v1/object/public/images/og_image.jpg",
    navbar: {
      logo: {
        alt: "logo",
        src: "icons/pencil.png",
      },
      title: "Sihyung.log",
      items: [
        { to: "/about/introduction", label: "About", position: "left" },
        {
          to: "/sideproject/introduction",
          label: "SideProject",
          position: "left",
        },
        {
          href: "https://github.com/hurdle92",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Introduction",
              to: "/about/introduction",
            },
            {
              label: "SideProject",
              to: "/sideproject/introduction",
            },
          ],
        },
        {
          title: "Contact",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/hurdle92",
            },
            {
              label: "Blog",
              href: "https://teveloper.tistory.com",
            },
          ],
        },
        {
          title: "More",
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Hurdle92, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
  plugins: [
    tailwindPlugin,
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "about",
        path: "about",
        routeBasePath: "about",
        sidebarPath: "./sidebars.ts",
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "sideproject",
        path: "sideproject",
        routeBasePath: "sideproject",
        sidebarPath: "./sidebars.ts",
      },
    ],
  ],
};

export default config;
