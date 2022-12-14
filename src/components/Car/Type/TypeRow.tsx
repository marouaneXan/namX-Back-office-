import React, { useContext } from "react";
import { ModalContext } from "../../../Context/Car/ModalContext";
import { TypeContext } from "../../../Context/Car/Types";
import { Color, Type } from "../../../types/CarTypes";
import View from "./View";
interface Props {
  type: Type;
}

const TypeRow = (props: Props) => {
  const { show, open }: any = useContext(ModalContext);
  const {viewType}:any=useContext(TypeContext)
  return (
    <>
      {open && (
        <>
          <View />
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      )}
      <tr className="hover:bg-gray-100">
        <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap lg:p-5">
          <div className="text-base font-semibold text-gray-900">
            {props.type.car_type}
          </div>
        </td>
        <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5">
          {props.type.car_type}
        </td>
        <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5">
          <div className="flex items-center">
            {props.type.color.map((c: Color) => (
              <div
                className="border rounded-full p-3"
                style={{ backgroundColor: `${c.desc}` }}
                key={c._id}
              ></div>
            ))}
          </div>
        </td>
        <td className="p-4 flex items-center mt-1 space-x-1 whitespace-nowrap lg:p-5">
          <button
            onClick={() => {
              show();
              viewType(props.type._id)
            }}
            className="inline-flex items-center px-2 py-2 text-gray-800 text-sm font-medium rounded-md"
          >
            View
          </button>
          <button className="inline-flex items-center px-2 py-2 text-red-500 text-sm font-medium rounded-md">
            Delete
          </button>
          <button className="inline-flex items-center px-2 py-2 text-indigo-500 text-sm font-medium rounded-md">
            Update
          </button>
        </td>
      </tr>
    </>
  );
};

export default TypeRow;
