---
sidebar_position: 4
---

# 병원용 백오피스 개발 - (여신티켓)

<br/>

<img src="/img/about/portfolio/yeoshin/yeoshin_plus.png"/>

<br/>
<br/>

## 개요

**리부트** 프로젝트 중 일부로, 입점 병원이 사용하는 백오피스를 개발하였습니다.

<br/>

- 6~7페이지 정도로 많지 않은 분량
- 빠른 프로토타입 개발과 인수인계 후 용이한 유지보수를 위해 `tailwind` 스타일링 적용
- 비싼 API 가격으로 인해 개발 단계에서는 `MSW` 모킹 API로 엄격하게 테스트

<br/>

## 주요 기술 스택

React, Next.js, React-Query, Tailwind, Zustand, MSW

<br/>

## 개발하며 고민한 부분

<br/>

### MSW 모킹 API 도입

Chat GPT 토큰을 활용해 API를 사용하는 프로젝트이다 보니, 한 번 호출할 때마다 API의 비용이 상당히 값비쌌습니다.
따라서 `MSW` (Mock Service Worker)를 활용해 개발환경과 프로덕션 환경을 분리해 개발 단계에서는 모킹 API를 활용해
프론트엔드 작업을 하였고, 프로덕션 단계에서 실제 API를 호출하여 테스트했습니다.

<br/>
또한, 유저들이 API 호출 시 페이지 이탈 방지와 로딩 Spinner등을 적절히 활용하였습니다.

<br/>
<br/>