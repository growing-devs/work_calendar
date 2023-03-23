## 📋개요

📆연차 및 당직 관리 웹 서비스 구현 미니프로젝트 팀 Repo.

## ⚙️실행

```
git clone https://github.com/growing-devs/work_schedule_management.git
cd work_schedule_management
npm start
```

## 💾브랜치 분리 방식

feature/기능이름

```
예시)
feature/login
feature/calendar
```

## 📁폴더구조

```
├── public
│   ├── index.html
│   └── favicon
├── src
│   ├── index.js
│   ├── GlobalStyle.js  // reset.css 및 공용 스타일링
│   ├── App.js // 라우팅 세팅
│   ├── 🗀api  // 서버 데이터 관리 폴더
│   │   └── 🗀mockup  // 테스트용 더미 데이터 저장 폴더
│   ├── 🗀components  // 재사용하는 컴포넌트 저장 폴더
│   │   └── 🗀example  // 컴포넌트별로 폴더 구조 생성 예시
│   │       ├── index.jsx
│   │       └── style.js  //css-in-js 분리.
│   ├── 🗀pages  // 각 roustes의 페이지 저장 폴더
│   │   ├── 🗀LogIN  // 로그인 페이지
│   │   ├── 🗀Main  // 메인페이지(캘린더 표시 화면)
│   │   ├── 🗀MyInfo  // 마이페이지(개인정보)
│   │   ├── 🗀NotFound
│   │   └── 🗀SignUp  // 회원가입 페이지
│   ├── 🗀store  // 클라이언트 전역 상태 관리 폴더
│   │   └── index.js
│   └── 🗀util  // 유틸 함수 저장 폴더
│       └── 🗀hooks  // 재사용하는 커스텀 훅 저장 폴더
└── ...
```

## 📚사용 라이브러리

- **axios** : api 호출
- **react-big-calendar** : 일정 이벤트 표시, 등록, 수정, 삭제 상호작용
- **react-query** : 서버측 데이터 상태 관리
- **styled-components** : css-in-js
- **zustand** : 클라이언트측 데이터 상태 관리
