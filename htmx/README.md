# HTMX

htmx란?

- 마크업 중심 설계: htmx는 HTML 요소의 hx 속성을 사용하여 동작을 정의한다. 이렇게 하게 되면, 클라이언트 측에서 서버로의 요청과 응답을 지정할 수 있다.

```
<button hx-get="/data" hx-trigger="click">Load Data</button>
```

예를 들면, 위와 같이 HTML 요소에 hx-get 속성을 추가하여 클릭 이벤트가 발생했을 때 서버로 GET 요청을 보내도록 할 수 있게 하는 것이다.

- 클라이언트-서버 상호작용: htmx는 Ajax 요청을 사용하여 페이지 갱신을 최소화하면서 서버와 상호작용한다 이 말인 즉, 웹 페이지는 부분적으로 업데이트되고 필요한 데이터만 가져올 수 있다는 것이다.

## Example

- CRUD with board
- CRUD with contacts & search contacts

<br />
더 자세한 건 <b><a href="https://blog.naver.com/zhwltlr/223194969767">블로그 정리</a></b>를 참고하세요

<br />
