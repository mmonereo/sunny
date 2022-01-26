import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AllSuns from './pages/AllSuns';
import SunsByCategory from './pages/SunsByCategory';
import SunDetails from './pages/SunDetails';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<AllSuns />} />
					<Route path="/list/:category" element={<SunsByCategory />} />
					<Route path="/details/:id" element={<SunDetails />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
