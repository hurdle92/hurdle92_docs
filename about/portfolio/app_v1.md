---
sidebar_position: 6
---

# 여신티켓 v1 앱 유지보수 - (여신티켓)

<br/>

<img src="https://www.jejutwn.com/data/photos/20221251/art_16716485648038_ec8574.jpg"/>

<br/>
<br/>

## 개요

`CRA` + `PHP` 기반의 웹뷰 프로젝트를 유지보수 및 신규 기능 추가 개발을 담당했습니다.

<br/>

- React + PHP의 혼합된 프로젝트 → React로 모두 통합 (CRA)
- 이벤트 상세, 결제, 프로모션 등 웹뷰 페이지 개발
- 여신 디자인 시스템 ([YDS](https://www.npmjs.com/package/yeoshin-design-system-beta-test)) 개발 및 Storybook 디자인 문서화
- 네이티브 앱과 브릿지 통신

<br/>

## 주요 기술 스택

React, TypeScript, MobX, Emotion, Storybook

<br/>

<!-- ## 개발하며 고민한 부분

<br/>

### MSW 모킹 API 도입

Chat GPT 토큰을 활용해 API를 사용하는 프로젝트이다 보니, 한 번 호출할 때마다 API의 비용이 상당히 값비쌌습니다.
따라서 `MSW` (Mock Service Worker)를 활용해 개발환경과 프로덕션 환경을 분리해 개발 단계에서는 모킹 API를 활용해
프론트엔드 작업을 하였고, 프로덕션 단계에서 실제 API를 호출하여 테스트했습니다.

<br/>
또한, 유저들이 API 호출 시 페이지 이탈 방지와 로딩 Spinner등을 적절히 활용하였습니다.

<br/>
<br/> -->
