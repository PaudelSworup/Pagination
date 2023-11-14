import React from "react";

const Post: React.FC<{
  body: string;
  id: number;
  title: string;
  userId: number;
}> = (props) => {
  return (
    <div className="flex flex-col my-10 border border-black p-5 rounded-md ">
      <h2 className="font-serif font-bold text-2xl ">{props?.title}</h2>
      <p className="text-sm tracking-widest">{props?.body}</p>
    </div>
  );
};

export default Post;
