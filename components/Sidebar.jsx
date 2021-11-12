import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../public/images/audiomedia-logo.png'
import styles from '../styles/Nav.module.css'

const Sidebar = ({open}) => {
	return (
		<div>
			<div className={`${styles.sideBarContainer} ${open ? styles.active : ''} px-6`}>
				<div className="flex justify-start py-4">
					<Image className="text-center" src={logo} alt="company logo" />
				</div>
				<ul className="text-black w-full">
					<li className="flex py-4 cursor-pointer">
						<Link href='/' className="uppercase nav-item w-full text-left font-bold">
							Home
						</Link>
					</li>
					<li className="flex py-4 cursor-pointer">
						<Link href='/' className="uppercase nav-item w-full text-left font-bold">
							Services Offered
						</ Link>
					</li>
					<li className="flex py-4 cursor-pointer">
						<Link href='/about' className="uppercase nav-item w-full text-left font-bold">
							About Us
						</Link>
					</li>
					<li className="flex py-4 cursor-pointer">
						<Link href='/' className="uppercase nav-item w-full text-left font-bold">
							Contact us
						</Link>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Sidebar
