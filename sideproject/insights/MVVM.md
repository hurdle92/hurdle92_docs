---
sidebar_position: 3
---

# MVVM

<br/>

![mvvm](https://strapi.dhiwise.com/uploads/architecting_flutter_apps_using_the_mvvm_pattern_0_aef3b331dc.jpg)

<br/>
<br/>

# MVVM을 도입한 이유

초기 타이브레이크 앱은 단순히 코트 리스트와 상세 페이지 정도로만 구성이 되어있었습니다.
Supabase로부터 데이터를 불러와 코트 리스트 불러오기, 무한 스크롤, 상세 페이지, 구글 지도 등으로 MVVM이 필요할 정도로 복잡하진 않았습니다.
`StatfulWidget`과 `Statelesswidget` 위젯에서 대부분 처리가 가능했습니다.

<br/>

하지만 다이어리 기능이 메인으로 추가되고 통계와 커뮤니티, 소셜 로그인 등 다양한 기능이 추가되면서 기존의 개발방식으로는 한계를 느꼈습니다.
가뜩이나 Flutter는 View의 코드 양이 많은데 비즈니스 로직까지 합쳐지니 코드가 너무나 길어졌습니다.

<br/>

결국 비즈니스 로직과 View의 관심사 분리가 필요하다 느꼈고 `MVVM`패턴을 도입하게 되었습니다.
변화가 빠른 웹개발과 다르게 앱에서는 이미 `MVVM` 아키텍쳐가 자리를 잡고 있어 선택하기는 편했고, 상태관리로는 `Riverpod`을 사용했습니다.

<br/>

폴더 구조는 아래와 같으며, Rivderpod의 `StateNotifierProvider`를 활용해 view와 viewModel을 연결시켜주고 있습니다.

<br/>

```
├── feature
│       └── model
│             └── diary.dart
│             └── diary.g.dart
│       └── service
│             └── diary_create_service.dart
│       └── viewModel
│             └── diary_create_view_model.dart
│       └── provider
│             └── diary_create_view_model_provider.dart
│       └── view
│             └── widgets
│             └── diary_create_view.dart
│
```

<br/>

`MVVM`을 도입하며 느낀 장점은 다음과 같습니다.

<br/>

- 비즈니스 로직과 View의 관심사 분리로 유지보수 및 신규피쳐 개발이 용이해졌습니다
- view는 viewModel만 바라보면 되기에 UI 개발에 집중할 수 있게 되었습니다
- 파일과 폴더는 많아졌으나 반대로 개발 생산성은 높아졌습니다 ⬆️
- **MVVM**을 경험해볼 수 있었다 !?

<br/>
<br/>

하지만 장점만 존재하는건 아니었습니다. 프론트엔드 개발자로서 MVVM 아키텍쳐는 처음이기에 배우는데 러닝 커브가 어느정도 있었고,
신규 페이지 1개에 기본적으로 4개의 폴더와 여러 파일을 생성하다 보니 초기 구축에 시간이 좀 걸렸습니다.
어디까지 `viewModel`의 역할로 둬야할지 고민이 될 때도 있었고, 관심사의 분리가 쉽지는 않았습니다.

<br/>
<br/>
