import { useEffect, useState } from "react";
import { IPost } from "../models/IPost";
import { getImages, getPostById } from "../services/postServices";
import { useParams } from "react-router";
import noImage from "../assets/noImage.png";
import { Card } from "../components/guides/Card";

export const Post = () => {
  const params = useParams();
  const [post, setPost] = useState<IPost>();
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const fetchPosts = async () => {
      if (params.id) {
        const content = await getPostById(params.id);

        if (content && content.length > 0) {
          const post = content[0];
          const response = await getImages(post.thumbnail, post.id);
          setPost({ ...post, thumbnail: response.data.publicUrl });
        } else {
          throw new Error("No content found");
        }
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    fetchPosts();
    return () => window.removeEventListener("scroll", toggleVisibility);
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
            <i className="bi bi-arrow-left"></i>
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
        {isVisible && (
          <button className="top-of-page" onClick={scrollToTop}>
            <i className="bi bi-arrow-up"></i>
          </button>
        )}
      </div>
    </>
  );
};
