---
sidebar_position: 2
---

# 생성형 AI 프로토타입 - (디쉐어)

<br/>

<img src="/img/about/portfolio/dshare/ai_prototype_1.png"/>

<br/>
<br/>

## 개요

AI 개발팀에서 생성형 AI를 토대로 프로덕트를 개발 중, 프론트엔드 개발자가 급하게 필요하여 빠르게 프로토타입 시제품을 만들었습니다.
현재는 정식 출시되었습니다.

<br/>

- 6~7페이지 정도로 많지 않은 분량
- 빠른 프로토타입 개발과 인수인계 후 용이한 유지보수를 위해 `tailwind` 스타일링 적용
- 토큰을 사용하는 값 비싼 API로 인해 개발 단계에서는 `MSW` 모킹 API로 테스트

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
<br/>
