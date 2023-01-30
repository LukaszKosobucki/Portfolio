import { createContext, useMemo, useState, useEffect } from "react";

interface IChildren {
  children: React.ReactNode;
}
interface GlobalStateContextType {
  matches: boolean;
}

export const GlobalStateContext = createContext<GlobalStateContextType>(
  {} as GlobalStateContextType
);

export const GlobalStateProvider = ({ children }: IChildren) => {
  const [matches, setMatches] = useState<boolean>(
    window.matchMedia("(max-width: 600px)").matches
  );

  useEffect(() => {
    window
      .matchMedia("(max-width: 600px)")
      .addEventListener("change", (e) => setMatches(e.matches));
  });

  const values = { matches };

  const cachedValue = useMemo(
    () => values,
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [matches]
  );

  return (
    <GlobalStateContext.Provider value={cachedValue}>
      {children}
    </GlobalStateContext.Provider>
  );
};
