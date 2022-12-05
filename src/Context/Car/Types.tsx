import { createContext, useState, useMemo } from "react";
export const TypeContext = createContext(null);
const TypeContextProvider = ({ children }: any) => {
  const [types, setTypes] = useState();

  // get all types
  const getTypes = async () => {
    
  };
  
  const values: any = useMemo(
    () => ({
    }),
    [
    ]
  );
  return <TypeContext.Provider value={values}>{children}</TypeContext.Provider>;
};
export default TypeContextProvider;
