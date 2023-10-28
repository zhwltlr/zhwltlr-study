"use client";
import React, { useEffect, useState } from "react";
import Content from "./content";

type Props = {
  params: { id: string };
};

export const revalidate = 60;

const Post = ({ params }: Props) => {
  const { id } = params;
  const [post, setPost] = useState([]);

  const getPost = async () => {
    fetch("https://jsonplaceholder.typicode.com/posts/2")
      .then((response) => response.json())
      .then((json) => setPost(json));
  };
  useEffect(() => {
    getPost();
    console.log(post);
  }, []);

  if (!post) {
    return <div>Post Not Found</div>;
  }

  return (
    <main className="p-24 leading-7 w-full overflow-y-hidden">
      <Content post={post} />
    </main>
  );
};

export default Post;
