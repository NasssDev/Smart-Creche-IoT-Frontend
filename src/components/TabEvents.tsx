export const TabEvents = () => {
    return (
        <section className="container px-4 mx-auto">
            <div className="sm:flex sm:justify-between">
            <input type="date" />

    <select>   
        <option value="#">Sensors</option>
        <option value="#">Motion</option>
        <option value="#">Temperature</option>  
        <option value="#">Humidity</option>
        <option value="#">CO2</option>
        <option value="#">Sound</option>
    </select>

        <div className="flex items-center mt-4 gap-x-3">
            <button className="w-1/2 px-5 py-2 text-sm text-gray-800 transition-colors duration-200 bg-white border rounded-lg sm:w-auto ">
                Events
            </button>

            <button className="w-1/2 px-5 py-2 text-sm text-gray-800 transition-colors duration-200 bg-white border rounded-lg sm:w-auto">
                Sensors
            </button>
        </div>
    </div>

    <div className="flex flex-col mt-6">    
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden border border-gray-200">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500">
                                    <div className="flex items-center px-auto gap-x-3">
                                        <input type="checkbox" className="text-blue-500 border-gray-300 rounded"></input>
                                        <span>Select</span>
                                    </div>
                                </th>

                                <th scope="col" className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 ">
                                    Date
                                </th>

                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                                    Time
                                </th>

                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                                    Type
                                </th>

                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500">
                                    Action
                                </th>

            
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200 ">
                            <tr>
                                <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                    <div className="inline-flex items-center gap-x-3">
                                        <input type="checkbox" className="text-blue-500 border-gray-300 rounded"></input>
                                    </div>
                                </td>
                                <td className="px-12 py-4 text-sm font-normal text-gray-700 whitespace-nowrap">
                                   12 juin 2023
                                </td>
                                <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">22:20</td>
                                <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">Air conditioning</td>
                                <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">Adjusted temperature</td>
                                
                            </tr>

                            <tr>
                                <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                    <div className="inline-flex items-center gap-x-3">
                                        <input type="checkbox" className="text-blue-500 border-gray-300 rounded"></input>
                                    </div>
                                </td>
                                <td className="px-12 py-4 text-sm font-normal text-gray-700 whitespace-nowrap">
                                    11 juin 2023
                                </td>
                                <td className="px-4 py-4 text-sm text-gray-500 ">21:45</td>
                                <td className="px-4 py-4 text-sm text-gray-500 ">Night light activated</td>
                                <td className="px-4 py-4 text-sm text-gray-500 ">Light off</td>
                            
                            </tr>

                            <tr>
                                <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                    <div className="inline-flex items-center gap-x-3">
                                        <input type="checkbox" className="text-blue-500 border-gray-300 rounded"></input>

                                      
                                    </div>
                                </td>
                                <td className="px-12 py-4 text-sm font-normal text-gray-700 whitespace-nowrap">
                                    11 juin 2023
                                </td>
                                <td className="px-4 py-4 text-sm text-gray-500 ">21:07</td>
                                <td className="px-4 py-4 text-sm text-gray-500 ">Motion detected</td>
                                <td className="px-4 py-4 text-sm text-gray-500 ">Light on</td>
                            
                            </tr>

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

   
</section>
    )
}