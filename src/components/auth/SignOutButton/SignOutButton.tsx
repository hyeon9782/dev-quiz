import { supabase } from "../../../libs/supabase";

const SignOutButton = () => {
  async function signOut() {
    const { error } = await supabase.auth.signOut();
    console.log(error);
  }

  return <button onClick={signOut}>로그아웃</button>;
};

export default SignOutButton;
