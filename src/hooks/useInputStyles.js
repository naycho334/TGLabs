import { useCallback, useState } from "react"

export const useInputStyles = () => {
  const [containers, setContainers] = useState([]);

  const setContainerRef = (el) => {
    if (!el) return;
    if (!el.getAttribute("data-container")) {
      el.setAttribute("data-container", 1);
      setContainers(state => ([...state, el]));
    }
  };

  const handleFocusBlur = useCallback((type) => {
    containers.forEach(el => {
      el.classList[type === "focus" ? 'add' : 'remove']("focus")
    })
  }, [containers]);

  return [setContainerRef, handleFocusBlur]
}