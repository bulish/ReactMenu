import React, {useEffect} from 'react';
import {gsap} from 'gsap';

import Menu from './components/menu/menu';
import Sections from './components/sections/sections';

import './styles.scss';

function App() {

  const scrollHandler = () => {
		const sections = document.querySelectorAll('section');
		const scroll = window.scrollY + window.outerHeight;
		let myArray = [];
			for(let i=0; i<sections.length; i++){
				let theHeight = window.getComputedStyle(sections[i]).getPropertyValue("height");
				theHeight = theHeight.slice(0, theHeight.indexOf("p"));
				if(scroll > sections[i].offsetTop && scroll - sections[i].offsetTop >= window.outerHeight) {
					myArray.push(sections[i].className);
				}
				if (
					myArray[myArray.length - 1] === 'white'
				) {
					gsap.to('nav a', {
						color: 'black',
					});
				} else {
					gsap.to('nav a', {
						color: 'white',
					});
				}
			}
	}
	useEffect(() => {
		window.addEventListener('scroll', scrollHandler);
		return () => window.removeEventListener('scroll', scrollHandler);
	}, []);

  return (
				<div>
              <Menu />
              <Sections />
				</div>

  );
}

export default App;
