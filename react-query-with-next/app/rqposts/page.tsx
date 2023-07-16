"use client";
import { useRqMutateCustom } from "@/hooks/useRQMutateCustom";
import { useRqQueryCustom } from "@/hooks/useRQQueryCustom";
import React, { useEffect, useState } from "react";
import {
  Container,
  List,
  ListItem,
  ListItemText,
  Pagination,
  Typography,
} from "@mui/material";
import { useRouter } from "next/navigation";

interface IPosts {
  title: string;
  id: string;
  body: string;
}

const RqPost = () => {
  const [posts, setPost] = useState([]);
  const [inputValue, setInputValue] = useState({ title: "", body: "" });

  const router = useRouter();

  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 100;
  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page);
  };
  // useQeury get
  const { data, isLoading, error } = useRqQueryCustom({
    key: "get",
    reqOptions: { retry: 2 },
    // offset: (currentPage - 1) * postsPerPage,
  });

  // useMutate post
  const { mutate } = useRqMutateCustom();

  // manage inputValue
  const handleInput = (e: {
    preventDefault: () => void;
    target: { name: string; value: string };
  }) => {
    e.preventDefault();
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  // click submit button
  const handlePost = () => {
    mutate(
      {
        bodyContent: {
          id: posts.length + 1,
          title: "foo",
          body: "bar",
          userId: posts.length + 1,
        },
        key: "post",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      },
      {
        onSuccess: () => {
          console.log("성공");
        },
        onError: (err) => console.log(err, "error"),
      }
    );
  };

  useEffect(() => {
    if (data) {
      setPost(data.data);
    }
  }, [data]);

  return (
    <div className="container pt-12 mx-auto max-w-2xl">
      <h2 className="text-2xl font-bold mb-4">게시물 목록</h2>
      <div className="my-6">
        <input
          type="text"
          name="title"
          className="border rounded px-2 py-1 mr-4 text-black"
          placeholder="title"
          onChange={handleInput}
        />
        <input
          type="text"
          name="body"
          className="border rounded px-2 py-1 mr-4 text-black"
          placeholder="body"
          onChange={handleInput}
        />
        <button type="submit" onClick={() => handlePost()}>
          submit
        </button>
      </div>

      <Container style={{ padding: 0 }}>
        <List>
          {posts?.map((post: IPosts, index) => (
            <ListItem
              key={index}
              onClick={() => router.push(`/rqposts/${post.id}`)} // 상세 페이지로 이동
              sx={{ borderBottom: "1px solid #ddd", cursor: "pointer" }}
            >
              <ListItemText
                primary={
                  <Typography
                    variant="body1"
                    color="white"
                    sx={{
                      whiteSpace: "nowrap",
                      fontSize: "24px",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      fontWeight: "bold",
                    }}
                  >
                    {post.title}
                  </Typography>
                }
                sx={{ whiteSpace: "pre-wrap" }} // 내용 줄바꿈 처리
                secondary={
                  <Typography
                    variant="body2"
                    color="#ddd"
                    sx={{ whiteSpace: "pre-wrap" }}
                  >
                    Content: {post.body}
                  </Typography>
                }
              />
            </ListItem>
          ))}
        </List>
      </Container>
      <div className="my-4">
        <Pagination
          count={Math.ceil(posts.length / postsPerPage)}
          page={currentPage}
          onChange={handlePageChange}
          color="primary"
          showFirstButton
          showLastButton
        />
      </div>
    </div>
  );
};

export default RqPost;
