import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../redux/users/actions';
import { ListElement } from '../components/ListElement';

export default function Users() {
  const dispatch = useDispatch();
  const {user: userData} = useSelector(state => state)
  const users = userData.users

  useEffect(() => {
    dispatch(fetchUsers)
  }, [dispatch])

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
