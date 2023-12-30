import { useEffect, useState } from "react";
import { Session } from "@supabase/supabase-js";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { signOut } from "../../sevices/LoginServices";
import supabase from "../../sevices/SupabaseServices";

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
    const handleLogOut = () => {
      signOut();
    };
    return (
      <>
        <div className="container-col main-content outline">
          <button type="button" onClick={handleLogOut}>
            Log out
          </button>
        </div>
      </>
    );
  }
};
