import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import ItemGenerator from './pages/ItemGenerator';
import { useEffect } from 'react';

function App() {
	useEffect(() => {
		document.body.classList.add('bg-slate-400');
	});

	return (
		<Router>
			<Navbar />
			<Routes>
				<Route exact path='/' element={<Home />}></Route>
				<Route path='/item-generator' element={<ItemGenerator />}></Route>
				<Route
					path='/plugin-generator'
					element={
						<>
							<h1>Plugin Generator</h1>
						</>
					}
				></Route>
			</Routes>
		</Router>
	);
}

export default App;
