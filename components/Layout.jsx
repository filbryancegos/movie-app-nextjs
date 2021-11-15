import Nav from './Nav'
import Footer from './Footer'

const Layout = ({children}) => {
	return (
		<>
			<Nav/>
			<main className="min-h-screen">
				{children}
			</main>
			<Footer />
		</>
	)
}

export default Layout

