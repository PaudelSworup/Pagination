export const getPosts = async () => {
  const posts = await fetch("https://jsonplaceholder.typicode.com/posts");
  const res = await posts.json();
  return res;
};
