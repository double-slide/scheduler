import { useState } from "react";

const useVisualMode = (initial) => {

  const [history, setHistory] = useState([initial]);

  const transition = (mode, replace = false) => {

    if (replace) {
      setHistory(prev => [...prev.slice(0, -1), mode]);
      return;
    }

    setHistory(prev => [...prev, mode]);
    return;
  };

  const back = () => {

    if (history.length > 1) {
      setHistory(prev => [...prev.slice(0, -1)]);
      return;
    }

    return;
  };

  return {
    mode: history[history.length - 1],
    transition,
    back
  };

};






export { useVisualMode };