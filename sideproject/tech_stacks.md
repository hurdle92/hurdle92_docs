---
sidebar_position: 3
---

# 기술 스택 및 아키텍쳐


![img](https://velog.velcdn.com/images/wongue_shin/post/d22c1b7a-a3b4-48de-be38-5360774320d8/image.png)

<br/>
<br/>


# 주요 기술 스택

| Stack          | Detail                     | 
| ----------------- | ------------------------ |
| **Flutter**        | v3.16.5          |                                   
| **Dart** | v3.2.3  |                                   
| **Supabase**       | 데이터베이스 |                                   
| **riverpod**      |    상태관리   |
| **json_serializable**      |    모델링   |
| **go_router**      |    라우팅   |
| **syncfusion_flutter_charts**      |    차트 라이브러리   |

<br/>
<br/>

# Folder Structure


```bash
│
├── apps
│     └── routes
│           └── app_routes.dart
│           └── router.dart
├── features
│     └── diary
│           └── create
│                   └── model
│                         └── diary.dart
│                         └── diary.g.dart
│                   └── provider
│                   └── service
│                   └── viewModel
│                   └── view
│     └── adot_on_renewal
│           └── src
│                 └── components
│                   └── layout
│                       └── Header
│                       └── Footer
│                   └── ...
│                 └── page-modules
│                   └── consult
│                       └── components
│                           └── LoginComponents
│                       └── types
│                       └── constants
│                       └── api
│                   └── aside
│                   └── signin
│                   └── ...
│                 └── pages
│                   └── consult
│                   └── aside
│                   └── signin
│                   └── ...
│                 └── stores
│                   └── modal
│                   └── toast
│                   └── auth
│                   └── ...
│                 └── utils
│                 └── styles
│
│
├── packages
│     └── adot-ui
│           └── src
│                 └── components
│                   └── Button
│                   └── Flex
│                   └── Icon
│                   └── Image
│                   └── Modal
│                   └── RadioGroup
│                   └── Spacer
│                   └── Stack
│                   └── Text
│                   └── TextField
│                   └── ...
│
│     └── adot-icons
│     └── eslint-settings (eslint related settings)
│     └── tsconfig-settings (tsconfig related settings)
│
├── turbo.json
├── env
├── README.md
└── ...

```

<br/>
<br/>

# MVVM Model