---
sidebar_position: 6
---

# React Hook Form

<br/>

![img](https://raw.githubusercontent.com/react-hook-form/react-hook-form/master/docs/logo.png)

React 프론트엔드 개발을 하다보면 다양한 form을 다뤄야 하는 경우가 생깁니다. 가장 대표적으로 유저 로그인 시 아이디와 비밀번호 input을 관리하고 .
`useState`를 활용해 간단한 폼 데이터를 관리해보겠습니다.

```js title="useState를 사용한 카운터"
const LoginPage = () => {
  const [id, setId] = React.useState("");
  const [password, setPassword] = React.useState("");

  const onChangeId = (e) => {
    setId(e.target.value);
  };

  const onChangePassword = (e) => {
    setPasswrod(e.target.value);
  };

  return (
    <div>
      <input value={id} onChnage={onChangeId} />
      <input value={password} onChnage={onChangePassword} />
    </div>
  );
};
```

아이디와 패스워드 input이 2개일 때는 코드가 크게 어렵지 않습니다.
하지만 회원가입처럼 **이름, 나이, 이메일, 핸드폰 번호** 등 여러개의 input이 생기면 어떻게 될까요 ?

```js title="여러개의 input을 useState로 관리"
import React, { useState } from "react";

const SignUpPage = () => {
  const [occupation, setOccupation] = useState(Occupation.Professor);
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value);
  };
  const handleId = (event: React.ChangeEvent<HTMLInputElement>) => {
    setId(event.currentTarget.value);
  };
  const handlePwd = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPwd(event.currentTarget.value);
  };
  const handlePhone = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(event.currentTarget.value);
  };
  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
  };
  const handleOccupation = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOccupation(event.currentTarget.value as Occupation);
  };

  return (
    <form>
        <input
          type="radio"
          name="occupation"
          value="professor"
          defaultChecked
          onChange={handleOccupation}
        />
        <input
          type="radio"
          name="occupation"
          value="student"
          onChange={handleOccupation}
        />
        <input type="text" value={id} onChange={handleId} />
        <input type="text" value={pwd} onChange={handlePwd} />
        <input type="text" value={phone} onChange={handlePhone} />
      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
};

export default SignUpPage;
```

입력뿐만 아니라 유효성 검사, 에러 처리, 정규식표현 등 여러 로직이 추가될수록 폼 관리는 복잡해집니다.
이 단순한 폼을 처리하기 위해서 너무 많은 state 와 함수가 추가되고 있습니다.

이를 해결하기 위해 React에서는 쉽게 폼 관리를 도와주는 `React-Hook-Form` 라이브러리가 있습니다.

# React Hook Form

현재 React 진영에서 가장 많이 사용하는 폼 라이브러리는 `React-Hook-Form`입니다. 몇년전까지만 해도 `Formik`과 점유율 면에서 비등비등했지만
`React-Hook-Form`이 좀 더 경량해지고 빠른 업데이트를 통해 생태계를 장악하고 있습니다.

<div style={{width:"100%"}}>![img](/img/form_chart.png)</div>
<br/>

여러개의 `useState`로 관리하던 위 코드를 `React-Hook-Form`으로 변경해보겠습니다.

<br/>

```js title="여러개의 input을 react-hook-form으로 관리"
import React from "react";
import { useForm } from "react-hook-form";

const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "John Doe",
      id: "johndoe123",
      pwd: "",
      phone: "1234567890",
      email: "john.doe@example.com",
      occupation: "Engineer",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input id="name" {...register("name")} />
      <input id="id" {...register("id")} />
      <input id="pwd" {...register("pwd")} />
      <input id="phone" {...register("phone")} />
      <input id="email" {...register("email")} />
      <input id="occupation" {...register("occupation")} />
      <button type="submit">Sign Up</button>
    </form>
  );
};
```

`React-Hook-Form`의 가장 큰 장점은 개발자가 따로 이벤트 핸드러를 생성하지 않아도 된다는점 입니다.
개발자는 `defaultValues`에 기본적으로 관리할 입력폼의 기본 값들을 정의해준 뒤, `input`태그에 등록하기만 하면 됩니다.

### 유효성 검사

여러 폼을 관리하다 보면 다양한 유효성 검사를 하게 되는데, 이때 **아이디, 비밀번호, 이메일, 핸드폰 번호**등 각각의 유효성 조건이 다릅니다.
폼의 갯수가 많아지고 조건이 복잡해질수록 개발자가 일일이 유효성 검사를 하기에는 무리가 있습니다.

`React-Hook-Form`은 다양한 유효성 검사도 간편하게 할 수 있습니다.

```js title="여러개의 유효성 검사를 react-hook-form을 통해 처리"
<div>
  <input
    id="phone"
    {...register("phone", {
      required: "Phone number is required",
      pattern: {
        value: /^[0-9]+$/,
        message: "Phone number is invalid",
      },
    })}
  />
  <input
    id="email"
    {...register("email", {
      required: "Email is required",
      pattern: {
        value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
        message: "Email is invalid",
      },
    })}
  />
  <input
    id="occupation"
    {...register("occupation", { required: "Occupation is required" })}
  />
</div>
```

<br/>

### 유효성 검사 라이브러리와 간편한 조합

위와같이 직접 `pattern`을 input에 일일이 입력하지 않고도, [yup](https://github.com/jquense/yup), [zod](https://zod.dev/)와 같은 유효성 검사 라이브러리와 조합할 수 있습니다.

id와 password를 예를들어 schema를 작성해보겠습니다.

```js title="yup을 통해 유효성 schema 작성"
import * as Yup from "yup";

const schema = Yup.object({
  username: Yup.string()
    .email("email 형식을 입력해주세요")
    .required("이메일(아이디)를 입력해 주세요"),
  password: Yup.string()
    .matches(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@!%*#?&])[A-Za-z\d@!%*#?&]{8,}$/,
      "8글자 이상 염문자, 숫자, 특수문자를 조합해서 입력하세요"
    )
    .required("비밀번호를 입력해 주세요"),
});
```

<br/>

id와 password 모델에 regEx, 최소 글자, 최대 글자, 에러 메세지 등 다양한 옵션을 지정할 수 있습니다.
이렇게 작성한 schema를 `React-Hook-Form`의 resolver에 등록할 수 있습니다. schema를 따로 분리해서 관리하기 때문에 유지보수 측면에서 굉장히 편리합니다.

<br/>

```js title="React-Hook-Form과 Yup을 조합"
export default function Home() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm
  {
    resolver: yupResolver(schema),
  };

  const onSubmit = ({ username, password }) => {
    console.log(username, password);
  };

  return (
    <div className="mainContainer">
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("username")} placeholder="Email" />
        {errors.username && (
          <p style={{ color: "red" }}>{errors.username?.message}</p>
        )}
        <input
          {...register("password")}
          type="password"
          placeholder="Password"
        />
        <p style={{ color: "red" }}>{errors.password?.message}</p>
        <input type="submit" value={"Log in"} />
      </form>
    </div>
  );
}
```

<br/>

개인적으로 느낀 `React-Hook-Form`의 장점은 다음과 같습니다.

- 코드의 간결함
- 개발자는 관리할 input들의 타입, 유효성 검사 (regEx), 에러 메세지 등 선언만 하면됨
- 더이상 대량의 이벤트 핸들러를 작성할 필요가 없음
- [yup](https://github.com/jquense/yup), [zod](https://zod.dev/)와 같은 유효성 라이브러리와 호환성이 좋음. 간단한 유효성 검사
- 입력할 양이 많은 백오피스 개발 시 편리함

<br/>
