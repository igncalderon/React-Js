import './home.css'
import { NavBar } from '../../components/navBar/navBar'

export const Home = () => {
	const name = 'Fran'
	const library = 'React JS'

	const handleClick = () => alert('🐀🐀🐀🐀')

	return (
		<div className='home'>
			<NavBar />
			
			<section className='section_column'>
				<h1>Hi! I'm {name}</h1>
				<p>I like to work with {library}</p>
			</section>
			<section className='section_row'>
				<p>Click to catch some rats 😦👉</p>
				<button className='button' onClick={handleClick}>
					hola
				</button>
			</section>
		</div>
	)
	
}