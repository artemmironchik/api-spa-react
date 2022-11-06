import React from "react"
import { NavLink, Outlet } from "react-router-dom";

export default function Layout() {
    return (
        <div>
            <header>
                <div>
                    <nav>
                        <NavLink to="/">
                            Main
                        </NavLink>
                        <NavLink to="/users">
                            Users
                        </NavLink>
                        <NavLink to="/albums">
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