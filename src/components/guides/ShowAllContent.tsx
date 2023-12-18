import { getAllPosts } from "../../sevices/postServices";

const posts = getAllPosts();

export const ShowAllContent = () => {
  console.log("log", posts);

  return <>{posts}</>;
};
