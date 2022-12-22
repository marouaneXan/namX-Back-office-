import React, { useContext } from 'react'
import Button from "../components/Button";
import Add from "../components/Car/Type/Add";
import DetailAdd from '../components/Detail/DetailAdd';
import DetailRow from "../components/Detail/DetailRow";
import { DetailContext } from '../Context/Car/Detail';
import { TypeContext } from "../Context/Car/Types";
import { Detail } from '../types/CarTypes';


function Details() {
  const {details,showModalAdd,closeModalAdd,displayModalAdd}:any=useContext(DetailContext)
  return (
    <div className="flex overflow-hidden bg-white pt-16">
    <div className="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64">
      <div className="flex flex-col my-6 mx-4 rounded-2xl shadow-xl shadow-gray-200">
        <button 
          onClick= {displayModalAdd} 
        >Add</button>


        {showModalAdd && (
          <>
            <DetailAdd closeModalAdd={closeModalAdd} />
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
                      Key
                    </th>
                    <th
                      scope="col"
                      className="p-4 text-xs font-medium text-left text-gray-500 uppercase lg:p-5"
                    >
                      Value
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {details?.map((detail: Detail) => (
                    <>
                      <DetailRow key={detail._id} detail={detail} />
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
  )
}

export default Details