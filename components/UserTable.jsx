const UserTable = ({ users }) => {
  return (
    <div className="overflow-x-auto w-1/2">
      <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
              ID
            </th>
            <th className="text-left py-3 px-4 uppercase font-semibold text-sm">
              Name
            </th>
          </tr>
        </thead>
        <tbody className="text-gray-700">
          {users.map((user) => (
            <tr key={user.id} className="border-b hover:bg-gray-100">
              <td className="text-left py-3 px-4">{user.id}</td>
              <td className="text-left py-3 px-4">{user.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
