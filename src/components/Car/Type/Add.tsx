import React from "react";
import React, { useContext, useEffect } from "react";
import { Formik, Form } from "formik";
import TextField from "../Formik/TextField";
import { carSchema } from "../../Validation/Car";
import { CarContext } from "../../Context/Car/Car";
interface Prop {
  closeModalAdd: () => void;
}

const CarAdd = (props: Prop) => {
  const {addDetail}:any=useContext(CarContext)
  const values: any = {
    key: "",
    value: "",
  };
  const onSubmit = (values: any) => {
    const { ...data } = values;
    addDetail(data)
  };
  return (
    <Formik
      initialValues={values}
      validationSchema={carSchema}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <div className="flex overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center md:inset-0 h-modal sm:h-full">
          <div className="relative px-4 w-full max-w-2xl h-full md:h-auto">
            <div className="relative bg-white rounded-2xl shadow-lg">
              <div className="flex justify-between items-start p-5 rounded-t border-b">
                <h3 className="text-xl font-semibold">Add Detail</h3>
                <button
                  onClick={props.closeModalAdd}
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-2xl text-sm p-1.5 ml-auto inline-flex items-center">
                    <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
                </button>
              </div>
              <Form className="px-6 py-2 space-y-6">
                <div>
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <TextField label="Key" name="key" type="text" />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <TextField
                        label="Value"
                        name="value"
                        type="text"
                      />
                    </div>
                  </div>
                </div>
                <div className="p-6 rounded-b border-t border-gray-200">
                  <button
                    className="my-1 text-white bg-emerald-500 bg-gradient-to-r from-[#5651e5] to-[#709dff] font-medium rounded-lg text-sm px-8 py-2 text-center hover:scale-[1.02] transition-transform"
                    type="submit"
                  >
                    Add
                  </button>
                </div>
              </Form>
            </div>
          </div>
        </div>
      )}
    </Formik>
  );
};

export default CarAdd;
