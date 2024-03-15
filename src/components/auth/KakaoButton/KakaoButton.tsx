import { supabase } from "../../../libs/supabase";
import { kakaoButtonStyle } from "./KakaoButton.style";

const KakaoButton = () => {
  async function signInWithKakao() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "kakao",
    });
    console.log(data);
    console.log(error);
  }

  return (
    <button onClick={signInWithKakao} css={kakaoButtonStyle}>
      카카오 로그인
    </button>
  );
};

export default KakaoButton;
