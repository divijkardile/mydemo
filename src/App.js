import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './HomePage';
import Products from './Products';
import Navbar from './Navbar';

function App() {
	return (
		<div className='App'>
			<Router>
				<Routes>
					<Route path='/' element={<Navbar />}>
						<Route index element={<HomePage />} />
						<Route path='/products' element={<Products />} />
					</Route>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
