import React, { useEffect } from "react";
import "./Snackbar.css";

interface ISnackbar {
  message: string;
  severity: "success" | "error";
  isVisible: boolean;
  onClose: () => void;
}

const Snackbar = ({ isVisible, message, severity, onClose }: ISnackbar) => {
    useEffect(() => {
      const handleKeyDown = (e: KeyboardEvent) => {
          if (e.key === "Escape" && isVisible) {
            onClose();
          }
          
        };
      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isVisible, onClose]);

  return isVisible ? (
    <div className={`snackbar snackbar--${severity}`}>
      <p>{message}</p>
      <button className="snackbar__close" onClick={onClose}>
        &times;
      </button>
    </div>
  ) : null;
};

export default Snackbar;
