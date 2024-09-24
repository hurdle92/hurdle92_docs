---
sidebar_position: 3
---

# MVVM

<br/>

![react](https://legacy.reactjs.org/logo-og.png)

# React

React는 Facebook(현재 Meta)에서 만든 Javascript 사용자인터페이스(UI) 라이브러리입니다.
한 때 React, Vue.js, Angular 3대장인 시절이 있었지만 최근에는 React가 대세인 추세입니다.
2012년 Webpack, 2013년 React가 등장하며 프론트엔드 생태계가 빠르게 변화하였습니다.

<br/>

![img](/img/graph.png)

<br/>

React의 장점은 다음과 같습니다.

## **React의 장점**

- 컴포넌트 기반 UI로 개발 생산성이 높음.
- Virtual Dom을 사용해 개발자가 일일이 DOM 조작을 할 필요가 없음.
- 개발 커뮤니티, 리소스, 생태계 풀이 넓음.

```jsx title="src/app.js"
import React from "react";
import Layout from "@theme/Layout";

export default function App() {
  return (
    <Layout>
      <h1>My React App</h1>
      <p>This is a React page</p>
    </Layout>
  );
}
```

<br/>

아래 글에서 React에 대해 잘 설명해주고 있습니다.

[React란? 프론트엔드 개발에서 React가 대세인 이유](https://nbcamp.spartacodingclub.kr/blog/react%EB%9E%80-%ED%94%84%EB%A1%A0%ED%8A%B8%EC%97%94%EB%93%9C-%EA%B0%9C%EB%B0%9C%EC%97%90%EC%84%9C-react%EA%B0%80-%EB%8C%80%EC%84%B8%EC%9D%B8-%EC%9D%B4%EC%9C%A0-2294)
