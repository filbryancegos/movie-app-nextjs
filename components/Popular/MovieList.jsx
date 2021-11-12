import MovieItem from './MovieItem'

const MovieList = ({popular}) => {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-12">
			{popular && popular.slice(0, 12).map(movie => (
				<MovieItem key={movie.id} movie={movie} />
			))}
		</div>
	)
}

export default MovieList

