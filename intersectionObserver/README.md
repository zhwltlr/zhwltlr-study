# Intersection Observer

Intersection Observer란?

- Intersection Observer API는 감시하고자 하는 요소가 다른 요소(viewport)에 들어가거나 나갈때 또는 요청한 부분만큼 두 요소의 교차부분이 변경될 때 마다 실행될 콜백 함수를 등록할 수 있게 한다.
- ​웹 페이지의 요소들이 다른 요소들과 교차되는지 여부를 비동기적으로 관찰하고 이벤트를 처리하는 기능을 제공하며. 이를 이용해 스크롤, 크기 조정 또는 다른 상황에서 요소의 가시성을 추적할 수 있다.

구성요소

- 관찰 대상 (Target): 교차되는지 관찰하려는 요소를 지정(DOM 요소)
- 관찰자 (Observer): 교차되는지 여부를 관찰하는 객체, Intersection Observer 객체를 생성하여 관찰자를 만드는 것
- 콜백 함수 (Callback): 교차 상태 변경에 대한 응답으로 호출되는 함수, 이 콜백 함수에는 관찰 대상 요소와 관련된 정보가 전달됨

<br />
더 자세한 건 <b><a href="https://blog.naver.com/zhwltlr/223151088402">블로그 정리</a></b>를 참고하세요

<br />
