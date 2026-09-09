import { createContext, useCallback, useContext, useMemo, useState } from "react";

const AlertContext = createContext(undefined);

export const AlertProvider = ({ children }) => {
  const [state, setState] = useState({
    isOpen: false,
    type: 'success',
    message: '',
  });

  const onOpen = useCallback(
    (type, message) => setState({ isOpen: true, type, message }),
    []
  );
  const onClose = useCallback(
    () => setState({ isOpen: false, type: "", message: "" }),
    []
  );
  const value = useMemo(
    () => ({ ...state, onOpen, onClose }),
    [state, onOpen, onClose]
  );

  return (
    <AlertContext.Provider value={value}>
      {children}
    </AlertContext.Provider>
  );
};

export const useAlertContext = () => useContext(AlertContext);