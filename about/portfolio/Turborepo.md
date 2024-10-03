---
sidebar_position: 3
---

# Turborepo

![img](https://turbo.build/api/og?title=Crafting+your+repository+%7C+Turborepo&type=repo)

# Turborepo

<div>Next.js 개발사 Vercel <span style={{textDecoration:"line-through",fontWeight:"bold"}}>(카르텔)</span>에서 만든 모노레포 툴 입니다.</div>
**Yarn Workspace, Lerna, Nx**등 다양한 모노레포 툴이 있지만 Next.js와 조합이 좋아 최근에는 Turborepo를 사용하는 추세입니다.

<br/>

보통 다음과 같이 폴더구조로 생성됩니다.

```bash
│
├── apps
│     └── app_1
│     └── app_2
│
├── packages
│     └── ui
│     └── eslint-config
│     └── typescript-config
└──

```

## 강력한 Cache 기능

Turborepo의 또다른 장점은 강력한 Cache 기능입니다. 빌드 시 결과물을 캐시로 저장해놓고 새로운 빌드가 발생할 경우 이전 결과물과 변경사항이 있는지 비교합니다.
만약 변경내역이 없다면 빌드를 건너 뜁니다. 변경사항이 없는 패키지는 빌드를 패스하기때문에 개발생산성도 높아지고 CI/CD에도 이점을 가져다줍니다.

<br/>

<div style={{width:"600px"}}>![img](/img/cache.png)</div>
<br/>
캐시덕분에 4초만에 끝 !

<br/>
<br/>
