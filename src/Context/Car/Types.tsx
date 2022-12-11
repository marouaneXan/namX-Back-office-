import { createContext, useState, useMemo, useEffect } from "react";
import axios from "axios";
import { Proxy } from "../../Config/Proxy";
import { Type } from "../../types/CarTypes";
export const TypeContext = createContext(null);
const TypeContextProvider = ({ children }: any) => {
  const [types, setTypes] = useState<Type[] | null>([]);
  const [type, setType] = useState<Type[] | null>([]);
  const [loading, setLoading] = useState<Boolean>(false);
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

  //Add type
  const addType = async (data: Type) => {
    setLoading(true);
    const res = await axios.post(`${Proxy}/types`, data).catch((err) => {
      const message: any =
        (err.res && err.res.data && err.res.data.message) || err || err.message;
      if (message) {
        setLoading(false);
        console.log(message);
        setLoading(false);
      }
    });
    if (res && res.data) {
      getTypes();
    }
  };

  // get type by id
  const viewType = async (type_id: string) => {
    setLoading(true);
    const res = await axios.get(`${Proxy}/types/${type_id}`).catch((err) => {
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
      setType(res.data);
    }
  };
  useEffect(() => {
    getTypes();
  }, []);

  const values: any = useMemo(
    () => ({
      types,
      empty,
      loading,
      viewType,
      type,
      addType,
    }),
    [types, empty, loading, viewType, type, addType]
  );
  return <TypeContext.Provider value={values}>{children}</TypeContext.Provider>;
};
export default TypeContextProvider;
