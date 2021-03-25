import './styles/_style.scss';

import Header from './cmps/Header/Header';
import Footer from './cmps/Footer/Footer';
import OurApproach from './cmps/OurApproach/OurApproach';
import Hero from './cmps/Hero/Hero';
import Carousel from './cmps/Carousel/Carousel';
import Whoarewe from './cmps/Whoarewe/Whoarewe';

function App() {
	return (
		<div className="App">
			<Header />
			<Hero />
			<Whoarewe />
			<OurApproach />
			<Carousel />
			<Footer />
		</div>
	);
}

export default App;
