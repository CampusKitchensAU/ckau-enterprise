import { useEffect, useState } from "react";

const sizes = {
  xs: "320px",
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  xxl: "1536px",
};

type Screen = keyof typeof sizes;

/**
 * Hook to check if the screen size is greater than or equal to the screen size passed in.
 * https://upmostly.com/tutorials/how-to-use-media-queries-in-react
 * @example const isLargeScreen = useMediaQuery('lg');
 * @param screen - screen size to check against, e.g. 'sm', 'md', 'lg'
 * @returns boolean - true if screen size is greater than or equal to the screen size passed in
 */
export const useMediaQuery = (screen: Screen) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const query = `(min-width: ${sizes[screen]})`;
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => setMatches(media.matches);
    window.addEventListener("resize", listener);
    return () => window.removeEventListener("resize", listener);
  }, [matches, screen]);

  return matches;
};
