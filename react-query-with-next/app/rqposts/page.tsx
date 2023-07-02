"use client";
import { useRqMutateCustom } from "@/hooks/useRQMutateCustom";
import { useRqQueryCustom } from "@/hooks/useRQQueryCustom";
import React, { useEffect, useState } from "react";

interface IPosts {
  title: string;
  id: string;
  body: string;
}

const RqPost = () => {
  const [posts, setPost] = useState([]);
  const [inputValue, setInputValue] = useState({ title: "", body: "" });

  // useQeury get
  const { data, isLoading, error } = useRqQueryCustom({
    path: "/1",
    key: "get",
    reqOptions: { retry: 2 },
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
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>An error occurred: {error.message}</p>
      ) : (
        <ul className="space-y-4">
          {posts?.map((post: IPosts) => (
            <li key={post.id} className="border rounded p-4 shadow-sm">
              <h3 className="text-lg font-bold">{post.title}</h3>
              <p>{post.body}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default RqPost;
