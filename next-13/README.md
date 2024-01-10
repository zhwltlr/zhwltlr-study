# Next-13

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Description

#### 1. Next.js ver.13

- Next.js version 13에 개편된 내용을 중점적으로 다룸
- app 디렉토리는 다음에 대한 지원이 포함된다고 한다.
  - 레이아웃: 상태를 유지하고 비용이 많이 드는 재렌더링을 피하면서 경로 간에 UI를 쉽게 공유한다. 즉, 페이지가 변경되어도 지속적으로 보여질 nav와 같은 컴포넌트는 layout.tsx에서 작성해주면 됨
  - 스트리밍: 즉시 로드 상태를 표시하고 렌더링되는 UI 단위로 스트리밍
  - 데이터 가져오기 지원: async 서버 구성 요소 및 fetchAPI를 통해 구성 요소 수준 가져오기가 가능
  - `app/` 내부에 경로를 생성하려면 `page.tsx`로 file 생성
    <img src="https://github.com/zhwltlr/zhwltlr-study/assets/100506719/b571e739-6cc7-475b-8365-310a76a62423" />

#### 2. Next Auth

- 처음부터 Next.js와 Serverless를 지원하도록 설계되었고, 모든 OAuth 서비스와 작동하도록 설계되었으며 OAuth 1.0, 1.0A, 2.0 및 OpenID Connect를 지원한다. 로그인 버튼, 로그아웃 버튼 등과 같은 UI 컴포넌트를 제공하여 프로젝트에서 사용하기 쉽도록 도와준다.
- 유연성: 많은 인기 있는 로그인 서비스에 대한 내장 지원이 있다. 즉, 이메일/비밀번호, Google, Facebook, GitHub, Twitter, Auth0 등 다양한 옵션을 설정하여 사용할 수 있다.

  ```
  import GitHubProvider from "next-auth/providers/github";
  ...
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    })
  ]
  ```

- 데이터 관리 : NextAuth.js는 데이터베이스를 사용하거나 사용하지 않고 사용할 수 있다. Bring Your Own Database (BYOD)를 지원하며 모든 데이터베이스와 함께 사용할 수 있다. 인기 있는 호스팅 제공 업체의 데이터베이스와도 잘 작동한다.

- 안전성: 무암호 로그인 메커니즘 사용을 권장하여,기본적으로 안전하게 설계되었다. Next-Auth는 기본적으로 세션을 사용하여 사용자를 인증하고 세션을 유지한다. 세션 정보는 쿠키를 통해 저장되며, 사용자가 로그인 상태를 유지하는 동안 쉽게 접근할 수 있다.
  ```
  import { getSession } from "next-auth/client"
  export default async (req, res) => {
    const session = await getSession({ req })
    if (session) {
      // Signed in
      console.log("Session", JSON.stringify(session, null, 2))
    } else {
      // Not Signed in
      res.status(401)
    }
    res.end()
  }
  ```
  - vercel 배포시 `NEXTAUTH_URL` 지정을 해주어야만 한다.
  - `NEXTAUTH_SECRET`도 마찬가지

<br />

### 3. Jest

```
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Page from '../app/page'

describe('Page', () => {
  it('renders a heading', () => {
    render(<Page />)

    const heading = screen.getByRole('heading', { level: 1 })

    expect(heading).toBeInTheDocument()
  })
})

```

- 모킹: Jest를 사용하여 API 호출이나 외부 라이브러리와 같은 종속성을 쉽게 모킹하여 테스트를 고립시킨다
- 테스트 커버리지: Jest는 테스트가 커버하는 코드의 일부를 보여주는 커버리지 보고서 생성. Jest 구성에 "coverage": true를 추가하여 활성화
- 훅 및 설정: beforeEach 및 afterEach 훅을 사용하여 테스트 환경을 설정

## More

- [블로그 정리 글](https://blog.naver.com/zhwltlr/223114102591)을 참고하세요
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [블로그 정리 글](https://blog.naver.com/zhwltlr/223231504372) - What is Next-Auth
- [블로그 정리 글](https://blog.naver.com/zhwltlr/223236593765) - Next-Auth with jwt token
