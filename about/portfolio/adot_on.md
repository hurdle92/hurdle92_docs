---
sidebar_position: 1
---

# 에이닷 ON - (디쉐어)

<br/>

<img src="/img/about/portfolio/dshare/adot_on.png"/>

<br/>
<br/>

# [에이닷 ON](https://www.adotonenglish.com/student/index)

## 개요

기존의 PHP + Vanila JS 프로젝트를 최신 기술스택으로 마이그레이션 작업을 진행했습니다.
주요 작업 내용은 다음과 같습니다.

<br/>

- PHP + Vanila JS -> Next.js + React로 마이그레이션
- Turborepo 모노레포 도입, 공통적으로 사용하는 UI 및 환경 설정 분리
- 에이닷 디자인 시스템 (ADS) 컴포넌트 개발
- Storybook 도입하여 컴포넌트 주도 개발 및 디자인 문서화 진행 ([링크](https://663d8d92b204ab34b4db46f1-kutrgtvvzf.chromatic.com/?path=/docs/introduction--docs))
- 모바일, 태블릿, 데스크탑의 반응형 디자인 구현

<br/>

## 주요 기술 스택

React, Next.js, React-Query, Turborepo, Zustand, Styled-Components, Storybook

<br/>

## 개발하며 고민한 부분

<br/>

### Turborepo 모노레포 도입

현재 디쉐어에는 여러 서비스를 제공하고 있습니다. 제가 주로 개발하고 있는 에이닷 ON을 비롯하여
**에이닷 영어학원, 에이닷 수학학원, 리딧, 단끝** 등 여러 브랜드의 웹 서비스를 개발하고 있습니다.

<br/>

추후 서비스의 확장성을 고려하여 미리 모노레포를 도입해놓으면 좋겠다 판단하였고, `Turborepo`를 선택하여 모노레포 구조를 구축하였습니다.
현재는 `adot-ui` 디자인 시스템 또한 함께 관리하고 있습니다.

<br/>

### 에이닷 디자인 시스템
