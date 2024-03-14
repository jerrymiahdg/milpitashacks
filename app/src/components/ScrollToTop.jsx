import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const ScrollToTop = () => {
  const location = useLocation();

  useEffect(() => {
    console.log(location.pathname);
    if (location.pathname === "/prospectus") {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return null;
};
