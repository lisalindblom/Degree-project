import { IPost } from "../models/IPost";
import supabase from "./SupabaseServices";

export const getPosts = async () => {
  const { data, error } = await supabase.from("content").select("*");
  if (error) {
    console.log("error fetching all posts", error);
    return [];
  }
  console.log("getPosts", data);

  return data;
};

export const getPostById = async (id: string) => {
  const { data } = await supabase.from("posts").select("*").eq("id", id);
  return data;
};

export const createPost = async (post: IPost) => {
  const { data: createdPost, error } = await supabase
    .from("posts")
    .insert(post);
  if (error) {
    throw new Error(error.message);
  }
  return createdPost;
};

export const updatePost = async (post: IPost) => {
  const { data } = await supabase
    .from("posts")
    .update(post)
    .match({ id: post.id });
  return data;
};

export const deletePost = async (id: string) => {
  const { data } = await supabase.from("posts").delete().match({ id: id });
  return data;
};
