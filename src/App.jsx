import React from 'react';
import Header from './Components/Header/Header';
import Main from './Components/Main/Main'
import About from './Components/About/About';
import Resume from './Components/Resume/Resume';
import Portfolio from './Components/Portfolio/Portfolio';
import ContactForm from './Components/ContactForm/ContactForm';
import './styles/globalStyles.css';




function App() {
	return (
		<div className='app'>
			<Header />
			<Main />
			<About />
			<Resume />
			<Portfolio />
			<ContactForm />
		</div>
	);
}

export default App;
