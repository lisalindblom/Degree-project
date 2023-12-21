import { useEffect, useState } from "react";
import { createClient, Session } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { signOut } from "../../sevices/LoginServices";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "";
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY || "";
const supabase = createClient(supabaseUrl, supabaseKey);

interface SignedInProps {
  onSignedIn: (signedIn: boolean) => void;
}

export const UserAuth: React.FC<SignedInProps> = (props) => {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      if (session) {
        props.onSignedIn(true);
      }
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      if (session) {
        props.onSignedIn(true);
      }
    });

    return () => subscription.unsubscribe();
  }, [props]);
  if (!session) {
    return <Auth supabaseClient={supabase} appearance={{ theme: ThemeSupa }} />;
  } else {
    // return <LogOut></LogOut>;export const LogOut = () => {
    const handleLogOut = () => {
      signOut();
    };
    return (
      <>
        <button type="button" onClick={handleLogOut}>
          Log out
        </button>
      </>
    );
  }
};
