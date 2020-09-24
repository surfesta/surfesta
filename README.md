# 🌊 Surfesta!

#### :house: [HOMEPAGE](https://surfesta.site)

#### :video_camera: [DEMO VIDEO](https://www.loom.com/share/b57b20d8c34e4357887ae596239b6637)

## 온오프라인 이벤트 플랫폼 서비스

![screenshot](https://s3.amazonaws.com/media-p.slid.es/uploads/1298070/images/7750059/pasted-from-clipboard.png)

## 주제 선정 이유

- React, Redux 에 관해 학습한 내용을 바탕으로 반응형 뷰를 구성하는 경험하고자 함.
- 프로젝트매니징에 직/간접적으로 참여하면서, 서버/데이터베이스 구축, 배포까지의 경험하면서 성장하고자 함.

## STACK

![stack](https://i.imgur.com/rtb3VpA.png)

## Architecture

![architecture](https://i.imgur.com/X3N9dTC.png)

## Documentations

### :point_right: [API Endpoints](https://bit.ly/2R7dQ4N)

Node.js서버에서 MongoDB를 위한 ODM(Object Data Mapping) 몽구스를 통해 콜렉션/도큐먼트를 관리합니다.

### :point_right: [DESIGN PROTO-TYPE](https://www.figma.com/proto/9YQlwAunCQR2YHJ1rT4Vyv/Surfesta?node-id=1%3A2&scaling=min-zoom)

![figma](https://i.imgur.com/sEfeKV7.png)

### :point_right: [FLOW CHART](https://app.diagrams.net/#G1CZLSxjs-Y6l_r6Bn2WL7GVwaxQas1FY4)

![flow_chart](https://i.imgur.com/Az7vHzq.png)

## Team

- 김가현 [@tinkerbell93](https://github.com/tinkerbell93)
- 김동욱 PM [@domuk-k](https://github.com/domuk-k)
- 김미연 [@Crescenteea](https://github.com/Crescenteea)
- 윤유비 [@kr-ub](https://github.com/kr-ub)

## Install & Run

- front-End

  ```code
  cd client
  npm ci
  npm start
  ```

- Back-End

  ```code
  cd server
  npm ci
  npm start
  ```

( or just "npm run dev" at /server )

/client/src 디렉토리에 `apiKey.js` 파일, /server 디렉토리에 `.env` 파일을 만들어주세요.
아래 연락처로 연락하시면 파일을 보내드립니다.

> dannyworks102@gmail.com

```javascript
/* client/src/apiKey.js */
export const UNSPLASH_API_KEY = '__API_KEY__';
```

```javascript
/* server/.env */
MONGO_URI = __YOUR_MONGO_URI__;
PORT = 5000;

AWS_ACCESS_KEY_ID = __YOUR_AWS_ACCESS_KEY_ID__;
AWS_SECRET_ACCESS_KEY_ID = __YOUR_AWS_SECRET_ACCESS_KEY_ID__;
```
