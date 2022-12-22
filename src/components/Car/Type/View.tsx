import React, { useContext } from "react";
import { TypeContext } from "../../../Context/Car/Types";
import { Color, Detail } from "../../../types/CarTypes";
const View = () => {
  // const { closeModalAdd }: any = useContext(TypeContext);
  const { type }: any = useContext(TypeContext);
  console.log(type);
  return (
    <div className="flex overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center md:inset-0 h-modal sm:h-full">
      <div className="relative px-4 w-full max-w-2xl h-full md:h-auto">
        <div className="relative bg-white rounded-2xl shadow-lg">
          <div className="flex justify-between items-start p-5 rounded-t border-b">
            <h3 className="text-xl font-semibold">View</h3>
            <button
              onClick={close}
              type="button"
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-2xl text-sm p-1.5 ml-auto inline-flex items-center"
              data-modal-toggle="add-product-modal"
            >
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
          <div className="px-6 py-8 flex space-x-8">
            <div className="w-full">
              <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                Car type :
              </h2>
              <ul className="space-y-1 max-w-md list-disc list-inside text-gray-500 dark:text-gray-400">
                <li>{type.car_type}</li>
              </ul>
            </div>
            <div className="w-full">
              <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                Car details :
              </h2>
              <ul className="space-y-1 max-w-md list-disc list-inside text-gray-500 dark:text-gray-400">
                {type?.details?.map((detail: Detail) => (
                  <li key={detail._id}>
                    <span className="font-semibold text-gray-900 dark:text-white">
                      {detail.key}
                    </span>
                    : {detail.value}
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full">
              <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
                Colors available
              </h2>
              <div className="flex items-center">
                {type?.color?.map((c: Color) => (
                  <div
                    className="border rounded-full p-3"
                    style={{ backgroundColor: `${c.desc}` }}
                    key={c._id}
                  ></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default View;
