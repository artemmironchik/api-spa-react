import { Link } from "react-router-dom";

export default function Main() {
    return (
        <div>
            <h2>Welcome to my page !</h2>
            <h3>Choose the page you would like to visit</h3>
            <div>
                <Link to="/users">Users</Link>
                <Link to="/albums">Albums</Link>
            </div>
            <p>P.S. There should be many pages to choose but I was too lazy to make other pages so pretend like there are {":)"}</p>
        </div>
    )
}