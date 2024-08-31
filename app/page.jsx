import { createUser, getUser } from "@/Actions/UserApi";
import UserTable from "@/components/UserTable";

const userPage = async () => {
  const user = await getUser();

  let content;
  if (user.success) {
    content = <UserTable users={user.payload} />;
  } else if (!user.success) {
    content = <div>{user.message}</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8 w-4/5">
      <h1 className="text-3xl font-bold mb-6">User List</h1>
      <div className="flex items-center justify-center">
        {content}

        <form
          action={createUser}
          className="max-w-md mx-auto p-4 shadow-md rounded-md bg-white"
        >
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-bold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter user name"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md"
          >
            Add User
          </button>
        </form>
      </div>
    </div>
  );
};

export default userPage;
