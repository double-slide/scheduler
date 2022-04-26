import { useState } from "react";

export function useVisualMode(initial) {
  const [history, setHistory] = useState([initial]);

  function transition(mode, replace = false) {
    
    if (replace) {
      const newHistory = [ ...history.slice(0, - 1), mode ];
      setHistory(newHistory);
      return;
    }

    const newHistory = [ ...history, mode ]; 
    setHistory(newHistory);
    return;
  };

  function back() {

    if (history.length === 1) {
      return;
    }

    const newHistory = history.slice(0, -1);
    setHistory(newHistory);
    return;
  };
  
  return {
    mode: history[history.length - 1],
    transition, 
    back };
};