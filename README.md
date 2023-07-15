# 🐾 FE 주니어 개발자가 조금씩 알아가는 발자취 🐾

## 1. Intersection Observer

- Intersection Observer API는 감시하고자 하는 요소가 다른 요소(viewport)에 들어가거나 나갈때 또는 요청한 부분만큼 두 요소의 교차부분이 변경될 때 마다 실행될 콜백 함수를 등록할 수 있게 한다.
- ​웹 페이지의 요소들이 다른 요소들과 교차되는지 여부를 비동기적으로 관찰하고 이벤트를 처리하는 기능을 제공하며. 이를 이용해 스크롤, 크기 조정 또는 다른 상황에서 요소의 가시성을 추적할 수 있다.

- 구성요소
  - 관찰 대상 (Target): 교차되는지 관찰하려는 요소를 지정(DOM 요소)
  - 관찰자 (Observer): 교차되는지 여부를 관찰하는 객체, Intersection Observer 객체를 생성하여 관찰자를 만드는 것
  - 콜백 함수 (Callback): 교차 상태 변경에 대한 응답으로 호출되는 함수, 이 콜백 함수에는 관찰 대상 요소와 관련된 정보가 전달됨

<br />
참고 : <a href="https://blog.naver.com/zhwltlr/223151088402">블로그 정리</a>

<br />

---

## 2. next-13

- Next.js version 13에 개편된 내용을 중점적으로 다룸
- app 디렉토리는 다음에 대한 지원이 포함된다고 한다.
  - 레이아웃: 상태를 유지하고 비용이 많이 드는 재렌더링을 피하면서 경로 간에 UI를 쉽게 공유한다. 즉, 페이지가 변경되어도 지속적으로 보여질 nav와 같은 컴포넌트는 layout.tsx에서 작성해주면 됨
  - 스트리밍: 즉시 로드 상태를 표시하고 렌더링되는 UI 단위로 스트리밍
  - 데이터 가져오기 지원: async 서버 구성 요소 및 fetchAPI를 통해 구성 요소 수준 가져오기가 가능
  - `app/` 내부에 경로를 생성하려면 `page.tsx`로 file 생성
    <img src="https://github.com/zhwltlr/zhwltlr-study/assets/100506719/b571e739-6cc7-475b-8365-310a76a62423" />

<br />
참고 : <a href="https://blog.naver.com/zhwltlr/223114102591">블로그 정리</a>

<br />

---

## 3. react-query-with-next

<br />
참고 : <a href="https://blog.naver.com/zhwltlr/223101743583">블로그 정리1</a>

참고 : <a href="https://blog.naver.com/zhwltlr/223138339836">블로그 정리2</a>
<br />

---

## 4. tailwind

<br />
참고 : <a href="https://blog.naver.com/zhwltlr/223088662689">블로그 정리1</a>

참고 : <a href="https://blog.naver.com/zhwltlr/223132240108">블로그 정리2</a>
<br />

---

## 5. typescript

<br />
참고 : <a href="https://blog.naver.com/zhwltlr/223121753347">블로그 정리</a>

<br />
