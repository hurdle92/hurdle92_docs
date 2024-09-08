---
sidebar_position: 4
---

# ADOT Design System

:::info

**ADOT**에서 사용하는 디자인 시스템 입니다.

:::

<br/>

`adot-ui`는 에이닷 디자인 시스템을 React에서 활용하기 위한 UI 패키지 입니다. 주요 컴포넌트들은 다음과 같습니다.

<br/>

| 컴포넌트          | 설명                     | 비고                              |
| ----------------- | ------------------------ | --------------------------------- |
| **Button**        | 버튼 컴포넌트            |                                   |
| **CheckBoxGroup** | 체크 박스 그룹 컴포넌트  |                                   |
| **Divider**       | 상하좌우 구분선 컴포넌트 |                                   |
| **DropDown**      | 드랍다운 컴포넌트        |                                   |
| **Flex**          | Flexbox 컴포넌트         |                                   |
| **Image**         | 이미지 컴포넌트          |                                   |
| **Modal**         | 모달 컴포넌트            |                                   |
| **Responsive**    | 반응형 컴포넌트          | **모바일, 태블릿, 데스크탑** 구분 |
| **Spacer**        | 공간 여백 컴포넌트       |                                   |
| **Stack**         | 가장 기본적인 컨테이너   |                                   |
| **Text**          | 텍스트 컴포넌트          |                                   |
| **TextField**     | text input 컴포넌트      |                                   |
| **Toast**         | 토스트 컴포넌트          |                                   |
| **Toggle**        | 토글 컴포넌트            | **노출, 비노출** 구분             |

## 사용 예시

`adot-ui` 컴포넌트를 사용한 예시는 다음과 같습니다.

```javascript title="adot-ui 적용"
import { Button, Flex, Image, Spacer, Stack, Text } from "adot-ui";

export const ConsultPapge = () => {
  return (
    <Stack>
      <Spacer height={"16px"} />
      <Text fontWeight={"bold"}>휴대폰 번호</Text>
      <Spacer height={"16px"} />
      <Flex alignment={"center"} onClick={checkAgree}>
        <Image src={"icons/check_box_on.svg"} width={"20px"} />
        <Spacer width={"4px"} />
        <Text fontSize={"14px"}>(필수) 개인정보 수집 및 이용 동의</Text>
      </Flex>
      <Spacer height={"32px"} />
      <Button disabled={!isValid} onClick={openCheckPopup}>
        신청 완료
      </Button>
    </Stack>
  );
};
```
