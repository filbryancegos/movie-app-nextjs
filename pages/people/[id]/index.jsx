import React, {useState} from 'react'


import Link from 'next/link'
import Image from 'next/image'
import imageOne from '../../../public/images/image.jpg'


const People = ({popular, images, movies}) => {
	const { cast } = movies
	const [readMore, setReadMore] = useState(false)

	return (
		<>
		<section >
			<article className="bg-black py-8">
				<div className="container m-auto px-6 sm:px-0">
					<div>
						<Link href="/people">
							<a>
								<button className="rounded-md px-6 py-2 capitalize text-white bg-green-500 hover:bg-green-600">back</button>
							</a>
						</Link>
					</div>
					<div className="grid grid-cols-1 pt-4">
						<div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
							<div className="col-span-1 flex justify-center sm:justify-start">
								<img src={`https://image.tmdb.org/t/p/original${popular.profile_path}`} className="rounded-md w-full" alt=""/>
							</div>

							<div className="col-span-1 sm:col-span-3">
								<h1 className="text-3xl font-bold uppercase text-white">{popular.name}</h1>
								<h3 className="text-lg font-bold pt-4 text-green-500">Biography</h3>
								<p className="text-white pt-2">
									{readMore ? popular.biography: `${popular.biography.substring(0, 200)}...` }
									<button className="text-green-500" onClick={() => setReadMore(!readMore)}>
										{readMore ? 'show less' : 'read more'}
									</button>
								</p>

								<h3 className="text-green-500 text-lg font-bold pt-4 uppercase">Place of Birth</h3>
								<p className="text-white pt-2">
									{popular.place_of_birth}
								</p>

								<h3 className="text-green-500 text-lg font-bold pt-4 uppercase">also knowon us</h3>
								<div className="text-green-500 pt-2 flex flex-wrap">
									{popular.also_known_as && popular.also_known_as.map((name, index) => 
										<button key={index} className="bg-transparent border-green-500 border hover:bg-green-500 px-6 py-2 rounded-full uppercase text-white text-sm mt-2 block">{name}</button>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			</article>
		</section>
		<section className="p-12">
			<div className="container m-auto">
				<h2 className="text-green-500 text-xl font-bold uppercase">Movies</h2>
				<div className="mt-4">
					<div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
						{cast && cast.map(movie => 
							<div key={movie.id}>
								<img src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} className="rounded-md w-full" alt=""/>
								<div>
									<h3 className="text-lg font-bold text-black uppercase mt-2 ">{movie.title}</h3>
									<p className="text-green-500">Release Date: {movie.release_date} </p>
									
								</div>
							</div>
						)}
						
					</div>
				</div>
			</div>
		</section>
		</>
	)
}


export const getStaticProps = async (context) => {
	const APP_KEY = '024a419efaa3f8862e57d7434e765ffa'; 
	const response = await fetch(`https://api.themoviedb.org/3/person/${context.params.id}?api_key=${APP_KEY}&language=en-US`)
	const popular = await response.json()

	const resImages = await fetch(`https://api.themoviedb.org/3/person/${context.params.id}/images?api_key=${APP_KEY}`)
	const images = await resImages.json()

	const resMovies = await fetch(`https://api.themoviedb.org/3/person/${context.params.id}/movie_credits?api_key=${APP_KEY}&language=en-US`)
	const movies = await resMovies.json()


  return {
    props: {
		popular,
		images,
		movies
    },
  }
}

export const getStaticPaths = async () => {
	const APP_KEY = '024a419efaa3f8862e57d7434e765ffa'; 
	const response = await fetch(`https://api.themoviedb.org/3/person/popular?api_key=${APP_KEY}&language=en-US&page=1`)
  
	const data = await response.json()
	const popular = data.results
  
  
  
  //   const paths = movies.map((post) => ({
  //     params: { id: post.id.toString() },
  //   }))
  
  
	const ids = popular.map((item) => item.id)
	const paths = ids.map((id) => ({ params: { id: id.toString() } }))
  
	return {
	  paths,
	  fallback: false,
	}
  }

export default People
