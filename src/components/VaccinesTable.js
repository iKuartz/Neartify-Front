/* eslint-disable react/prop-types */
const VaccinesTable = ({ vaccines }) => (
  <div className="flex flex-col mt-auto">
    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div className="inline-block min-w-full sm:px-6 lg:px-8">
        <div className="overflow-hidden">
          <table className="min-w-full">
            <thead className="bg-white border-b">
              <tr>
                <th
                  scope="col"
                  className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                >
                  Vaccine
                </th>
                <th
                  scope="col"
                  className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                >
                  Dose
                </th>
                <th
                  scope="col"
                  className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                >
                  Date
                </th>
              </tr>
            </thead>
            <tbody>
              {vaccines.map((vaccine, index) => (
                <tr
                  // eslint-disable-next-line react/no-array-index-key
                  key={index}
                  className="bg-white border-t transition duration-300 ease-in-out hover:bg-gray-100"
                >
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {vaccine.name}
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {vaccine.dose}
                  </td>
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {vaccine.date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
);

export default VaccinesTable;
