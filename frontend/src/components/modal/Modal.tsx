import React, { useEffect } from "react";
import "./Modal.css";

interface IModal {
  isOpen: boolean;
  onClose: () => void;
  onSubmit?: () => void;
  submitButtonText?: string;
  children: React.ReactNode;
  isLoading?:boolean;
  isSubmitDisabled?: boolean;
}

const Modal = ({
  isOpen,
  onClose,
  onSubmit,
  submitButtonText,
  isLoading,
  isSubmitDisabled,
  children,
}: IModal) => {
    useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isOpen) {
        if (e.key === "Escape") {
          onClose();
        }
        if (e.key === "Enter" && onSubmit) {;
            onSubmit();
        }
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, onSubmit]);
  
  if (!isOpen) return null;



  return (
    <div className="modal-overlay" role="dialog" aria-modal="true">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose} aria-label="Fermer">
          &times;
        </button>
        {children}
        <div>
          <button className="modal-cancel" onClick={onClose}>
            Annuler
          </button>
          {onSubmit && (
            <button className="modal-submit" onClick={onSubmit} disabled={isSubmitDisabled}>
              {submitButtonText || "Enregistrer"}
            </button>
          )}
           {isLoading && <p>Chargement...</p>}
        </div>
      </div>
    </div>
  );
};

export default Modal;
