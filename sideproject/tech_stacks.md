---
sidebar_position: 3
---

# 기술 스택 및 아키텍쳐


![img](/img/sideproject/tech_stacks/tech_stack.png)

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
│     └── styles
│           └── color_config.dart
│     └── constants
│           └── links.dart
│           └── oss_licenses.dart
│
├── features
│     └── diary
│           └── create
│                   └── model
│                         └── diary.dart
│                         └── diary.g.dart
│                   └── provider
│                         └── diary_create_view_model_provider.dart
│                   └── service
│                         └── diary_create_service.dart
│                   └── viewModel
│                         └── diary_create_view_model.dart
│                   └── view
│                         └── widgets
│                         └── diary_create_view.dart
│           └── detail
│           └── statistics
│
│
│     └── courts
│     └── posts
│     └── home
│
├── common
│     └── dialog
│     └── loading
│     └── snackbar
│
│
├── utils
│     └── images
│     └── clipboard
│
├── main.dart
├── env
└── ...

```

```
|-- lib
    |-- app
    |   |-- router
    |   |-- style
    |  
    |-- core
    |   |-- constants      
    |        
    |-- features
    |   |-- diary
    |   |   |-- create
    |   |   |   |-- model
    |   |   |       |-- diary.dart
    |   |   |       |-- diary.g.dart
    |   |   |   |-- provider
    |   |   |       |-- diary_create_view_model_provider.dart
    |   |   |   |-- service
    |   |   |       |-- diary_create_service.dart
    |   |   |   |-- viewModel
    |   |   |       |-- diary_create_view_model.dart
    |   |   |   |-- view
    |   |   |       |-- widgets
    |   |   |       |-- diary_create_view.dart
    |   |-- courts
    |   |-- posts
    |   |-- my
    |   
    |-- utils
    |   |-- images
    |   |-- clipboard
    |   |-- helper
    |-- main.dart
    └── ...
```

<br/>
<br/>

# MVVM Model