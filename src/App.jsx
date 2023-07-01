import { useEffect, useState } from 'react';
import Clicker from './Clicker/Clicker';
import './FlexIt.css';
import ListeComposants from './ListeComposants/ListeComposants';
import getComposants from './Composants/Composants';

function App() {
	const [clics, setClics] = useState(0);
	const composants = getComposants();
	const [composantsAjoutes, setComposantsAjoutes] = useState([]);

	const corrigerResultat = (nb) => parseFloat(nb.toFixed(2));

	useEffect(() => {
		if(composantsAjoutes.length <= 0) return;
		let ajout = 0;
		for (let i = 0; i < composantsAjoutes.length; i++) {
			const c = composantsAjoutes[i];
			ajout += c.clicks;
		}
		const intervalle = setInterval(() => {
			setClics(corrigerResultat(clics + ajout));
		}, 1000);

		return () => {
			clearInterval(intervalle);
		}
	}, [clics, composantsAjoutes]);

	return (
		<div className='colonne'>
			<div className='ligne'>
				<div className='colonne'>
					<div className='ligne'>
						<h1>Clicker game</h1>
					</div>
					<div className='ligne'>
						<h3>{clics}</h3>
					</div>
				</div>
			</div>
			<div className='ligne'>
				<Clicker 
					clics={clics} setClics={setClics}
					corrigerResultat={corrigerResultat}
				/>
			</div>
			<div className='ligne'>
				<ListeComposants 
					composants={composants}
					composantsAjoutes={composantsAjoutes} setComposantsAjoutes={setComposantsAjoutes}
					clics={clics} setClics={setClics}
					corrigerResultat={corrigerResultat}
				/>
			</div>
		</div>
	)
}

export default App
