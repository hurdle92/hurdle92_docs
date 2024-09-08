---
sidebar_position: 2
---

# Folder Structure

:::info

**ADOT ON React project**의 전체적인 폴더 구조입니다.

:::

<br/>

```bash
│
├── apps
│     └── other_app
│     └── adot_on_renewal
│           └── src
│                 └── components
│                   └── layout
│                       └── Header
│                       └── Footer
│                   └── ...
│                 └── page-modules
│                   └── consult
│                       └── components
│                           └── LoginComponents
│                       └── types
│                       └── constants
│                       └── api
│                   └── aside
│                   └── signin
│                   └── ...
│                 └── pages
│                   └── consult
│                   └── aside
│                   └── signin
│                   └── ...
│                 └── stores
│                   └── modal
│                   └── toast
│                   └── auth
│                   └── ...
│                 └── utils
│                 └── styles
│
│
├── packages
│     └── adot-ui
│           └── src
│                 └── components
│                   └── Button
│                   └── Flex
│                   └── Icon
│                   └── Image
│                   └── Modal
│                   └── RadioGroup
│                   └── Spacer
│                   └── Stack
│                   └── Text
│                   └── TextField
│                   └── ...
│
│     └── adot-icons
│     └── eslint-settings (eslint related settings)
│     └── tsconfig-settings (tsconfig related settings)
│
├── turbo.json
├── env
├── README.md
└── ...

```

## Monorepo

에이닷 ON 프로젝트는 모노레포 구조입니다. 모노레포는 단일 리포지터리에 여러 개의 프로젝트가 존재하는 방식입니다.

에이닷 ON은 현재 단일 프로젝트이지만, 추후 신규 프로젝트 및 확장성을 고려해 모노레포로 구성하였습니다.

- **싱글레포** : 하나의 리포지터리에서 단일 프로젝트를 관리하는 방식
- **멀티레포** : 싱글레포가 여러개인 형태
- **모노레포** : 하나의 리포지터리에서 여러개의 프로젝트를 관리

<br/>

모노레포의 장점과 단점은 다음과 같습니다.

- **장점** : 여러 프로젝트의 설정 및 환경구성이 비슷하다면 공용으로 관리하기에 용이함.<br/>
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;프론트엔드의 경우 UI를 공용해서 사용할 수 있음 **(ex 디자인 시스템)**
- **단점** : 초기 설정이 복잡. 어느정도 러닝커브. 단일 팀 소유 원칙 위배 ? ⬅️ 사실 잘 모르겠음

![img](https://beomy.github.io/static/dd214e6c1aab7e34210b9f0644856a40/f635c/monorepo.png)

## apps

:::info

React 프로젝트들을 관리하는 폴더입니다.

:::

### adot_on_renewal

- `components` : 레이아웃 및 공용으로 사용되는 컴포넌트들을 모아둡니다.
- `constants` : 링크 주소, 메타 데이터 등 상수로 사용하는 값들을 관리합니다.
- `hoc` : HOC (Higher Order Component)를 관리하는 폴더입니다.
- `hooks` : 커스텀 훅들을 관리하는 폴더입니다.
- `pages` : Next.js의 pages 라우터 폴더입니다. 각각의 폴더가 라우팅 역할을 합니다.
- `page-modules` : 각 페이지에 사용되는 모듈, 컴포넌트 등을 관리합니다. `pages` 폴더와 1:1로 맞춥니다.
- `stores` : zustand 전역 스토어 폴더입니다. 전역으로 상태관리가 필요할경우 사용합니다.
- `utils` : 유틸리티 폴더입니다.
- `styles` : global css, animation 등 공용으로 사용되는 스타일 폴더입니다.
- `types` : interface, type을 관리하는 폴더입니다.

<br/>

## packages

:::info

모노레포 내에서 공용으로 사용하는 패키지 및 환경설정 입니다.

:::

- `adot-ui` : 에이닷ON에서 사용되는 공용 UI입니다.
- `eslint-config-custom` : 공용 eslint 셋팅
- `tsconfig-settings` : 공용 tsconfig 셋팅

<br/>
<br/>
