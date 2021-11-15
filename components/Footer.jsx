import Link from 'next/link'
import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin } from "react-icons/fi";

const Footer = () => {
	return (
		<div className="bg-black p-6">
			<div className="container m-auto flex justify-center sm:justify-between text-white flex-wrap">
				<div className="text-center sm:text-left">We use cookies to help give you a better experience on TMDB</div>
				<div className="flex items-center space-x-2 mt-4 sm:mt-0">
					<Link href="https://www.facebook.com/">
						<a target="_blank">
							<FiFacebook />
						</a>
					</ Link>

					<Link href="https://www.instagram.com/filbryan/">
						<a target="_blank">
							<FiTwitter />
						</a>
					</ Link>

					<Link href="https://twitter.com/BryanEgos">
						<a target="_blank">
							<FiInstagram />
						</a>
					</ Link>

					<Link href="https://www.linkedin.com/in/fil-bryan-egos-a5104910a/">
						<a target="_blank">
							<FiLinkedin />
						</a>
					</ Link>

				</div>
			</div>
		</div>
	)
}

export default Footer
