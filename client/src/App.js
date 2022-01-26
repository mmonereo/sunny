import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AllSuns from './pages/AllSuns';
import SunsByCategory from './pages/SunsByCategory';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<AllSuns />} />
					<Route path="/:category" element={<SunsByCategory />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
