---
sidebar_position: 4
---

# React-Query

![img](https://miro.medium.com/v2/resize:fit:1400/1*PX4FJQvB0mPPdH-khbH33A.png)

현대 프론트엔드 개발은 많은 **상태**를 효율적으로 다뤄야합니다. 여기에서 상태란 로그인 아이디, 비밀번호 인풋부터 시작해 유저정보, 결제정보 등 다양한 값을 포함합니다.
만약 유저가 쇼핑몰에서 결제를 통해 상품을 구매했는데, 정상적인 리스트 API를 보여주지 않는다면 유저의 이탈 등 좋은 유저경험을 제공할 수 없습니다.

프론트엔드의 상태관리는 크게 **클라이언트 상태 관리**와 **서버 상태 관리**로 나눌 수 있습니다.

- **클라이언트 상태** : 로그인 input 및 다양한 폼 관리, 브라우저 쿠키 & 로컬스토리지 등 스토리지 관리, valid 유효성, 전역에서 유저정보 관리
- **서버 상태** : 서버로부터 내려오는 API 처리, CRUD 처리 및 동기화 등 비동기 작업

기존의 React에서는 **클라이언트 상태와 서버 상태**를 혼용해서 처리했습니다. 리스트 API를 불러오고 로딩을 처리하는 과정을 예시 코드로 살펴보면 다음과 같습니다.

```js title="클라이언 상태와 서버 상태 혼용"
import React from "react";

// 데이터를 가져오는 함수
const fetchTodos = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  return response.json();
};

export const TodoList = () => {
  const [todos, setTodos] = React.useState([]); // 리스트 상태
  const [isLoading, setIsLoading] = React.useState(true); // 로딩 상태

  React.useEffect(() => {
    const getTodos = async () => {
      setIsLoading(true); // 데이터를 가져오기 시작하면 로딩 상태를 true로 설정
      const data = await fetchTodos(); // 데이터를 가져옴
      setTodos(data); // 데이터를 상태에 저장
      setIsLoading(false); // 로딩 완료 후 로딩 상태를 false로 설정
    };

    getTodos(); // 컴포넌트가 처음 마운트될 때 데이터 가져오기
  }, []);

  if (isLoading) {
    return <p>Loading...</p>; // 로딩 중일 때 표시
  }

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
};
```

비동기 API 데이터를 **todos, isLoading** 클라이언트 상태로 관리하게 되면서, 개발자가 수동으로 loading 상태를 변경하고 todos 리스트에 담는 예시 코드 입니다.
위 코드의 경우 리스트 API 하나를 처리할 뿐 이지만, 처리하는 과정이 많아지고 로직이 복잡해지면 사이드 이펙트와 유지보수 등 이슈가 발생할 가능성이 커집니다.

## React-Query

위와 같은 API 요청과 비동기 데이터 관리를 React에서 용이하게 처리하기 위해 **React-Query**가 등장했습니다. 공식 홈페이지에서 React-Query를
**Powerful asynchronous state management**라고 소개하고 있습니다.

React-Query는 개발자가 따로 조작없이 비동기 데이터(서버의 상태)에 집중하도록 도와줍니다. 위 예시 코드를 React-Query로 변경하면 다음과 같습니다.

```js title="React-Query를 도입한 코드"
import React from "react";
import { useQuery } from "react-query";

const fetchTodos = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  return response.json();
};

export const TodoList = () => {
  // useQuery를 사용하여 데이터를 가져옵니다.
  const { data: todos, isLoading } = useQuery("todos", fetchTodos);

  if (isLoading) {
    return <p>Loading...</p>; // 로딩 중일 때 표시
  }

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
};
```

### React-Query 장점

- 간결하고 직관적인 코드
- isLoading, isError 등 서버의 상태값을 자체 제공, 개발자가 따로 처리할 필요가 없음
- 강력한 캐싱 기능. `key`값만 기억하면 다른 컴포넌트에서 데이터 사용 가능
- 무한스크롤 혹은 페이지네이션에 필요한 `useInfiniteQuery` 등 자체적으로 제공하는 메소드가 다양함

이 외에도 React-Query의 장점은 여럿 존재하여, 현재 React 개발에서 필수적인 라이브러리로 자리 잡았습니다.

<br/>
:::tip

v3까지는 React-Query로 불렸으나, v4부터 React뿐 아니라 Vue, Svelt등 다양한 플랫폼에서 지원하게 되며 TanStack Query로 이름이 변경되었습니다.

:::
