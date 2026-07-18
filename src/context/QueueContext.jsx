import { createContext, useState } from "react";

export const QueueContext = createContext();

export function QueueProvider({ children }) {
  const [queue, setQueue] = useState([]);

  return (
    <QueueContext.Provider value={{ queue, setQueue }}>
      {children}
    </QueueContext.Provider>
  );
}