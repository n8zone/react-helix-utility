import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import ItemGenerator from './pages/ItemGenerator';
import RecipeGenerator from './pages/RecipeGenerator';
import { useEffect } from 'react';
import Card from './shared/Card';


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
				<Route
					path='/recipe-generator'
					element={<RecipeGenerator />}></Route>
        <Route path='/learning-zone' element={
          <div className='mx-auto flex justify-center'>
            <Card bgColor={'bg-orange-400'}>
              <h1 className='text-4xl text-white'>Under Construction!</h1>
            </Card>
          </div>

        }></Route>
			</Routes>
		</Router>
	);
}

export default App;
