import { createContext, useState, useMemo } from "react";
export const ModalContext = createContext(null);
const ModalContextProvider = ({ children }: any) => {
  const [open, setOpen] = useState<Boolean>(false);

  const show=()=>{
    setOpen(true)
  }
  
  
  const values: any = useMemo(
    () => ({
        open,
        show
    }),
    [
        open,
        show
    ]
  );
  return <ModalContext.Provider value={values}>{children}</ModalContext.Provider>;
};
export default ModalContextProvider;
