---
sidebar_position: 3
---

# 여신티켓 앱 리부트 - (여신티켓)

<br/>

<img src="/img/about/portfolio/yeoshin/reboot.jpg"/>

<br/>
<br/>

# [여신티켓](https://www.yeoshin.co.kr/)

<br/>

## 개요

**리부트** 프로젝트는 기존의 여신티켓 내의 레거시 시스템들을 걷어내고, 최신 기술스택으로 마이그레이션 하는 전사 프로젝트였습니다.
이 프로젝트에서 프론트엔드 팀은 기존 `CRA` 기반의 웹뷰를 `Next.js`, `React-Query` 등 최신 기술스택으로 마이그레이션 했습니다.
또한, 외주로 진행하던 백오피스 시스템을 React 기반으로 재구축 하였습니다 **([병원 백오피스](/about/portfolio/admin_plus) / [사내 백오피스](/about/portfolio/admin_company))**

<br/>

- CRA 기반의 프로젝트 → Next.js로 마이그레이션
- 병원관, 결제, 예약, 후기, 프로모션 등 다양한 웹뷰 페이지 개발
- MobX 상태관리 → React-Query + Zustand 조합으로 전환
- WebView와 Native App 간의 통신을 위해 Native App 개발자분들과 소통하며 Bridge 설계
- 다양한 브라우저 환경에서 크로스 브라우징 이슈 처리

<br/>

## 주요 기술 스택

React, Next.js, React-Query, Zustand, Styled-Components

<br/>

## 개발하며 고민한 부분

<br/>

### Next.js 도입

Chat GPT 토큰을 활용해 API를 사용하는 프로젝트이다 보니, 한 번 호출할 때마다 API의 비용이 상당히 값비쌌습니다.
따라서 `MSW` (Mock Service Worker)를 활용해 개발환경과 프로덕션 환경을 분리해 개발 단계에서는 모킹 API를 활용해
프론트엔드 작업을 하였고, 프로덕션 단계에서 실제 API를 호출하여 테스트했습니다.

<br/>
또한, 유저들이 API 호출 시 페이지 이탈 방지와 로딩 Spinner등을 적절히 활용하였습니다.

<br/>
<br/>

### MobX 상태관리 -> React-Query + Zustand 조합으로 변경
