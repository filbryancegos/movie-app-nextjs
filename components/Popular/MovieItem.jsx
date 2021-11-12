
import Link from 'next/link'
const MovieItem = ({movie}) => {
	return (
		<div className="flex flex-col justify-between">
			<div>
				<Link href={`/movie/${movie.id}`}>
					<a>
						<img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} className="rounded-md" alt=""/>
					</a>
				</Link>
				<h3 className={`text-lg font-bold text-white uppercase mt-4`}>Title: {movie.title}</h3>
				<p className="text-green-500">Release Date: {movie.release_date}0</p>
			</div>
			
			<div className="mt-4">
				<Link href={`/movie/${movie.id}`}>
					<a href="">
						<button className="bg-transparent border-green-500 border hover:bg-green-500 px-6 py-2 rounded-md uppercase text-white text-sm mt-2 w-full">view movie</button>
					</a>
				</Link>
			</div>
			
		</div>
	)
}

export default MovieItem
