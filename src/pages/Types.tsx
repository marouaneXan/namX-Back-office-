import React from 'react'

const Types = () => {
    return (
        <div className="flex overflow-hidden bg-white pt-16">
          <div className="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64">
            <div className="flex flex-col my-6 mx-4 rounded-2xl shadow-xl shadow-gray-200">
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
                        <tr className="hover:bg-gray-100">
                          <td className="p-4 text-sm font-normal text-gray-500 whitespace-nowrap lg:p-5">
                            <div className="text-base font-semibold text-gray-900">
                              {/* {props.client.genre} */}
                              jebkzj
                            </div>
                          </td>
                          <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5">
                            {/* {props.client.nom} */}
                            jebkzj
                          </td>
                          <td className="p-4 text-base font-medium text-gray-900 whitespace-nowrap lg:p-5">
                            {/* {props.client.nom} */}
                            jebkzj
                          </td>
                          <td className="p-4 flex items-center mt-1 space-x-1 whitespace-nowrap lg:p-5">
                            <button className="inline-flex items-center px-2 py-2 text-gray-800 text-sm font-medium rounded-md">
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
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}

export default Types