import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import imageOne from '../../../public/images/image.jpg'

const Movie = ({movie, keyword, recomendation}) => {
	const { keywords } = keyword

	return (
		<section className="min-h-screen">
			<article className="bg-black py-8 ">
				<div className="container m-auto px-6 sm:px-0">
					<div>
						<Link href="/">
							<a>
								<button className="rounded-md px-6 py-2 capitalize text-white bg-green-500 hover:bg-green-600">back</button>
							</a>
						</Link>
					</div>
					<div className="grid grid-cols-1 pt-4">
						<div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
							<div className="col-span-1 flex justify-center sm:justify-start">
								<img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} className="rounded-md w-full" alt=""/>
							</div>
							
							<div className="col-span-1 sm:col-span-3">
								<h1 className="text-white text-3xl font-bold">{movie.title}</h1>
								<h3 className="text-white text-lg font-bold pt-8">Overview</h3>
								<p className="text-white pt-2">{movie.overview}</p>

								<div className="pt-4">
									<h3 className="text-white text-lg font-bold pt-8">Keywords</h3>

									<div className="flex flex-wrap space-x-2">
										{keywords.map(key => 
											<button key={key.id} className="bg-transparent border-green-500 border hover:bg-green-500 px-6 py-2 rounded-full uppercase text-white text-sm mt-2 block">{key.name}</button>
										)}
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</article>

			<article className="py-8">
				<div className="container m-auto px-6 sm:px-0">
					<h2 className="text-black text-xl font-bold uppercase">Recomendations</h2>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6 mt-8">
						{recomendation && recomendation.map(movie => 
							<div key={movie.id}>
								<img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} className="rounded-md w-full" alt=""/>
								<h3 className={`text-lg font-bold text-black uppercase mt-4`}>{movie.title}</h3>
								<p className="text-green-500">Release Date: {movie.release_date}</p>	
							</div>
						)}
												
					</div>
				</div>								
			</article>
			
		</section>
	)
}


export const getStaticProps = async (context) => {
	const APP_KEY = '024a419efaa3f8862e57d7434e765ffa'; 
	const response = await fetch(`https://api.themoviedb.org/3/movie/${context.params.id}?api_key=${APP_KEY}&language=en-US&page=1`)
	const movie = await response.json()

	const keywordRes = await fetch(`https://api.themoviedb.org/3/movie/${context.params.id}/keywords?api_key=${APP_KEY}`)
	const keyword = await keywordRes.json()

	const recomendationRes = await fetch(`https://api.themoviedb.org/3/movie/${context.params.id}/recommendations?api_key=${APP_KEY}&language=en-US&page=1`)
	const results = await recomendationRes.json()

	const recomendation = results.results



  return {
    props: {
		movie,
		keyword,
		recomendation
    },
  }
}

export const getStaticPaths = async () => {
  const APP_KEY = '024a419efaa3f8862e57d7434e765ffa'; 
  const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${APP_KEY}&language=en-US&page=1`)

  const data = await response.json()
  const movies = data.results



//   const paths = movies.map((post) => ({
//     params: { id: post.id.toString() },
//   }))


  const ids = movies.map((movie) => movie.id)
  const paths = ids.map((id) => ({ params: { id: id.toString() } }))

  return {
    paths,
    fallback: false,
  }
}

export default Movie

