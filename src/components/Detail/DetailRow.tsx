import React, { useContext } from "react";
import { Detail } from "../../types/CarTypes";
interface Props {
  detail: Detail;
}

const DetailRow = (props: Props) => {
  return (
    <>
      <tr className="hover:bg-gray-100">
        <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap lg:p-5">
          <div className="text-base font-semibold text-gray-900">
            {props.detail.key}
          </div>
        </td>
        <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5">
          {props.detail.value}
        </td>
        <td className="p-4 flex items-center mt-1 space-x-1 whitespace-nowrap lg:p-5">
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

export default DetailRow;