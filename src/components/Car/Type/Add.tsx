import React from "react";

const Add = () => {
  return (
    <div className="flex overflow-y-auto overflow-x-hidden fixed right-0 left-0 top-4 z-50 justify-center items-center md:inset-0 h-modal sm:h-full">
      <div className="relative px-4 w-full max-w-2xl h-full md:h-auto">
        <div className="relative bg-white rounded-2xl shadow-lg">
          <div className="flex justify-between items-start p-5 rounded-t border-b">
            <h3 className="text-xl font-semibold">Add Type</h3>
            <button
              //   onClick={props.closeModalAdd}
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
          <div className="px-6 py-2 space-y-6">
            <div>
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <input name="departure_city" type="text" />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <input name="arrival_city" type="text" />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <input name="departure_date" type="date" />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <input name="departure_time" type="time" />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <input name="arrival_time" type="time" />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="car"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Select an option
                  </label>
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <input name="price" type="number" />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <input name="distance" type="number" />
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
