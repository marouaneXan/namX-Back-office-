import { createContext, useState, useMemo, useEffect } from "react";
import axios from "axios";
import { Proxy } from "../../Config/Proxy";
import { Type } from "../../types/CarTypes";
export const DetailContext = createContext(null);
const DetailContextProvider = ({ children }: any) => {
  const [details, setDetails] = useState<Type[] | null>([]);
  const [detail, setDetail] = useState<Type[] | null>([]);
  const [loading, setLoading] = useState<Boolean>(false);
  const [empty, setEmpty] = useState<boolean>(false);
  const [showModalAdd, setShowModalAdd] = useState<boolean>(false);
  //Close modal Add
  const closeModalAdd = () => {
    setShowModalAdd(false);
  };
  //show modal Add
  const displayModalAdd = () => {
    setShowModalAdd(true);
  };
   // add detail
   const addDetail = async (detail: any) => {
    setLoading(true);
    const res = await axios.post(`${Proxy}/details`, detail).catch((err) => {
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
      setDetail(res.data);
      setShowModalAdd(false)
      getDetails()

    }
  };

  // delete detail 
  const deleteDetail = async (detail_id: string) => {
    setLoading(true);
    const res = await axios.delete(`${Proxy}/details/${detail_id}`).catch((err) => {
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
      setDetail(res.data);
      getDetails()
    }
  };
 

  // get all detail
  const getDetails = async () => {
    setLoading(true);
    const res = await axios.get(`${Proxy}/details`).catch((err) => {
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
      setDetails(res.data);
    }
  };

  useEffect(() => {
   getDetails();
  }, []);

  const values: any = useMemo(
    () => ({
      details,
      empty,
      loading,
      deleteDetail,
      showModalAdd,
      closeModalAdd,
      displayModalAdd,
      addDetail
    }),
    [
      detail,
      empty,
      loading,
      showModalAdd,
      closeModalAdd,
      displayModalAdd,
      deleteDetail,
      addDetail
    ]
  );
  return <DetailContext.Provider value={values}>{children}</DetailContext.Provider>;
};
export default DetailContextProvider;
