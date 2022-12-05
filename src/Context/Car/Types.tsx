import { createContext, useState, useMemo, useEffect } from "react";
import axios from "axios"
export const TypeContext = createContext(null);
const TypeContextProvider = ({ children }: any) => {
  const [types, setTypes] = useState();
  const [loading,setLoading]=useState<Boolean>(false)
  const [empty, setEmpty] = useState<boolean>(false);
  // get all types
  const getTypes = async () => {
    setLoading(true);
    const res = await axios.get(`${Proxy}/types`).catch((err) => {
      const message: any =
        (err.res && err.res.data && err.res.data.message) || err || err.message;
      if (message) {
        setLoading(false);
        setEmpty(message.response.data.message);
        setTimeout(() => {
          setLoading(false);
        }, 4000);
      }
    });
    if (res && res.data) {
      setLoading(false);
      setTypes(res.data);
    }
  };
  useEffect(()=>{
    getTypes()
  },[])
  
  const values: any = useMemo(
    () => ({
      types,
      empty,
      loading
    }),
    [
      types,
      empty,
      loading
    ]
  );
  return <TypeContext.Provider value={values}>{children}</TypeContext.Provider>;
};
export default TypeContextProvider;
