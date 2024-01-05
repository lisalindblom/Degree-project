import { useEffect, useState } from "react";
import { IPost } from "../models/IPost";
import { getPostById } from "../services/PostServices";
import { useParams } from "react-router";
import noImage from "../assets/knit.jpg";
import { Card } from "../components/guides/Card";

export const Post = () => {
  const params = useParams();
  const [post, setPost] = useState<IPost>();

  useEffect(() => {
    const fetchPosts = async () => {
      if (params.id) {
        const content = await getPostById(params.id);

        if (content && content.length > 0) {
          setPost(content[0]);
        } else {
          throw new Error("No content found");
        }
      }
    };
    fetchPosts();
  }, [params.id]);

  const showPresentation = (
    <>
      <h2>{post?.presentation_heading}</h2>
      <p>{post?.presentation_text}</p>
    </>
  );

  const showMaterial = post?.recommended_tools.map((r_tool, index) => (
    <>
      <li key={index}>{r_tool}</li>
    </>
  ));

  const togglePost = (index: number) => {
    if (post && post.steps[index]) {
      const newPost = { ...post };
      newPost.steps[index].is_showing = !newPost.steps[index].is_showing;
      setPost(newPost);
    }
  };

  return (
    <>
      <div className="main-container">
        <div className="overview-container">
          <div className="background"></div>
          <img
            className="thumbnail"
            src={post?.thumbnail ? post.thumbnail : noImage}
            onError={(e) => (e.currentTarget.src = noImage)}
          />
          <a className="back-link" onClick={() => window.history.back()}>
            <i className="material-symbols-rounded">keyboard_backspace</i>
            Back to overview
          </a>
          <div className="info-container">
            <div className="info">
              {showPresentation}
              <h3>Materials needed:</h3>
              <ul className="list">{showMaterial}</ul>
            </div>
          </div>
        </div>
        <Card post={post} togglePost={togglePost}></Card>
        <button
          className="top_of_page"
          onClick={() => document.body.scrollIntoView({ behavior: "smooth" })}
        >
          <span className="material-symbols-rounded">arrow_upward_alt</span>
        </button>
      </div>
    </>
  );
};
