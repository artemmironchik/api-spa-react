import { useLoaderData, Link } from "react-router-dom";
import { getUsers } from "../api/usersApi";
export const loader = async () => {
    const users = await getUsers();
    return {users};
};

export default function Users() {
    const {users} = useLoaderData()

    return (
        <div className="pt-16 text-xl underline">
            {users.map(user => 
                (
                <Link
                key={user.id}
                to={`/users/${user.id}`}
                className="hover:text-blue-700"
                >
                    <div>{user.name}</div>
                </Link>
            ))}
        </div>
    )
}