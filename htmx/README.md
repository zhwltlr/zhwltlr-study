# HTMX

#### **htmx란?**

- 마크업 중심 설계: htmx는 HTML 요소의 hx 속성을 사용하여 동작을 정의한다. 이렇게 하게 되면, 클라이언트 측에서 서버로의 요청과 응답을 지정할 수 있다.

  ```
  <button hx-get="/data" hx-trigger="click">Load Data</button>
  ```

예를 들면, 위와 같이 HTML 요소에 hx-get 속성을 추가하여 클릭 이벤트가 발생했을 때 서버로 GET 요청을 보내도록 할 수 있게 하는 것이다.

- 클라이언트-서버 상호작용: htmx는 Ajax 요청을 사용하여 페이지 갱신을 최소화하면서 서버와 상호작용한다 이 말인 즉, 웹 페이지는 부분적으로 업데이트되고 필요한 데이터만 가져올 수 있다는 것이다.

#### **AJAX 요청**: htmx의 핵심은 다음과 같은 속성을 사용하여 HTML에서 AJAX 요청을 보낼 수 있다는 것이다.

- `hx-get`: 지정된 URL로 GET 요청
- `hx-post`: 지정된 URL로 POST 요청
- `hx-put`: 지정된 URL로 PUT 요청
- `hx-patch`: 지정된 URL로 PATCH 요청
- `hx-delete`: 지정된 URL로 DELETE 요청

#### **Trigger**: 기본적으로 AJAX 요청은 요소의 "자연스러운" 이벤트에 의해 트리거 된다.

    - `input`, `textarea` 및 `select`: `change` 이벤트에 의해 trigger
    - `form`: `submit` 이벤트에 의해 trigger
    - 나머지 요소: `click` 이벤트에 의해 trigger

## Example

- CRUD with board
- CRUD with contacts & search contacts

  ```
  <table class="table delete-row-example">
      <thead>
      <tr>
          <th>Name</th>
          <th>Email</th>
          <th></th>
      </tr>
      </thead>
      <!-- /contact로 요청하고 Load시에 get 요청이 이루어짐 -->
      <tbody id="contactList" hx-get="/contact" hx-trigger="load"></tbody>
  </table>

  <form
      <!-- submit시 form 제출이 된다. -->
      id="contactForm"
      hx-post="/contact"
      style="
          display: flex;
          justify-content: flex-start;
          align-items: center;
      "
      hx-swap="innerHTML"
      <!-- contactList에 내부 요소에 결과값을 출력 -->
      hx-target="#contactList"
      >
      <label for="title" class="form-label">이름:</label>
      <input
          style="width: 40%; margin-left: 10px"
          type="text"
          id="name"
          name="name"
          class="form-control"
          <!-- input change될 때마다 확인 -->
          hx-trigger="change"
          required
      />

      <button
          style="margin-left: 10px; margin-bottom: 0"
          type="submit"
          class="btn btn-primary"
      >
          추가
      </button>
  </form>
  ```

<br />
더 자세한 건 <b><a href="https://blog.naver.com/zhwltlr/223194969767">블로그 정리</a></b>를 참고하세요

<br />
