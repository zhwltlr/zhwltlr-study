"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // 주 색상
    },
    secondary: {
      main: "#dc004e", // 보조 색상
    },
  },
  typography: {
    fontFamily: "Arial, sans-serif", // 기본 폰트 패밀리
    h1: {
      fontSize: "3rem", // 헤더 1의 폰트 사이즈
    },
    body1: {
      fontSize: "1rem", // 본문의 폰트 사이즈
    },
  },
  shape: {
    borderRadius: 8, // 모든 컴포넌트에 적용되는 라운드 코너 크기
  },
});

interface LayoutProps {
  children: React.ReactNode;
}

export default function Providers({ children }: LayoutProps) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ThemeProvider>
  );
}
