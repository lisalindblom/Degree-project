import { IPost } from "../../models/IPost";
import noImage from "../../assets/noImage.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getImages } from "../../services/postServices";

interface ShowAllContentProps {
  posts: IPost[];
}

export const ShowAllContent = ({ posts }: ShowAllContentProps) => {
  const [updatedPosts, setPosts] = useState<IPost[]>([]);
  useEffect(() => {
    const fetchImages = async () => {
      const updatedPosts = await Promise.all(
        posts.map(async (post) => {
          const response = await getImages(post.thumbnail, post.id);
          return { ...post, thumbnail: response.data.publicUrl };
        })
      );

      setPosts(updatedPosts);
    };

    fetchImages();
  }, [posts]);
  const showPosts = updatedPosts.map((post: IPost) => (
    <>
      <div className="post-container">
        <Link className="post-content" to={`/posts/${post.id}`} key={post.id}>
          <img
            src={post.thumbnail ? post.thumbnail : noImage}
            onError={(e) => (e.currentTarget.src = noImage)}
          />
          <div className="text-container">
            <h2>{post.presentation_heading}</h2>
            <p>{post.presentation_text}</p>
          </div>
          <div className="more">Read more</div>
        </Link>
      </div>
    </>
  ));

  return (
    <>
      <div className="show-posts">{showPosts}</div>
    </>
  );
};
