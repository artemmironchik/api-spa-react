import { useLoaderData, Link } from "react-router-dom";
export const loader = async () => {
    const users = await fetch(
        'https://jsonplaceholder.typicode.com/users'
    ).then((r) => r.json());
    return {users};
};

export default function Users() {
    const {users} = useLoaderData()

    return (
        <div>
            <p>Users</p>
            {users.map(user => 
                (<Link
                  key={user.id}
                  to={`/users/${user.id}`}
                >
                    <div>{user.name}</div>
                </Link>
            ))}
        </div>
    )
}