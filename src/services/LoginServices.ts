import supabase from "./SupabaseServices";

export async function signUpNewUser(email: string, password: string) {
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
    options: {
      emailRedirectTo: "https//example.com/welcome",
    },
  });
  if (error) {
    throw new Error(error.message);
  }
  return data;
}

export async function signOut() {
  const { error } = await supabase.auth.signOut();
  if (error) {
    throw new Error(error.message);
  }
  return console.log("Signed out successfully");
}

export async function signInWithEmail(email: string, password: string) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email: email,
    password: password,
  });
  if (error) {
    throw new Error(error.message);
  }
  console.log("signin", data);
  return data;
}

export async function passwordReset(email: string) {
  const { data, error } = await supabase.auth.resetPasswordForEmail(email);
  if (error) {
    throw new Error(error.message);
  }
  console.log("reset", data);
  return data;
}
