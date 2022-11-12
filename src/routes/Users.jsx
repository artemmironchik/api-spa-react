import { useLoaderData } from 'react-router-dom';
import { getUsers } from '../api/usersApi';
import { ListElement } from '../components/ListElement';
export const loader = async () => {
  const users = await getUsers();
  return { users };
};

export default function Users() {
  const { users } = useLoaderData();

  return (
    <div className="flex flex-col pt-16 text-xl underline">
      {users.map((user) => (
        <ListElement
          list={user}
          listName="users"
        />
      ))}
    </div>
  );
}
