---
sidebar_position: 2
---

# Next.js

<br/>

![nextjs](https://timeweb.com/ru/community/article/a8/a8408f02c3421b84cf82182648fced17.jpg)

# Next.js

Next.js는 React를 기반으로하는 웹 개발 **프레임워크**입니다.
React 개발 시 필요한 서버 사이드 렌더링(SSR), 정적 사이트 생성 (SSG), 라우팅 등 많은 기능을 제공하고 있습니다.

- **SSR(Server Side Rendring), SSG(Static Site Generation) 제공**
- **SEO 최적화**
- **파일 기반의 라우팅**
- **Full Stack 개발 가능**
- **이미지, 폰트 및 최적화 제공**

<br/>

Next.js는 **page router**와 **app router (v13부터)** 두가지 방식의 라우팅을 제공합니다.
에이닷ON은 안정적인 page router를 사용하고 있습니다.

<br/>

### Page Router

![page router](https://res.cloudinary.com/practicaldev/image/fetch/s--DIT1rRjH--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://raw.githubusercontent.com/akuks/Misc/main/Images/nextjs_routing.png)

pages안에 있는 각각의 폴더가 라우팅 역할을 합니다. 예를들어 `/pages/aside` 폴더를 생성하면 `localhost:3000/aside`를 통해 접근할 수 있습니다.
직관적이며 대규모 어플리케이션을 개발할 때 편리합니다. 개발자들은 폴더 단위로 분업할 수 있어 협업할 때에도 좋습니다. 여러 기업들이 Next.js를 많이 채택한 이유이기도 합니다.

```js title="Page Router 예시"
/pages
  /index.tsx   <- adotonenglish.com
  /a
    /index.tsx <- adotonenglish.com/a
  /b
    /index.tsx <- adotonenglish.com/b
  /c.tsx       <- adotonenglish.com/c
```

<br/>

라우팅을 동적으로 설정할수도 있습니다. `/pages/events/[id]`와 같이 폴더를 설정하면 `events/123` 이런식으로 해당 페이지에 접근할 수 있습니다. **제품 상세, 프로모션 상세, 공지사항** 등 상세페이지가 필요할 때 많이 사용합니다.

```js title="/pages/events/[id]"
const Index = () => {
  const router = useRouter();
  const { id } = router.query;

  return <div>이벤트 {id} 입니다</div>;
};

export default Index;
```

<br/>

### App Router (v13부터 가능)

![app router](https://blog.kakaocdn.net/dn/cVZYXz/btsar6Yek67/4phD9JEtlVUxQ44Xdlhyg0/img.webp)

<br/>

v13부터 사용가능한 App Router입니다. 기존의 Page Router에서는 모든 파일이 route가 될 수 있었지만, 새롭게 등장한 App Router에서는 `page.ts`라는 예약된 파일만 router가 생성됩니다.
또한 `layout, loading, error`등 여러 예약어 파일들이 새로 생성되었습니다.

<br/>

<div style={{width:"600px"}}>
![alt text](https://miro.medium.com/v2/resize:fit:1400/format:webp/1*7xBPaFtEL3wFYHLASVZO1w.png)
</div>

<div >새로운 패러다임이 익숙치 않아 <span style={{textDecoration:"line-through"}}>(맘에 들지 않아)</span> 에이닷ON에 아직 도입하지는 않았습니다.</div>

## Server Side Rendering

Next.js가 각광받는 이유중 하나인 Server Side Rendering입니다.
기존의 React는 자바스크립트 라이브러리로 Client Side Rendering(CSR)만 지원하기에 Server Side Rendring을 위해 Express를 혼합하여 사용하는 등, 구현이 어려웠습니다.

프론트엔드는 특히나 SEO가 중요하기 때문에 React + Next.js는 공식이 되었습니다. 기존의 React는 빈껍데기의 HTML을 리턴받은 후 JS가 실행되기때문에, 검색 Bot이 읽지 못하여 구글링등에 노출되기 힘들었습니다.
(요즘 구글Bot은 JS도 읽을수있다고함 ?!)

```js title="Server Side Rendering in Next.js (page router)"
export const getServerSideProps = async () => {
  const res = await fetch("https://api.github.com/repos/vercel/next.js");
  const repo: Repo = await res.json();
  return { props: { repo } };
};

export default function Page({ repo }) {
  return (
    <main>
      <NextSeo title={repo.title} description={repo.discription} />
      <p>{repo.stargazers_count}</p>
    </main>
  );
}
```

<br/>

새롭게 등장한 App Router에서는 서버 컴포넌트를 지원하기 때문에 위의 Page Router보다 좀 더 간편하게 코드를 작성할 수 있습니다.
(기존에는 Page Router는 꼭 getServerSideProps를 사용해야했음)

<br/>

```js title="Server Side Rendering in Next.js (app router)"
const Page = async () => {
  const payments = await getPayments();

  return (
    <div className="py-10 pl-10 pr-10 flex flex-col gap-4 w-full">
      <h1 className="text-2xl font-bold">서버 컴포넌트</h1>
      <Button />
      <Table payments={payments} />
    </div>
  );
};

export default Page;
```

<br/>

## Static Site Generation

블로그와 같이 내용이 쉽게 변하지 않는 페이지는 Next.js가 제공하는 Static Site Generation(SSG)를 사용할 수 있습니다.
SSG는 빌드 타임에 모든 페이지를 미리 생성하여 제공하기 때문에 다음과 같은 장점이 있습니다.

- 페이지 로딩이 빠르다.
- SEO에 유리함.
- 매번 서버에 요청하지 않기 때문에 서버에 부담이 적게감.

주로 **블로그, 회사소개**와 같이 정적인 컨텐츠 페이지에 사용됩니다.

<br/>
<br/>
