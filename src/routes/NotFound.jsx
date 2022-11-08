import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div>
            <p>404</p>
            <p>Page not found</p>
            <div>
                <span>Go to page{" "}</span>
                <Link to="/" className="text-sky-600 hover:text-red-400 cursor-pointer">Main</Link>
            </div>
        </div>
    )
}