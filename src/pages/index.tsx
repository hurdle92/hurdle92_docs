
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";
import styles from "./index.module.css";
import { ReactTyped } from "react-typed";

const HomePageHeader = () => {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={"bg-blue-500 py-[10rem]"}>
      <main className={"flex flex-col items-center mx-auto"}>
        <ReactTyped
          strings={[
            "Sihyung.log&nbsp;",
            "테니스 치는 개발자&nbsp;",
          ]}
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
      description="Description will go into a meta tag in <head />"
    >
      <HomePageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
};

export default Home;
