import homeStyles from '../styles/Home.module.css'
import Button from '../components/Button'
import Image from 'next/image'
import moviepic from '../public/images/image.jpg'
import MovieList from '../components/Popular/MovieList'
import Meta from '../components/Meta'


export default function Home({popular, upcoming}) {

  return (
    <>
	<Meta />
	<section className={`bg-black flex items-center px-12 ${homeStyles.hombanner}`}>
		<div className="container m-auto">
			<span className="text-green-500 uppercase font-bold">podcast</span>
			<h1 className="text-white text-5xl uppercase font-bold">Discover New Knowledge<br /> Anywhere and Anytime!</h1>
			
			<div className="mt-6">
				<Button name="read more" />
			</div>
		</div>
	</section>
	<section className="p-4 bg-green-500 px-12">
		<div className="flex container m-auto">
			<div className="text-white font-bold text-2xl">Millions of movies, TV shows and people to discover. Explore now.</div>
		</div>
	</section>
	<section className="bg-black p-12">
		<div className="container m-auto">
			<h2 className="text-green-500 text-xl font-bold uppercase">What's Popular</h2>
			<div className="mt-4">
				<MovieList popular={popular} />
			</div>
		</div>
	</section>
	<section className="p-12">
		<div className="container m-auto">
			<h2 className="text-green-500 text-xl font-bold uppercase">Upcoming Movies</h2>
			<div className="mt-4">
				<div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
					{upcoming && upcoming.slice(0, 8).map(movie => (
						<div key={movie.id} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
							<img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} className="rounded-md w-full" alt=""/>
							<div>
								<h3 className="text-lg font-bold text-black uppercase ">Title: {movie.title}</h3>
								<p className="text-green-500">Release Date: {movie.release_date} </p>
								<button className="bg-transparent border-green-500 border hover:bg-green-500 px-6 py-2 rounded-md uppercase text-green-500 hover:text-white text-sm mt-2 w-full">view movie</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	</section>
	</>
  )
}

export const getStaticProps = async () => {
	const APP_KEY = '024a419efaa3f8862e57d7434e765ffa'; 
	const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${APP_KEY}&language=en-US&page=1`)
	const data = await response.json()
	const popular = data.results

	const responsetwo = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=${APP_KEY}&language=en-US&page=1`)
	const datatwo = await responsetwo.json()
	const upcoming = datatwo.results

	return {
	  props: {
		popular,
		upcoming
	  },
	}
  }
