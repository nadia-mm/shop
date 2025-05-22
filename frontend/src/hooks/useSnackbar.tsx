import { useState, useCallback, useEffect } from "react";
import Snackbar from "../components/snackbar/Snackbar";

type TSnackbarSeverity = "error" | "success";

const useSnackbar = () => {
  const [isSnackbarVisible, setSnackbarVisible] = useState<boolean>(false);
  const [snackbarMessage, setSnackbarMessage] = useState<string>("");
  const [snackbarSeverity, setSnackbarSeverity] =
    useState<TSnackbarSeverity>("success");

  const showSnackbar = useCallback(
    (message: string, severityType: TSnackbarSeverity) => {
      setSnackbarMessage(message);
      setSnackbarSeverity(severityType);
      setSnackbarVisible(true);
    },
    [setSnackbarMessage, setSnackbarSeverity, setSnackbarVisible]
  );

  const handleClose = useCallback(() => {
    setSnackbarVisible(false);
  }, [setSnackbarVisible]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isSnackbarVisible) {
        handleClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isSnackbarVisible, handleClose]);

  const SnackbarComponent = () => (
    <Snackbar
      isVisible={isSnackbarVisible}
      message={snackbarMessage}
      severity={snackbarSeverity}
      onClose={handleClose}
    />
  );

  return { showSnackbar, SnackbarComponent };
};

export default useSnackbar;
