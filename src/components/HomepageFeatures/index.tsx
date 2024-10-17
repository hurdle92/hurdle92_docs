import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  imgSrc: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "개발을 즐기는 개발자",
    imgSrc: "/img/home/illustration_1.svg",

    description: (
      <>덕업일치를 실행중이며, 취미를 업으로 삼고 있는 개발자 입니다.</>
    ),
  },
  {
    title: "커뮤니케이션",
    imgSrc: "/img/home/illustration_2.svg",
    description: (
      <>
        프론트엔드 특성상 여러 직군들과 커뮤니케이션 및 협업할 경우가 많습니다.
        타인에게 먼저 다가가며 원활한 의사소통을 하기 위해 노력합니다.
      </>
    ),
  },
  {
    title: "문서화",
    imgSrc: "/img/home/illustration_3.svg",
    description: (
      <>
        개발만큼이나 중요한게 문서화라고 생각합니다. 히스토리를 기록하고,
        공유하려 노력합니다.
      </>
    ),
  },
];

function Feature({ title, imgSrc, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img src={imgSrc} width={"200px"} height={"200px"} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
