---
sidebar_position: 3
---

# 앱 업데이트

<br/>

![react](https://plus.unsplash.com/premium_photo-1721955487786-76802cbf0812?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)

<br/>

# 앱 업데이트

프론트엔드 웹 개발을 주로 했던 저에게, 앱을 개발하며 가장 크게 느낀 차이점은 업데이트 부분이었습니다.
새로고침 한번이면 업데이트 되는 웹과 달리, 앱은 유저가 직접 스토어를 방문해 업데이트 해야 했습니다.
아무리 신기능을 추가하고 업데이트가 빈번해도 앱이 업데이트 되지 않으면 새로 추가된 코드는 쓸모가 없습니다.

<br/>

따라서 Supabase에 업데이트 관련 테이블을 생성하고, 앱 업데이트가 필요시 스플래시 화면에서 `AlertDialog`를 노출시켰습니다.
주로 고려한 부분은 다음과 같습니다.

<br/>

- 토스, 배민처럼 대기업 앱이 아닌 이상 강제 업데이트는 거부감이 들 수 있다.
- 이탈을 최소화 하기 위해 선택적 업데이트를 제공, **다음에** 버튼을 누르면 앱에 진입.
- 특정 시간이 지난 후 다시 Alert 창 노출 (현재는 1주일)

<br/>
<br/>

<img src="/img/sideproject/insights/update.png" width="360px"/>

<br/>
<br/>
