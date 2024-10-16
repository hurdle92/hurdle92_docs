---
sidebar_position: 5
---

# 사내 백오피스 개발 - (여신티켓)

<br/>

## 개요

**리부트** 프로젝트 중 일부로, 사내에서 사용하는 통합 백오피스를 개발하였습니다.

<br/>

- 기존의 레거시 백오피스를 React 기반으로 인하우스 재구축
- 약 30~40개 정도의 페이지 유지보수 및 신규 페이지 추가
- `Formik` + `Yup`의 조합으로 정보 등록 시 수십 개의 Form 용이하게 관리

<br/>

## 주요 기술 스택

React, Next.js, React-Query, Zustand, Formik, Yup, Tailwind

<br/>

## 개발하며 고민한 부분

<br/>

### MSW 모킹 API 도입

Chat GPT 토큰을 활용해 API를 사용하는 프로젝트이다 보니, 한 번 호출할 때마다 API의 비용이 상당히 값비쌌습니다.
따라서 `MSW` (Mock Service Worker)를 활용해 개발환경과 프로덕션 환경을 분리해 개발 단계에서는 모킹 API를 활용해
프론트엔드 작업을 하였고, 프로덕션 단계에서 실제 API를 호출하여 테스트했습니다.

<br/>
