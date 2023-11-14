import React, { useState } from "react";
import { useQuery } from "react-query";
import { getPosts } from "../APIs/api";
import Post from "./Post";
import { post } from "../interfaces/interface";
import Pagination from "./Pagination";

const Posts = () => {
  const [posts, setPosts] = useState<[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const query = useQuery(["posts"], async () => await getPosts(), {
    onSuccess: (data) => setPosts(data),
  });
  console.log(posts);
  if (query.isLoading) {
    return <h2>Loading....</h2>;
  }

  //get current post
  const indexOfLastPost = currentPage * 5;
  const indexOfFirstPost = indexOfLastPost - 5;
  const currentPost = posts.slice(indexOfFirstPost, indexOfLastPost);

  //change page
  const paginate = (pn: number) => setCurrentPage(pn);

  return (
    <div className="mt-5 mx-10">
      <h1 className="text-blue-600 mb-3">Pagination demonstration</h1>
      {currentPost?.map((post: post) => (
        <Post
          key={post?.id}
          userId={post.userId}
          id={post.id}
          title={post.title}
          body={post.body}
        />
      ))}
      <Pagination
        totalPost={posts?.length}
        postPerPage={5}
        paginate={paginate}
      />
    </div>
  );
};

export default Posts;
