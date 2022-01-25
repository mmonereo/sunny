import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AllSuns from './pages/AllSuns';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<AllSuns />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
