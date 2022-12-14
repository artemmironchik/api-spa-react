import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
const setActive = ({ isActive }) =>
  isActive ? 'text-black underline underline-offset-4' : 'text-gray-500';

export default function Layout() {
  return (
    <div className="m-auto max-w-6xl px-10 min-h-screen flex flex-col py-8">
      <header className="flex justify-end text-xl">
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
      </header>
      <main className="pb-8 flex-1 flex">
        <Outlet></Outlet>
      </main>
      <footer className="border-t border-black">
        <div className="flex justify-between mt-4">
          <p>
            Created by{' '}
            <a
              href="https://github.com/artemmironchik"
              className="text-blue-700 hover:underline cursor-pointer"
            >
              Artem Mironchik
            </a>
          </p>
          <p>2022</p>
        </div>
      </footer>
    </div>
  );
}
