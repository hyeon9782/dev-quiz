import { clockStyle, progressBarStyle, timerBoxStyle } from "./Timer.style";
import { GiAlarmClock } from "react-icons/gi";

const Timer = () => {
  return (
    <div css={timerBoxStyle}>
      <div css={progressBarStyle}></div>
      <div css={clockStyle}>
        <GiAlarmClock />
      </div>
    </div>
  );
};

export default Timer;
