export const WaterLeak = () => {
    return (
        <div className="w-full border border-gray-200 col-span-2 overflow-hidden rounded-2xl">
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                <tr>
                    <th scope="col"
                        className="py-3.5 px-4 text-sm font-normal text-center rtl:text-right text-gray-500 ">
                        <span>Lieu</span>
                    </th>

                    <th scope="col"
                        className="px-12 py-3.5 text-sm font-normal text-center rtl:text-right text-gray-500 ">
                        <span>Date</span>
                    </th>

                    <th scope="col"
                        className="px-4 py-3.5 text-sm font-normal text-center rtl:text-right text-gray-500 ">
                        <span>Status</span>
                    </th>

                </tr>
                </thead>
                <tbody
                    className="bg-white divide-y divide-gray-200 ">
                <tr>
                    <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                        Living Room
                    </td>
                    <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                        <div>
                            23 Jun 2023<br/>
                            <span className="text-gray-500 font-medium">23:14</span>
                        </div>
                    </td>
                    <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <div
                            className="w-3/5 inline-flex items-center px-3 py-1 rounded-lg gap-x-2 bg-emerald-100/60 ">
                            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                            <h2 className="text-sm font-normal text-emerald-500">Processed</h2>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                        Office
                    </td>
                    <td className="px-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                        <div>
                            16 May 2023<br/>
                            <span className="text-gray-500 font-medium">12:28</span>
                        </div>
                    </td>
                    <td className="px-4 py-4 text-sm whitespace-nowrap">
                        <div
                            className="w-3/5 inline-flex items-center px-3 py-1 rounded-lg gap-x-2 bg-amber-100/60 ">
                            <span className="h-1.5 w-1.5 rounded-full bg-amber-500"></span>
                            <h2 className="text-sm font-normal text-amber-500">Pending</h2>
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}