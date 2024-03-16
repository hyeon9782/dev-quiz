import { useNavigate } from "react-router-dom";
import { supabase } from "../../../libs/supabase";

const SignOutButton = () => {
  const navigate = useNavigate();
  async function signOut() {
    const { error } = await supabase.auth.signOut();
    console.log(error);
    if (!error) {
      navigate("/");
    }
  }

  return <button onClick={signOut}>로그아웃</button>;
};

export default SignOutButton;
