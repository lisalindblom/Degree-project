import { useEffect, useState } from "react";
import { Filter } from "../components/filter/Filter";
import { ShowAllContent } from "../components/guides/ShowAllContent";
import { IPost } from "../models/IPost";
import { getPosts } from "../sevices/PostServices";

export const Posts = () => {
  const [posts, setPosts] = useState<IPost[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const posts = await getPosts(1);
      setPosts(posts);
    };

    fetchPosts();
  }, []);
  return (
    <>
      <div className="headings">
        <h2>Guides</h2>
        <p>
          Here you can find all sorts od trips and tricks on how to give clothes
          a longer or new life
        </p>
      </div>
      <Filter setPosts={setPosts}></Filter>
      {posts && posts.length > 0 ? (
        <ShowAllContent posts={posts}></ShowAllContent>
      ) : (
        <div>
          <h3>Sorry!</h3>
          <p>
            We found no post matching your search. Try removing some of the
            filter and try again.
          </p>
          <p>
            You can also contact us at email@email.com and tell us about what
            you would like us to post
          </p>
        </div>
      )}
    </>
  );
};
