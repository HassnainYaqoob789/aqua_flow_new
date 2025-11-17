import { useEffect } from "react";
import { Dispatch, SetStateAction } from "react";
import useLocalStorage from "./useLocalStorage";

type ColorMode = "light" | "dark";

const useColorMode = (): [ColorMode, Dispatch<SetStateAction<ColorMode>>] => {
  const [colorMode, setColorMode] = useLocalStorage<ColorMode>("color-theme", "light");

  useEffect(() => {
    if (typeof document === "undefined") return;

    const className = "dark";
    const bodyClass = document.body.classList;

    if (colorMode === "dark") {
      bodyClass.add(className);
    } else {
      bodyClass.remove(className);
    }
  }, [colorMode]);

  return [colorMode, setColorMode];
};

export default useColorMode;