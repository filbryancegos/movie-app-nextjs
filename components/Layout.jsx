import Nav from './Nav'
import Footer from './Footer'
import Meta from './Meta'
const Layout = ({children}) => {
	return (
		<>
			<Meta/>
			<Nav/>
			<main className="min-h-screen">
				{children}
			</main>
			<Footer />
		</>
	)
}

export default Layout

