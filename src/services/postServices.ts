import supabase from "./SupabaseServices";

export const getPosts = async (page: number) => {
  const limit = 10;
  const { data, error } = await supabase
    .from("content")
    .select("*")
    .range((page - 1) * limit, page * limit - 1);

  if (error) {
    console.log("error fetching all posts", error);
    throw new Error(error.message);
  }
  return data;
};

export const getImages = async (imageName: string, folderName: string) => {
  const publicUrl = await supabase.storage
    .from(`images/${folderName}`)
    .getPublicUrl(imageName);
  return publicUrl;
};

export const getPostById = async (id: string) => {
  const { data, error } = await supabase
    .from("content")
    .select("*")
    .eq("id", id);
  if (error) {
    console.log("error fetching post by id", error);

    throw new Error(error.message);
  }
  return data;
};
