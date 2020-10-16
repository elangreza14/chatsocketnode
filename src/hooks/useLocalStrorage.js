import { useEffect, useState } from "react";

const prefix = "chat-socket-";

export const useLocalStrorage = (key, initialValue) => {
  const prefixedKey = prefix + key;
  const [value, setValue] = useState(() => {
    if (process.browser) {
      const jsonValue = localStorage.getItem(prefixedKey);
      if (jsonValue !== null) {
        return JSON.parse(jsonValue);
      }
      if (typeof initialValue === "function") {
        return initialValue();
      } else {
        return initialValue;
      }
    }
  });

  useEffect(() => {
    localStorage.setItem(prefixedKey, JSON.stringify(value));
  }, [prefixedKey, value]);

  return [value, setValue];
};
