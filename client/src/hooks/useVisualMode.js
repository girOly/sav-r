import { useState } from "react";

// Used to chose which view to render in Appointment/index.js
export function useVisualMode(base) {
  const [mode, setMode] = useState(base);
  const [history, setHistory] = useState([base]);

  const transition = (change, replace) => {
    setMode(change);
    if (replace) {
      setHistory(prev => [...prev.slice(0, prev.length - 1), change]);
    } else {
      setHistory(prev => [...prev, change]);
    }
  };

  const back = () => {
    if (history.length > 1) {
      setMode(history[history.length - 2]);
      setHistory(prev => [...prev.slice(0, prev.length - 1)]);
    }
  };

  return {
    mode,
    transition,
    back
  };
}
