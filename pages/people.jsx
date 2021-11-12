import Image from 'next/image'
import oneImage from '../public/images/image.jpg'
import Link from 'next/link'
const people = ({popular}) => {
	console.log(popular);

	return (
		<>
			<section className="p-12">
				<div className="container m-auto">
					<h2 className="text-green-500 text-xl font-bold uppercase">Popular People</h2>
					<div className="mt-4">
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-6">
							{popular && popular.map(people => 
								<div key={people.id} className="overflow-hidden rounded-md shadow-lg">
									<Link href={`/people/${people.id}`}>
										<a>
											<img src={`https://image.tmdb.org/t/p/original${people.profile_path}`} className="rounded-md w-full" alt=""/>
										</a>
									</Link>
									
									<div className="px-4 pb-4 pt-2">
										<h3 className="text-lg font-bold text-black uppercase ">{people.name}</h3>
										<p className="text-green-500">
											{ people.known_for.map(item => 
												<span>{item.title}</span>
											)}
										</p>
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

export default people

export const getStaticProps = async () => {
	const APP_KEY = '024a419efaa3f8862e57d7434e765ffa'; 
	const response = await fetch(`https://api.themoviedb.org/3/person/popular?api_key=${APP_KEY}&language=en-US&page=1`)

	const data = await response.json()
	const popular = data.results


	return {
	  props: {
		popular
	  },
	}
  }


