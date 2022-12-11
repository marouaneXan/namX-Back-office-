import { createContext, useState, useMemo } from "react";
export const ModalContext = createContext(null);
const ModalContextProvider = ({ children }: any) => {
  const [open, setOpen] = useState<Boolean>(false);
  
  
  const values: any = useMemo(
    () => ({
    }),
    [
    ]
  );
  return <ModalContext.Provider value={values}>{children}</ModalContext.Provider>;
};
export default ModalContextProvider;
