import React from 'react'
import logo from "../src/assets/logo.png";
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div>
        
      <header className="p-4 bg-violet-200 text-gray-600">
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
</header>
    </div>
  )
}

export default Header
