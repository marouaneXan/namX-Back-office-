import React, { useContext } from "react";
import Button from "../components/Button";
import Add from "../components/Car/Type/Add";
import TypeRow from "../components/Car/Type/TypeRow";
import { ModalContext } from "../Context/Car/ModalContext";
import { TypeContext } from "../Context/Car/Types";
import { Type } from "../types/CarTypes";

const Types = () => {
  const { types }: any = useContext(TypeContext);
  const { open }: any = useContext(ModalContext);
  return (
    <div className="flex overflow-hidden bg-white pt-16">
      <div className="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64">
        <div className="flex flex-col my-6 mx-4 rounded-2xl shadow-xl shadow-gray-200">
          <Button content="Add new Type" />
          {open && (
            <>
              <Add />
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          )}
          <div className="overflow-x-auto rounded-2xl">
            <div className="inline-block min-w-full align-middle">
              <div className="overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200 table-fixed">
                  <thead className="bg-white">
                    <tr>
                      <th
                        scope="col"
                        className="p-4 text-xs font-medium text-left text-gray-500 uppercase lg:p-5"
                      >
                        Car type
                      </th>
                      <th
                        scope="col"
                        className="p-4 text-xs font-medium text-left text-gray-500 uppercase lg:p-5"
                      >
                        Details
                      </th>
                      <th
                        scope="col"
                        className="p-4 text-xs font-medium text-left text-gray-500 uppercase lg:p-5"
                      >
                        Colors
                      </th>
                      <th
                        scope="col"
                        className="p-4  text-xs font-medium text-left text-gray-500 uppercase lg:p-5"
                      >
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {types?.map((type: Type) => (
                      <>
                        <TypeRow key={type._id} type={type} />
                      </>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Types;
