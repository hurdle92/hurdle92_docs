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
이 프로젝트에서 프론트엔드 팀은 기존 `CRA` 기반의 웹뷰를 `Next.js`, `React-Query`, `Zustand` 등 최신 기술스택으로 마이그레이션 했습니다.
또한, 외주로 진행하던 백오피스 시스템을 인하우스 React로 재구축 하였습니다.<br/> **([병원 백오피스](/about/portfolio/admin_plus) / [사내 백오피스](/about/portfolio/admin_company))**

<br/>
<br/>

- CRA 기반의 프로젝트 → Next.js로 마이그레이션
- 병원관, 결제, 예약, 후기, 프로모션 등 다양한 웹뷰 페이지 개발
- MobX 상태관리 → React-Query + Zustand 조합으로 전환
- WebView와 Native App 간의 통신을 위해 앱 개발자분들과 소통하며 Bridge 통신 구현
- 다양한 브라우저 환경에서 크로스 브라우징 이슈 처리

<br/>

## 주요 기술 스택

React, Next.js, React-Query, Zustand, Styled-Components

<br/>

## 개발하며 고민한 부분

<br/>

### Next.js 도입

SEO 필요성

<br/>

### MobX 상태관리 -> React-Query + Zustand 조합으로 변경

기존의 프로젝트는 <strong>MobX</strong>를 활용해 서버 데이터의 상태와 전역 상태를 함께 관리했습니다.
하지만 프로젝트가 점차 커지고 관리해야할 웹뷰들이 늘어나 기존의 상태관리로는 한계를 느꼈습니다.
저희 팀에서 느낀 불편함은 다음과 같습니다.

<br/>

- 물리적인 코드의 양이 방대함.
- Model, View, Store 선언만 해도 보일러 플레이트 코드의 양이 많다.
- 클라이언트 상태와 서버 상태를 동시에 MobX를 통해 관리하는게 맞는가 의문점.

<br/>

이에 따라 서버 데이터의 상태를 `React-Query`로 먼저 마이그레이션 했습니다.
React-Query로 비동기 상태를 관리함에 따라 기존의 MobX의 사용량이 줄게 되었고,
최소한의 전역상태를 관리하기 위해 경량화된 `Zustand`를 도입하였습니다.

<br/>
