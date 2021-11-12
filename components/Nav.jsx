import Link from 'next/link'
import { useRouter } from 'next/router';
import Image from 'next/image'
import logo from '../public/images/audiomedia-logo.png'
import React, { useState, useEffect } from 'react'
import Sidebar from './Sidebar'
import styles from '../styles/Nav.module.css'

import { FiAlignCenter, FiX } from "react-icons/fi";

const Nav = () => {
	const [open, setOpen] = useState(false)
	const ref = React.createRef();
	const router = useRouter();

	useEffect(() => {

		const clickOutside = (e) => {
			if (open && ref.current && !ref.current.contains(e.target)) {
				setOpen(false)
			}
		}
		
		document.addEventListener('click', clickOutside)

		return () => {
			document.removeEventListener('click', clickOutside)
		}
	}, [open])

	return (
		<>
			<div className="p-4  shadow-lg">
				<div className="flex justify-between items-center container m-auto">
					<Image src={logo} width="150" alt="company logo" />
					<nav className="text-black hidden sm:block">
						<ul className={`flex space-x-4`}>
							<li className="navItem">
								<Link href="/">
									<a className={router.pathname == "/" ? "active" : ""}>
										Movie
									</a>
								</Link>
							</li>
							<li className="navItem">
								<Link href="/people">
									<a className={router.pathname == "/people" ? "active" : ""}>
										People
									</a>
								</Link>
							</li>
						</ul>
					</nav>
					<div ref={ref} onClick={() => setOpen(!open)} className="block sm:hidden cursor-pointer">
						{!open ? (
							<FiAlignCenter className="text-2xl" />
						): (
							<FiX  className="text-2xl" />
						)}
					</div>
				</div>
			</div>
			<Sidebar open={open} />
		</>
	)
}

export default Nav
