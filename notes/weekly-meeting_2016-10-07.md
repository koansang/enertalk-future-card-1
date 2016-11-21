참석자: @yongdamsh @koansang @wooramy @hyuntak @MincheolC @jiwoniyEncored


# *Why?*

```js
function Card() {
  var state = getState();
  return bindToTemplate(state);
}

function Card(state) {
  return bindToTemplate(state);
}
```


##### AS-IS

- Access token 인증 과정을 거침
- 인증된 정보를 통해 내부에서 view model 생성 후 rendering


Problem
- 인증 과정의 제약으로 서드파티에서 사용하기 어려움
- 중복된 Public API 요청
  - 카드 view model 내 API 요청
  - 카드를 포함하는 앱에서의 API 요청
- 서버가 필요한 구조라 로컬로 설치해 사용하기 어려움



##### TO-BE

- 외부에서 State import 가능한 UI template: **Stateless UI template**
- 로컬 설치 가능: `npm install enertalk-future-card`
- State의 명세화: [React.PropTypes](https://facebook.github.io/react/docs/reusable-components.html)




# *Our Goal*

### App = **UI**(state)

- UI와 State의 분리


### [React](https://facebook.github.io/react/) ecosystem

- 기존 카드 UI를 react 기반으로 구현하며 장단점을 경험하고, 향후 기술 스택 선정에 반영

### 코드 품질 향상

- 단위 테스트, coding style(lint), 빌드 자동화, 적극적인 리뷰를 통해
공동 작업 간에 코드 품질 유지



# *Road Map*

### Items

##### 1. EnerTalk Future Card
- Based on React
- UI template  
- Install locally


##### 2. EnerTalk Future App
- Based on React-native
- Fetch and manage state
- Code-push: Update app instantly
- Cache historical data


##### 3. EnerTalk Future Server
- Based on web socket
- Real realtime usage


### Steps

##### Step.1

- 현재 HOME UI를 react 기반 component로 제작  
- 에너지 시계, 실시간, 일별 차트, …
- npm package publish


##### Step.2

- React native app 프로젝트 환경 구축
- Step.1의 UI component를 React native에 호환되도록 변환


##### Step.3

- React native app에서 Wi-Fi 연결 기능 구현


##### Step.4

- Web socket server or Realtime backend 구현
- Realtime usage subscribe 가능
- 기타 resource로 확장


##### Step.5

- 앱과 websocket 연결
- 과거 데이터 캐시 구현


##### ...???



# *스터디 방식 제안*

##### 기술에 대한 이론은 각자 학습하고, 실제 구현을 위주로 진행할 것

- 한주간 올라온 **PR에 포함된 작업 내용** 공유 및 리뷰
- 작업과 관련된 기술 자료 공유
- 업무의 연장선이 되지 않도록 **최대한 자유롭게 구현**해보기
- 기여할 것을 강요하지 않기

##### PR이 하나도 없으면?
- 1주차에는 React 관련 기술 세미나
- 2주 연속인 경우 **drop**



# *현재까지 작업된 내용*

[UI Components](https://github.com/yongdamsh/enertalk-future-card/tree/master/src)


[Preview](https://yongdamsh.github.io/enertalk-future-card)


Configurations
- [create-react-app](https://github.com/facebookincubator/create-react-app)
  - eslint
  - [jest](https://facebook.github.io/jest/)
  - babel
  - webpack
- [travis CI](https://travis-ci.org/yongdamsh/enertalk-future-card)
