import React from 'react';
import './styles/App.css';
import { BrowserRouter, Route, Routes, Switch } from 'react-router-dom';
import About from './pages/About';
import Posts from './pages/Posts';
import Navbar from './components/UI/Navbar/Navbar';

function App() {
	return (
		<BrowserRouter>
			<Navbar />

			<Routes>
				<Switch>
					<Route path="/about" element={<About />} />
					<Route path="/posts" element={<Posts />} />
				</Switch>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
