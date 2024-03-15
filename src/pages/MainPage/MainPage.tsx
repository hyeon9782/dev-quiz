import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Container from "../../components/layout/Container/Container";
import {
  cardStyle,
  containerStyle,
  listStyle,
  titleStyle,
} from "./MainPage.style";
import { supabase } from "../../libs/supabase";
import SignOutButton from "../../components/auth/SignOutButton/SignOutButton";

// 추후에 디자인 시스템 Card 컴포넌트로 전환
const MainPage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState("");

  const getUser = async () => {
    const { data } = await supabase.auth.getUser();

    const name = data?.user?.user_metadata.full_name;

    console.log(name);

    setUser(name);
  };

  useEffect(() => {
    getUser();
  }, []);

  const isLogin = user !== undefined;

  return (
    <Container>
      <div css={containerStyle}>
        <h1 css={titleStyle}>환영합니다! {isLogin ? user : "게스트"}님!</h1>
        <SignOutButton />
        <div css={listStyle}>
          <button onClick={() => navigate("/practice")} css={cardStyle}>
            연습하기
          </button>
          <button
            onClick={() => navigate("/room")}
            css={cardStyle}
            disabled={!isLogin}
          >
            게임하기
          </button>
          <button
            onClick={() => navigate("/create")}
            css={cardStyle}
            disabled={!isLogin}
          >
            문제생성
          </button>
        </div>
      </div>
    </Container>
  );
};

export default MainPage;
