import React from 'react'
import logo from "../src/assets/logo.png";
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div>

		<header className="p-4 bg-gradient-to-br from-sky-100 via-violet-50 to-violet-100 backdrop-blur-md border-b border-gray-100 text-gray-600">
      <div className="container flex justify-between h-16 mx-auto items-center">

        {/* Logo */}
        <Link to="/" className="flex items-center p-2">
          <img src={logo} alt="logo" className="w-40 h-auto" />
        </Link>

        {/* Nav */}
        <ul className="hidden lg:flex items-center space-x-6">

          <li>
            <Link
              to="/"
              className="px-4 py-2 border-b-2 border-violet-600 text-violet-600 transition hover:scale-105"
            >
              Accueil
            </Link>
          </li>

          <li>
            <Link
              to="/Notre-agence"
              className="px-4 py-2 border-b-2 border-transparent hover:border-violet-600 transition hover:scale-105"
            >
              A propos
            </Link>
          </li>

          <li>
            <Link
              to="/Services"
              className="px-4 py-2 border-b-2 border-transparent hover:border-violet-600 transition hover:scale-105"
            >
              Nos services
            </Link>
          </li>

          <li>
            <Link
              to="/Contact"
              className="px-4 py-2 border-b-2 border-transparent hover:border-violet-600 transition hover:scale-105"
            >
              Contacts
            </Link>
          </li>

        </ul>
      </div>
    </header>
        
      {/* <header className="p-4 bg-violet-200 text-gray-600">
	<div className="container flex justify-between h-16 mx-auto">
		<a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2">
			 <img src={logo} alt="logo"  className="w-50  h-24"       />
		</a>
		<ul className="items-stretch hidden space-x-3 lg:flex">
			<Link to="/" className="flex">
				<a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-violet-600 border-violet-600">Accueil</a>
			</Link>
			<Link to="/Notre-agence" className="flex">
				<a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 border-transparent hover:border-violet-600">A propos</a>
			</Link>
			<Link to="/Services" className="flex">
				<a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 border-transparent hover:border-violet-600">Nos services</a>
			</Link>
			<Link to="/Contact" className="flex">
				<a rel="noopener noreferrer" href="#" className="flex items-center px-4 -mb-1 border-b-2 border-transparent hover:border-violet-600">Contacts</a>
			</Link>
		</ul>
		
	</div>
</header> */}
    </div>
  )
}

export default Header
