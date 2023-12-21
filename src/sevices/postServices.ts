// Initialize the JS client
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://lwfjbntqvslcwutotlde.supabase.co";
const supabaseKey = process.env.SUPABASE_KEY || "";
const supabase = createClient(supabaseUrl, supabaseKey);

// Make a request
export const getAllPosts = async () => {
  const { data: test } = await supabase.from("testTables").select("*");
  return test;
};
