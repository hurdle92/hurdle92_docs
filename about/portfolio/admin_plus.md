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

- 입점 병원용 백오피스 **(여신플러스)** 개발
- **예약 관리, 후기 관리, 정산, 광고 관리, 매출** 등 다양한 페이지 개발 및 유지보수
- 광고 CPM 관련 결제 기능 추가

<br/>
<!-- 
## 미리보기

<details>
  <summary><strong style={{color : "blue"}}>여신플러스</strong></summary>

**(공식 가이드북)**

<br/>
<img src="/img/about/portfolio/yeoshin/plus_1.webp"/>
<br/>
<br/>
<img src="/img/about/portfolio/yeoshin/plus_2.webp"/>
<br/>
<br/>
<img src="/img/about/portfolio/yeoshin/plus_3.webp"/>

</details>

<br/>

## 주요 기술 스택

React, Next.js, React-Query, Zustand, Formik, Yup, Tailwind

<br/>
<br/> -->

## 개발하며 고민한 부분

<br/>

### Formik + Yup의 조합으로 대량의 폼(Form)들을 용이하게 관리

<br/>

병원 어드민의 경우 **병원 정보 등록, 의료진 등록, 시술 이벤트 등록** 등 다양한 케이스에서 여러 정보들을 입력할 경우가 많았습니다.
적게는 5~6개부터 많게는 수십개까지 정보를 입력해야 하는 상황에서, 적절한 유효성 검사와 개발자의 개발 생산성, 유지 보수등을 위해
`Formik`과 `Yup`의 조합을 선택했습니다.

<br/>
이를 통해 얻은 이점은 다음과 같습니다.

<br/>

- 선언적으로 Schema, Validation을 정의하여 필드 및 타입 변경 시 유지보수에 용이
- 이전보다 간결해진 코드

<br/>
<br/>
