import { IPost } from "../../models/IPost";
import { getPosts } from "../../sevices/PostServices";
import { useEffect, useState } from "react";

export const ShowAllContent = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getPosts();
      setPosts(posts);
    };

    fetchPosts();
  }, []);

  console.log("log", posts);

  return (
    <>
      <div className="maincontent">
        {posts.map((post) => (
          <div key={post.id}>
            <h2>{post.postheading}</h2>
            <p>{post.post}</p>
          </div>
        ))}
      </div>
    </>
  );
};
