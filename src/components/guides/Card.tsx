import { IPost } from "../../models/IPost";
import noImage from "../../assets/knit.jpg";

interface CardProps {
  post?: IPost;
  togglePost: (index: number) => void;
}

export const Card: React.FC<CardProps> = ({ post, togglePost }) => {
  const steps = post?.steps.map((steps, index) => (
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
              src={post?.thumbnail ? post.thumbnail : noImage}
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
