## tailwind css 사용 튜토리얼

```
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

#### tailwind.config.js

```
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

#### postcss.config.js

```
npm install -D postcss-cli postcss
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  }
}
```

#### global.css

```
global.css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### npm run dev
