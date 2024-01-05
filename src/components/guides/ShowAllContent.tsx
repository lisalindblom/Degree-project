import { IPost } from "../../models/IPost";
import noImage from "../../assets/knit.jpg";
import { Link } from "react-router-dom";

interface ShowAllContentProps {
  posts: IPost[];
}

export const ShowAllContent = ({ posts }: ShowAllContentProps) => {
  const showPosts = posts.map((post: IPost) => (
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
