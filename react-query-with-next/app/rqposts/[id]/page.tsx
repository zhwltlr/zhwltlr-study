"use client";
import { useRouter, useParams } from "next/navigation";
import { Container, Typography, Button } from "@mui/material";

export default function PostDetail() {
  const router = useRouter();
  const params = useParams();
  const { id } = params;
  const post = dummyPosts.find((post) => post.id === parseInt(id));

  if (!post) {
    return <Typography variant="h5">해당 글을 찾을 수 없습니다.</Typography>;
  }

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        {post.title}
      </Typography>
      <Typography variant="subtitle1">작성자: {post.author}</Typography>
      <Typography variant="body1">
        상세 내용은 여기에 작성되어 있어야 합니다.
      </Typography>
      <Button
        onClick={() => router.push("/rqposts")}
        variant="contained"
        color="primary"
      >
        목록으로 돌아가기
      </Button>
    </Container>
  );
}

// 더미 데이터
const dummyPosts = [
  { id: 1, title: "첫 번째 글", author: "작성자1" },
  { id: 2, title: "두 번째 글", author: "작성자2" },
  // 이하 생략
];
