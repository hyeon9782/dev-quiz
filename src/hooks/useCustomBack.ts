import { useEffect } from "react";

type CustomBack = {
  customBack: () => void;
};
const useCustomBack = ({ customBack }: CustomBack) => {
  useEffect(() => {
    const handlePopState = (e: PopStateEvent) => {
      e.preventDefault();
      console.log("커스텀 훅");

      customBack();
    };

    window.addEventListener("popstate", handlePopState);
    history.pushState(null, "", location.href);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [customBack]);
};

export default useCustomBack;
