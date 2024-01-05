import supabase from "./SupabaseServices";

export interface IFilter {
  category: string;
  material: string;
  tools: string;
  level: string;
}
// filter by searchwords, not case sensitive
export const findPostBySearchWord = async (searchWord: string) => {
  const { data, error } = await supabase
    .from("content")
    .select("*")
    .ilike("presentation_heading", `%${searchWord}%`);

  if (error) {
    console.log("error fetching all posts", error);
    return error;
  }

  return data;
};

// filter by category, material, tools, level
export const filterPosts = async (filter: IFilter) => {
  let { data } = await supabase.from("content").select("*");

  if (filter.category) {
    data = data!.filter((content) => content.category === filter.category);
  }
  if (filter.material) {
    data = data!.filter((content) => content.material === filter.material);
  }
  if (filter.tools) {
    data = data!.filter((content) => content.tools === filter.tools);
  }
  if (filter.level) {
    data = data!.filter((content) => content.level === filter.level);
  }
  if (!data || data.length === 0) {
    console.log("no data", data);
    return data;
  }
  return data;
};
