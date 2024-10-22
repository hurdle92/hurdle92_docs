import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import styles from "./index.module.css";
import { ReactTyped } from "react-typed";
import Head from "@docusaurus/Head";
import { Analytics } from "@vercel/analytics/react";

const HomePageHeader = () => {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={"bg-blue-500 py-[10rem]"}>
      <main className={"flex flex-col items-center mx-auto"}>
        <ReactTyped
          strings={["Sihyung.log&nbsp;", "테니스 치는 개발자&nbsp;"]}
          typeSpeed={70}
          backSpeed={80}
          backDelay={2000}
          style={{ color: "white", fontSize: "3rem", fontWeight: "bold" }}
          loop
        />
        <br />
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/about/introduction"
          >
            🖥️ &nbsp; sihyung install &nbsp;&&nbsp; sihyung dev
          </Link>
        </div>
      </main>
    </header>
  );
};

const Home = (): JSX.Element => {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description={"Sihyung의 블로그 입니다."}
    >
      <Analytics />
      <Head>
        <meta
          property="og:image"
          content="https://media.licdn.com/dms/image/v2/D562DAQF5078qwfL3rQ/profile-treasury-image-shrink_800_800/profile-treasury-image-shrink_800_800/0/1729231751584?e=1730206800&v=beta&t=8KC6NEom93hXHEEy6fizgKa-27bdTGShoBCEwIvZCIQ"
        />
      </Head>
      <HomePageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
};

export default Home;
