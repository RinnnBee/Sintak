import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Layout() {
    return (
        <div className="w-full min-h-screen">

            <header className="w-full bg-amber-950 p-6">
                <nav className="flex flex-row justify-between">
                    <div>
                        <h1>Ini Logo</h1>
                    </div>
                    <ul className="text-white flex space-x-4">
                        <li> <a href="/home">Home</a></li>
                        <li> <a href="/Contact">Contact</a></li>
                        <li> <a href="/Product">Product</a></li>
                    </ul>
                </nav>
            </header>

            <main className='h-screen'>
                <Outlet />
            </main>

            <footer className='bottom-0 w-full bg-white p-4'>
                <p>© 2025 MyWebsite</p>
            </footer>

        </div>
    )
}
