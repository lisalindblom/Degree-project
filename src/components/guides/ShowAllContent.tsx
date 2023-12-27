import { IPost } from "../../models/IPost";
import { getPosts } from "../../sevices/PostServices";
import { useEffect, useState } from "react";
import noImage from "../../assets/noImageSm.png";
import { Link } from "react-router-dom";

export const ShowAllContent = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getPosts();
      setPosts(posts);
    };

    fetchPosts();
  }, []);

  const showPosts = posts.map((post) => (
    <div className="post-container container-row small">
      <Link className="container-row" to={`/post/${post.id}`} key={post.id}>
        <img
          src={post.postimage ? post.postimage : noImage}
          onError={(e) => (e.currentTarget.src = noImage)}
        />
        <div className="container-column text-container">
          <h2>{post.postheading}</h2>
          <p>{post.post}</p>
        </div>
      </Link>
    </div>
  ));

  return (
    <>
      <div className="maincontent">{showPosts}</div>
    </>
  );
};
