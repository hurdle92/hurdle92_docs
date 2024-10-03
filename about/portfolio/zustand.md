---
sidebar_position: 5
---

# Zustand

:::warning

상태관리부터 시작하는 글 입니다. **Zustand**에 대한 설명은 하단으로 이동 !
:::

<br/>

![img](https://www.nextree.io/content/images/2023/06/zustand-1.jpg)

React-Query에서 설명했듯이, 프론트엔드에서 상태관리는 **클라이언트 상태관리와 서버 데이터 상태관리**로 나뉩니다.<br/>
그리고 클라이언트 상태관리는 다시 **지역 상태관리와 전역 상태관리**로 세분화 할 수 있습니다.

### 지역 상태관리

지역 상태관리는 개별 컴포넌트 또는 특정 컴포넌트 내에서만 사용되는 데이터 및 상태를 관리하는 방식입니다.

- 입력 폼의 값 (ex : 아이디, 비밀번호 input)
- 리스트 아이템의 각각의 데이터 (ex : 댓글 아이템의 댓글 내용, 좋아요 수, 작성 날짜 등)
- 특정 컴포넌트 내부에서만 변경되는 값 (ex : 로그인 아이디 기억하기 토글 true, false)

<br/>

### 전역 상태관리

![img](https://miro.medium.com/v2/resize:fit:1400/format:webp/0*C5J9NQj0XW5DXdX-)

지역 상태와는 다르게 전역 상태는 여러 컴포넌트에서 **전역**적으로 사용되는 상태입니다. 전역상태가 필요한 경우는 다음과 같습니다.

- 전역적으로 사용되는 유저 정보 (ex : 헤더, 사이드바, 푸터 등 다양한 컴포넌트에서 필요)
- 루트 혹은 최상단에서 사용되는 팝업, 모달 창, 토스트
- 화이트 모드, 다크 모드와 같은 테마 설정 (어디에서든지 접근 가능)

<br/>

### 전역 상태관리의 등장 배경

React에서 가장 기본적으로 상태를 관리하는 법은 `useState`를 사용하는 것 입니다. React는 기본적으로 `useState`를 사용해 값이 변경되면 화면을 다시 렌더링합니다 (리렌더링).

`useState`를 사용해 간단한 카운터를 만들면 다음과 같습니다.

```js title="useState를 사용한 카운터"
function ParentComponent() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <h1>You clicked {count} times</h1>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

<br/>

위와 같이 간단한 컴포넌트일 경우 `useState`로 충분히 값을 관리할 수 있습니다.<br/>
하지만 만약, 현재 컴포넌트가 아니라 몇 단계 내부에 있는 자식 컴포넌트에서 해당 값이 필요할 경우, 어떻게 처리해줘야 할까요 ?

## Props Drilling

다음과 같이 `Parent`로부터 `Child`거쳐 `Grandchild`까지 data를 **props**를 통해 전달해주면 됩니다.<br/>
이를 컴포넌트에 드릴을 뚫어 데이터를 전달하는것에 비유하여 **props drilling**이라고 부릅니다. props는 properties의 약자입니다.

<br/>

```js title="ParentComponent"
import React from "react";
import ChildComponent from "./ChildComponent";

function ParentComponent() {
  const [count, setCount] = React.useState(0);

  return (
    <div>
      <ChildComponent count={count} />
    </div>
  );
}

export default ParentComponent;
```

```js title="ChildComponent"
import React from "react";
import GrandchildComponent from "./GrandchildComponent";

function ChildComponent(props) {
  return (
    <div>
      <GrandchildComponent count={props.count} />
    </div>
  );
}

export default ChildComponent;
```

```js title="GrandchildComponent"
import React from "react";

function GrandchildComponent(props) {
  return <div>{props.count}</div>;
}

export default GrandchildComponent;
```

**props drilling**은 위와 같이 2~3개 단계의 레이어로 이루어져있을 때는 별 문제가 없습니다.
하지만 만약 depth가 더 깊어지거나 계층구조가 복잡해질수록 문제점이 발생하게 됩니다.

- 데이터의 추적이 힘듬
- 데이터를 사용하지 않는 컴포넌트에서도 불필요하게 값을 참조하게됨 (위 코드의 `ChildComponent`)
- 데이터 뿐만 아니라, 콜백 함수까지 여러 단계에 걸쳐 전달한다면 ? 유지보수 힘들어짐 (ex : `setCount`함수)

<br/>

![img](https://i.imgur.com/nWgg01Z.png)

<br/>

단순히 `useState`를 사용해서는 효율적으로 전역 상태관리가 힘들기에, React에서는 자체적으로 [`React Context`](https://ko.legacy.reactjs.org/docs/context.html)를 제공하여 기본적인 전역상태관리를 구현할 수 있습니다.
<br/>
하지만 대규모 웹개발에서 사용하기엔 부족함이 있어, 시중에 나와있는 상태관리 라이브러리들중에 채택해서 사용하는 편입니다.

## 전역 상태관리 라이브러리

전역 상태관리를 도와주는 라이브러리는 여러가지가 있는데, 대표적으로 다음과 같습니다.

- `React Context API` - React에서 자체 제공하는 API
- `Redux` - 가장 많이 사용되나 보일러 플레이트가 많아 잘 안쓰는 추세, JQuery 느낌임
- `Mobx` - Redux 이후로 가장 많이 사용됨, 옵저버 패턴 ? 으로 상태변화를 감지
- `Recoil` - Facebook에서 만들었으나 잘 안쓰는 추세 ? 안써봄 !
- `Zustand` - **제일 경량화, 사용 간편함, 최근 가장 많이 쓰임**

<br/>

## Zustand

![img](https://yozm.wishket.com/media/news/2233/image3.png)

```js title="GrandchildComponent"
import { create } from "zustand";

const useStore = create((set) => ({
  count: 1,
  inc: () => set((state) => ({ count: state.count + 1 })),
}));

function Counter() {
  const { count, inc } = useStore();
  return (
    <div>
      <span>{count}</span>
      <button onClick={inc}>one up</button>
    </div>
  );
}
```

Zustand의 장점은 다음과 같습니다.

- 보일러 플레이트 코드가 매우 적음.
- `useState` hook과 사용법이 비슷함, 낮은 러닝 커브.
- 초 경량화, **327kb**로 용량이 적어 번들 사이즈 최적화에 도움됨.
- `provider`로 감싸지 않고 필요한 곳에서만 호출하여 사용.

<br/>
