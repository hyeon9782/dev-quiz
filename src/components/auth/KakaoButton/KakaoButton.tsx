import { useNavigate } from "react-router-dom";
import { supabase } from "../../../libs/supabase";
import { kakaoButtonStyle } from "./KakaoButton.style";

const KakaoButton = () => {
  const navigate = useNavigate();
  async function signInWithKakao() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "kakao",
      options: { redirectTo: `${window.location.origin}/main` },
    });
    console.log(data);
    console.log(error);
    if (!error) {
      navigate("/main");
    }
  }

  return (
    <button onClick={signInWithKakao} css={kakaoButtonStyle}>
      카카오 로그인
    </button>
  );
};

export default KakaoButton;
