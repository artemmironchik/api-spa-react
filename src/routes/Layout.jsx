import React from "react"
import { NavLink, Outlet } from "react-router-dom";
const setActive = ({ isActive }) =>
  isActive ? "text-black underline underline-offset-4" : "text-gray-500";

export default function Layout() {
    return (
        <div>
            <header className="flex justify-end pt-6 pr-16 text-xl">
                <div>
                    <nav className="flex gap-10">
                        <NavLink to="/" end className={setActive}>
                            Main
                        </NavLink>
                        <NavLink to="/users" end className={setActive}>
                            Users
                        </NavLink>
                        <NavLink to="/albums" end className={setActive}>
                            Albums
                        </NavLink>
                    </nav>
                </div>
            </header>
            <main>
                <Outlet></Outlet>
            </main>
            <footer>
                <div>
                    <p> 
                        Created by{" "}
                        <a href="https://github.com/artemmironchik">Artem Mironchik</a>
                    </p>
                    <p>2022</p>
                </div>
            </footer>
        </div>
    )
}