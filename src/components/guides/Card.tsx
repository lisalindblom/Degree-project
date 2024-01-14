import { IPost, ISteps } from "../../models/IPost";
import noImage from "../../assets/noImage.png";
import { useEffect, useState } from "react";
import { getImages } from "../../services/postServices";

interface CardProps {
  post?: IPost;
  togglePost: (index: number) => void;
}

export const Card: React.FC<CardProps> = ({ post, togglePost }) => {
  const [updatedPost, setPost] = useState<IPost>();
  useEffect(() => {
    if (post) {
      const fetchPostAndImages = async () => {
        const updatedSteps = await Promise.all(
          post.steps.map(async (steps: ISteps) => {
            const response = await getImages(steps.image, post.id);
            return { ...steps, image: response.data.publicUrl };
          })
        );

        setPost({ ...post, steps: updatedSteps });
      };

      fetchPostAndImages();
    }
  }, [post]);

  const steps = updatedPost?.steps.map((steps, index) => (
    <>
      <div className="steps-card">
        <button
          className="flex-row"
          key={index}
          onClick={() => {
            togglePost(index);
          }}
        >
          {steps.heading}
          <i
            className={`bi bi-chevron-down ${
              steps.is_showing ? "filter-open" : "filter-closed"
            }`}
          ></i>
        </button>
        {steps.is_showing ? (
          <div className="step">
            <img
              className="step-image"
              src={steps.image ? steps.image : noImage}
              onError={(e) => (e.currentTarget.src = noImage)}
            />
            <p>{steps.text}</p>
          </div>
        ) : null}
      </div>
    </>
  ));
  return (
    <>
      <div className="steps-container">{steps}</div>
    </>
  );
};
